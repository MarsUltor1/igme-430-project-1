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

/***/ "./client/allUsers.js":
/*!****************************!*\
  !*** ./client/allUsers.js ***!
  \****************************/
/***/ (() => {

eval("const handleResponse = async (response) => {\r\n    const tbody = document.querySelector('#users');\r\n\r\n    // Get body json\r\n    let obj = await response.json();\r\n    console.log(obj);\r\n\r\n    for (let key in obj.users) {\r\n        // Create table ellements\r\n        const row = document.createElement('tr');\r\n        const name = document.createElement('td');\r\n        const dislikes = document.createElement('td');\r\n        const mains = document.createElement('td');\r\n        const sweets = document.createElement('td');\r\n        const drinks = document.createElement('td');\r\n\r\n        // Set the text of each element\r\n        name.innerText = obj.users[key].name;\r\n        row.appendChild(name);\r\n\r\n        dislikes.innerText = \"\";\r\n        for (let food of obj.users[key].dislikes) {\r\n            dislikes.innerText += ` ${food},`;\r\n        }\r\n        row.appendChild(dislikes);\r\n\r\n        mains.innerText = \"\";\r\n        for (let food of obj.users[key].mains) {\r\n            mains.innerText += ` ${food},`;\r\n        }\r\n        row.appendChild(mains);\r\n\r\n        sweets.innerText = \"\";\r\n        for (let food of obj.users[key].sweets) {\r\n            sweets.innerText += ` ${food},`;\r\n        }\r\n        row.appendChild(sweets);\r\n\r\n        drinks.innerText = \"\";\r\n        for (let food of obj.users[key].drinks) {\r\n            drinks.innerText += ` ${food},`;\r\n        }\r\n        row.appendChild(drinks);\r\n\r\n        // Add row to body\r\n        tbody.appendChild(row);\r\n    }\r\n}\r\n\r\nconst sendGetUserRequest = async () => {\r\n    // Get url with name parameter\r\n    const url = `/getUsers`;\r\n\r\n\r\n    // Set fetch options\r\n    let options = {\r\n        method: 'GET',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    }\r\n\r\n    // Send fetch request into response handler\r\n    return handleResponse(await fetch(url, options))\r\n}\r\n\r\nconst init = async () => {\r\n    sendGetUserRequest();\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/allUsers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/allUsers.js"]();
/******/ 	
/******/ })()
;