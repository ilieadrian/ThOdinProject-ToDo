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
    font-weight: 600;
    background-color: #F7F7F7;
    color: #501F3A;
    border: 2px solid #501F3A;
    padding: 0.75rem 1rem;
    border-radius: 3px;
}

button:hover {
    border: none;
    cursor: pointer;
    color: #F7F7F7;
    background-color: #9F8693;
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
    align-items: center;
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
    width: 100%;
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

.finished.name-grup p {
    text-decoration: line-through;
    opacity: 0.4;
}

.finished.action-grup {
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

.close-btn {
    cursor: pointer;
}

.close-modal-button {
    z-index: 1;
    position: absolute;
    top: 0; 
    right:0; 
    transform: translate(-40%, 40%);
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
#add-modal-todo > .modal-content,
#edit-modal-todo > .modal-content {
    height: 30rem;
    max-width: 50rem;
    background-color: #F7F7F7;
}

#add-project-modal form,
#add-modal-todo form,
#edit-modal-todo form {
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

#add-modal-todo .input-container,
#edit-modal-todo .input-container  {
    align-items: flex-start;
}

#add-project-modal form input[type=text],
#add-modal-todo form input[type=text],
#edit-modal-todo form input[type=text],
form input[type=date] {
    font-family: main-font;
    font-size: 1rem;
    border: none;
    width: 100%;
    padding: 0.5rem;
    letter-spacing: 1px;
    color: #141414;
}

#add-modal-todo ul li,
#edit-modal-todo ul li {
    width: 100%;
    margin-top: 0.5rem;
}

#add-modal-todo ul li input,
#edit-modal-todo ul li input {
    margin-top: 0.3rem;
}

#add-project-modal form button,
#add-modal-todo form button,
#edit-modal-todo form button {
    font-family: bold-font;
    max-width: 8rem;
    border: 1px solid #2a9d8f;
    padding: 0.4rem 0.2rem;
    color: #2a9d8f;
    background-color: #F7F7F7;
}

#add-project-modal form button:hover,
#add-modal-todo form button:hover,
#edit-modal-todo form button:hover {
    color: #F7F7F7;
    background-color: #2a9d8f;
}

#add-modal-todo .button-container,
#edit-modal-todo .button-container  {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

