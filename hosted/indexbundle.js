/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response, parseJSON) => {\r\n    const content = document.querySelector('#content');\r\n\r\n    // create elements to hold title and message\r\n    const title = document.createElement('h1');\r\n    const message = document.createElement('p');\r\n\r\n    // Set title based on response status code\r\n    switch (response.status) {\r\n        case 200:\r\n            title.innerText = 'Success';\r\n            break;\r\n        case 201:\r\n            title.innerText = 'Created';\r\n            break;\r\n        case 204:\r\n            title.innerText = 'Updated (No Content)';\r\n            break;\r\n        case 400:\r\n            title.innerText = 'Bad Request';\r\n            break;\r\n        case 404:\r\n            title.innerText = 'Not Found';\r\n            break;\r\n        default:\r\n            title.innerText = 'Error: Not Implemented by Client';\r\n            break;\r\n    }\r\n\r\n    // Clear content section and add title\r\n    content.innerHTML = \"\";\r\n    content.appendChild(title);\r\n\r\n    // Set body if it has one\r\n    if (parseJSON && response.status !== 204) {\r\n        // Get body json\r\n        let obj = await response.json();\r\n        console.log(obj);\r\n\r\n        // Check if it has a message\r\n        if (obj.message) {\r\n            message.innerText = `Message: ${obj.message}`;\r\n        }\r\n        // Check if it has users obj\r\n        else if (obj.users) {\r\n            message.innerText = JSON.stringify(obj.users);\r\n        }\r\n\r\n\r\n        // Add message to content\r\n        content.appendChild(message);\r\n    }\r\n}\r\n\r\nconst sendAddUserRequest = async (form) => {\r\n    // Get url and fields\r\n    const url = form.getAttribute('action');\r\n\r\n    const name = form.querySelector('#nameField').value;\r\n    const dislikes = form.querySelector('#dislikesField').value;\r\n    const mains = form.querySelector('#mainsField').value;\r\n    const sweets = form.querySelector('#sweetsField').value;\r\n    const drinks = form.querySelector('#drinksField').value;\r\n\r\n    // Make sure no unallowed characters are present\r\n    name = name.replaceAll('&', '').replaceAll('=', '');\r\n    dislikes = dislikes.replaceAll('&', '').replaceAll('=', '');\r\n    mains = mains.replaceAll('&', '').replaceAll('=', '');\r\n    sweets = sweets.replaceAll('&', '').replaceAll('=', '');\r\n    drinks = drinks.replaceAll('&', '').replaceAll('=', '');\r\n\r\n    // Format form data\r\n    const formData = `name=${name}&dislikes=${dislikes}&mains=${mains}&sweets=${sweets}&drinks=${drinks}`;\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method: form.getAttribute('method'),\r\n        headers: {\r\n            'Content-Type': 'application/x-www-form-urlencoded',\r\n            'Accept': 'application/json',\r\n        },\r\n        body: formData,\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options), true)\r\n}\r\n\r\nconst sendGetUserRequest = async (form) => {\r\n    // Get method and url\r\n    const url = form.querySelector('#urlField').value;\r\n    const method = form.querySelector('#methodSelect').value;\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method,\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options), method === 'get')\r\n}\r\n\r\nconst init = () => {\r\n    const addUserForm = document.querySelector('#nameForm');\r\n    const getUserForm = document.querySelector('#userForm');\r\n\r\n    const addUser = (e) => {\r\n        e.preventDefault();\r\n        sendAddUserRequest(addUserForm);\r\n        return false;\r\n    }\r\n\r\n    const getUser = (e) => {\r\n        e.preventDefault();\r\n        sendGetUserRequest(getUserForm);\r\n        return false;\r\n    }\r\n\r\n    addUserForm.addEventListener('submit', addUser);\r\n    getUserForm.addEventListener('submit', getUser);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;