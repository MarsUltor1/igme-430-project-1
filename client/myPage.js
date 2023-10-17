let userName = '';

const handleResponse = async (response) => {
    // Get each of the table sections
    const name = document.querySelector('#name');
    const dislikes = document.querySelector('#dislikes');
    const mains = document.querySelector('#mains');
    const sweets = document.querySelector('#sweets');
    const drinks = document.querySelector('#drinks');

    // Get body json
    let obj = await response.json();
    console.log(obj);

    // Set the text of each section
    name.innerText = obj[userName].name;

    dislikes.innerText =  "";
    for (let food of obj[userName].dislikes) {
        dislikes.innerText += ` ${food},`;
    }

    mains.innerText =  "";
    for (let food of obj[userName].mains) {
        mains.innerText += ` ${food},`;
    }

    sweets.innerText =  "";
    for (let food of obj[userName].sweets) {
        sweets.innerText += ` ${food},`;
    }

    drinks.innerText =  "";
    for (let food of obj[userName].drinks) {
        drinks.innerText += ` ${food},`;
    }
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