#add-modal-todo .priority-btn-grup,
#edit-modal-todo .priority-btn-grup {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'main-font';\r\n    src: url('./fonts/OpenSans_Condensed-Regular.ttf') format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'bold-font';\r\n    src: url(./fonts/OpenSans_SemiCondensed-Bold.ttf) format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n/* General styles */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    overflow: hidden; \r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    height: 100vh;\r\n    font-family: 'main-font';\r\n    background-color: #2a9d8f;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    text-align: center;\r\n\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    max-width: 25px;\r\n    height: auto;\r\n}\r\n\r\nbutton {\r\n    max-width: 190px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    background-color: #F7F7F7;\r\n    color: #501F3A;\r\n    border: 2px solid #501F3A;\r\n    padding: 0.75rem 1rem;\r\n    border-radius: 3px;\r\n}\r\n\r\nbutton:hover {\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #F7F7F7;\r\n    background-color: #9F8693;\r\n}\r\n\r\n/* End of general styles */\r\n\r\n.container {\r\n    /* width: 1280px; */\r\n    min-width: 1280px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #F7F7F7;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\r\n}\r\n.header {\r\n    background-color: #C38D9E;\r\n    color: #F7F7F7;;\r\n    padding: 0.5rem;\r\n    font-size: 2rem;\r\n    font-family: bold-font;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    letter-spacing: 0.3rem;\r\n    gap: 1rem;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.header img {\r\n    max-width: 50px;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n}\r\n\r\n.menu {\r\n    flex: 1;\r\n    background-color: #EEEEEE;\r\n    border-right: 0.5px solid #B9B9B9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    text-align: left;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.todo-container {\r\n    flex: 4;\r\n}\r\n\r\n.menu-links li {\r\n    margin-bottom: 1rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.number-of-tasks {\r\n    background-color: #C38D9E;\r\n    font-size: 0.8rem;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    font-family: bold-font;\r\n    color: #F7F7EE;\r\n    padding: 0.5rem;\r\n    margin-right: 0.5rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-links li a {\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    color: #141414;\r\n}\r\n\r\n.menu-links .active,\r\n.menu-links a:hover {\r\n    font-family: bold-font;\r\n    color: #501F3A;\r\n}\r\n\r\n.menu-links .active::before,\r\n.menu-links a:hover::before {\r\n    content: '// ';\r\n}\r\n\r\n.menu-links {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    border-bottom: 0.5px solid #B9B9B9;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n    height: 200px;\r\n}\r\n\r\n.content-container h2 {\r\n    color: #141414;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.addtodo,\r\n.addproject {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.addtodo p,\r\n.addproject p {\r\n    color: #C38D9E;\r\n    font-family: bold-font;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.addtodo p {\r\n    color: #501F3A;\r\n}\r\n\r\n.addtodo img,\r\n.addproject img {\r\n    max-width: 60px;\r\n    height: auto;\r\n    margin-right: 2rem;\r\n}\r\n\r\n.buttons-container {\r\n    margin-top: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n}\r\n\r\n.items-list {\r\n    padding: 3rem;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.6rem;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n}\r\n\r\n.item {\r\n    background-color: #EEEEEE;\r\n    padding: 0.5rem 0.5rem 0.5rem 0;\r\n    height: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.item:hover {\r\n    transform: scale(1.003);\r\n    transform-origin: 50% 50%;\r\n    box-shadow: 3px 3px 5px 2px rgba(0,0,0,.2);\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.action-grup,\r\n.name-grup {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.priority {\r\n    height: 50px; \r\n    position: relative; \r\n}\r\n\r\n.priority.low {\r\n    background-color: #2a9d8f;\r\n} \r\n\r\n.priority.medium {\r\n    background-color: #FFA500;\r\n} \r\n\r\n.priority.high {\r\n    background-color: #FF0000;\r\n} \r\n\r\n.priority::before {\r\n    content: ''; \r\n    position: absolute; \r\n    top: 0;\r\n    left: 0;\r\n    width: 4px;\r\n    height: 100%; \r\n    background-color: inherit; \r\n}\r\n\r\n/* checkbox handlder */\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n    accent-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    font-size: 2rem;\r\n    padding: 0.2rem;\r\n    border: 3px solid #2a9d8f;\r\n    border-radius: 0.3rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]::before {\r\n        margin: 0 auto;\r\n    content: \"\";\r\n    width: 15px;\r\n    height: 15px;\r\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\r\n    transform: scale(0);\r\n    background-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n/* endof checkbox handler */\r\n\r\n.finished.name-grup p {\r\n    text-decoration: line-through;\r\n    opacity: 0.4;\r\n}\r\n\r\n.finished.action-grup {\r\n    opacity: 0.4;\r\n}\r\n\r\n#due-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.action-grup button {\r\n    background-color: transparent;\r\n    min-width: 1px;\r\n    padding: 0.2rem;\r\n    border: 1px solid #501F3A;\r\n}\r\n\r\n.action-grup img:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Genaral & View Modal Styles */\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    backdrop-filter: blur(8px);    \r\n    z-index: 1;\r\n}\r\n\r\n.modal.active{\r\n    display: block;\r\n}\r\n\r\n.modal-content {\r\n    color: #501F3A;\r\n    background-color: #EEEEEE;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n\r\n.modal-content h2 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.detail {\r\n    display: flex;\r\n}\r\n\r\n.detail p {\r\n    display: inline-block;\r\n}\r\n.detail:first-of-type .detail-title{\r\n    margin-right: 1.1rem;\r\n}\r\n\r\n.detail:nth-of-type(2) .detail-title{\r\n    margin-right: 0.95rem;\r\n}\r\n\r\n.detail:nth-of-type(3) .detail-title{\r\n    margin-right: 0.35rem;\r\n}\r\n\r\n.detail:last-of-type .detail-title{\r\n    \r\n    margin-right: 1.2rem;\r\n}\r\n\r\n.detail-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.close-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.close-modal-button {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 0; \r\n    right:0; \r\n    transform: translate(-40%, 40%);\r\n}\r\n\r\n/* Add project modal & Todo modal*/\r\n\r\n.modal-header {\r\n    margin: -2rem -2rem 0 -2rem;\r\n    padding: 1rem;\r\n    background-color: #C38D9E;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header p {\r\n    color: #F7F7F7;\r\n    font-size: 1.5rem;\r\n    font-family: bold-font;\r\n}\r\n\r\n#add-project-modal > .modal-content,\r\n#add-modal-todo > .modal-content,\r\n#edit-modal-todo > .modal-content {\r\n    height: 30rem;\r\n    max-width: 50rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form,\r\n#add-modal-todo form,\r\n#edit-modal-todo form {\r\n    padding: 1rem;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.input-container {\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo .input-container,\r\n#edit-modal-todo .input-container  {\r\n    align-items: flex-start;\r\n}\r\n\r\n#add-project-modal form input[type=text],\r\n#add-modal-todo form input[type=text],\r\n#edit-modal-todo form input[type=text],\r\nform input[type=date] {\r\n    font-family: main-font;\r\n    font-size: 1rem;\r\n    border: none;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    letter-spacing: 1px;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo ul li,\r\n#edit-modal-todo ul li {\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#add-modal-todo ul li input,\r\n#edit-modal-todo ul li input {\r\n    margin-top: 0.3rem;\r\n}\r\n\r\n#add-project-modal form button,\r\n#add-modal-todo form button,\r\n#edit-modal-todo form button {\r\n    font-family: bold-font;\r\n    max-width: 8rem;\r\n    border: 1px solid #2a9d8f;\r\n    padding: 0.4rem 0.2rem;\r\n    color: #2a9d8f;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form button:hover,\r\n#add-modal-todo form button:hover,\r\n#edit-modal-todo form button:hover {\r\n    color: #F7F7F7;\r\n    background-color: #2a9d8f;\r\n}\r\n\r\n#add-modal-todo .button-container,\r\n#edit-modal-todo .button-container  {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#add-modal-todo .priority-btn-grup,\r\n#edit-modal-todo .priority-btn-grup {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.priority-btn-grup button {\r\n    min-width: 4.5rem;\r\n}\r\n\r\n.priority-btn-grup #medium {\r\n    color: #FFA500;\r\n    border-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #medium:hover {\r\n    background-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #high {\r\n    color: #FF0000;\r\n    border-color: #FF0000;\r\n}\r\n\r\n.priority-btn-grup #high:hover {\r\n    background-color: #FF0000;\r\n}\r\n\r\n/* Footer */\r\n.attribution {\r\n    text-align: center;\r\n    width: 100%;\r\n    padding-bottom: 0.3rem;\r\n    font-size: 0.7rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.attribution a {\r\n    margin-left: 0.3rem;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/handleproject.js":
/*!**************************************!*\
  !*** ./src/modules/handleproject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   handleProject: () => (/* binding */ handleProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");



function handleProject(newToDo, projectsList){
    const defaultProjectExists = projectsList.some(project => project.name === "Default");
    if (!defaultProjectExists) {
        const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("Default");
        projectsList.push(defaultProject);
        }
        
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](newToDo.project);
        projectsList.push(newProject);
    }
    return projectsList;
}


