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

/***/ "./client/loginPage.js":
/*!*****************************!*\
  !*** ./client/loginPage.js ***!
  \*****************************/
/***/ (() => {

eval("let userName = ''\r\n\r\nconst handleResponse = (response) => {\r\n    // Check for error code\r\n    if (response.status === 400) {\r\n        // Get/Create elements\r\n        const content = document.querySelector('#content');\r\n        const message = document.createElement('h1');\r\n\r\n        // Set text\r\n        message.innerText = `Unable to Log In Please try Again`;\r\n\r\n        // Add text to section\r\n        content.innerHTML = '';\r\n        content.appendChild(message);\r\n    }\r\n    // Check if user was created or not\r\n    else if (response.status === 204) {\r\n        // Get/Create elements\r\n        const content = document.querySelector('#content');\r\n        const message = document.createElement('h1');\r\n\r\n        // Set text\r\n        message.innerText = `Logged In as: ${userName}`;\r\n\r\n        // Add text to section\r\n        content.innerHTML = '';\r\n        content.appendChild(message);\r\n    }\r\n    else {\r\n        // Get/Create elements\r\n        const content = document.querySelector('#content');\r\n        const message = document.createElement('h1');\r\n\r\n        // Set text\r\n        message.innerText = `Signed Up As: ${userName}`;\r\n\r\n        // Add text to section\r\n        content.innerHTML = '';\r\n        content.appendChild(message);\r\n    }\r\n\r\n\r\n    \r\n}\r\n\r\nconst setUsername = async (form) => {\r\n    // Set name\r\n    userName = form.querySelector('#nameField').value;\r\n\r\n    // Make sure no unallowed characters are present\r\n    userName = userName.replaceAll('&', '').replaceAll('=', '');\r\n\r\n    // Format form data\r\n    const formData = `name=${userName}`;\r\n\r\n    // Setup request options\r\n    let options = {\r\n        method: 'post',\r\n        headers: {\r\n            'Content-Type': 'application/x-www-form-urlencoded',\r\n            'Accept': 'application/json',\r\n        },\r\n        body: formData,\r\n    }\r\n\r\n    // Send setUserName request\r\n    return handleResponse(await fetch('/setUserName', options));\r\n}\r\n\r\nconst init = () => {\r\n    // Check if someone is already logged in\r\n\r\n    // Setup login handler\r\n    const loginForm = document.querySelector('#loginForm');\r\n\r\n    const loginFunc = (e) => {\r\n        e.preventDefault();\r\n        setUsername(loginForm);\r\n        return false;\r\n    }\r\n\r\n    loginForm.addEventListener('submit', loginFunc);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/loginPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/loginPage.js"]();
/******/ 	
/******/ })()
;