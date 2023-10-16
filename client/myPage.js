let userName = '';

const handleResponse = async (response) => {
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

    // Set body

    // Get body json
    let obj = await response.json();
    console.log(obj);

    message.innerText = `Name: ${obj[userName].name}\n
        Dislikes: ${obj[userName].dislikes}\n
        Favorite Mains: ${obj[userName].mains}\n
        Favorite Sweets: ${obj[userName].sweets}\n
        Favorite Drinks: ${obj[userName].drinks}`;


    // Add message to content
    content.appendChild(message);
}

const sendGetUserRequest = async (name) => {
    // Get url with name parameter
    const url = `/getUsers?name=${name}`;


    // Set fetch options
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
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
    const resObj = await response.json();
    userName = resObj.name;

    // Get user info
    sendGetUserRequest(userName);
}

const init = async() => {
    // get userName from server
    handleUserNameResponse(await fetch('/getUserName', {
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
    }));
}

window.onload = init;