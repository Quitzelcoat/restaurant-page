/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    const content = document.getElementById(\"content\");\n\n    const allContainer = document.createElement(\"div\");\n    const title = document.createElement(\"h2\");\n\n    allContainer.classList.add(\"allContainer\");\n    title.classList.add(\"contactTitle\");\n\n    title.innerText = \"Contact Us\";\n    \n    content.appendChild(allContainer);\n    allContainer.appendChild(title);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/createPage.js":
/*!***************************!*\
  !*** ./src/createPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainPage = () => {\n    const content = document.getElementById(\"content\");\n    \n    const allContainer = document.createElement(\"div\");\n    const heading = document.createElement(\"h2\");\n    const paragraph = document.createElement(\"p\");\n    const img = document.createElement(\"img\");\n\n    allContainer.classList.add(\"allContainer\");\n    heading.classList.add(\"heading\");\n    paragraph.classList.add(\"para\");\n\n    img.src = \"../dist/images/sushi.jpg\";\n    img.height = '300';\n    img.width = '300';\n\n    heading.innerText = \"A Food Place\";\n    paragraph.innerText = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor itaque quam molestiae dignissimos recusandae, omnis blanditiis vitae, eum repellendus illo aperiam, quo excepturi maiores. Lorem ipsum dolor sit amet.\"\n\n    content.appendChild(allContainer);\n    allContainer.appendChild(heading);\n    allContainer.appendChild(paragraph);\n    allContainer.appendChild(img);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\n\n//# sourceURL=webpack://restaurant-page/./src/createPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\n// Load Page\n(0,_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPage */ \"./src/createPage.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\nfunction loadPage() {\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_createPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = () => {\n    const content = document.getElementById(\"content\");\n    \n    const allContainer = document.createElement(\"div\");\n    const mainDish = document.createElement(\"h2\");\n    const dishes = document.createElement(\"div\");\n    const pizzaTitle = document.createElement(\"h3\");\n    const pizzaDes = document.createElement(\"p\");\n    const pizzaPrice = document.createElement(\"div\");\n    const pizzaImg = document.createElement(\"img\");\n\n    allContainer.classList.add(\"allContainer\");\n    mainDish.classList.add(\"mainDish\");\n    dishes.classList.add(\"dish\");\n    pizzaTitle.classList.add(\"pizza\")\n    pizzaDes.classList.add(\"pizzaDes\");\n    pizzaPrice.classList.add(\"pizzaPrice\");\n\n    mainDish.innerText = \"Main Dishes\";\n    pizzaTitle.innerText = \"Pizza\";\n    pizzaDes.innerText = \"An Italian origin dish consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.\"\n    pizzaPrice.innerHTML = \"$ 10\";\n\n    pizzaImg.src = \"../dist/images/pizza.jpg\";\n    pizzaImg.height = \"300\";\n    pizzaImg.width = '300';\n\n    content.appendChild(allContainer);\n    allContainer.appendChild(mainDish);\n    allContainer.appendChild(dishes);\n    dishes.appendChild(pizzaTitle);\n    dishes.appendChild(pizzaDes);\n    dishes.appendChild(pizzaPrice);\n    dishes.appendChild(pizzaImg);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPage */ \"./src/createPage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst navbar = () => {\n    const content = document.getElementById(\"content\");\n\n    const homeNav = document.createElement(\"div\");\n    const menuNav = document.createElement(\"div\");\n    const contactNav = document.createElement(\"div\");\n\n    homeNav.classList.add(\"homeNav\");\n    menuNav.classList.add(\"menuNav\");\n    contactNav.classList.add(\"contactNav\");\n\n    homeNav.innerText = \"Home\";\n    menuNav.innerText = \"Menu\";\n    contactNav.innerText = \"Contact Us\";\n    \n    content.appendChild(homeNav);\n    content.appendChild(menuNav);\n    content.appendChild(contactNav);\n\n    homeNav.addEventListener('click', () => {\n        clearTab();\n        (0,_createPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    menuNav.addEventListener('click', () => {\n        clearTab();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    contactNav.addEventListener('click', () => {\n        clearTab();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n}\n\nfunction clearTab() {\n    const content = document.getElementById(\"content\");\n    const allContainer = document.querySelector(\".allContainer\");\n    if(allContainer) {\n        content.removeChild(allContainer);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;