function getProjects(projectsList, todoList) {
    let ulContent = '';

    projectsList.forEach(element => {
        ulContent += `
            <li data-project-id="${element.id}">
                <a href="#">${element.name}</a>
                <span class="number-of-tasks">${countTodoinProject(element.name, todoList)}</span>
            </li>
        `;
    });

    document.addEventListener("DOMContentLoaded", function() {
        const projectList = document.querySelectorAll("#projects li");

        projectList.forEach(li => {
            const anchor = li.querySelector('a');
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const projectId = li.getAttribute('data-project-id');
                const projectName = anchor.textContent;

                (0,_handletodos__WEBPACK_IMPORTED_MODULE_1__.getTodosByProject)(todoList, projectName);

                projectList.forEach(item => {
                    const link = item.querySelector('a');
                    link.classList.remove('active');
                });

                anchor.classList.add('active');
            });
        });
    });

    return ulContent;
}

function countTodoinProject(element, todoList){
    let count = 0;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === element) {
            count++;
        }
    }

    return count;
}





/***/ }),

/***/ "./src/modules/handletodos.js":
/*!************************************!*\
  !*** ./src/modules/handletodos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayToDods: () => (/* binding */ displayToDods),
/* harmony export */   getTodosByProject: () => (/* binding */ getTodosByProject),
/* harmony export */   handleTodos: () => (/* binding */ handleTodos),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/modules/index.js");
/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manipulateDOM */ "./src/modules/manipulateDOM.js");



function handleTodos(todoList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(todoList, curentElement);
    } 
}

function displayToDods(todoList) {
    let ulContent = '';

    todoList.forEach((element, index) => {
        ulContent += `
            <li class="item" id="item-${index}">
                <div class="name-grup ${element.status ? "finished" : ''}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" ${element.status ? "checked" : ''}>
                    <p class="finished">${element.title} </p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ''}">
                    <p id="due-date">${element.dueDate}</p>
                    <button class="view-btn" id="view-btn-${index}"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn" id="edit-btn-${index}"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button class="delete-btn" id="delete-btn-${index}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;
    });

    return ulContent;
}

function getTodosByProject(todoList, curentElement){
    const filteredElements = todoList.filter(taskList => taskList.project === curentElement);
    (0,___WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(filteredElements)
}
//
function setupEventListeners(todoList, projectsList) {
    document.addEventListener('DOMContentLoaded', function() {
        const todoListContainer = document.querySelector('.todo-container');
        let modalContainer = document.getElementById('modal-container');

        const addProjectBTN = document.querySelector('.addproject');
        const addToDoBTN = document.querySelector('.addtodo');

        addProjectBTN.addEventListener('click', function() {
            (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.openProjectModal)(modalContainer);
        });

        addToDoBTN.addEventListener('click', function() {
            (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.openToDoModal)(modalContainer);
        });

        todoListContainer.addEventListener('click', function(event) {
            const target = event.target;
            const listItem = target.closest('.item');
            const index = listItem ? listItem.id.split('-')[1] : null;
                        
            if (index !== null) {
                if (target.closest('.view-btn')) {
                    (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.openViewModal)(index, todoList, modalContainer);
                } else if (target.closest('.edit-btn')) {
                    (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.openEditModal)(index, todoList, modalContainer);
                } else if (target.closest('.delete-btn')) {
                    deleteTodoItem(index, todoList, projectsList);
                }
            }
        });
    });
}

// function deleteTodoItem(index, todoList, projectsList) {
//     console.log(`Delete button clicked at index ${index}`);

//     // Logic to remove the to-do item from the list and re-render the UI
//     todoList.splice(index, 1);
//     renderUI(projectsList, todoList);
// }






/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodoContainer: () => (/* binding */ renderTodoContainer),
/* harmony export */   renderUI: () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleproject */ "./src/modules/handleproject.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");
/* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup */ "./src/modules/startup.js");
/* harmony import */ var _images_to_do_list_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/to-do-list.svg */ "./src/images/to-do-list.svg");
/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manipulateDOM */ "./src/modules/manipulateDOM.js");


 
//correct typo above: should be displayTodos




function renderUI(projectsList, todoList) {
    let container = document.querySelector('.container');
    const headerTodoIcon = new Image();
    headerTodoIcon.src = _images_to_do_list_svg__WEBPACK_IMPORTED_MODULE_4__;

    if (!container) {
        container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        }

    container.innerHTML = "";
    container.innerHTML = `
        <section class="header">
            <h1>// To do</h1>
            <div id="header-icon-container"></div>
        </section>
        <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    <li><a href="#">Home</a><span class="number-of-tasks">7</span></li>
                    <li><a href="#">Due Today</a><span class="number-of-tasks">2</span></li>
                    <li><a href="#">Due These Week</a><span class="number-of-tasks">1</span></li>
                </ul>
                <h2>Projects</h2>
                <ul id="projects" class="menu-links">
                    ${(0,_handleproject__WEBPACK_IMPORTED_MODULE_1__.getProjects)(projectsList, todoList)}
                </ul>
                <div class="buttons-container">
                    <div class="addtodo">
                        <img src="../src/images/add-plus-circle.svg" alt="" srcset="">
                        <p>New To do</p>
                    </div>
                    <div class="addproject">
                        <img src="../src/images/add-plus-circle.svg" alt="" srcset="">
                        <p>New Project</p>
                    </div>
                </div>
            </section>
            <section class="todo-container">
                <ul class="items-list" id="item-list-X-X">
                    ${(0,_handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods)(todoList)}
                </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;

    const headerIconContainer = document.getElementById('header-icon-container');
    console.log(headerIconContainer)
    headerIconContainer.appendChild(headerTodoIcon);

    //********************** */
    //TO BE DELETED - after handling todo check status!
    const todoListContainer = document.querySelector('.items-list');
    todoListContainer.addEventListener('click', theFunction);
    //********************** */
}

//********************** */
//TO BE DELETED - after handling todo check status!
function theFunction(e) {
    console.log(e.target)
}
//********************** */

function renderTodoContainer(filteredElements){
    let container = document.querySelector('.todo-container');

    container.innerHTML = "";

    if (filteredElements.length > 0) {
        container.innerHTML = `
        <ul class="items-list">
            ${(0,_handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods)(filteredElements)}  
        </ul>
        
    `;
    } else {
        container.innerHTML = `
        <div class="items-list">
            <h2>Empty Project!</h2>
            <p> Create a new to-do item or delete project. </p>
            <button class="delete-btn"> Delete project</button>
        </div>    
    `;
    }
    
}






/***/ }),

