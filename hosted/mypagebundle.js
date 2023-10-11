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

/***/ "./client/login.js":
/*!*************************!*\
  !*** ./client/login.js ***!
  \*************************/
/***/ ((module) => {

eval("let name = '';\r\n\r\nmodule.exports = {\r\n    name\r\n}\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/login.js?");

/***/ }),

/***/ "./client/myPage.js":
/*!**************************!*\
  !*** ./client/myPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const login = __webpack_require__(/*! ./login.js */ \"./client/login.js\");\r\n\r\nconst handleResponse = async (response) => {\r\n    const content = document.querySelector('#content');\r\n\r\n    // create elements to hold title and message\r\n    const title = document.createElement('h1');\r\n    const message = document.createElement('p');\r\n\r\n    // Set title based on response status code\r\n    switch (response.status) {\r\n        case 200:\r\n            title.innerText = 'Success';\r\n            break;\r\n        case 201:\r\n            title.innerText = 'Created';\r\n            break;\r\n        case 204:\r\n            title.innerText = 'Updated (No Content)';\r\n            break;\r\n        case 400:\r\n            title.innerText = 'Bad Request';\r\n            break;\r\n        case 404:\r\n            title.innerText = 'Not Found';\r\n            break;\r\n        default:\r\n            title.innerText = 'Error: Not Implemented by Client';\r\n            break;\r\n    }\r\n\r\n    // Clear content section and add title\r\n    content.innerHTML = \"\";\r\n    content.appendChild(title);\r\n\r\n    // Set body\r\n\r\n    // Get body json\r\n    let obj = await response.json();\r\n    console.log(obj);\r\n\r\n    message.innerText = `Name: ${obj[login.name].name}\\n\r\n        Dislikes: ${obj[login.name].dislikes}\\n\r\n        Favorite Mains: ${obj[login.name].mains}\\n\r\n        Favorite Sweets: ${obj[login.name].sweets}\\n\r\n        Favorite Drinks: ${obj[login.name].drinks}`;\r\n\r\n\r\n    // Add message to content\r\n    content.appendChild(message);\r\n}\r\n\r\nconst sendGetUserRequest = async (name) => {\r\n    // Get url with name parameter\r\n    const url = `/getUsers?name=${name}`;\r\n\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method: 'GET',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options))\r\n}\r\n\r\nconst init = () => {\r\n    // Check for user logged in\r\n    if (!login.name) {\r\n        window.location.href = \"https://localhost:3000/\";\r\n    }\r\n\r\n    // Get user info\r\n    sendGetUserRequest(login.name);\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/myPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/myPage.js");
/******/ 	
/******/ })()
;