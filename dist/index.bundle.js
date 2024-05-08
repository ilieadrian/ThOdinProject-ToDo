/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans_Condensed-Regular.ttf */ "./src/fonts/OpenSans_Condensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans_SemiCondensed-Bold.ttf */ "./src/fonts/OpenSans_SemiCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'main-font';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-style: normal;
}

@font-face {
    font-family: 'bold-font';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
    font-style: normal;
}

/* General styles */
*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    overflow: hidden; 
}

body {
    min-height: 100vh;
    height: 100vh;
    font-family: 'main-font';
    background-color: #2a9d8f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;

}

li {
    list-style: none;
}

img {
    max-width: 25px;
    height: auto;
}

button {
    max-width: 190px;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    background-color: rgb(62, 76, 117);
    color: rgb(255, 255, 255);
    padding: 0.75rem 1rem;
    border-radius: 3px;
}

button:hover {
    border: none;
    cursor: pointer;
    background-color: rgba(62, 76, 117, 0.8);
}

/* End of general styles */

.container {
    /* width: 1280px; */
    min-width: 1280px;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.header {
    background-color: #C38D9E;
    color: #F7F7F7;;
    padding: 0.5rem;
    font-size: 2rem;
    font-family: bold-font;
    display: flex;
    align-items: center;
    justify-content: left;
    letter-spacing: 0.3rem;
    gap: 1rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.header img {
    max-width: 50px;
}

.content-container {
    display: flex;
}

.menu {
    flex: 1;
    background-color: #EEEEEE;
    border-right: 0.5px solid #B9B9B9;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    text-align: left;
    border-bottom-left-radius: 5px;
}

.todo-container {
    flex: 4;
}

.menu-links li {
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.number-of-tasks {
    background-color: #C38D9E;
    font-size: 0.8rem;
    width: 1.5rem; 
    height: 1.5rem; 
    font-family: bold-font;
    color: #F7F7EE;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-links li a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #141414;
}

.menu-links .active,
.menu-links a:hover {
    font-family: bold-font;
    color: #501F3A;
}

.menu-links .active::before,
.menu-links a:hover::before {
    content: '// ';
}

.menu-links {
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid #B9B9B9;
    overflow-y: auto; 
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: #C38D9E #EEEEEE;
    height: 200px;
}

.content-container h2 {
    color: #141414;
    margin-bottom: 1rem;
}

.addtodo,
.addproject {
    display: flex;
    align-items: center;
    align-content: center;
}

.addtodo p,
.addproject p {
    color: #C38D9E;
    font-family: bold-font;
    font-size: 1.2rem;
}

.addtodo p {
    color: #501F3A;
}

.addtodo img,
.addproject img {
    max-width: 60px;
    height: auto;
    margin-right: 2rem;
}

.buttons-container {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
}

.items-list {
    padding: 3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    overflow-y: auto; 
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: #C38D9E #EEEEEE;
}

.item {
    background-color: #EEEEEE;
    padding: 0.5rem 0.5rem 0.5rem 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item:hover {
    transform: scale(1.003);
    transform-origin: 50% 50%;
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,.2);
    transition: all .2s ease-out;
}

.action-grup,
.name-grup {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.priority {
    height: 50px; 
    /* background-color: #008000; */
    position: relative; 
}

.priority.low {
    background-color: #2a9d8f;
} 

.priority.medium {
    background-color: #FFA500;
} 

.priority.high {
    background-color: #FF0000;
} 

.priority::before {
    content: ''; 
    position: absolute; 
    top: 0;
    left: 0;
    width: 4px;
    height: 100%; 
    background-color: inherit; 
}

/* checkbox handlder */
input[type="checkbox"] {
    width: 25px;
    height: 25px;
    accent-color: #2a9d8f;
}

input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    font-size: 2rem;
    padding: 0.2rem;
    border: 3px solid #2a9d8f;
    border-radius: 0.3rem;
    background-color: #F7F7F7;
}

input[type="checkbox"]::before {
        margin: 0 auto;
    content: "";
    width: 15px;
    height: 15px;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    transform: scale(0);
    background-color: #2a9d8f;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}
/* endof checkbox handler */

.finished .name-grup p {
    text-decoration: line-through;
    opacity: 0.4;
}

#due-date {
    font-size: 0.8rem;
}

.action-grup button {
    background-color: transparent;
    min-width: 1px;
    padding: 0.2rem;
    border: 1px solid #501F3A;
}

.action-grup img:hover {
    opacity: 0.6;
}

/* Genaral & View Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);    
    z-index: 1;
}

.modal.active{
    display: block;
}

.modal-content {
    color: #501F3A;
    background-color: #EEEEEE;
    padding: 2rem;
    width: 80%;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    text-align: left;
}

.modal-content h2 {
    margin-bottom: 1rem;
}

.detail {
    display: flex;
}

.detail p {
    display: inline-block;
}
.detail:first-of-type .detail-title{
    margin-right: 1.1rem;
}

.detail:nth-of-type(2) .detail-title{
    margin-right: 0.95rem;
}

.detail:nth-of-type(3) .detail-title{
    margin-right: 0.35rem;
}

.detail:last-of-type .detail-title{
    
    margin-right: 1.2rem;
}

.detail-title {
    font-weight: bold;
}

.close-modal-button {
    z-index: 1;
    cursor: pointer;
    position: absolute;
    top: 0; 
    right:0; 
    transform: translate(-20%, 20%);
}

/* Add project modal & Todo modal*/

.modal-header {
    margin: -2rem -2rem 0 -2rem;
    padding: 1rem;
    background-color: #C38D9E;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header p {
    color: #F7F7F7;
    font-size: 1.5rem;
    font-family: bold-font;
}

#add-project-modal > .modal-content,
#add-modal-todo > .modal-content {
    height: 30rem;
    max-width: 50rem;
    background-color: #F7F7F7;
}

#add-project-modal form,
#add-modal-todo form {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.input-container {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #141414;
}

#add-modal-todo .input-container {
    align-items: flex-start;
}