/***/ "./src/modules/manipulateDOM.js":
/*!**************************************!*\
  !*** ./src/modules/manipulateDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openEditModal: () => (/* binding */ openEditModal),
/* harmony export */   openProjectModal: () => (/* binding */ openProjectModal),
/* harmony export */   openToDoModal: () => (/* binding */ openToDoModal),
/* harmony export */   openViewModal: () => (/* binding */ openViewModal)
/* harmony export */ });
let modalContainer = document.getElementById('modal-container');

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
        });
})());

function openProjectModal(modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="add-project-modal" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new Project</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
            </div>
            <form>
                <div class="input-container">
                    <label for="name">Project name: </label>
                    <input type="text" id="name">
                </div>
                <button>Create project</button>
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openToDoModal(modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-todo-modal-button close-btn">
            </div>
            <form action="">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description">
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low">Low</button>
                        <button id="medium">Medium</button>
                        <button id="high">High</button>
                    </div>

                    <button>Create project</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openViewModal(index, todoList, modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="view-modal" class="modal active">
        <div class="modal-content">
            <img src="./images/close-ellipse.svg" class="close-modal-button close-btn">
            <h2>${todoList[index].title}</h2>
            <div class="detail">
                <p class="detail-title">Project: </p>
                <p>${todoList[index].title}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Priority: </p>
                <p>${todoList[index].priority}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Due Date: </p>
                <p>${todoList[index].dueDate}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Details: </p>
                <p>${todoList[index].description}</p>
            </div>
        </div>    
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openEditModal(index, todoList, modalContainer) {
    modalContainer.innerHTML = "";
    //Correct the value of the imput @DueDate, it does not use the stored dueDate
    //Add functionality to select the active BTN
    modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
            </div>
            <form action="">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" value="${todoList[index].title}">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description" value="${todoList[index].description}">
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate" value="${todoList[index].dueDate}">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low">Low</button>
                        <button id="medium">Medium</button>
                        <button id="high">High</button>
                    </div>

                    <button>Confirm edit</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function addCloseEventListeners(modalContainer) {
    const closeButtons = modalContainer.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modalContainer.innerHTML = '';
        });
    });
}




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    static idCounter = 0;

    constructor(name) {
        this._id = Project.calcId();
        this._name = name;
        this._items = 0;
    }   

    static calcId() {
        return ++Project.idCounter;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get items() {
        return this._items;
    }

    set name(value) {
        this._name = value;
    }

    calcItem() {
        this._items += 1;
    }

    set items(value) {
        console.log(value)
        // this._items = value;
    }
}




/***/ }),

/***/ "./src/modules/startup.js":
/*!********************************!*\
  !*** ./src/modules/startup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValues: () => (/* binding */ defaultValues)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleproject */ "./src/modules/handleproject.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");
/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manipulateDOM */ "./src/modules/manipulateDOM.js");








const defaultValues  = (function () {
    const todoList = [];
    const projectsList = [];
    let newToDo;
    let defaultProject;

    const todos = [
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '20.03.2024', 'high', false, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Write on blog', 'Write about last part from TicTacToe game', '21.03.2024', 'low', false, 'Home'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('New Odin Chapter', 'Start a new OdinProjectChapter', '15.04.2024', 'medium', true, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Repair blog', 'Fix social links on blog header', '29.03.2024', 'high', false, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '15.03.2024', 'low', true, 'Home'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('App implementation', 'Add ability to extract the projects from the array', '24.03.2024', 'low', true, 'Active learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Xyx', 'Some random text', '31.05.2024', 'low', true, 'Active learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('ABC', 'First three leters from the algha', '02.06.2024', 'high', false, 'Active learning')
    ];
    
    todos.forEach(newToDo => {
        todoList.push(newToDo);
        (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProject)(newToDo, projectsList);
    });

    (0,_index__WEBPACK_IMPORTED_MODULE_4__.renderUI)(projectsList, todoList);
    (0,_handletodos__WEBPACK_IMPORTED_MODULE_3__.setupEventListeners)(todoList, projectsList);
    
    return {
        todoList,
        projectsList,
    };
})();



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, status, project) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project; 
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    get status() {
        return this._status;
    }

    get project() {
        return this._project;
    }

    set status(value) {
        this._status = value;
    } 
}







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

/***/ }),

