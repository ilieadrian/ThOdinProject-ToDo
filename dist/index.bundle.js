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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'main-font';\r\n    src: url('./fonts/OpenSans_Condensed-Regular.ttf') format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'bold-font';\r\n    src: url(./fonts/OpenSans_SemiCondensed-Bold.ttf) format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n/* General styles */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    overflow: hidden; \r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    height: 100vh;\r\n    font-family: 'main-font';\r\n    background-color: #2a9d8f;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    text-align: center;\r\n\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    max-width: 25px;\r\n    height: auto;\r\n}\r\n\r\nbutton {\r\n    max-width: 190px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    background-color: #F7F7F7;\r\n    color: #501F3A;\r\n    border: 2px solid #501F3A;\r\n    padding: 0.75rem 1rem;\r\n    border-radius: 3px;\r\n}\r\n\r\nbutton:hover {\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #F7F7F7;\r\n    background-color: #9F8693;\r\n}\r\n\r\n/* End of general styles */\r\n\r\n.container {\r\n    /* width: 1280px; */\r\n    min-width: 1280px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #F7F7F7;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\r\n}\r\n.header {\r\n    background-color: #C38D9E;\r\n    color: #F7F7F7;;\r\n    padding: 0.5rem;\r\n    font-size: 2rem;\r\n    font-family: bold-font;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    letter-spacing: 0.3rem;\r\n    gap: 1rem;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.header img {\r\n    max-width: 50px;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n}\r\n\r\n.menu {\r\n    flex: 1;\r\n    background-color: #EEEEEE;\r\n    border-right: 0.5px solid #B9B9B9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    text-align: left;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.todo-container {\r\n    flex: 4;\r\n}\r\n\r\n.menu-links li {\r\n    margin-bottom: 1rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.number-of-tasks {\r\n    background-color: #C38D9E;\r\n    font-size: 0.8rem;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    font-family: bold-font;\r\n    color: #F7F7EE;\r\n    padding: 0.5rem;\r\n    margin-right: 0.5rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-links li a {\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    color: #141414;\r\n}\r\n\r\n.menu-links .active,\r\n.menu-links a:hover {\r\n    font-family: bold-font;\r\n    color: #501F3A;\r\n}\r\n\r\n.menu-links .active::before,\r\n.menu-links a:hover::before {\r\n    content: '// ';\r\n}\r\n\r\n.menu-links {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    border-bottom: 0.5px solid #B9B9B9;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n    height: 200px;\r\n}\r\n\r\n.content-container h2 {\r\n    color: #141414;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.addtodo,\r\n.addproject {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.addtodo p,\r\n.addproject p {\r\n    color: #C38D9E;\r\n    font-family: bold-font;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.addtodo p {\r\n    color: #501F3A;\r\n}\r\n\r\n.addtodo img,\r\n.addproject img {\r\n    max-width: 60px;\r\n    height: auto;\r\n    margin-right: 2rem;\r\n}\r\n\r\n.buttons-container {\r\n    margin-top: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n}\r\n\r\n.items-list {\r\n    padding: 3rem;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.6rem;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n}\r\n\r\n.item {\r\n    background-color: #EEEEEE;\r\n    padding: 0.5rem 0.5rem 0.5rem 0;\r\n    height: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.item:hover {\r\n    transform: scale(1.003);\r\n    transform-origin: 50% 50%;\r\n    box-shadow: 3px 3px 5px 2px rgba(0,0,0,.2);\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.action-grup,\r\n.name-grup {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.priority {\r\n    height: 50px; \r\n    position: relative; \r\n}\r\n\r\n.priority.low {\r\n    background-color: #2a9d8f;\r\n} \r\n\r\n.priority.medium {\r\n    background-color: #FFA500;\r\n} \r\n\r\n.priority.high {\r\n    background-color: #FF0000;\r\n} \r\n\r\n.priority::before {\r\n    content: ''; \r\n    position: absolute; \r\n    top: 0;\r\n    left: 0;\r\n    width: 4px;\r\n    height: 100%; \r\n    background-color: inherit; \r\n}\r\n\r\n/* checkbox handlder */\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n    accent-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    font-size: 2rem;\r\n    padding: 0.2rem;\r\n    border: 3px solid #2a9d8f;\r\n    border-radius: 0.3rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n\r\ninput[type=\"checkbox\"]::before {\r\n        margin: 0 auto;\r\n    content: \"\";\r\n    width: 15px;\r\n    height: 15px;\r\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\r\n    transform: scale(0);\r\n    background-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n/* endof checkbox handler */\r\n\r\n.finished.name-grup p {\r\n    text-decoration: line-through;\r\n    opacity: 0.4;\r\n}\r\n\r\n.finished.action-grup {\r\n    opacity: 0.4;\r\n}\r\n\r\n#due-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.action-grup button {\r\n    background-color: transparent;\r\n    min-width: 1px;\r\n    padding: 0.2rem;\r\n    border: 1px solid #501F3A;\r\n}\r\n\r\n.action-grup img:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* Genaral & View Modal Styles */\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    backdrop-filter: blur(8px);    \r\n    z-index: 1;\r\n}\r\n\r\n.modal.active{\r\n    display: block;\r\n}\r\n\r\n.modal-content {\r\n    color: #501F3A;\r\n    background-color: #EEEEEE;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n\r\n.modal-content h2 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.detail {\r\n    display: flex;\r\n}\r\n\r\n.detail p {\r\n    display: inline-block;\r\n}\r\n.detail:first-of-type .detail-title{\r\n    margin-right: 1.1rem;\r\n}\r\n\r\n.detail:nth-of-type(2) .detail-title{\r\n    margin-right: 0.95rem;\r\n}\r\n\r\n.detail:nth-of-type(3) .detail-title{\r\n    margin-right: 0.35rem;\r\n}\r\n\r\n.detail:last-of-type .detail-title{\r\n    \r\n    margin-right: 1.2rem;\r\n}\r\n\r\n.detail-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.close-modal-button {\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0; \r\n    right:0; \r\n    transform: translate(-20%, 20%);\r\n}\r\n\r\n/* Add project modal & Todo modal*/\r\n\r\n.modal-header {\r\n    margin: -2rem -2rem 0 -2rem;\r\n    padding: 1rem;\r\n    background-color: #C38D9E;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header p {\r\n    color: #F7F7F7;\r\n    font-size: 1.5rem;\r\n    font-family: bold-font;\r\n}\r\n\r\n#add-project-modal > .modal-content,\r\n#add-modal-todo > .modal-content,\r\n#edit-modal-todo > .modal-content {\r\n    height: 30rem;\r\n    max-width: 50rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form,\r\n#add-modal-todo form,\r\n#edit-modal-todo form {\r\n    padding: 1rem;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.input-container {\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo .input-container,\r\n#edit-modal-todo .input-container  {\r\n    align-items: flex-start;\r\n}\r\n\r\n#add-project-modal form input[type=text],\r\n#add-modal-todo form input[type=text],\r\n#edit-modal-todo form input[type=text],\r\nform input[type=date] {\r\n    font-family: main-font;\r\n    font-size: 1rem;\r\n    border: none;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    letter-spacing: 1px;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo ul li,\r\n#edit-modal-todo ul li {\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#add-modal-todo ul li input,\r\n#edit-modal-todo ul li input {\r\n    margin-top: 0.3rem;\r\n}\r\n\r\n#add-project-modal form button,\r\n#add-modal-todo form button,\r\n#edit-modal-todo form button {\r\n    font-family: bold-font;\r\n    max-width: 8rem;\r\n    border: 1px solid #2a9d8f;\r\n    padding: 0.4rem 0.2rem;\r\n    color: #2a9d8f;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form button:hover,\r\n#add-modal-todo form button:hover,\r\n#edit-modal-todo form button:hover {\r\n    color: #F7F7F7;\r\n    background-color: #2a9d8f;\r\n}\r\n\r\n#add-modal-todo .button-container,\r\n#edit-modal-todo .button-container  {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#add-modal-todo .priority-btn-grup,\r\n#edit-modal-todo .priority-btn-grup {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.priority-btn-grup button {\r\n    min-width: 4.5rem;\r\n}\r\n\r\n.priority-btn-grup #medium {\r\n    color: #FFA500;\r\n    border-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #medium:hover {\r\n    background-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #high {\r\n    color: #FF0000;\r\n    border-color: #FF0000;\r\n}\r\n\r\n.priority-btn-grup #high:hover {\r\n    background-color: #FF0000;\r\n}\r\n\r\n/* Footer */\r\n.attribution {\r\n    text-align: center;\r\n    width: 100%;\r\n    padding-bottom: 0.3rem;\r\n    font-size: 0.7rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.attribution a {\r\n    margin-left: 0.3rem;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   handleTodos: () => (/* binding */ handleTodos)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/modules/index.js");


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
                    <button id="delete-btn-${index}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
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