#add-project-modal form input[type=text],
#add-modal-todo form input[type=text],
form input[type=date] {
    font-family: main-font;
    font-size: 1rem;
    border: none;
    width: 100%;
    padding: 0.5rem;
    letter-spacing: 1px;
    color: #141414;
}

#add-modal-todo ul li {
    width: 100%;
    margin-top: 0.5rem;
}

#add-modal-todo ul li input {
    margin-top: 0.3rem;
}

#add-project-modal form button,
#add-modal-todo form button {
    font-family: bold-font;
    max-width: 8rem;
    border: 1px solid #2a9d8f;
    padding: 0.4rem 0.2rem;
    color: #2a9d8f;
    background-color: #F7F7F7;
}

#add-project-modal form button:hover,
#add-modal-todo  form button:hover {
    color: #F7F7F7;
    background-color: #2a9d8f;
}

#add-modal-todo .button-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#add-modal-todo .priority-btn-grup {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    flex-wrap: wrap;
}

.priority-btn-grup button {
    min-width: 4.5rem;
}

.priority-btn-grup #medium {
    color: #FFA500;
    border-color: #FFA500;
}

.priority-btn-grup #medium:hover {
    background-color: #FFA500;
}

.priority-btn-grup #high {
    color: #FF0000;
    border-color: #FF0000;
}

.priority-btn-grup #high:hover {
    background-color: #FF0000;
}

/* Footer */
.attribution {
    text-align: center;
    width: 100%;
    padding-bottom: 0.3rem;
    font-size: 0.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
}

