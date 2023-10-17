let userName = '';

const handleResponse = async (response) => {
    const content = document.querySelector('#content');

    // create element to hold response text
    const title = document.createElement('h1');

    // Set response text if there wasn't an error
    if (response.status === 204) {
        title.innerText = 'User Information Updated';
    }

    content.innerHTML = "";
    content.appendChild(title);
}

const sendAddUserRequest = async (form) => {
    // Get url and fields
    const url = form.getAttribute('action');

    let name = form.querySelector('#nameField').value;
    let dislikes = form.querySelector('#dislikesField').value;
    let mains = form.querySelector('#mainsField').value;
    let sweets = form.querySelector('#sweetsField').value;
    let drinks = form.querySelector('#drinksField').value;

    // Make sure no unallowed characters are present
    name = name.replaceAll('&', '').replaceAll('=', '');
    dislikes = dislikes.replaceAll('&', '').replaceAll('=', '');
    mains = mains.replaceAll('&', '').replaceAll('=', '');
    sweets = sweets.replaceAll('&', '').replaceAll('=', '');
    drinks = drinks.replaceAll('&', '').replaceAll('=', '');

    // Format form data
    const formData = `name=${name}&dislikes=${dislikes}&mains=${mains}&sweets=${sweets}&drinks=${drinks}`;

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
    return handleResponse(await fetch(url, options))
}

const handleUserNameResponse = async (response) => {
    // Check for error code
    if (response.status === 404) {
        window.location.href = "./../login";
    }

    // Set username and update form
    const nameField = document.querySelector('#nameField');

    const resObj = await response.json();
    userName = resObj.name;
    nameField.value = userName;
}

const init = async () => {
    // get userName from server
    handleUserNameResponse(await fetch('/getUserName', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
    }));

    // Setup handler for add user form
    const addUserForm = document.querySelector('#infoForm');

    const addUser = (e) => {
        e.preventDefault();
        sendAddUserRequest(addUserForm);
        return false;
    }

    addUserForm.addEventListener('submit', addUser);
}

window.onload = init;