/***/ "./src/images/to-do-list.svg":
/*!***********************************!*\
  !*** ./src/images/to-do-list.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5afd804d47fb87ee262.svg";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZ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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hhbmRsZXRvZG9zLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tYW5pcHVsYXRlRE9NLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0YXJ0dXAuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfU2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZC1mb250JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLyogR2VuZXJhbCBzdHlsZXMgKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDFGM0E7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0Y3RjdGNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Rjg2OTM7XHJcbn1cclxuXHJcbi8qIEVuZCBvZiBnZW5lcmFsIHN0eWxlcyAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICAvKiB3aWR0aDogMTI4MHB4OyAqL1xyXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDUpIDBweCAyNXB4IDIwcHggLTIwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xyXG4gICAgY29sb3I6ICNGN0Y3Rjc7O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjQjlCOUI5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRvZG8tY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDQ7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm51bWJlci1vZi10YXNrcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB3aWR0aDogMS41cmVtOyBcclxuICAgIGhlaWdodDogMS41cmVtOyBcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBjb2xvcjogI0Y3RjdFRTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzE0MTQxNDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgLmFjdGl2ZSxcclxuLm1lbnUtbGlua3MgYTpob3ZlciB7XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG4gICAgY29sb3I6ICM1MDFGM0E7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIC5hY3RpdmU6OmJlZm9yZSxcclxuLm1lbnUtbGlua3MgYTpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcvLyAnO1xyXG59XHJcblxyXG4ubWVudS1saW5rcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQjlCOUI5O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciBoMiB7XHJcbiAgICBjb2xvcjogIzE0MTQxNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5hZGR0b2RvLFxyXG4uYWRkcHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZHRvZG8gcCxcclxuLmFkZHByb2plY3QgcCB7XHJcbiAgICBjb2xvcjogI0MzOEQ5RTtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmFkZHRvZG8gcCB7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxufVxyXG5cclxuLmFkZHRvZG8gaW1nLFxyXG4uYWRkcHJvamVjdCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtcy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAsXHJcbi5uYW1lLWdydXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5IHtcclxuICAgIGhlaWdodDogNTBweDsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcblxyXG4ucHJpb3JpdHkubG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkuaGlnaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59IFxyXG5cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IFxyXG59XHJcblxyXG4vKiBjaGVja2JveCBoYW5kbGRlciAqL1xyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyYTlkOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgMCUgMjAlLCAzMCUgNTAlLCAwJSA4MCUsIDIwJSAxMDAlLCA1MCUgNzAlLCA4MCUgMTAwJSwgMTAwJSA4MCUsIDcwJSA1MCUsIDEwMCUgMjAlLCA4MCUgMCUsIDUwJSAzMCUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4vKiBlbmRvZiBjaGVja2JveCBoYW5kbGVyICovXHJcblxyXG4uZmluaXNoZWQubmFtZS1ncnVwIHAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5maW5pc2hlZC5hY3Rpb24tZ3J1cCB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbiNkdWUtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1ncnVwIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi13aWR0aDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwMUYzQTtcclxufVxyXG5cclxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi8qIEdlbmFyYWwgJiBWaWV3IE1vZGFsIFN0eWxlcyAqL1xyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyAgICBcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tb2RhbC5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM1MDFGM0E7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGV0YWlsIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5kZXRhaWw6Zmlyc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XHJcbn1cclxuXHJcbi5kZXRhaWw6bnRoLW9mLXR5cGUoMikgLmRldGFpbC10aXRsZXtcclxuICAgIG1hcmdpbi1yaWdodDogMC45NXJlbTtcclxufVxyXG5cclxuLmRldGFpbDpudGgtb2YtdHlwZSgzKSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjM1cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsOmxhc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxle1xyXG4gICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmRldGFpbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbC1idXR0b24ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDsgXHJcbiAgICByaWdodDowOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIDQwJSk7XHJcbn1cclxuXHJcbi8qIEFkZCBwcm9qZWN0IG1vZGFsICYgVG9kbyBtb2RhbCovXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogLTJyZW0gLTJyZW0gMCAtMnJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgcCB7XHJcbiAgICBjb2xvcjogI0Y3RjdGNztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsID4gLm1vZGFsLWNvbnRlbnQsXHJcbiNhZGQtbW9kYWwtdG9kbyA+IC5tb2RhbC1jb250ZW50LFxyXG4jZWRpdC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIG1heC13aWR0aDogNTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0sXHJcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBjb2xvcjogIzE0MTQxNDtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIsXHJcbiNlZGl0LW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lciAge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxyXG5mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gdWwgbGksXHJcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSBpbnB1dCxcclxuI2VkaXQtbW9kYWwtdG9kbyB1bCBsaSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uLFxyXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmE5ZDhmO1xyXG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcclxuICAgIGNvbG9yOiAjMmE5ZDhmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gYnV0dG9uOmhvdmVyLFxyXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXHJcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIsXHJcbiNlZGl0LW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIgIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAsXHJcbiNlZGl0LW1vZGFsLXRvZG8gLnByaW9yaXR5LWJ0bi1ncnVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuOHJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCBidXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiA0LjVyZW07XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtIHtcclxuICAgIGNvbG9yOiAjRkZBNTAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZBNTAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBNTAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2gge1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuLmF0dHJpYnV0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLmF0dHJpYnV0aW9uIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBcUU7SUFDckUsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUFvRTtJQUNwRSxrQkFBa0I7QUFDdEI7O0FBRUEsbUJBQW1CO0FBQ25COzs7SUFHSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FB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RUksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdib2xkLWZvbnQnO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL09wZW5TYW5zX1NlbWlDb25kZW5zZWQtQm9sZC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTkwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MDFGM0E7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Rjg2OTM7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBvZiBnZW5lcmFsIHN0eWxlcyAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICAvKiB3aWR0aDogMTI4MHB4OyAqL1xcclxcbiAgICBtaW4td2lkdGg6IDEyODBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDUpIDBweCAyNXB4IDIwcHggLTIwcHg7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xcclxcbiAgICBjb2xvcjogI0Y3RjdGNzs7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNCOUI5Qjk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm51bWJlci1vZi10YXNrcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB3aWR0aDogMS41cmVtOyBcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbiAgICBjb2xvcjogI0Y3RjdFRTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIGxpIGEge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogIzE0MTQxNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgLmFjdGl2ZSxcXHJcXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIC5hY3RpdmU6OmJlZm9yZSxcXHJcXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnLy8gJztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0I5QjlCOTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvLFxcclxcbi5hZGRwcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdG9kbyBwLFxcclxcbi5hZGRwcm9qZWN0IHAge1xcclxcbiAgICBjb2xvcjogI0MzOEQ5RTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvIHAge1xcclxcbiAgICBjb2xvcjogIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRvZG8gaW1nLFxcclxcbi5hZGRwcm9qZWN0IGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwwLDAsLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWdydXAsXFxyXFxuLm5hbWUtZ3J1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGhlaWdodDogNTBweDsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5sb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByaW9yaXR5Lm1lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJpb3JpdHkuaGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJpb3JpdHk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnOyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyBcXHJcXG59XFxyXFxuXFxyXFxuLyogY2hlY2tib3ggaGFuZGxkZXIgKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYWNjZW50LWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJhOWQ4ZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLyogZW5kb2YgY2hlY2tib3ggaGFuZGxlciAqL1xcclxcblxcclxcbi5maW5pc2hlZC5uYW1lLWdydXAgcCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC5hY3Rpb24tZ3J1cCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZS1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tZ3J1cCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgbWluLXdpZHRoOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuYXJhbCAmIFZpZXcgTW9kYWwgU3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyAgICBcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmFjdGl2ZXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCBwIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uZGV0YWlsOmZpcnN0LW9mLXR5cGUgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWw6bnRoLW9mLXR5cGUoMikgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjk1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsOm50aC1vZi10eXBlKDMpIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbDpsYXN0LW9mLXR5cGUgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1tb2RhbC1idXR0b24ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDsgXFxyXFxuICAgIHJpZ2h0OjA7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCA0MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciBwIHtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDMwcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lcixcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIgIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxyXFxuI2FkZC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG5mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBmb250LWZhbWlseTogbWFpbi1mb250O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIGlucHV0LFxcclxcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b24sXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIG1heC13aWR0aDogOHJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJhOWQ4ZjtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcXHJcXG4gICAgY29sb3I6ICMyYTlkOGY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbjpob3ZlcixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lciAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCBidXR0b24ge1xcclxcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW0ge1xcclxcbiAgICBjb2xvcjogI0ZGQTUwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZBNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5hdHRyaWJ1dGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0cmlidXRpb24gYSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0J5UHJvamVjdCB9IGZyb20gXCIuL2hhbmRsZXRvZG9zXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCl7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdEV4aXN0cyA9IHByb2plY3RzTGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBcIkRlZmF1bHRcIik7XHJcbiAgICBpZiAoIWRlZmF1bHRQcm9qZWN0RXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3VG9Eby5wcm9qZWN0O1xyXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1RvRG8ucHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdHNMaXN0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMocHJvamVjdHNMaXN0LCB0b2RvTGlzdCkge1xyXG4gICAgbGV0IHVsQ29udGVudCA9ICcnO1xyXG5cclxuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHVsQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgIDxsaSBkYXRhLXByb2plY3QtaWQ9XCIke2VsZW1lbnQuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiR7ZWxlbWVudC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLW9mLXRhc2tzXCI+JHtjb3VudFRvZG9pblByb2plY3QoZWxlbWVudC5uYW1lLCB0b2RvTGlzdCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHMgbGlcIik7XHJcblxyXG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2gobGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSBsaS5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBhbmNob3IudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0VG9kb3NCeVByb2plY3QodG9kb0xpc3QsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50VG9kb2luUHJvamVjdChlbGVtZW50LCB0b2RvTGlzdCl7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5wcm9qZWN0ID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IHtoYW5kbGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9O1xyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyVG9kb0NvbnRhaW5lciB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IG9wZW5Qcm9qZWN0TW9kYWwsIG9wZW5Ub0RvTW9kYWwsIG9wZW5WaWV3TW9kYWwsIG9wZW5FZGl0TW9kYWwgfSBmcm9tIFwiLi9tYW5pcHVsYXRlRE9NXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb2Rvcyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcHJvamVjdHNMaXN0KXtcclxuICAgICAgICBjb25zdCBjdXJlbnRFbGVtZW50ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCBjdXJlbnRFbGVtZW50KTtcclxuICAgIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0RvZHModG9kb0xpc3QpIHtcclxuICAgIGxldCB1bENvbnRlbnQgPSAnJztcclxuXHJcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHVsQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiBpZD1cIml0ZW0tJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWdydXAgJHtlbGVtZW50LnN0YXR1cyA/IFwiZmluaXNoZWRcIiA6ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSAke2VsZW1lbnQucHJpb3JpdHl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7ZWxlbWVudC5zdGF0dXMgPyBcImNoZWNrZWRcIiA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZpbmlzaGVkXCI+JHtlbGVtZW50LnRpdGxlfSA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3J1cCAke2VsZW1lbnQuc3RhdHVzID8gXCJmaW5pc2hlZFwiIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJkdWUtZGF0ZVwiPiR7ZWxlbWVudC5kdWVEYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmlldy1idG5cIiBpZD1cInZpZXctYnRuLSR7aW5kZXh9XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL3ZpZXcuc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuXCIgaWQ9XCJlZGl0LWJ0bi0ke2luZGV4fVwiPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9lZGl0LnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnRuXCIgaWQ9XCJkZWxldGUtYnRuLSR7aW5kZXh9XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdWxDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2Rvc0J5UHJvamVjdCh0b2RvTGlzdCwgY3VyZW50RWxlbWVudCl7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gdG9kb0xpc3QuZmlsdGVyKHRhc2tMaXN0ID0+IHRhc2tMaXN0LnByb2plY3QgPT09IGN1cmVudEVsZW1lbnQpO1xyXG4gICAgcmVuZGVyVG9kb0NvbnRhaW5lcihmaWx0ZXJlZEVsZW1lbnRzKVxyXG59XHJcbi8vXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnModG9kb0xpc3QsIHByb2plY3RzTGlzdCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcbiAgICAgICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBhZGRUb0RvQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRvZG8nKTtcclxuXHJcbiAgICAgICAgYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuUHJvamVjdE1vZGFsKG1vZGFsQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkVG9Eb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuVG9Eb01vZGFsKG1vZGFsQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5pdGVtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbGlzdEl0ZW0gPyBsaXN0SXRlbS5pZC5zcGxpdCgnLScpWzFdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcudmlldy1idG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5WaWV3TW9kYWwoaW5kZXgsIHRvZG9MaXN0LCBtb2RhbENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcuZWRpdC1idG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5FZGl0TW9kYWwoaW5kZXgsIHRvZG9MaXN0LCBtb2RhbENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWJ0bicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0oaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBEZWxldGUgYnV0dG9uIGNsaWNrZWQgYXQgaW5kZXggJHtpbmRleH1gKTtcclxuXHJcbi8vICAgICAvLyBMb2dpYyB0byByZW1vdmUgdGhlIHRvLWRvIGl0ZW0gZnJvbSB0aGUgbGlzdCBhbmQgcmUtcmVuZGVyIHRoZSBVSVxyXG4vLyAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuLy8gICAgIHJlbmRlclVJKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgeyBoYW5kbGVUb2RvcywgZ2V0VG9kb3NCeVByb2plY3QsIGRpc3BsYXlUb0RvZHMsIHNldHVwRXZlbnRMaXN0ZW5lcnMgIH1cclxuXHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuaW1wb3J0IHsgZGlzcGxheVRvRG9kcyB9IGZyb20gJy4vaGFuZGxldG9kb3MnOyBcclxuLy9jb3JyZWN0IHR5cG8gYWJvdmU6IHNob3VsZCBiZSBkaXNwbGF5VG9kb3NcclxuaW1wb3J0IHsgZGVmYXVsdFZhbHVlcyB9IGZyb20gJy4vc3RhcnR1cCc7XHJcbmltcG9ydCBUb2RvSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RvLWRvLWxpc3Quc3ZnXCI7XHJcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9tYW5pcHVsYXRlRE9NJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclVJKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJUb2RvSWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaGVhZGVyVG9kb0ljb24uc3JjID0gVG9kb0ljb247XHJcblxyXG4gICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxPi8vIFRvIGRvPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1pY29uLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJ0b2Rvcy1kdWVcIiBjbGFzcz1cIm1lbnUtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjxzcGFuIGNsYXNzPVwibnVtYmVyLW9mLXRhc2tzXCI+Nzwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkR1ZSBUb2RheTwvYT48c3BhbiBjbGFzcz1cIm51bWJlci1vZi10YXNrc1wiPjI8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5EdWUgVGhlc2UgV2VlazwvYT48c3BhbiBjbGFzcz1cIm51bWJlci1vZi10YXNrc1wiPjE8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwicHJvamVjdHNcIiBjbGFzcz1cIm1lbnUtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dldFByb2plY3RzKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGR0b2RvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9hZGQtcGx1cy1jaXJjbGUuc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5ldyBUbyBkbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvYWRkLXBsdXMtY2lyY2xlLnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OZXcgUHJvamVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwidG9kby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zLWxpc3RcIiBpZD1cIml0ZW0tbGlzdC1YLVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2Rpc3BsYXlUb0RvZHModG9kb0xpc3QpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJtb2RhbC1jb250YWluZXJcIj48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3QgaGVhZGVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItaWNvbi1jb250YWluZXInKTtcclxuICAgIGNvbnNvbGUubG9nKGhlYWRlckljb25Db250YWluZXIpXHJcbiAgICBoZWFkZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRvZG9JY29uKTtcclxuXHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKiogKi9cclxuICAgIC8vVE8gQkUgREVMRVRFRCAtIGFmdGVyIGhhbmRsaW5nIHRvZG8gY2hlY2sgc3RhdHVzIVxyXG4gICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtbGlzdCcpO1xyXG4gICAgdG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGVGdW5jdGlvbik7XHJcbiAgICAvLyoqKioqKioqKioqKioqKioqKioqKiogKi9cclxufVxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8vVE8gQkUgREVMRVRFRCAtIGFmdGVyIGhhbmRsaW5nIHRvZG8gY2hlY2sgc3RhdHVzIVxyXG5mdW5jdGlvbiB0aGVGdW5jdGlvbihlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxufVxyXG4vLyoqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9Db250YWluZXIoZmlsdGVyZWRFbGVtZW50cyl7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGZpbHRlcmVkRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAke2Rpc3BsYXlUb0RvZHMoZmlsdGVyZWRFbGVtZW50cyl9ICBcclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIFxyXG4gICAgYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8aDI+RW1wdHkgUHJvamVjdCE8L2gyPlxyXG4gICAgICAgICAgICA8cD4gQ3JlYXRlIGEgbmV3IHRvLWRvIGl0ZW0gb3IgZGVsZXRlIHByb2plY3QuIDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIj4gRGVsZXRlIHByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlclVJLCByZW5kZXJUb2RvQ29udGFpbmVyIH07XHJcblxyXG5cclxuIiwibGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vTWVudSBsaW5rcyBpbnRlcmFjdGlvblxyXG4gICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1saW5rcyBhXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICB9KTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwobW9kYWxDb250YWluZXIpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiYWRkLXByb2plY3QtbW9kYWxcIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBQcm9qZWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlByb2plY3QgbmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Ub0RvTW9kYWwobW9kYWxDb250YWluZXIpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiYWRkLW1vZGFsLXRvZG9cIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBUbyBEbzwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvY2xvc2UtZWxsaXBzZS13aGl0ZS1iZy5zdmdcIiBjbGFzcz1cImNsb3NlLXRvZG8tbW9kYWwtYnV0dG9uIGNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1idG4tZ3J1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG93XCI+TG93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtZWRpdW1cIj5NZWRpdW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhpZ2hcIj5IaWdoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q3JlYXRlIHByb2plY3Q8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblZpZXdNb2RhbChpbmRleCwgdG9kb0xpc3QsIG1vZGFsQ29udGFpbmVyKSB7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBpZD1cInZpZXctbW9kYWxcIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvY2xvc2UtZWxsaXBzZS5zdmdcIiBjbGFzcz1cImNsb3NlLW1vZGFsLWJ1dHRvbiBjbG9zZS1idG5cIj5cclxuICAgICAgICAgICAgPGgyPiR7dG9kb0xpc3RbaW5kZXhdLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLXRpdGxlXCI+UHJvamVjdDogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0b2RvTGlzdFtpbmRleF0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj5Qcmlvcml0eTogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0b2RvTGlzdFtpbmRleF0ucHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj5EdWUgRGF0ZTogPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHt0b2RvTGlzdFtpbmRleF0uZHVlRGF0ZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC10aXRsZVwiPkRldGFpbHM6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dG9kb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0TW9kYWwoaW5kZXgsIHRvZG9MaXN0LCBtb2RhbENvbnRhaW5lcikge1xyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vQ29ycmVjdCB0aGUgdmFsdWUgb2YgdGhlIGltcHV0IEBEdWVEYXRlLCBpdCBkb2VzIG5vdCB1c2UgdGhlIHN0b3JlZCBkdWVEYXRlXHJcbiAgICAvL0FkZCBmdW5jdGlvbmFsaXR5IHRvIHNlbGVjdCB0aGUgYWN0aXZlIEJUTlxyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBpZD1cImVkaXQtbW9kYWwtdG9kb1wiIGNsYXNzPVwibW9kYWwgYWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Q3JlYXRlIGEgbmV3IFRvIERvPC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke3RvZG9MaXN0W2luZGV4XS50aXRsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgdmFsdWU9XCIke3RvZG9MaXN0W2luZGV4XS5kZXNjcmlwdGlvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlXCI+RHVlIGRhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVkYXRlXCIgdmFsdWU9XCIke3RvZG9MaXN0W2luZGV4XS5kdWVEYXRlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktYnRuLWdydXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImxvd1wiPkxvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWVkaXVtXCI+TWVkaXVtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJoaWdoXCI+SGlnaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNvbmZpcm0gZWRpdDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGFkZENsb3NlRXZlbnRMaXN0ZW5lcnMobW9kYWxDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBtb2RhbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuJyk7XHJcbiAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtvcGVuUHJvamVjdE1vZGFsLCBvcGVuVG9Eb01vZGFsLCBvcGVuVmlld01vZGFsLCBvcGVuRWRpdE1vZGFsfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgc3RhdGljIGlkQ291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gUHJvamVjdC5jYWxjSWQoKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IDA7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgc3RhdGljIGNhbGNJZCgpIHtcclxuICAgICAgICByZXR1cm4gKytQcm9qZWN0LmlkQ291bnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY0l0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXRlbXModmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICAvLyB0aGlzLl9pdGVtcyA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHtoYW5kbGVQcm9qZWN0fSBmcm9tICcuL2hhbmRsZXByb2plY3QnO1xyXG5pbXBvcnQge2hhbmRsZVRvZG9zIH0gZnJvbSAnLi9oYW5kbGV0b2Rvcyc7XHJcbmltcG9ydCB7cmVuZGVyVUl9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgZG9tZWZmZWN0cyBmcm9tICcuL21hbmlwdWxhdGVET00nO1xyXG5pbXBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9oYW5kbGV0b2Rvcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gW107XHJcbiAgICBsZXQgbmV3VG9EbztcclxuICAgIGxldCBkZWZhdWx0UHJvamVjdDtcclxuXHJcbiAgICBjb25zdCB0b2RvcyA9IFtcclxuICAgICAgICBuZXcgVG9kbygnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwLjAzLjIwMjQnLCAnaGlnaCcsIGZhbHNlLCAnTGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnV3JpdGUgb24gYmxvZycsICdXcml0ZSBhYm91dCBsYXN0IHBhcnQgZnJvbSBUaWNUYWNUb2UgZ2FtZScsICcyMS4wMy4yMDI0JywgJ2xvdycsIGZhbHNlLCAnSG9tZScpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcxNS4wNC4yMDI0JywgJ21lZGl1bScsIHRydWUsICdMZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdSZXBhaXIgYmxvZycsICdGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyJywgJzI5LjAzLjIwMjQnLCAnaGlnaCcsIGZhbHNlLCAnTGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMTUuMDMuMjAyNCcsICdsb3cnLCB0cnVlLCAnSG9tZScpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdBcHAgaW1wbGVtZW50YXRpb24nLCAnQWRkIGFiaWxpdHkgdG8gZXh0cmFjdCB0aGUgcHJvamVjdHMgZnJvbSB0aGUgYXJyYXknLCAnMjQuMDMuMjAyNCcsICdsb3cnLCB0cnVlLCAnQWN0aXZlIGxlYXJuaW5nJyksXHJcbiAgICAgICAgbmV3IFRvZG8oJ1h5eCcsICdTb21lIHJhbmRvbSB0ZXh0JywgJzMxLjA1LjIwMjQnLCAnbG93JywgdHJ1ZSwgJ0FjdGl2ZSBsZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdBQkMnLCAnRmlyc3QgdGhyZWUgbGV0ZXJzIGZyb20gdGhlIGFsZ2hhJywgJzAyLjA2LjIwMjQnLCAnaGlnaCcsIGZhbHNlLCAnQWN0aXZlIGxlYXJuaW5nJylcclxuICAgIF07XHJcbiAgICBcclxuICAgIHRvZG9zLmZvckVhY2gobmV3VG9EbyA9PiB7XHJcbiAgICAgICAgdG9kb0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgICAgICBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcclxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnModG9kb0xpc3QsIHByb2plY3RzTGlzdCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9kb0xpc3QsXHJcbiAgICAgICAgcHJvamVjdHNMaXN0LFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRWYWx1ZXMgfTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0dXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZHVsZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=