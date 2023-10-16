let userName = ''

const handleResponse = (response) => {
    // Check for error code
    if (response.status === 400) {
        // Get/Create elements
        const content = document.querySelector('#content');
        const message = document.createElement('h1');

        // Set text
        message.innerText = `Unable to Log In Please try Again`;

        // Add text to section
        content.innerHTML = '';
        content.appendChild(message);
    }
    // Check if user was created or not
    else if (response.status === 204) {
        // Get/Create elements
        const content = document.querySelector('#content');
        const message = document.createElement('h1');

        // Set text
        message.innerText = `Logged In as: ${userName}`;

        // Add text to section
        content.innerHTML = '';
        content.appendChild(message);
    }
    else {
        // Get/Create elements
        const content = document.querySelector('#content');
        const message = document.createElement('h1');

        // Set text
        message.innerText = `Signed Up As: ${userName}`;

        // Add text to section
        content.innerHTML = '';
        content.appendChild(message);
    }


    
}

const setUsername = async (form) => {
    // Set name
    userName = form.querySelector('#nameField').value;

    // Make sure no unallowed characters are present
    userName = userName.replaceAll('&', '').replaceAll('=', '');

    // Format form data
    const formData = `name=${userName}`;

    // Setup request options
    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: formData,
    }

    // Send setUserName request
    return handleResponse(await fetch('/setUserName', options));
}

const init = () => {
    // Check if someone is already logged in

    // Setup login handler
    const loginForm = document.querySelector('#loginForm');

    const loginFunc = (e) => {
        e.preventDefault();
        setUsername(loginForm);
        return false;
    }

    loginForm.addEventListener('submit', loginFunc);
}

window.onload = init;