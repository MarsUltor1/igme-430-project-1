const setUsername = (form) => {
    // Set name
    const userName = form.querySelector('#nameField').value;

    // Update text in content

    // Get/Create elements
    const content = document.querySelector('#content');
    const message = document.createElement('h1');

    // Set text
    message.innerText = `Logged In as: ${userName}`;

    // Add text to section
    content.innerHTML = '';
    content.appendChild(message);
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