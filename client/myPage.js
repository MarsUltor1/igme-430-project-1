//const login = require('./login.js');

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

    //message.innerText = `Name: ${obj[login.name].name}\n
    //    Dislikes: ${obj[login.name].dislikes}\n
    //    Favorite Mains: ${obj[login.name].mains}\n
    //    Favorite Sweets: ${obj[login.name].sweets}\n
    //    Favorite Drinks: ${obj[login.name].drinks}`;


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

const init = () => {
    // Check for user logged in
    //if (!login.name) {
    //    window.location.href = "./../login";
    //}

    // Get user info
    //sendGetUserRequest(login.name);
}

window.onload = init;