.attribution a {
    margin-left: 0.3rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'main-font';\r\n    src: url('./fonts/OpenSans_Condensed-Regular.ttf') format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'bold-font';\r\n    src: url(./fonts/OpenSans_SemiCondensed-Bold.ttf) format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n/* General styles */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    overflow: hidden; \r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    height: 100vh;\r\n    font-family: 'main-font';\r\n    background-color: #2a9d8f;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    text-align: center;\r\n\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    max-width: 25px;\r\n    height: auto;\r\n}\r\n\r\nbutton {\r\n    max-width: 190px;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    border: none;\r\n    background-color: rgb(62, 76, 117);\r\n    color: rgb(255, 255, 255);\r\n    padding: 0.75rem 1rem;\r\n    border-radius: 3px;\r\n}\r\n\r\nbutton:hover {\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: rgba(62, 76, 117, 0.8);\r\n}\r\n\r\n/* End of general styles */\r\n\r\n.container {\r\n    /* width: 1280px; */\r\n    min-width: 1280px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #F7F7F7;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\r\n}\r\n.header {\r\n    background-color: #C38D9E;\r\n    color: #F7F7F7;;\r\n    padding: 0.5rem;\r\n    font-size: 2rem;\r\n    font-family: bold-font;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    letter-spacing: 0.3rem;\r\n    gap: 1rem;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.header img {\r\n    max-width: 50px;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n}\r\n\r\n.menu {\r\n    flex: 1;\r\n    background-color: #EEEEEE;\r\n    border-right: 0.5px solid #B9B9B9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    text-align: left;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.todo-container {\r\n    flex: 4;\r\n}\r\n\r\n.menu-links li {\r\n    margin-bottom: 1rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.number-of-tasks {\r\n    background-color: #C38D9E;\r\n    font-size: 0.8rem;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    font-family: bold-font;\r\n    color: #F7F7EE;\r\n    padding: 0.5rem;\r\n    margin-right: 0.5rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-links li a {\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    color: #141414;\r\n}\r\n\r\n.menu-links .active,\r\n.menu-links a:hover {\r\n    font-family: bold-font;\r\n    color: #501F3A;\r\n}\r\n\r\n.menu-links .active::before,\r\n.menu-links a:hover::before {\r\n    content: '// ';\r\n}\r\n\r\n.menu-links {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    border-bottom: 0.5px solid #B9B9B9;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n    height: 200px;\r\n}\r\n\r\n.content-container h2 {\r\n    color: #141414;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.addtodo,\r\n.addproject {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.addtodo p,\r\n.addproject p {\r\n    color: #C38D9E;\r\n    font-family: bold-font;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.addtodo p {\r\n    color: #501F3A;\r\n}\r\n\r\n.addtodo img,\r\n.addproject img {\r\n    max-width: 60px;\r\n    height: auto;\r\n    margin-right: 2rem;\r\n}\r\n\r\n.buttons-container {\r\n    margin-top: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n}\r\n\r\n.items-list {\r\n    padding: 3rem;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.6rem;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n}\r\n\r\n.item {\r\n    background-color: #EEEEEE;\r\n    padding: 0.5rem 0.5rem 0.5rem 0;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.item:hover {\r\n    transform: scale(1.003);\r\n    transform-origin: 50% 50%;\r\n    box-shadow: 3px 3px 5px 2px rgba(0,0,0,.2);\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.action-grup,\r\n.name-grup {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.priority {\r\n    height: 50px; \r\n    /* background-color: #008000; */\r\n    position: relative; \r\n}\r\n\r\n.priority.low {\r\n    background-color: #2a9d8f;\r\n} \r\n\r\n.priority.medium {\r\n    background-color: #FFA500;\r\n} \r\n\r\n.priority.high {\r\n    background-color: #FF0000;\r\n} \r\n\r\n.priority::before {\r\n    content: ''; \r\n    position: absolute; \r\n    top: 0;\r\n    left: 0;\r\n    width: 4px;\r\n    height: 100%; \r\n    background-color: inherit; \r\n}\r\n\r\n/* checkbox handlder */\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n    accent-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    font-size: 2rem;\r\n    padding: 0.2rem;\r\n    border: 3px solid #2a9d8f;\r\n    border-radius: 0.3rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n        margin: 0 auto;\r\n    content: \"\";\r\n    width: 15px;\r\n    height: 15px;\r\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\r\n    transform: scale(0);\r\n    background-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n/* endof checkbox handler */\r\n\r\n.finished .name-grup p {\r\n    text-decoration: line-through;\r\n    opacity: 0.4;\r\n}\r\n\r\n#due-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.action-grup button {\r\n    background-color: transparent;\r\n    min-width: 1px;\r\n    padding: 0.2rem;\r\n    border: 1px solid #501F3A;\r\n}\r\n\r\n.action-grup img:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Genaral & View Modal Styles */\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    backdrop-filter: blur(8px);    \r\n    z-index: 1;\r\n}\r\n\r\n.modal.active{\r\n    display: block;\r\n}\r\n\r\n.modal-content {\r\n    color: #501F3A;\r\n    background-color: #EEEEEE;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n\r\n.modal-content h2 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.detail {\r\n    display: flex;\r\n}\r\n\r\n.detail p {\r\n    display: inline-block;\r\n}\r\n.detail:first-of-type .detail-title{\r\n    margin-right: 1.1rem;\r\n}\r\n\r\n.detail:nth-of-type(2) .detail-title{\r\n    margin-right: 0.95rem;\r\n}\r\n\r\n.detail:nth-of-type(3) .detail-title{\r\n    margin-right: 0.35rem;\r\n}\r\n\r\n.detail:last-of-type .detail-title{\r\n    \r\n    margin-right: 1.2rem;\r\n}\r\n\r\n.detail-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.close-modal-button {\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0; \r\n    right:0; \r\n    transform: translate(-20%, 20%);\r\n}\r\n\r\n/* Add project modal & Todo modal*/\r\n\r\n.modal-header {\r\n    margin: -2rem -2rem 0 -2rem;\r\n    padding: 1rem;\r\n    background-color: #C38D9E;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header p {\r\n    color: #F7F7F7;\r\n    font-size: 1.5rem;\r\n    font-family: bold-font;\r\n}\r\n\r\n#add-project-modal > .modal-content,\r\n#add-modal-todo > .modal-content {\r\n    height: 30rem;\r\n    max-width: 50rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form,\r\n#add-modal-todo form {\r\n    padding: 1rem;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.input-container {\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo .input-container {\r\n    align-items: flex-start;\r\n}\r\n\r\n#add-project-modal form input[type=text],\r\n#add-modal-todo form input[type=text],\r\nform input[type=date] {\r\n    font-family: main-font;\r\n    font-size: 1rem;\r\n    border: none;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    letter-spacing: 1px;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo ul li {\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#add-modal-todo ul li input {\r\n    margin-top: 0.3rem;\r\n}\r\n\r\n#add-project-modal form button,\r\n#add-modal-todo form button {\r\n    font-family: bold-font;\r\n    max-width: 8rem;\r\n    border: 1px solid #2a9d8f;\r\n    padding: 0.4rem 0.2rem;\r\n    color: #2a9d8f;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form button:hover,\r\n#add-modal-todo  form button:hover {\r\n    color: #F7F7F7;\r\n    background-color: #2a9d8f;\r\n}\r\n\r\n#add-modal-todo .button-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#add-modal-todo .priority-btn-grup {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.priority-btn-grup button {\r\n    min-width: 4.5rem;\r\n}\r\n\r\n.priority-btn-grup #medium {\r\n    color: #FFA500;\r\n    border-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #medium:hover {\r\n    background-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #high {\r\n    color: #FF0000;\r\n    border-color: #FF0000;\r\n}\r\n\r\n.priority-btn-grup #high:hover {\r\n    background-color: #FF0000;\r\n}\r\n\r\n/* Footer */\r\n.attribution {\r\n    text-align: center;\r\n    width: 100%;\r\n    padding-bottom: 0.3rem;\r\n    font-size: 0.7rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.attribution a {\r\n    margin-left: 0.3rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/domeffects.js":
/*!***********************************!*\
  !*** ./src/modules/domeffects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
    document.addEventListener("DOMContentLoaded", function() {
        //Menu links interaction

        const menuLinks = document.querySelectorAll(".menu-links a");
    
        menuLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                menuLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
    
                this.classList.add("active");
            });
        });

        // View modal

        let modal = document.getElementById('view-modal');
        let addProjectBTN = document.querySelector('.addproject');
        let addToDoBTN = document.querySelector('.addtodo');
        let addProjectModal = document.getElementById('add-project-modal');
        let addToDoModal = document.getElementById('add-modal-todo');
        let closeButton = document.querySelector('.close-modal-button');
        let viewButtons = document.querySelectorAll('.view-btn');

        function openModal() {
            modal.classList.add('active');
        }

        function openProjectModal() {
            addProjectModal.classList.add('active');
        }

        function openToDOModal() {
            addToDoModal.classList.add('active');
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        viewButtons.forEach(function(viewButton) {
            viewButton.addEventListener('click', openModal);
        });
        
        closeButton.addEventListener('click', closeModal);

        addProjectBTN.addEventListener('click', openProjectModal);

        addToDoBTN.addEventListener('click', openToDOModal);
        
        
        });

})());




/***/ }),

