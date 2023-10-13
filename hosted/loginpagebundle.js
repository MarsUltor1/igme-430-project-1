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

eval("const setUsername = (form) => {\r\n    // Set name\r\n    const userName = form.querySelector('#nameField').value;\r\n\r\n    // Update text in content\r\n\r\n    // Get/Create elements\r\n    const content = document.querySelector('#content');\r\n    const message = document.createElement('h1');\r\n\r\n    // Set text\r\n    message.innerText = `Logged In as: ${userName}`;\r\n\r\n    // Add text to section\r\n    content.innerHTML = '';\r\n    content.appendChild(message);\r\n}\r\n\r\nconst init = () => {\r\n    // Check if someone is already logged in\r\n\r\n    // Setup login handler\r\n    const loginForm = document.querySelector('#loginForm');\r\n\r\n    const loginFunc = (e) => {\r\n        e.preventDefault();\r\n        setUsername(loginForm);\r\n        return false;\r\n    }\r\n\r\n    loginForm.addEventListener('submit', loginFunc);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/loginPage.js?");

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