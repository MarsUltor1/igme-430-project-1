const handleResponse = async (response, parseJSON) => {
    const content = document.querySelector('#content');

    // create elements to hold title and message
    const title = document.createElement('h1');
    const message = document.createElement('p');

    // Set title based on response status code
    switch (response.status) {
        case 200:
            title.innerText = 'Success';
            break;
        case 201:
            title.innerText = 'Created';
            break;
        case 204:
            title.innerText = 'Updated (No Content)';
            break;
        case 400:
            title.innerText = 'Bad Request';
            break;
        case 404:
            title.innerText = 'Not Found';
            break;
        default:
            title.innerText = 'Error: Not Implemented by Client';
            break;
    }

    // Clear content section and add title
    content.innerHTML = "";
    content.appendChild(title);

    // Set body if it has one
    if (parseJSON && response.status !== 204) {
        // Get body json
        let obj = await response.json();
        console.log(obj);

        // Check if it has a message
        if (obj.message) {
            message.innerText = `Message: ${obj.message}`;
        }
        // Check if it has users obj
        else if (obj.users) {
            message.innerText = JSON.stringify(obj.users);
        }


        // Add message to content
        content.appendChild(message);
    }
}

const sendAddUserRequest = async (form) => {
    // Get url and fields
    const url = form.getAttribute('action');

    const name = form.querySelector('#nameField').value;
    const age = form.querySelector('#ageField').value;

    // Format form data
    const formData = `name=${name}&age=${age}`;

    // Set fetch options
    let options = {
        method: form.getAttribute('method'),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: formData,
    }

    // Send fetch request into response handler
    return handleResponse(await fetch(url, options), true)
}

const sendGetUserRequest = async (form) => {
    // Get method and url
    const url = form.querySelector('#urlField').value;
    const method = form.querySelector('#methodSelect').value;

    // Set fetch options
    let options = {
        method,
        headers: {
            'Accept': 'application/json',
        },
    }

    // Send fetch request into response handler
    return handleResponse(await fetch(url, options), method === 'get')
}

const init = () => {
    const addUserForm = document.querySelector('#nameForm');
    const getUserForm = document.querySelector('#userForm');

    const addUser = (e) => {
        e.preventDefault();
        sendAddUserRequest(addUserForm);
        return false;
    }

    const getUser = (e) => {
        e.preventDefault();
        sendGetUserRequest(getUserForm);
        return false;
    }

    addUserForm.addEventListener('submit', addUser);
    getUserForm.addEventListener('submit', getUser);
}

window.onload = init;