/***/ "./src/fonts/OpenSans_Condensed-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/OpenSans_Condensed-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "52dfa12fd5d4293eb596.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans_SemiCondensed-Bold.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/OpenSans_SemiCondensed-Bold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b3fd25fa49a4264418d.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _domeffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domeffects */ "./src/modules/domeffects.js");


// import Todo from './todo';

// import Project from './project';
// import handleProject from './handleproject';

const renderUI  = (function () {
    // const h1 = document.createElement("h1");
    // h1.textContent = "Test H1";
    // document.body.appendChild(h1);
})();



// const h1 = document.createElement("h1");
// h1.textContent = "Test H1";
// document.body.appendChild(h1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLFFBQVEsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxzQ0FBc0MsaUNBQWlDLDhFQUE4RSwyQkFBMkIsS0FBSyxvQkFBb0IsaUNBQWlDLDZFQUE2RSwyQkFBMkIsS0FBSyw4REFBOEQsK0JBQStCLG1CQUFtQixrQkFBa0IsS0FBSyxjQUFjLDBCQUEwQixLQUFLLGNBQWMsMEJBQTBCLHNCQUFzQixpQ0FBaUMsa0NBQWtDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLDJCQUEyQiwyQkFBMkIsU0FBUyxZQUFZLHlCQUF5QixLQUFLLGFBQWEsd0JBQXdCLHFCQUFxQixLQUFLLGdCQUFnQix5QkFBeUIsd0JBQXdCLHlCQUF5QixxQkFBcUIsMkNBQTJDLGtDQUFrQyw4QkFBOEIsMkJBQTJCLEtBQUssc0JBQXNCLHFCQUFxQix3QkFBd0IsaURBQWlELEtBQUssdURBQXVELDBCQUEwQiw0QkFBNEIsc0JBQXNCLCtCQUErQixrQ0FBa0MsMkJBQTJCLDREQUE0RCxLQUFLLGFBQWEsa0NBQWtDLHdCQUF3Qix3QkFBd0Isd0JBQXdCLCtCQUErQixzQkFBc0IsNEJBQTRCLDhCQUE4QiwrQkFBK0Isa0JBQWtCLHFDQUFxQyxvQ0FBb0MsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUssNEJBQTRCLHNCQUFzQixLQUFLLGVBQWUsZ0JBQWdCLGtDQUFrQywwQ0FBMEMsc0JBQXNCLCtCQUErQixzQkFBc0IseUJBQXlCLHVDQUF1QyxLQUFLLHlCQUF5QixnQkFBZ0IsS0FBSyx3QkFBd0IsNEJBQTRCLHdCQUF3QixzQkFBc0IsNEJBQTRCLHVDQUF1QyxLQUFLLDBCQUEwQixrQ0FBa0MsMEJBQTBCLHVCQUF1Qix3QkFBd0IsK0JBQStCLHVCQUF1Qix3QkFBd0IsNkJBQTZCLDRCQUE0QixzQkFBc0IsZ0NBQWdDLDRCQUE0QixLQUFLLDBCQUEwQiwwQkFBMEIsOEJBQThCLHVCQUF1QixLQUFLLHFEQUFxRCwrQkFBK0IsdUJBQXVCLEtBQUsscUVBQXFFLHVCQUF1QixLQUFLLHFCQUFxQixvQkFBb0IsNEJBQTRCLDJDQUEyQywwQkFBMEIsMkJBQTJCLDhCQUE4Qix5Q0FBeUMsc0JBQXNCLEtBQUssK0JBQStCLHVCQUF1Qiw0QkFBNEIsS0FBSyxrQ0FBa0Msc0JBQXNCLDRCQUE0Qiw4QkFBOEIsS0FBSyxzQ0FBc0MsdUJBQXVCLCtCQUErQiwwQkFBMEIsS0FBSyxvQkFBb0IsdUJBQXVCLEtBQUssMENBQTBDLHdCQUF3QixxQkFBcUIsMkJBQTJCLEtBQUssNEJBQTRCLHlCQUF5QixzQkFBc0IsK0JBQStCLGtCQUFrQixnQ0FBZ0MsS0FBSyxxQkFBcUIsc0JBQXNCLHVCQUF1QixzQkFBc0IsK0JBQStCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDhCQUE4Qix5Q0FBeUMsS0FBSyxlQUFlLGtDQUFrQyx3Q0FBd0MscUJBQXFCLHNCQUFzQix1Q0FBdUMsNEJBQTRCLEtBQUsscUJBQXFCLGdDQUFnQyxrQ0FBa0MsbURBQW1ELHFDQUFxQyxLQUFLLHFDQUFxQyxzQkFBc0IsZ0NBQWdDLDRCQUE0QixrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLHNDQUFzQyw4QkFBOEIsS0FBSyx1QkFBdUIsa0NBQWtDLE1BQU0sMEJBQTBCLGtDQUFrQyxNQUFNLHdCQUF3QixrQ0FBa0MsTUFBTSwyQkFBMkIscUJBQXFCLDRCQUE0QixlQUFlLGdCQUFnQixtQkFBbUIsc0JBQXNCLG1DQUFtQyxLQUFLLDZEQUE2RCxvQkFBb0IscUJBQXFCLDhCQUE4QixLQUFLLGtDQUFrQyx5QkFBeUIsaUNBQWlDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLDhCQUE4Qix3QkFBd0Isd0JBQXdCLGtDQUFrQyw4QkFBOEIsa0NBQWtDLEtBQUssMENBQTBDLDJCQUEyQixzQkFBc0Isb0JBQW9CLHFCQUFxQix1SUFBdUksNEJBQTRCLGtDQUFrQyxLQUFLLGtEQUFrRCw0QkFBNEIsS0FBSyxnRUFBZ0Usc0NBQXNDLHFCQUFxQixLQUFLLG1CQUFtQiwwQkFBMEIsS0FBSyw2QkFBNkIsc0NBQXNDLHVCQUF1Qix3QkFBd0Isa0NBQWtDLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLHFEQUFxRCxzQkFBc0Isd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsdUNBQXVDLG1CQUFtQixLQUFLLHNCQUFzQix1QkFBdUIsS0FBSyx3QkFBd0IsdUJBQXVCLGtDQUFrQyxzQkFBc0IsbUJBQW1CLHlCQUF5QiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsc0RBQXNELHNCQUFzQiwrQkFBK0IseUJBQXlCLEtBQUssMkJBQTJCLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxtQkFBbUIsOEJBQThCLEtBQUssd0NBQXdDLDZCQUE2QixLQUFLLDZDQUE2Qyw4QkFBOEIsS0FBSyw2Q0FBNkMsOEJBQThCLEtBQUssMkNBQTJDLHFDQUFxQyxLQUFLLHVCQUF1QiwwQkFBMEIsS0FBSyw2QkFBNkIsbUJBQW1CLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLGlCQUFpQix3Q0FBd0MsS0FBSyxrRUFBa0Usb0NBQW9DLHNCQUFzQixrQ0FBa0Msc0JBQXNCLHVDQUF1Qyw0QkFBNEIsS0FBSyx5QkFBeUIsdUJBQXVCLDBCQUEwQiwrQkFBK0IsS0FBSyxrRkFBa0Ysc0JBQXNCLHlCQUF5QixrQ0FBa0MsS0FBSywwREFBMEQsc0JBQXNCLHFCQUFxQixzQkFBc0IsK0JBQStCLHVDQUF1QyxLQUFLLDBCQUEwQiwwQkFBMEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsa0JBQWtCLHVCQUF1QixLQUFLLDBDQUEwQyxnQ0FBZ0MsS0FBSyxzSEFBc0gsK0JBQStCLHdCQUF3QixxQkFBcUIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLEtBQUssK0JBQStCLG9CQUFvQiwyQkFBMkIsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUssd0VBQXdFLCtCQUErQix3QkFBd0Isa0NBQWtDLCtCQUErQix1QkFBdUIsa0NBQWtDLEtBQUsscUZBQXFGLHVCQUF1QixrQ0FBa0MsS0FBSywyQ0FBMkMsc0JBQXNCLHVDQUF1Qyx3QkFBd0IsS0FBSyw0Q0FBNEMsc0JBQXNCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLEtBQUssbUNBQW1DLDBCQUEwQixLQUFLLG9DQUFvQyx1QkFBdUIsOEJBQThCLEtBQUssMENBQTBDLGtDQUFrQyxLQUFLLGtDQUFrQyx1QkFBdUIsOEJBQThCLEtBQUssd0NBQXdDLGtDQUFrQyxLQUFLLHNDQUFzQywyQkFBMkIsb0JBQW9CLCtCQUErQiwwQkFBMEIsMkJBQTJCLGtCQUFrQixnQkFBZ0IscUJBQXFCLEtBQUssd0JBQXdCLDRCQUE0QixLQUFLLG1CQUFtQjtBQUNsMGQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMzaEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMsR0FBRyxFQUFDO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbWVmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfU2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZC1mb250JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLyogR2VuZXJhbCBzdHlsZXMgKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MiwgNzYsIDExNyk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MiwgNzYsIDExNywgMC44KTtcclxufVxyXG5cclxuLyogRW5kIG9mIGdlbmVyYWwgc3R5bGVzICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8qIHdpZHRoOiAxMjgwcHg7ICovXHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBjb2xvcjogI0Y3RjdGNzs7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmhlYWRlciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgZmxleDogNDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubnVtYmVyLW9mLXRhc2tzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07IFxyXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGNvbG9yOiAjRjdGN0VFO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4ubWVudS1saW5rcyAuYWN0aXZlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgLmFjdGl2ZTo6YmVmb3JlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJy8vICc7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmFkZHRvZG8sXHJcbi5hZGRwcm9qZWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkdG9kbyBwLFxyXG4uYWRkcHJvamVjdCBwIHtcclxuICAgIGNvbG9yOiAjQzM4RDlFO1xyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYWRkdG9kbyBwIHtcclxuICAgIGNvbG9yOiAjNTAxRjNBO1xyXG59XHJcblxyXG4uYWRkdG9kbyBpbWcsXHJcbi5hZGRwcm9qZWN0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1zLWxpc3Qge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjQzM4RDlFICNFRUVFRUU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tZ3J1cCxcclxuLm5hbWUtZ3J1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcblxyXG4ucHJpb3JpdHkubG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkuaGlnaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59IFxyXG5cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IFxyXG59XHJcblxyXG4vKiBjaGVja2JveCBoYW5kbGRlciAqL1xyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyYTlkOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi8qIGVuZG9mIGNoZWNrYm94IGhhbmRsZXIgKi9cclxuXHJcbi5maW5pc2hlZCAubmFtZS1ncnVwIHAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbiNkdWUtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1ncnVwIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwMUYzQTtcclxufVxyXG5cclxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi8qIEdlbmFyYWwgJiBWaWV3IE1vZGFsIFN0eWxlcyAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyAgICBcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tb2RhbC5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM1MDFGM0E7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGV0YWlsIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5kZXRhaWw6Zmlyc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbn1cclxuXHJcbi5kZXRhaWw6bnRoLW9mLXR5cGUoMikgLmRldGFpbC10aXRsZXtcclxuICAgIG1hcmdpbi1yaWdodDogMC45NXJlbTtcclxufVxyXG5cclxuLmRldGFpbDpudGgtb2YtdHlwZSgzKSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjM1cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsOmxhc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxle1xyXG4gICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmRldGFpbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsLWJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwOyBcclxuICAgIHJpZ2h0OjA7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSwgMjAlKTtcclxufVxyXG5cclxuLyogQWRkIHByb2plY3QgbW9kYWwgJiBUb2RvIG1vZGFsKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAtMnJlbSAtMnJlbSAwIC0ycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciBwIHtcclxuICAgIGNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcclxuI2FkZC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgY29sb3I6ICMxNDE0MTQ7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxyXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxyXG5mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gdWwgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmE5ZDhmO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcclxuICAgIGNvbG9yOiAjMmE5ZDhmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gYnV0dG9uOmhvdmVyLFxyXG4jYWRkLW1vZGFsLXRvZG8gIGZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC44cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW0ge1xyXG4gICAgY29sb3I6ICNGRkE1MDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaCB7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4uYXR0cmlidXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uYXR0cmlidXRpb24gYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUFxRTtJQUNyRSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQW9FO0lBQ3BFLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUI7QUFDbkI7OztJQUdJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlC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QUM3Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdib2xkLWZvbnQnO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL09wZW5TYW5zX1NlbWlDb25kZW5zZWQtQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTkwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjIsIDc2LCAxMTcpO1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjIsIDc2LCAxMTcsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBvZiBnZW5lcmFsIHN0eWxlcyAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvKiB3aWR0aDogMTI4MHB4OyAqL1xcclxcbiAgICBtaW4td2lkdGg6IDEyODBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDUpIDBweCAyNXB4IDIwcHggLTIwcHg7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xcclxcbiAgICBjb2xvcjogI0Y3RjdGNzs7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNCOUI5Qjk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm51bWJlci1vZi10YXNrcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB3aWR0aDogMS41cmVtOyBcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbiAgICBjb2xvcjogI0Y3RjdFRTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzE0MTQxNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgLmFjdGl2ZSxcXHJcXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIC5hY3RpdmU6OmJlZm9yZSxcXHJcXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnLy8gJztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0I5QjlCOTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvLFxcclxcbi5hZGRwcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdG9kbyBwLFxcclxcbi5hZGRwcm9qZWN0IHAge1xcclxcbiAgICBjb2xvcjogI0MzOEQ5RTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvIHAge1xcclxcbiAgICBjb2xvcjogIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRvZG8gaW1nLFxcclxcbi5hZGRwcm9qZWN0IGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLDAsMCwuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tZ3J1cCxcXHJcXG4ubmFtZS1ncnVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4OyBcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDsgKi9cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LmxvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJpb3JpdHkubWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTUwMDtcXHJcXG59IFxcclxcblxcclxcbi5wcmlvcml0eS5oaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcXHJcXG59IFxcclxcblxcclxcbi5wcmlvcml0eTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7IFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiA0cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IFxcclxcbn1cXHJcXG5cXHJcXG4vKiBjaGVja2JveCBoYW5kbGRlciAqL1xcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBhY2NlbnQtY29sb3I6ICMyYTlkOGY7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmE5ZDhmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDAlIDIwJSwgMzAlIDUwJSwgMCUgODAlLCAyMCUgMTAwJSwgNTAlIDcwJSwgODAlIDEwMCUsIDEwMCUgODAlLCA3MCUgNTAlLCAxMDAlIDIwJSwgODAlIDAlLCA1MCUgMzAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG4vKiBlbmRvZiBjaGVja2JveCBoYW5kbGVyICovXFxyXFxuXFxyXFxuLmZpbmlzaGVkIC5uYW1lLWdydXAgcCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbiNkdWUtZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWdydXAgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1pbi13aWR0aDogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDFGM0E7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tZ3J1cCBpbWc6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmFyYWwgJiBWaWV3IE1vZGFsIFN0eWxlcyAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgICAgXFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5hY3RpdmV7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGNvbG9yOiAjNTAxRjNBO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggMTBweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmRldGFpbDpmaXJzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsOm50aC1vZi10eXBlKDIpIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC45NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbDpudGgtb2YtdHlwZSgzKSAuZGV0YWlsLXRpdGxle1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWw6bGFzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWwtYnV0dG9uIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDsgXFxyXFxuICAgIHJpZ2h0OjA7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlLCAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciBwIHtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMzByZW07XFxyXFxuICAgIG1heC13aWR0aDogNTByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtLFxcclxcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzE0MTQxNDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxcclxcbmZvcm0gaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtYWluLWZvbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBjb2xvcjogIzE0MTQxNDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBidXR0b24sXFxyXFxuI2FkZC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmE5ZDhmO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC4ycmVtO1xcclxcbiAgICBjb2xvcjogIzJhOWQ4ZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gYnV0dG9uOmhvdmVyLFxcclxcbiNhZGQtbW9kYWwtdG9kbyAgZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogI0Y3RjdGNztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIC5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuOHJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgYnV0dG9uIHtcXHJcXG4gICAgbWluLXdpZHRoOiA0LjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtIHtcXHJcXG4gICAgY29sb3I6ICNGRkE1MDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI0ZGQTUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2gge1xcclxcbiAgICBjb2xvcjogI0ZGMDAwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRkYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG4uYXR0cmlidXRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0aW9uIGEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL01lbnUgbGlua3MgaW50ZXJhY3Rpb25cclxuXHJcbiAgICAgICAgY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWxpbmtzIGFcIik7XHJcbiAgICBcclxuICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFZpZXcgbW9kYWxcclxuXHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctbW9kYWwnKTtcclxuICAgICAgICBsZXQgYWRkUHJvamVjdEJUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0Jyk7XHJcbiAgICAgICAgbGV0IGFkZFRvRG9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkdG9kbycpO1xyXG4gICAgICAgIGxldCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtbW9kYWwnKTtcclxuICAgICAgICBsZXQgYWRkVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1tb2RhbC10b2RvJyk7XHJcbiAgICAgICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsLWJ1dHRvbicpO1xyXG4gICAgICAgIGxldCB2aWV3QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LWJ0bicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcclxuICAgICAgICAgICAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblRvRE9Nb2RhbCgpIHtcclxuICAgICAgICAgICAgYWRkVG9Eb01vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWV3QnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKHZpZXdCdXR0b24pIHtcclxuICAgICAgICAgICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuXHJcbiAgICAgICAgYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpO1xyXG5cclxuICAgICAgICBhZGRUb0RvQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRvRE9Nb2RhbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZG9tZWZmZWN0cyBmcm9tICcuL2RvbWVmZmVjdHMnO1xyXG4vLyBpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xyXG5cclxuLy8gaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuLy8gaW1wb3J0IGhhbmRsZVByb2plY3QgZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuXHJcbmNvbnN0IHJlbmRlclVJICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIC8vIGgxLnRleHRDb250ZW50ID0gXCJUZXN0IEgxXCI7XHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGgxKTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuLy8gY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbi8vIGgxLnRleHRDb250ZW50ID0gXCJUZXN0IEgxXCI7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaDEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==