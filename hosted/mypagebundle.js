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

/***/ "./client/myPage.js":
/*!**************************!*\
  !*** ./client/myPage.js ***!
  \**************************/
/***/ (() => {

eval("let userName = '';\r\n\r\nconst handleResponse = async (response) => {\r\n    // Get each of the table sections\r\n    const name = document.querySelector('#name');\r\n    const dislikes = document.querySelector('#dislikes');\r\n    const mains = document.querySelector('#mains');\r\n    const sweets = document.querySelector('#sweets');\r\n    const drinks = document.querySelector('#drinks');\r\n\r\n    // Get body json\r\n    let obj = await response.json();\r\n    console.log(obj);\r\n\r\n    // Set the text of each section\r\n    name.innerText = obj[userName].name;\r\n\r\n    dislikes.innerText =  \"\";\r\n    for (let food of obj[userName].dislikes) {\r\n        dislikes.innerText += ` ${food},`;\r\n    }\r\n\r\n    mains.innerText =  \"\";\r\n    for (let food of obj[userName].mains) {\r\n        mains.innerText += ` ${food},`;\r\n    }\r\n\r\n    sweets.innerText =  \"\";\r\n    for (let food of obj[userName].sweets) {\r\n        sweets.innerText += ` ${food},`;\r\n    }\r\n\r\n    drinks.innerText =  \"\";\r\n    for (let food of obj[userName].drinks) {\r\n        drinks.innerText += ` ${food},`;\r\n    }\r\n}\r\n\r\nconst sendGetUserRequest = async (name) => {\r\n    // Get url with name parameter\r\n    const url = `/getUsers?name=${name}`;\r\n\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method: 'GET',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options))\r\n}\r\n\r\nconst handleUserNameResponse = async (response) => {\r\n    // Check for error code\r\n    if (response.status === 404) {\r\n        window.location.href = \"./../login\";\r\n    }\r\n\r\n    // Set username and update form\r\n    const resObj = await response.json();\r\n    userName = resObj.name;\r\n\r\n    // Get user info\r\n    sendGetUserRequest(userName);\r\n}\r\n\r\nconst init = async() => {\r\n    // get userName from server\r\n    handleUserNameResponse(await fetch('/getUserName', {\r\n        method: 'get',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }));\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/myPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/myPage.js"]();
/******/ 	
/******/ })()
;