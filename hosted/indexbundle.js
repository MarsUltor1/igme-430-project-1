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

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ (() => {

eval("let userName = '';\r\n\r\nconst handleResponse = async (response) => {\r\n    const content = document.querySelector('#content');\r\n\r\n    // create element to hold response text\r\n    const title = document.createElement('h1');\r\n\r\n    // Set response text if there wasn't an error\r\n    if (response.status === 204) {\r\n        title.innerText = 'User Information Updated';\r\n    }\r\n\r\n    content.innerHTML = \"\";\r\n    content.appendChild(title);\r\n}\r\n\r\nconst sendAddUserRequest = async (form) => {\r\n    // Get url and fields\r\n    const url = form.getAttribute('action');\r\n\r\n    let name = form.querySelector('#nameField').value;\r\n    let dislikes = form.querySelector('#dislikesField').value;\r\n    let mains = form.querySelector('#mainsField').value;\r\n    let sweets = form.querySelector('#sweetsField').value;\r\n    let drinks = form.querySelector('#drinksField').value;\r\n\r\n    // Make sure no unallowed characters are present\r\n    name = name.replaceAll('&', '').replaceAll('=', '');\r\n    dislikes = dislikes.replaceAll('&', '').replaceAll('=', '');\r\n    mains = mains.replaceAll('&', '').replaceAll('=', '');\r\n    sweets = sweets.replaceAll('&', '').replaceAll('=', '');\r\n    drinks = drinks.replaceAll('&', '').replaceAll('=', '');\r\n\r\n    // Format form data\r\n    const formData = `name=${name}&dislikes=${dislikes}&mains=${mains}&sweets=${sweets}&drinks=${drinks}`;\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method: form.getAttribute('method'),\r\n        headers: {\r\n            'Content-Type': 'application/x-www-form-urlencoded',\r\n            'Accept': 'application/json',\r\n        },\r\n        body: formData,\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options))\r\n}\r\n\r\nconst handleUserNameResponse = async (response) => {\r\n    // Check for error code\r\n    if (response.status === 404) {\r\n        window.location.href = \"./../login\";\r\n    }\r\n\r\n    // Set username and update form\r\n    const nameField = document.querySelector('#nameField');\r\n\r\n    const resObj = await response.json();\r\n    userName = resObj.name;\r\n    nameField.value = userName;\r\n}\r\n\r\nconst init = async () => {\r\n    // get userName from server\r\n    handleUserNameResponse(await fetch('/getUserName', {\r\n        method: 'get',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }));\r\n\r\n    // Setup handler for add user form\r\n    const addUserForm = document.querySelector('#infoForm');\r\n\r\n    const addUser = (e) => {\r\n        e.preventDefault();\r\n        sendAddUserRequest(addUserForm);\r\n        return false;\r\n    }\r\n\r\n    addUserForm.addEventListener('submit', addUser);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/index.js"]();
/******/ 	
/******/ })()
;