function renderUI(projectsList, todoList) {
    let container = document.querySelector('.container');

    if (!container) {
        container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    }

    container.innerHTML = "";

    container.innerHTML = `
        <section class="header">
            <h1>// To do</h1>
            <img src="./images/to-do-list.svg" alt="" srcset="">
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

    const todoListContainer = document.querySelector('.items-list');
    todoListContainer.addEventListener('click', theFunction);
}

function theFunction(e) {
    console.log(e.target)
}

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
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
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
        
        // Selecting elements

        const addProjectBTN = document.querySelector('.addproject');
        const addToDoBTN = document.querySelector('.addtodo');
        // const viewModal = document.getElementById('view-modal');
        // const addProjectModal = document.getElementById('add-project-modal');
        // const addToDoModal = document.getElementById('add-modal-todo');
        // const editModalTodo = document.getElementById('edit-modal-todo');
        // const closeButton = document.querySelector('.close-modal-button');
        // const projectModalCloseButton = document.querySelector('.close-project-modal-button');
        // const todoModalCloseButton = document.querySelector('.close-todo-modal-button');
        // const editModalCloseButton = document.querySelector('.close-edit-modal-button');
        // const viewButtons = document.querySelectorAll('.view-btn');
        // const editButtons = document.querySelectorAll('.edit-btn');


        addProjectBTN.addEventListener('click', openProjectModal);
        addToDoBTN.addEventListener('click', openToDoModal);


        // Function to toggle modal
        // function toggleModal(modal) {
        //     console.log("Toggling modal:", modal);
        //     modal.classList.toggle('active');
        // }

        // Function to close all modals
        function closeAllModals() {
            viewModal.classList.remove('active');
            addProjectModal.classList.remove('active');
            addToDoModal.classList.remove('active');
            editModalTodo.classList.remove('active');
        }

        // Event listeners for close buttons
        // closeButton.addEventListener('click', closeAllModals);
        // projectModalCloseButton.addEventListener('click', () => toggleModal(addProjectModal));
        // todoModalCloseButton.addEventListener('click', () => toggleModal(addToDoModal));
        // editModalCloseButton.addEventListener('click', () => toggleModal(editModalTodo));

        // Event listeners for view buttons
        viewButtons.forEach(viewButton => {
            viewButton.addEventListener('click', () => toggleModal(viewModal));
        });

        // Event listener for add project button
        // addProjectBTN.addEventListener('click', () => toggleModal(addProjectModal));

        // Event listener for add todo button
        addToDoBTN.addEventListener('click', () => toggleModal(addToDoModal));


        // Event listeners for edit buttons
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', () => {
                toggleModal(editModalTodo);
                // Additional code to populate edit form with data if needed
            });
        });
        
        });
})());


function addEventListeners(e) {
    console.log(e.target)

    // const todoListContainer = document.querySelector('.items-list')
    // console.log(todoListContainer)

    // if (todoListContainer) {
    //     todoListContainer.addEventListener('click', (event) => {
    //         const target = event.target;
    //         const listItem = target.closest('.item');
    //         const index = listItem ? listItem.id.split('-')[1] : null;

    //         if (index !== null) {
    //             if (target.classList.contains('checkbox')) {
    //                 console.log("handleCheckboxChange(index, target.checked)")
    //                 // handleCheckboxChange(index, target.checked);
    //             } else if (target.closest('.view-btn')) {
    //                 console.log("handleViewButtonClick(index)")
    //                 // handleViewButtonClick(index);
    //             } else if (target.closest('.edit-btn')) {
    //                 console.log("handleEditButtonClick(index)")
    //                 // handleEditButtonClick(index);
    //             } else if (target.closest('.delete-btn')) {
    //                 console.log("handleDeleteButtonClick(index)")
    //                 // handleDeleteButtonClick(index);
    //             }
    //         }
    //     });
    // }

    
    // todoList.forEach((element, index) => 
    //     {  
    //     const theElement = document.getElementById(`view-btn-${index}`);
    //     console.log(theElement)

    //     // document.getElementById(`view-btn-${index}`).addEventListener('click', () => {
    //     //     handleViewButtonClick(index);
    //     // });
    // });
    // // console.log(todoList)
}

function handleViewButtonClick(index) {
    console.log(`View button clicked at index ${index}`);
    // Add your logic here to handle view button click
}



function openProjectModal() {
    let modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";

    modalContainer.innerHTML = `
    <div id="add-project-modal" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new Project</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-project-modal-button">
            </div>
            <form>
                <div class="input-container">
                    <label for="name">Project name: </label>
                    <input type="text" id="name">
                </div>
                <button>Create project</button>
            </form>
            
        </div>
    </div>`
}


function openToDoModal() {
    let modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";

    modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-todo-modal-button">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksUUFBUSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFL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QTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVwcm9qZWN0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxldG9kb3MuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21hbmlwdWxhdGVET00uanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RhcnR1cC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcGVuU2Fuc19TZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ21haW4tZm9udCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkLWZvbnQnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbi1mb250JztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogMTkwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGNvbG9yOiAjNTAxRjNBO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzUwMUYzQTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlGODY5MztcclxufVxyXG5cclxuLyogRW5kIG9mIGdlbmVyYWwgc3R5bGVzICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIC8qIHdpZHRoOiAxMjgwcHg7ICovXHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBjb2xvcjogI0Y3RjdGNzs7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmhlYWRlciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgZmxleDogNDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubnVtYmVyLW9mLXRhc2tzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07IFxyXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGNvbG9yOiAjRjdGN0VFO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4ubWVudS1saW5rcyAuYWN0aXZlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgLmFjdGl2ZTo6YmVmb3JlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJy8vICc7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmFkZHRvZG8sXHJcbi5hZGRwcm9qZWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkdG9kbyBwLFxyXG4uYWRkcHJvamVjdCBwIHtcclxuICAgIGNvbG9yOiAjQzM4RDlFO1xyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYWRkdG9kbyBwIHtcclxuICAgIGNvbG9yOiAjNTAxRjNBO1xyXG59XHJcblxyXG4uYWRkdG9kbyBpbWcsXHJcbi5hZGRwcm9qZWN0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW1zLWxpc3Qge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjZyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDMpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2JhKDAsMCwwLC4yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5hY3Rpb24tZ3J1cCxcclxuLm5hbWUtZ3J1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gICAgaGVpZ2h0OiA1MHB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbi5wcmlvcml0eS5sb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufSBcclxuXHJcbi5wcmlvcml0eS5tZWRpdW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTUwMDtcclxufSBcclxuXHJcbi5wcmlvcml0eS5oaWdoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHk6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJzsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgXHJcbn1cclxuXHJcbi8qIGNoZWNrYm94IGhhbmRsZGVyICovXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGFjY2VudC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJhOWQ4ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi8qIGVuZG9mIGNoZWNrYm94IGhhbmRsZXIgKi9cclxuXHJcbi5maW5pc2hlZC5uYW1lLWdydXAgcCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLmZpbmlzaGVkLmFjdGlvbi1ncnVwIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuI2R1ZS1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWluLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTAxRjNBO1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLyogR2VuYXJhbCAmIFZpZXcgTW9kYWwgU3R5bGVzICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7ICAgIFxyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1vZGFsLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZGV0YWlsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kZXRhaWwgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmRldGFpbDpmaXJzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxufVxyXG5cclxuLmRldGFpbDpudGgtb2YtdHlwZSgyKSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjk1cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsOm50aC1vZi10eXBlKDMpIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XHJcbn1cclxuXHJcbi5kZXRhaWw6bGFzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG59XHJcblxyXG4uZGV0YWlsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwtYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7IFxyXG4gICAgcmlnaHQ6MDsgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlLCAyMCUpO1xyXG59XHJcblxyXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzOEQ5RTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHAge1xyXG4gICAgY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCA+IC5tb2RhbC1jb250ZW50LFxyXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCxcclxuI2VkaXQtbW9kYWwtdG9kbyA+IC5tb2RhbC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0sXHJcbiNhZGQtbW9kYWwtdG9kbyBmb3JtLFxyXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgY29sb3I6ICMxNDE0MTQ7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyLFxyXG4jZWRpdC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIgIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxyXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxyXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcclxuZm9ybSBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICAgIGZvbnQtZmFtaWx5OiBtYWluLWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjb2xvcjogIzE0MTQxNDtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIHVsIGxpLFxyXG4jZWRpdC1tb2RhbC10b2RvIHVsIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQsXHJcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBidXR0b24sXHJcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbixcclxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG4gICAgbWF4LXdpZHRoOiA4cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJhOWQ4ZjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjJyZW07XHJcbiAgICBjb2xvcjogIzJhOWQ4ZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbjpob3ZlcixcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uOmhvdmVyLFxyXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIC5idXR0b24tY29udGFpbmVyLFxyXG4jZWRpdC1tb2RhbC10b2RvIC5idXR0b24tY29udGFpbmVyICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gLnByaW9yaXR5LWJ0bi1ncnVwLFxyXG4jZWRpdC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjhyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYnRuLWdydXAgYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogNC41cmVtO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bSB7XHJcbiAgICBjb2xvcjogI0ZGQTUwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGQTUwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTUwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoIHtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG5cclxuLyogRm9vdGVyICovXHJcbi5hdHRyaWJ1dGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5hdHRyaWJ1dGlvbiBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQXFFO0lBQ3JFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBb0U7SUFDcEUsa0JBQWtCO0FBQ3RCOztBQUVBLG1CQUFtQjtBQUNuQjs7O0lBR0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUEsMEJBQTBCOztBQUUxQjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qixh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IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZC1mb250JztcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9PcGVuU2Fuc19TZW1pQ29uZGVuc2VkLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbi1mb250JztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGNvbG9yOiAjNTAxRjNBO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTAxRjNBO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUY4NjkzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgZ2VuZXJhbCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgLyogd2lkdGg6IDEyODBweDsgKi9cXHJcXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQ1KSAwcHggMjVweCAyMHB4IC0yMHB4O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzOEQ5RTtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjQjlCOUI5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIGxpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5udW1iZXItb2YtdGFza3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzM4RDlFO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDEuNXJlbTsgXFxyXFxuICAgIGhlaWdodDogMS41cmVtOyBcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgY29sb3I6ICNGN0Y3RUU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyBsaSBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIC5hY3RpdmUsXFxyXFxuLm1lbnUtbGlua3MgYTpob3ZlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIGNvbG9yOiAjNTAxRjNBO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyAuYWN0aXZlOjpiZWZvcmUsXFxyXFxuLm1lbnUtbGlua3MgYTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJy8vICc7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNCOUI5Qjk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjQzM4RDlFICNFRUVFRUU7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdG9kbyxcXHJcXG4uYWRkcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRvZG8gcCxcXHJcXG4uYWRkcHJvamVjdCBwIHtcXHJcXG4gICAgY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdG9kbyBwIHtcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvIGltZyxcXHJcXG4uYWRkcHJvamVjdCBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNnJlbTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMyk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2JhKDAsMCwwLC4yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1ncnVwLFxcclxcbi5uYW1lLWdydXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7IFxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkubG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG59IFxcclxcblxcclxcbi5wcmlvcml0eS5tZWRpdW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBNTAwO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByaW9yaXR5LmhpZ2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByaW9yaXR5OjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJzsgXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgXFxyXFxufVxcclxcblxcclxcbi8qIGNoZWNrYm94IGhhbmRsZGVyICovXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGFjY2VudC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyYTlkOGY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgMCUgMjAlLCAzMCUgNTAlLCAwJSA4MCUsIDIwJSAxMDAlLCA1MCUgNzAlLCA4MCUgMTAwJSwgMTAwJSA4MCUsIDcwJSA1MCUsIDEwMCUgMjAlLCA4MCUgMCUsIDUwJSAzMCUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcbi8qIGVuZG9mIGNoZWNrYm94IGhhbmRsZXIgKi9cXHJcXG5cXHJcXG4uZmluaXNoZWQubmFtZS1ncnVwIHAge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoZWQuYWN0aW9uLWdydXAge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbiNkdWUtZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWdydXAgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG1pbi13aWR0aDogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MDFGM0E7XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tZ3J1cCBpbWc6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmFyYWwgJiBWaWV3IE1vZGFsIFN0eWxlcyAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTsgICAgXFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5hY3RpdmV7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGNvbG9yOiAjNTAxRjNBO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggMTBweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwgcCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLmRldGFpbDpmaXJzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsOm50aC1vZi10eXBlKDIpIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC45NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbDpudGgtb2YtdHlwZSgzKSAuZGV0YWlsLXRpdGxle1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWw6bGFzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWwtYnV0dG9uIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDsgXFxyXFxuICAgIHJpZ2h0OjA7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlLCAyMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciBwIHtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDMwcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lcixcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIgIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxyXFxuI2FkZC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG5mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBmb250LWZhbWlseTogbWFpbi1mb250O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIGlucHV0LFxcclxcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b24sXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIG1heC13aWR0aDogOHJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJhOWQ4ZjtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcXHJcXG4gICAgY29sb3I6ICMyYTlkOGY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbjpob3ZlcixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lciAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCBidXR0b24ge1xcclxcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW0ge1xcclxcbiAgICBjb2xvcjogI0ZGQTUwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZBNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5hdHRyaWJ1dGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0cmlidXRpb24gYSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0J5UHJvamVjdCB9IGZyb20gXCIuL2hhbmRsZXRvZG9zXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCl7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdEV4aXN0cyA9IHByb2plY3RzTGlzdC5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBcIkRlZmF1bHRcIik7XHJcbiAgICBpZiAoIWRlZmF1bHRQcm9qZWN0RXhpc3RzKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3VG9Eby5wcm9qZWN0O1xyXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1RvRG8ucHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdHNMaXN0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMocHJvamVjdHNMaXN0LCB0b2RvTGlzdCkge1xyXG4gICAgbGV0IHVsQ29udGVudCA9ICcnO1xyXG5cclxuICAgIHByb2plY3RzTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHVsQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgIDxsaSBkYXRhLXByb2plY3QtaWQ9XCIke2VsZW1lbnQuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiR7ZWxlbWVudC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLW9mLXRhc2tzXCI+JHtjb3VudFRvZG9pblByb2plY3QoZWxlbWVudC5uYW1lLCB0b2RvTGlzdCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdHMgbGlcIik7XHJcblxyXG4gICAgICAgIHByb2plY3RMaXN0LmZvckVhY2gobGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSBsaS5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBsaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBhbmNob3IudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0VG9kb3NCeVByb2plY3QodG9kb0xpc3QsIHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50VG9kb2luUHJvamVjdChlbGVtZW50LCB0b2RvTGlzdCl7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0b2RvTGlzdFtpXS5wcm9qZWN0ID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IHtoYW5kbGVQcm9qZWN0LCBnZXRQcm9qZWN0cyB9O1xyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyVG9kb0NvbnRhaW5lciB9IGZyb20gXCIuXCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb2Rvcyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcHJvamVjdHNMaXN0KXtcclxuICAgICAgICBjb25zdCBjdXJlbnRFbGVtZW50ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCBjdXJlbnRFbGVtZW50KTtcclxuICAgICAgICBcclxuICAgIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0RvZHModG9kb0xpc3QpIHtcclxuICAgIGxldCB1bENvbnRlbnQgPSAnJztcclxuXHJcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHVsQ29udGVudCArPSBgXHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiBpZD1cIml0ZW0tJHtpbmRleH1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWdydXAgJHtlbGVtZW50LnN0YXR1cyA/IFwiZmluaXNoZWRcIiA6ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5ICR7ZWxlbWVudC5wcmlvcml0eX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtlbGVtZW50LnN0YXR1cyA/IFwiY2hlY2tlZFwiIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZmluaXNoZWRcIj4ke2VsZW1lbnQudGl0bGV9IDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncnVwICR7ZWxlbWVudC5zdGF0dXMgPyBcImZpbmlzaGVkXCIgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImR1ZS1kYXRlXCI+JHtlbGVtZW50LmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2aWV3LWJ0blwiIGlkPVwidmlldy1idG4tJHtpbmRleH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvdmlldy5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG5cIiBpZD1cImVkaXQtYnRuLSR7aW5kZXh9XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2VkaXQuc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS1idG4tJHtpbmRleH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgYDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCBjdXJlbnRFbGVtZW50KXtcclxuICAgIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSB0b2RvTGlzdC5maWx0ZXIodGFza0xpc3QgPT4gdGFza0xpc3QucHJvamVjdCA9PT0gY3VyZW50RWxlbWVudCk7XHJcbiAgICByZW5kZXJUb2RvQ29udGFpbmVyKGZpbHRlcmVkRWxlbWVudHMpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGhhbmRsZVRvZG9zLCBnZXRUb2Rvc0J5UHJvamVjdCwgZGlzcGxheVRvRG9kcyB9XHJcblxyXG4iLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuaW1wb3J0IHsgZGlzcGxheVRvRG9kcyB9IGZyb20gJy4vaGFuZGxldG9kb3MnO1xyXG5pbXBvcnQgeyBkZWZhdWx0VmFsdWVzIH0gZnJvbSAnLi9zdGFydHVwJztcclxuaW1wb3J0IFRvZG9JY29uIGZyb20gXCIuLi9pbWFnZXMvdG8tZG8tbGlzdC5zdmdcIlxyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVycyB9IGZyb20gJy4vbWFuaXB1bGF0ZURPTSc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT4vLyBUbyBkbzwvaDE+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvdG8tZG8tbGlzdC5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwidG9kb3MtZHVlXCIgY2xhc3M9XCJtZW51LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48c3BhbiBjbGFzcz1cIm51bWJlci1vZi10YXNrc1wiPjc8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5EdWUgVG9kYXk8L2E+PHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4yPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RHVlIFRoZXNlIFdlZWs8L2E+PHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4xPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGgyPlByb2plY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInByb2plY3RzXCIgY2xhc3M9XCJtZW51LWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnZXRQcm9qZWN0cyhwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkdG9kb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvYWRkLXBsdXMtY2lyY2xlLnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OZXcgVG8gZG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHByb2plY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2FkZC1wbHVzLWNpcmNsZS5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmV3IFByb2plY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRvZG8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtcy1saXN0XCIgaWQ9XCJpdGVtLWxpc3QtWC1YXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtkaXNwbGF5VG9Eb2RzKHRvZG9MaXN0KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwibW9kYWwtY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWxpc3QnKTtcclxuICAgIHRvZG9MaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhlRnVuY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aGVGdW5jdGlvbihlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9kb0NvbnRhaW5lcihmaWx0ZXJlZEVsZW1lbnRzKXtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAoZmlsdGVyZWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8dWwgY2xhc3M9XCJpdGVtcy1saXN0XCI+XHJcbiAgICAgICAgICAgICR7ZGlzcGxheVRvRG9kcyhmaWx0ZXJlZEVsZW1lbnRzKX0gIFxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgXHJcbiAgICBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxoMj5FbXB0eSBQcm9qZWN0ITwvaDI+XHJcbiAgICAgICAgICAgIDxwPiBDcmVhdGUgYSBuZXcgdG8tZG8gaXRlbSBvciBkZWxldGUgcHJvamVjdC4gPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiPiBEZWxldGUgcHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIGA7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyVUksIHJlbmRlclRvZG9Db250YWluZXIgfTtcclxuXHJcblxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vTWVudSBsaW5rcyBpbnRlcmFjdGlvblxyXG4gICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1saW5rcyBhXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlbGVjdGluZyBlbGVtZW50c1xyXG5cclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3QnKTtcclxuICAgICAgICBjb25zdCBhZGRUb0RvQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHRvZG8nKTtcclxuICAgICAgICAvLyBjb25zdCB2aWV3TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlldy1tb2RhbCcpO1xyXG4gICAgICAgIC8vIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1tb2RhbCcpO1xyXG4gICAgICAgIC8vIGNvbnN0IGFkZFRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtbW9kYWwtdG9kbycpO1xyXG4gICAgICAgIC8vIGNvbnN0IGVkaXRNb2RhbFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1tb2RhbC10b2RvJyk7XHJcbiAgICAgICAgLy8gY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwtYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdE1vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24nKTtcclxuICAgICAgICAvLyBjb25zdCB0b2RvTW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10b2RvLW1vZGFsLWJ1dHRvbicpO1xyXG4gICAgICAgIC8vIGNvbnN0IGVkaXRNb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVkaXQtbW9kYWwtYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gY29uc3Qgdmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy1idG4nKTtcclxuICAgICAgICAvLyBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWJ0bicpO1xyXG5cclxuXHJcbiAgICAgICAgYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0TW9kYWwpO1xyXG4gICAgICAgIGFkZFRvRG9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVG9Eb01vZGFsKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSBtb2RhbFxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKG1vZGFsKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVG9nZ2xpbmcgbW9kYWw6XCIsIG1vZGFsKTtcclxuICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBjbG9zZSBhbGwgbW9kYWxzXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VBbGxNb2RhbHMoKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBhZGRUb0RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVkaXRNb2RhbFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGNsb3NlIGJ1dHRvbnNcclxuICAgICAgICAvLyBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsTW9kYWxzKTtcclxuICAgICAgICAvLyBwcm9qZWN0TW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFByb2plY3RNb2RhbCkpO1xyXG4gICAgICAgIC8vIHRvZG9Nb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTW9kYWwoYWRkVG9Eb01vZGFsKSk7XHJcbiAgICAgICAgLy8gZWRpdE1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVNb2RhbChlZGl0TW9kYWxUb2RvKSk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdmlldyBidXR0b25zXHJcbiAgICAgICAgdmlld0J1dHRvbnMuZm9yRWFjaCh2aWV3QnV0dG9uID0+IHtcclxuICAgICAgICAgICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKHZpZXdNb2RhbCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgLy8gYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFByb2plY3RNb2RhbCkpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkIHRvZG8gYnV0dG9uXHJcbiAgICAgICAgYWRkVG9Eb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFRvRG9Nb2RhbCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBlZGl0IGJ1dHRvbnNcclxuICAgICAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKGVkaXRCdXR0b24gPT4ge1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwoZWRpdE1vZGFsVG9kbyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIGNvZGUgdG8gcG9wdWxhdGUgZWRpdCBmb3JtIHdpdGggZGF0YSBpZiBuZWVkZWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoZSkge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcblxyXG4gICAgLy8gY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtbGlzdCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvTGlzdENvbnRhaW5lcilcclxuXHJcbiAgICAvLyBpZiAodG9kb0xpc3RDb250YWluZXIpIHtcclxuICAgIC8vICAgICB0b2RvTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5pdGVtJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGluZGV4ID0gbGlzdEl0ZW0gPyBsaXN0SXRlbS5pZC5zcGxpdCgnLScpWzFdIDogbnVsbDtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94JykpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUNoZWNrYm94Q2hhbmdlKGluZGV4LCB0YXJnZXQuY2hlY2tlZClcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBoYW5kbGVDaGVja2JveENoYW5nZShpbmRleCwgdGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLnZpZXctYnRuJykpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVZpZXdCdXR0b25DbGljayhpbmRleClcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBoYW5kbGVWaWV3QnV0dG9uQ2xpY2soaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmVkaXQtYnRuJykpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUVkaXRCdXR0b25DbGljayhpbmRleClcIilcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBoYW5kbGVFZGl0QnV0dG9uQ2xpY2soaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1idG4nKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soaW5kZXgpXCIpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgXHJcbiAgICAvLyB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4gXHJcbiAgICAvLyAgICAgeyAgXHJcbiAgICAvLyAgICAgY29uc3QgdGhlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3LWJ0bi0ke2luZGV4fWApO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoZUVsZW1lbnQpXHJcblxyXG4gICAgLy8gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWV3LWJ0bi0ke2luZGV4fWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICBoYW5kbGVWaWV3QnV0dG9uQ2xpY2soaW5kZXgpO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyh0b2RvTGlzdClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVmlld0J1dHRvbkNsaWNrKGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhgVmlldyBidXR0b24gY2xpY2tlZCBhdCBpbmRleCAke2luZGV4fWApO1xyXG4gICAgLy8gQWRkIHlvdXIgbG9naWMgaGVyZSB0byBoYW5kbGUgdmlldyBidXR0b24gY2xpY2tcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKCkge1xyXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiYWRkLXByb2plY3QtbW9kYWxcIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBQcm9qZWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b25cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+UHJvamVjdCBuYW1lOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkNyZWF0ZSBwcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuVG9Eb01vZGFsKCkge1xyXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiYWRkLW1vZGFsLXRvZG9cIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBUbyBEbzwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvY2xvc2UtZWxsaXBzZS13aGl0ZS1iZy5zdmdcIiBjbGFzcz1cImNsb3NlLXRvZG8tbW9kYWwtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZWRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWJ0bi1ncnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsb3dcIj5Mb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1lZGl1bVwiPk1lZGl1bTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiaGlnaFwiPkhpZ2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuZXhwb3J0IHthZGRFdmVudExpc3RlbmVyc30iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIHN0YXRpYyBpZENvdW50ZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IFByb2plY3QuY2FsY0lkKCk7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSAwO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHN0YXRpYyBjYWxjSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICsrUHJvamVjdC5pZENvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBuYW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNJdGVtKCkge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGl0ZW1zKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgLy8gdGhpcy5faXRlbXMgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcbmltcG9ydCB7aGFuZGxlUHJvamVjdH0gZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuaW1wb3J0IHtoYW5kbGVUb2RvcyB9IGZyb20gJy4vaGFuZGxldG9kb3MnO1xyXG5pbXBvcnQge3JlbmRlclVJfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IGRvbWVmZmVjdHMgZnJvbSAnLi9tYW5pcHVsYXRlRE9NJztcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcclxuICAgIGxldCBuZXdUb0RvO1xyXG4gICAgbGV0IGRlZmF1bHRQcm9qZWN0O1xyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gW1xyXG4gICAgICAgIG5ldyBUb2RvKCdSZWFkIGRhaWx5IGEgcGF0dGVybicsICdodHRwczovL3d3dy5wYXR0ZXJucy5kZXYvdmFuaWxsYS9pbXBvcnQtb24taW50ZXJhY3Rpb24nLCAnMjAuMDMuMjAyNCcsICdoaWdoJywgZmFsc2UsICdMZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdXcml0ZSBvbiBibG9nJywgJ1dyaXRlIGFib3V0IGxhc3QgcGFydCBmcm9tIFRpY1RhY1RvZSBnYW1lJywgJzIxLjAzLjIwMjQnLCAnbG93JywgZmFsc2UsICdIb21lJyksXHJcbiAgICAgICAgbmV3IFRvZG8oJ05ldyBPZGluIENoYXB0ZXInLCAnU3RhcnQgYSBuZXcgT2RpblByb2plY3RDaGFwdGVyJywgJzE1LjA0LjIwMjQnLCAnbWVkaXVtJywgdHJ1ZSwgJ0xlYXJuaW5nJyksXHJcbiAgICAgICAgbmV3IFRvZG8oJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjkuMDMuMjAyNCcsICdoaWdoJywgZmFsc2UsICdMZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdUaGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnRmluaXNoIHRoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICcxNS4wMy4yMDI0JywgJ2xvdycsIHRydWUsICdIb21lJyksXHJcbiAgICAgICAgbmV3IFRvZG8oJ0FwcCBpbXBsZW1lbnRhdGlvbicsICdBZGQgYWJpbGl0eSB0byBleHRyYWN0IHRoZSBwcm9qZWN0cyBmcm9tIHRoZSBhcnJheScsICcyNC4wMy4yMDI0JywgJ2xvdycsIHRydWUsICdBY3RpdmUgbGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnWHl4JywgJ1NvbWUgcmFuZG9tIHRleHQnLCAnMzEuMDUuMjAyNCcsICdsb3cnLCB0cnVlLCAnQWN0aXZlIGxlYXJuaW5nJyksXHJcbiAgICAgICAgbmV3IFRvZG8oJ0FCQycsICdGaXJzdCB0aHJlZSBsZXRlcnMgZnJvbSB0aGUgYWxnaGEnLCAnMDIuMDYuMjAyNCcsICdoaWdoJywgZmFsc2UsICdBY3RpdmUgbGVhcm5pbmcnKVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgdG9kb3MuZm9yRWFjaChuZXdUb0RvID0+IHtcclxuICAgICAgICB0b2RvTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG4gICAgICAgIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlclVJKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvZG9MaXN0LFxyXG4gICAgICAgIHByb2plY3RzTGlzdCxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0VmFsdWVzIH07XHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0OyBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGR1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXR1cyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbW9kdWxlcy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==