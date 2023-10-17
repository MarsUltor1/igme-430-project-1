const handleResponse = async (response) => {
    const tbody = document.querySelector('#users');

    // Get body json
    let obj = await response.json();
    console.log(obj);

    for (let key in obj.users) {
        // Create table ellements
        const row = document.createElement('tr');
        const name = document.createElement('td');
        const dislikes = document.createElement('td');
        const mains = document.createElement('td');
        const sweets = document.createElement('td');
        const drinks = document.createElement('td');

        // Set the text of each element
        name.innerText = obj.users[key].name;
        row.appendChild(name);

        dislikes.innerText = "";
        for (let food of obj.users[key].dislikes) {
            dislikes.innerText += ` ${food},`;
        }
        row.appendChild(dislikes);

        mains.innerText = "";
        for (let food of obj.users[key].mains) {
            mains.innerText += ` ${food},`;
        }
        row.appendChild(mains);

        sweets.innerText = "";
        for (let food of obj.users[key].sweets) {
            sweets.innerText += ` ${food},`;
        }
        row.appendChild(sweets);

        drinks.innerText = "";
        for (let food of obj.users[key].drinks) {
            drinks.innerText += ` ${food},`;
        }
        row.appendChild(drinks);

        // Add row to body
        tbody.appendChild(row);
    }
}

const sendGetUserRequest = async () => {
    // Get url with name parameter
    const url = `/getUsers`;


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

const init = async () => {
    sendGetUserRequest();
}

window.onload = init;