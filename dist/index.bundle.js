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
    width: 1280px;
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
    margin: 1rem;
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

h2 a {
    text-decoration: none;
    color: #141414;
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

/* General & View Modal Styles */
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'main-font';\r\n    src: url('./fonts/OpenSans_Condensed-Regular.ttf') format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'bold-font';\r\n    src: url(./fonts/OpenSans_SemiCondensed-Bold.ttf) format('truetype');\r\n    font-style: normal;\r\n}\r\n\r\n/* General styles */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    overflow: hidden; \r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    height: 100vh;\r\n    font-family: 'main-font';\r\n    background-color: #2a9d8f;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    text-align: center;\r\n\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    max-width: 25px;\r\n    height: auto;\r\n}\r\n\r\nbutton {\r\n    max-width: 190px;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    background-color: #F7F7F7;\r\n    color: #501F3A;\r\n    border: 2px solid #501F3A;\r\n    padding: 0.75rem 1rem;\r\n    border-radius: 3px;\r\n}\r\n\r\nbutton:hover {\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #F7F7F7;\r\n    background-color: #9F8693;\r\n}\r\n\r\n/* End of general styles */\r\n\r\n.container {\r\n    width: 1280px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #F7F7F7;\r\n    margin: 1rem;\r\n    border-radius: 5px;\r\n    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\r\n}\r\n.header {\r\n    background-color: #C38D9E;\r\n    color: #F7F7F7;;\r\n    padding: 0.5rem;\r\n    font-size: 2rem;\r\n    font-family: bold-font;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    letter-spacing: 0.3rem;\r\n    gap: 1rem;\r\n    border-top-right-radius: 5px;\r\n    border-top-left-radius: 5px;\r\n}\r\n\r\n.header img {\r\n    max-width: 50px;\r\n}\r\n\r\n.content-container {\r\n    display: flex;\r\n}\r\n\r\n.menu {\r\n    flex: 1;\r\n    background-color: #EEEEEE;\r\n    border-right: 0.5px solid #B9B9B9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    text-align: left;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.todo-container {\r\n    flex: 4;\r\n}\r\n\r\n.menu-links li {\r\n    margin-bottom: 1rem;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.number-of-tasks {\r\n    background-color: #C38D9E;\r\n    font-size: 0.8rem;\r\n    width: 1.5rem; \r\n    height: 1.5rem; \r\n    font-family: bold-font;\r\n    color: #F7F7EE;\r\n    padding: 0.5rem;\r\n    margin-right: 0.5rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-links li a {\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    color: #141414;\r\n}\r\n\r\n.menu-links .active,\r\n.menu-links a:hover {\r\n    font-family: bold-font;\r\n    color: #501F3A;\r\n}\r\n\r\n.menu-links .active::before,\r\n.menu-links a:hover::before {\r\n    content: '// ';\r\n}\r\n\r\n.menu-links {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    border-bottom: 0.5px solid #B9B9B9;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n    height: 200px;\r\n}\r\n\r\n.content-container h2 {\r\n    color: #141414;\r\n    margin-bottom: 1rem;\r\n\r\n}\r\n\r\nh2 a {\r\n    text-decoration: none;\r\n    color: #141414;\r\n}\r\n\r\n.addtodo,\r\n.addproject {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n.addtodo p,\r\n.addproject p {\r\n    color: #C38D9E;\r\n    font-family: bold-font;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.addtodo p {\r\n    color: #501F3A;\r\n}\r\n\r\n.addtodo img,\r\n.addproject img {\r\n    max-width: 60px;\r\n    height: auto;\r\n    margin-right: 2rem;\r\n}\r\n\r\n.buttons-container {\r\n    margin-top: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n}\r\n\r\n.items-list {\r\n    padding: 3rem;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.6rem;\r\n    overflow-y: auto; \r\n    position: relative;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #C38D9E #EEEEEE;\r\n}\r\n\r\n.item {\r\n    background-color: #EEEEEE;\r\n    padding: 0.5rem 0.5rem 0.5rem 0;\r\n    height: 50px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.item:hover {\r\n    transform: scale(1.003);\r\n    transform-origin: 50% 50%;\r\n    box-shadow: 3px 3px 5px 2px rgba(0,0,0,.2);\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n.action-grup,\r\n.name-grup {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.priority {\r\n    height: 50px; \r\n    position: relative; \r\n}\r\n\r\n.priority.low {\r\n    background-color: #2a9d8f;\r\n} \r\n\r\n.priority.medium {\r\n    background-color: #FFA500;\r\n} \r\n\r\n.priority.high {\r\n    background-color: #FF0000;\r\n} \r\n\r\n.priority::before {\r\n    content: ''; \r\n    position: absolute; \r\n    top: 0;\r\n    left: 0;\r\n    width: 4px;\r\n    height: 100%; \r\n    background-color: inherit; \r\n}\r\n\r\n/* checkbox handlder */\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n    accent-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    font-size: 2rem;\r\n    padding: 0.2rem;\r\n    border: 3px solid #2a9d8f;\r\n    border-radius: 0.3rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n        margin: 0 auto;\r\n    content: \"\";\r\n    width: 15px;\r\n    height: 15px;\r\n    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);\r\n    transform: scale(0);\r\n    background-color: #2a9d8f;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n/* endof checkbox handler */\r\n\r\n.finished.name-grup p {\r\n    text-decoration: line-through;\r\n    opacity: 0.4;\r\n}\r\n\r\n.finished.action-grup {\r\n    opacity: 0.4;\r\n}\r\n\r\n#due-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.action-grup button {\r\n    background-color: transparent;\r\n    min-width: 1px;\r\n    padding: 0.2rem;\r\n    border: 1px solid #501F3A;\r\n}\r\n\r\n.action-grup img:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* General & View Modal Styles */\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    backdrop-filter: blur(8px);    \r\n    z-index: 1;\r\n}\r\n\r\n.modal.active{\r\n    display: block;\r\n}\r\n\r\n.modal-content {\r\n    color: #501F3A;\r\n    background-color: #EEEEEE;\r\n    padding: 2rem;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 3px 3px 20px 10px rgba(0,0,0,0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n}\r\n\r\n.modal-content h2 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.detail {\r\n    display: flex;\r\n}\r\n\r\n.detail p {\r\n    display: inline-block;\r\n}\r\n.detail:first-of-type .detail-title{\r\n    margin-right: 1.1rem;\r\n}\r\n\r\n.detail:nth-of-type(2) .detail-title{\r\n    margin-right: 0.95rem;\r\n}\r\n\r\n.detail:nth-of-type(3) .detail-title{\r\n    margin-right: 0.35rem;\r\n}\r\n\r\n.detail:last-of-type .detail-title{\r\n    \r\n    margin-right: 1.2rem;\r\n}\r\n\r\n.detail-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.close-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.close-modal-button {\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 0; \r\n    right:0; \r\n    transform: translate(-40%, 40%);\r\n}\r\n\r\n/* Add project modal & Todo modal*/\r\n\r\n.modal-header {\r\n    margin: -2rem -2rem 0 -2rem;\r\n    padding: 1rem;\r\n    background-color: #C38D9E;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.modal-header p {\r\n    color: #F7F7F7;\r\n    font-size: 1.5rem;\r\n    font-family: bold-font;\r\n}\r\n\r\n#add-project-modal > .modal-content,\r\n#add-modal-todo > .modal-content,\r\n#edit-modal-todo > .modal-content {\r\n    height: 30rem;\r\n    max-width: 50rem;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form,\r\n#add-modal-todo form,\r\n#edit-modal-todo form {\r\n    padding: 1rem;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.input-container {\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo .input-container,\r\n#edit-modal-todo .input-container  {\r\n    align-items: flex-start;\r\n}\r\n\r\n#add-project-modal form input[type=text],\r\n#add-modal-todo form input[type=text],\r\n#edit-modal-todo form input[type=text],\r\nform input[type=date] {\r\n    font-family: main-font;\r\n    font-size: 1rem;\r\n    border: none;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    letter-spacing: 1px;\r\n    color: #141414;\r\n}\r\n\r\n#add-modal-todo ul li,\r\n#edit-modal-todo ul li {\r\n    width: 100%;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#add-modal-todo ul li input,\r\n#edit-modal-todo ul li input {\r\n    margin-top: 0.3rem;\r\n}\r\n\r\n#add-project-modal form button,\r\n#add-modal-todo form button,\r\n#edit-modal-todo form button {\r\n    font-family: bold-font;\r\n    max-width: 8rem;\r\n    border: 1px solid #2a9d8f;\r\n    padding: 0.4rem 0.2rem;\r\n    color: #2a9d8f;\r\n    background-color: #F7F7F7;\r\n}\r\n\r\n#add-project-modal form button:hover,\r\n#add-modal-todo form button:hover,\r\n#edit-modal-todo form button:hover {\r\n    color: #F7F7F7;\r\n    background-color: #2a9d8f;\r\n}\r\n\r\n#add-modal-todo .button-container,\r\n#edit-modal-todo .button-container  {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#add-modal-todo .priority-btn-grup,\r\n#edit-modal-todo .priority-btn-grup {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.priority-btn-grup button {\r\n    min-width: 4.5rem;\r\n}\r\n\r\n.priority-btn-grup #medium {\r\n    color: #FFA500;\r\n    border-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #medium:hover {\r\n    background-color: #FFA500;\r\n}\r\n\r\n.priority-btn-grup #high {\r\n    color: #FF0000;\r\n    border-color: #FF0000;\r\n}\r\n\r\n.priority-btn-grup #high:hover {\r\n    background-color: #FF0000;\r\n}\r\n\r\n/* Footer */\r\n.attribution {\r\n    text-align: center;\r\n    width: 100%;\r\n    padding-bottom: 0.3rem;\r\n    font-size: 0.7rem;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.attribution a {\r\n    margin-left: 0.3rem;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   handleProject: () => (/* binding */ handleProject),
/* harmony export */   handleProjectCountNumber: () => (/* binding */ handleProjectCountNumber)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");
/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manipulateDOM */ "./src/modules/manipulateDOM.js");





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

    return ulContent;
}

function countTodoinProject(element, todoList){
    let count = 0;
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === element && !todoList[i].status) {
            count++;
        }
    } 
    return count;
}

function handleProjectCountNumber() {
    const numberBouble = document.querySelectorAll(".number-of-tasks");

        if (numberBouble.length === 0) {
            console.log("handleProjectCountNumber: No elements found with the class 'number-of-tasks'.");
        }

        numberBouble.forEach(bouble => {
            if(bouble.innerHTML == 0) {
                bouble.style.display = "none";
            }
        });
}

function deleteProject(idToDelete, projectsList, todoList) {
    const projectIndex = projectsList.findIndex(project => project.id == idToDelete);
    
    if (projectIndex !== -1) {
        projectsList.splice(projectIndex-1, 1);
        (0,_index__WEBPACK_IMPORTED_MODULE_2__.renderUI)(projectsList, todoList);
        (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_3__.setupEventListeners)(todoList, projectsList)
    } 

}





/***/ }),

/***/ "./src/modules/handletodos.js":
/*!************************************!*\
  !*** ./src/modules/handletodos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodoItem: () => (/* binding */ deleteTodoItem),
/* harmony export */   displayToDods: () => (/* binding */ displayToDods),
/* harmony export */   getTodosByProject: () => (/* binding */ getTodosByProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");


function displayToDods(todoList) {
    let ulContent = '';

    todoList.forEach((element) => {
        ulContent += `
            <li class="item" id="item-${element.id}">
                <div class="name-grup ${element.status ? "finished" : ''}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" class="todo-checkbox" ${element.status ? "checked" : ''}>
                    <p class="finished">${element.title}</p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ''}">
                    <p id="due-date">${element.dueDate}</p>
                    <button class="view-btn" id="view-btn-${element.id}"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn" id="edit-btn-${element.id}"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button class="delete-btn" id="delete-btn-${element.id}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;
    });

    return ulContent;
}

function getTodosByProject(todoList, curentElement) {
    return todoList.filter(taskList => taskList.project === curentElement);
}

function deleteTodoItem(index, todoList, projectsList) {
    console.table(todoList)
    console.log("Delele the Todo with the index of:", index)

    const todoIndex = todoList.findIndex(todo => todo.id == index);

    console.log("todoIndex", todoIndex)

    // if (projectIndex !== -1) {
    //     projectsList.splice(projectIndex-1, 1);
    //     renderUI(projectsList, todoList);
    //     setupEventListeners(todoList, projectsList)
    // } 
}



/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjectContainer: () => (/* binding */ renderProjectContainer),
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
            <img src="../src/images/to-do-list.svg" alt="" srcset="">
            <div id="header-icon-container"></div>
        </section>
        <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    <li><a href="#">Home</a><span class="number-of-tasks">7</span></li>
                    <li><a href="#">Due Today</a><span class="number-of-tasks">2</span></li>
                    <li><a href="#">Due These Week</a><span class="number-of-tasks">1</span></li>
                </ul>
                <h2><a href="#" id="projects-link">Projects</a></h2>
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

    //---!!!---//
    const headerIconContainer = document.getElementById('header-icon-container');
    headerIconContainer.appendChild(headerTodoIcon);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_1__.handleProjectCountNumber)(todoList);
}

function renderTodoContainer(filteredElements) {
    let container = document.querySelector('.todo-container');

    container.innerHTML = "";

    if(filteredElements.length > 0) {
        container.innerHTML = `
        <ul class="items-list">
            ${(0,_handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods)(filteredElements)}  
        </ul>
    `;
    } else {
        container.innerHTML = `
        <div class="items-list">
            <h2>Empty Project!</h2>
            <p>Create a new to-do item or delete project.</p>
            <button class="delete-btn">Delete project</button>
        </div>
    `;
        handleEmptyProjectPage(container);
    }
}

function renderProjectContainer(projectsList, todoList) {
    let container = document.getElementById('projects');

    container.innerHTML = "";
    container.innerHTML = `
        ${(0,_handleproject__WEBPACK_IMPORTED_MODULE_1__.getProjects)(projectsList, todoList)}
    `;
}
    
function handleEmptyProjectPage(container){
    const idToDelete = getActiveLink();

    const { projectsList, todoList } = _startup__WEBPACK_IMPORTED_MODULE_3__.defaultValues;

    const deleteBtn = container.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                (0,_handleproject__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(idToDelete, projectsList, todoList);
                //deleteProject(3, projectsList) Example call
            });
        }

    return projectsList, todoList;
}

function getActiveLink() {
    const activeLink = document.querySelector("#projects a.active");
    if (activeLink) {
        const activeProjectId = activeLink.closest('li').getAttribute('data-project-id');
        return activeProjectId;
    } 
}

//Until i figure out async-await i use these function to add the eventlisteners
//after the UI is rendered. Adding the call to setupEventListeners in renderUI returned a webpack module error
//because the UI was not fully rendered.
function callEvents(){
    const { projectsList, todoList } = _startup__WEBPACK_IMPORTED_MODULE_3__.defaultValues;

    try {
        (0,_manipulateDOM__WEBPACK_IMPORTED_MODULE_5__.setupEventListeners)(todoList, projectsList,);
    } catch (error) {
        console.error("Error calling callEvents:", error);
    }
}
callEvents();



/***/ }),

/***/ "./src/modules/manipulateDOM.js":
/*!**************************************!*\
  !*** ./src/modules/manipulateDOM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");
/* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleproject */ "./src/modules/handleproject.js");






let statusOfUI = false;

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
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
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
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-todo-modal-button close-btn">
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
            <img src="../src/images/close-ellipse.svg" class="close-modal-button close-btn">
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
    modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
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

function modifyTodoStatus(index, target, projectsList, todoList) {
    const todoItem = todoList.find(todo => todo.id -1 == index);
    todoItem.status = target.checked; 

    if (!todoItem) {
        console.error("Todo item not found:", id);
        return;
    }

    if(statusOfUI) {
        (0,_handletodos__WEBPACK_IMPORTED_MODULE_1__.displayToDods)(todoList);
        (0,_handletodos__WEBPACK_IMPORTED_MODULE_1__.getTodosByProject)(todoList, todoItem.project);        
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderProjectContainer)(projectsList, todoList);
        (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProjectCountNumber)();
        } else {
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(projectsList, todoList);
        }
    setupEventListeners(todoList, projectsList);
}

function addCloseEventListeners(modalContainer) {
    const closeButtons = modalContainer.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modalContainer.innerHTML = '';
        });
    });
}

function setupEventListeners(todoList, projectsList) {
    const todoListContainer = document.querySelector('.todo-container');
    let modalContainer = document.getElementById('modal-container');

    const projectLink = document.getElementById('projects-link');
    const addProjectBTN = document.querySelector('.addproject');
    const addToDoBTN = document.querySelector('.addtodo');

    addProjectBTN.addEventListener('click', function() {
        openProjectModal(modalContainer);
    });

    addToDoBTN.addEventListener('click', function() {
        openToDoModal(modalContainer);
    });

    projectLink.addEventListener('click', function() {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(projectsList, todoList);
        setupEventListeners(todoList, projectsList);
    })

    todoListContainer.addEventListener('click', function(event) {
        const target = event.target;
        const listItem = target.closest('.item');
        const index = listItem ? listItem.id.split('-')[1] : null;
        
        if (index !== null) {
            if (target.closest('.view-btn')) {
                openViewModal(index, todoList, modalContainer);
            } else if (target.closest('.edit-btn')) {
                openEditModal(index, todoList, modalContainer);
            } else if (target.closest('.delete-btn')) {
                (0,_handletodos__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItem)(index, todoList, projectsList);
            } else if (target.classList.contains('todo-checkbox')) {
                modifyTodoStatus(index, target, projectsList, todoList);
            }
        }
    });

    // Attach event listeners to project links
    const projectList = document.querySelectorAll("#projects li");
    projectList.forEach(li => {
        const anchor = li.querySelector('a');
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const projectName = anchor.textContent;

            const filteredTodos = (0,_handletodos__WEBPACK_IMPORTED_MODULE_1__.getTodosByProject)(todoList, projectName);
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(filteredTodos);
            (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProjectCountNumber)();
        
            projectList.forEach(item => {
                const link = item.querySelector('a');
                link.classList.remove('active');
            });

            anchor.classList.add('active');
            return statusOfUI = true;
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/modules/index.js");
/* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manipulateDOM */ "./src/modules/manipulateDOM.js");






const defaultValues  = (function () {
    const todoList = [];
    const projectsList = [];
    let renderOnlyContainer = false;

    let newToDo;
    let defaultProject;

    const todos = [
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'low', false, 'Home'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'low', true, 'Home'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'medium', true, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Repair blog', 'Fix social links on blog header', '2024-03-29', 'high', false, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'high', false, 'Learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('App implementation', 'Add ability to extract the projects from the array', '2024-12-24', 'low', true, 'Active learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Xyx', 'Some random text', '2024-05-31', 'low', true, 'Active learning'),
        new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('ABC', 'First three leters from the algha', '2024-10-30', 'high', false, 'Active learning')
        
    ];
    
    todos.forEach(newToDo => {
        todoList.push(newToDo);
        (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProject)(newToDo, projectsList);
    });

    (0,_index__WEBPACK_IMPORTED_MODULE_3__.renderUI)(projectsList, todoList);
    
    return {
        todoList,
        projectsList,
        renderOnlyContainer,
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
    static idCounter = 0;

    constructor(title, description, dueDate, priority, status, project) {
        this._id = Todo.calcId();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project; 
    }

    static calcId() {
        return ++Todo.idCounter;
    }
    
    get id() {
        return this._id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxRQUFRLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hhbmRsZXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGV0b2Rvcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbWFuaXB1bGF0ZURPTS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGFydHVwLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX1NlbWlDb25kZW5zZWQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbi1mb250JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQtZm9udCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi8qIEdlbmVyYWwgc3R5bGVzICovXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiAxOTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgY29sb3I6ICM1MDFGM0E7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTAxRjNBO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUY4NjkzO1xyXG59XHJcblxyXG4vKiBFbmQgb2YgZ2VuZXJhbCBzdHlsZXMgKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcclxufVxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBjb2xvcjogI0Y3RjdGNzs7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmhlYWRlciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgZmxleDogNDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubnVtYmVyLW9mLXRhc2tzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHdpZHRoOiAxLjVyZW07IFxyXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIGNvbG9yOiAjRjdGN0VFO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4ubWVudS1saW5rcyAuYWN0aXZlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgLmFjdGl2ZTo6YmVmb3JlLFxyXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJy8vICc7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNCOUI5Qjk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbn1cclxuXHJcbmgyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMxNDE0MTQ7XHJcbn1cclxuXHJcbi5hZGR0b2RvLFxyXG4uYWRkcHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZHRvZG8gcCxcclxuLmFkZHByb2plY3QgcCB7XHJcbiAgICBjb2xvcjogI0MzOEQ5RTtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmFkZHRvZG8gcCB7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxufVxyXG5cclxuLmFkZHRvZG8gaW1nLFxyXG4uYWRkcHJvamVjdCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtcy1saXN0IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC42cmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICBzY3JvbGxiYXItY29sb3I6ICNDMzhEOUUgI0VFRUVFRTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAycHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAsXHJcbi5uYW1lLWdydXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5IHtcclxuICAgIGhlaWdodDogNTBweDsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcblxyXG4ucHJpb3JpdHkubG93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkubWVkaXVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XHJcbn0gXHJcblxyXG4ucHJpb3JpdHkuaGlnaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59IFxyXG5cclxuLnByaW9yaXR5OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IFxyXG59XHJcblxyXG4vKiBjaGVja2JveCBoYW5kbGRlciAqL1xyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBhY2NlbnQtY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyYTlkOGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcbi8qIGVuZG9mIGNoZWNrYm94IGhhbmRsZXIgKi9cclxuXHJcbi5maW5pc2hlZC5uYW1lLWdydXAgcCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLmZpbmlzaGVkLmFjdGlvbi1ncnVwIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuI2R1ZS1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWluLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTAxRjNBO1xyXG59XHJcblxyXG4uYWN0aW9uLWdydXAgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLyogR2VuZXJhbCAmIFZpZXcgTW9kYWwgU3R5bGVzICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7ICAgIFxyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm1vZGFsLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBjb2xvcjogIzUwMUYzQTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZGV0YWlsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kZXRhaWwgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmRldGFpbDpmaXJzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMXJlbTtcclxufVxyXG5cclxuLmRldGFpbDpudGgtb2YtdHlwZSgyKSAuZGV0YWlsLXRpdGxle1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjk1cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsOm50aC1vZi10eXBlKDMpIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XHJcbn1cclxuXHJcbi5kZXRhaWw6bGFzdC1vZi10eXBlIC5kZXRhaWwtdGl0bGV7XHJcbiAgICBcclxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xyXG59XHJcblxyXG4uZGV0YWlsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsLWJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwOyBcclxuICAgIHJpZ2h0OjA7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgNDAlKTtcclxufVxyXG5cclxuLyogQWRkIHByb2plY3QgbW9kYWwgJiBUb2RvIG1vZGFsKi9cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAtMnJlbSAtMnJlbSAwIC0ycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciBwIHtcclxuICAgIGNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcclxuI2FkZC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQsXHJcbiNlZGl0LW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtLFxyXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcclxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGNvbG9yOiAjMTQxNDE0O1xyXG59XHJcblxyXG4jYWRkLW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lcixcclxuI2VkaXQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyICB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcclxuI2FkZC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcclxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbmZvcm0gaW5wdXRbdHlwZT1kYXRlXSB7XHJcbiAgICBmb250LWZhbWlseTogbWFpbi1mb250O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICMxNDE0MTQ7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSxcclxuI2VkaXQtbW9kYWwtdG9kbyB1bCBsaSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIGlucHV0LFxyXG4jZWRpdC1tb2RhbC10b2RvIHVsIGxpIGlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gYnV0dG9uLFxyXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b24sXHJcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcclxuICAgIG1heC13aWR0aDogOHJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYTlkOGY7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC4ycmVtO1xyXG4gICAgY29sb3I6ICMyYTlkOGY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBidXR0b246aG92ZXIsXHJcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlcixcclxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI0Y3RjdGNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XHJcbn1cclxuXHJcbiNhZGQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lcixcclxuI2VkaXQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lciAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2FkZC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCxcclxuI2VkaXQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC44cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW0ge1xyXG4gICAgY29sb3I6ICNGRkE1MDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaCB7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGMDAwMDtcclxufVxyXG5cclxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XHJcbn1cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4uYXR0cmlidXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uYXR0cmlidXRpb24gYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtEQUFxRTtJQUNyRSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQW9FO0lBQ3BFLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUI7QUFDbkI7OztJQUdJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0FBQzdC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Q0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluLWZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZC1mb250JztcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9PcGVuU2Fuc19TZW1pQ29uZGVuc2VkLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbi1mb250JztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGNvbG9yOiAjNTAxRjNBO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTAxRjNBO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUY4NjkzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgb2YgZ2VuZXJhbCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEyODBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3OztcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgI0I5QjlCOTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiA0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyBsaSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyLW9mLXRhc2tzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MzOEQ5RTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHdpZHRoOiAxLjVyZW07IFxcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0VFO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgbGkgYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyAuYWN0aXZlLFxcclxcbi5tZW51LWxpbmtzIGE6aG92ZXIge1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbiAgICBjb2xvcjogIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgLmFjdGl2ZTo6YmVmb3JlLFxcclxcbi5tZW51LWxpbmtzIGE6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcvLyAnO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQjlCOUI5O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIgaDIge1xcclxcbiAgICBjb2xvcjogIzE0MTQxNDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaDIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvLFxcclxcbi5hZGRwcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdG9kbyBwLFxcclxcbi5hZGRwcm9qZWN0IHAge1xcclxcbiAgICBjb2xvcjogI0MzOEQ5RTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0b2RvIHAge1xcclxcbiAgICBjb2xvcjogIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRvZG8gaW1nLFxcclxcbi5hZGRwcm9qZWN0IGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1saXN0IHtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC42cmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogI0MzOEQ5RSAjRUVFRUVFO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW06aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwwLDAsLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aW9uLWdydXAsXFxyXFxuLm5hbWUtZ3J1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGhlaWdodDogNTBweDsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5sb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn0gXFxyXFxuXFxyXFxuLnByaW9yaXR5Lm1lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJpb3JpdHkuaGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XFxyXFxufSBcXHJcXG5cXHJcXG4ucHJpb3JpdHk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnOyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyBcXHJcXG59XFxyXFxuXFxyXFxuLyogY2hlY2tib3ggaGFuZGxkZXIgKi9cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYWNjZW50LWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJhOWQ4ZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCAwJSAyMCUsIDMwJSA1MCUsIDAlIDgwJSwgMjAlIDEwMCUsIDUwJSA3MCUsIDgwJSAxMDAlLCAxMDAlIDgwJSwgNzAlIDUwJSwgMTAwJSAyMCUsIDgwJSAwJSwgNTAlIDMwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLyogZW5kb2YgY2hlY2tib3ggaGFuZGxlciAqL1xcclxcblxcclxcbi5maW5pc2hlZC5uYW1lLWdydXAgcCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC5hY3Rpb24tZ3J1cCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZS1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5hY3Rpb24tZ3J1cCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgbWluLXdpZHRoOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUwMUYzQTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2VuZXJhbCAmIFZpZXcgTW9kYWwgU3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyAgICBcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmFjdGl2ZXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgY29sb3I6ICM1MDFGM0E7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCBwIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uZGV0YWlsOmZpcnN0LW9mLXR5cGUgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWw6bnRoLW9mLXR5cGUoMikgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjk1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsOm50aC1vZi10eXBlKDMpIC5kZXRhaWwtdGl0bGV7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbDpsYXN0LW9mLXR5cGUgLmRldGFpbC10aXRsZXtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLXRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1tb2RhbC1idXR0b24ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDsgXFxyXFxuICAgIHJpZ2h0OjA7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCA0MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciBwIHtcXHJcXG4gICAgY29sb3I6ICNGN0Y3Rjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogYm9sZC1mb250O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDMwcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0ge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lcixcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5pbnB1dC1jb250YWluZXIgIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXFxyXFxuI2FkZC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcXHJcXG5mb3JtIGlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgICBmb250LWZhbWlseTogbWFpbi1mb250O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgY29sb3I6ICMxNDE0MTQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpIGlucHV0LFxcclxcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b24sXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxyXFxuICAgIG1heC13aWR0aDogOHJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJhOWQ4ZjtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcXHJcXG4gICAgY29sb3I6ICMyYTlkOGY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbjpob3ZlcixcXHJcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjRjdGN0Y3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIsXFxyXFxuI2VkaXQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lciAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCxcXHJcXG4jZWRpdC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCBidXR0b24ge1xcclxcbiAgICBtaW4td2lkdGg6IDQuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW0ge1xcclxcbiAgICBjb2xvcjogI0ZGQTUwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRkZBNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkE1MDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaCB7XFxyXFxuICAgIGNvbG9yOiAjRkYwMDAwO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbi5hdHRyaWJ1dGlvbiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0cmlidXRpb24gYSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0J5UHJvamVjdCB9IGZyb20gXCIuL2hhbmRsZXRvZG9zXCI7XHJcbmltcG9ydCB7IHJlbmRlclVJIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL21hbmlwdWxhdGVET01cIjtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KXtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0RXhpc3RzID0gcHJvamVjdHNMaXN0LnNvbWUocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IFwiRGVmYXVsdFwiKTtcclxuICAgIGlmICghZGVmYXVsdFByb2plY3RFeGlzdHMpIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiRGVmYXVsdFwiKTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdUb0RvLnByb2plY3Q7XHJcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0c0xpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG5cclxuICAgIGlmICghZXhpc3RpbmdQcm9qZWN0KXtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3VG9Eby5wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9qZWN0c0xpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpIHtcclxuICAgIGxldCB1bENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgdWxDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgPGxpIGRhdGEtcHJvamVjdC1pZD1cIiR7ZWxlbWVudC5pZH1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+JHtlbGVtZW50Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4ke2NvdW50VG9kb2luUHJvamVjdChlbGVtZW50Lm5hbWUsIHRvZG9MaXN0KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgYDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1bENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50VG9kb2luUHJvamVjdChlbGVtZW50LCB0b2RvTGlzdCl7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRvZG9MaXN0W2ldLnByb2plY3QgPT09IGVsZW1lbnQgJiYgIXRvZG9MaXN0W2ldLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RDb3VudE51bWJlcigpIHtcclxuICAgIGNvbnN0IG51bWJlckJvdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubnVtYmVyLW9mLXRhc2tzXCIpO1xyXG5cclxuICAgICAgICBpZiAobnVtYmVyQm91YmxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVByb2plY3RDb3VudE51bWJlcjogTm8gZWxlbWVudHMgZm91bmQgd2l0aCB0aGUgY2xhc3MgJ251bWJlci1vZi10YXNrcycuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbnVtYmVyQm91YmxlLmZvckVhY2goYm91YmxlID0+IHtcclxuICAgICAgICAgICAgaWYoYm91YmxlLmlubmVySFRNTCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBib3VibGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWRUb0RlbGV0ZSwgcHJvamVjdHNMaXN0LCB0b2RvTGlzdCkge1xyXG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHNMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gaWRUb0RlbGV0ZSk7XHJcbiAgICBcclxuICAgIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgtMSwgMSk7XHJcbiAgICAgICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICAgICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KVxyXG4gICAgfSBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7aGFuZGxlUHJvamVjdCwgZ2V0UHJvamVjdHMsIGRlbGV0ZVByb2plY3QsIGhhbmRsZVByb2plY3RDb3VudE51bWJlcn07XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXJUb2RvQ29udGFpbmVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0RvZHModG9kb0xpc3QpIHtcclxuICAgIGxldCB1bENvbnRlbnQgPSAnJztcclxuXHJcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdWxDb250ZW50ICs9IGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiIGlkPVwiaXRlbS0ke2VsZW1lbnQuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1ncnVwICR7ZWxlbWVudC5zdGF0dXMgPyBcImZpbmlzaGVkXCIgOiAnJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHkgJHtlbGVtZW50LnByaW9yaXR5fVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tY2hlY2tib3hcIiAke2VsZW1lbnQuc3RhdHVzID8gXCJjaGVja2VkXCIgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmaW5pc2hlZFwiPiR7ZWxlbWVudC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3J1cCAke2VsZW1lbnQuc3RhdHVzID8gXCJmaW5pc2hlZFwiIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJkdWUtZGF0ZVwiPiR7ZWxlbWVudC5kdWVEYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmlldy1idG5cIiBpZD1cInZpZXctYnRuLSR7ZWxlbWVudC5pZH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvdmlldy5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG5cIiBpZD1cImVkaXQtYnRuLSR7ZWxlbWVudC5pZH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZWRpdC5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiIGlkPVwiZGVsZXRlLWJ0bi0ke2VsZW1lbnQuaWR9XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2RlbGV0ZS5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdWxDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb2Rvc0J5UHJvamVjdCh0b2RvTGlzdCwgY3VyZW50RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHRvZG9MaXN0LmZpbHRlcih0YXNrTGlzdCA9PiB0YXNrTGlzdC5wcm9qZWN0ID09PSBjdXJlbnRFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpIHtcclxuICAgIGNvbnNvbGUudGFibGUodG9kb0xpc3QpXHJcbiAgICBjb25zb2xlLmxvZyhcIkRlbGVsZSB0aGUgVG9kbyB3aXRoIHRoZSBpbmRleCBvZjpcIiwgaW5kZXgpXHJcblxyXG4gICAgY29uc3QgdG9kb0luZGV4ID0gdG9kb0xpc3QuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PSBpbmRleCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2RvSW5kZXhcIiwgdG9kb0luZGV4KVxyXG5cclxuICAgIC8vIGlmIChwcm9qZWN0SW5kZXggIT09IC0xKSB7XHJcbiAgICAvLyAgICAgcHJvamVjdHNMaXN0LnNwbGljZShwcm9qZWN0SW5kZXgtMSwgMSk7XHJcbiAgICAvLyAgICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICAvLyAgICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KVxyXG4gICAgLy8gfSBcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9kb3NCeVByb2plY3QsIGRpc3BsYXlUb0RvZHMsIGRlbGV0ZVRvZG9JdGVtfSIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGhhbmRsZVByb2plY3RDb3VudE51bWJlciB9IGZyb20gJy4vaGFuZGxlcHJvamVjdCc7XHJcbmltcG9ydCB7IGRpc3BsYXlUb0RvZHMgfSBmcm9tICcuL2hhbmRsZXRvZG9zJzsgXHJcbi8vY29ycmVjdCB0eXBvIGFib3ZlOiBzaG91bGQgYmUgZGlzcGxheVRvZG9zXHJcbmltcG9ydCB7IGRlZmF1bHRWYWx1ZXMgfSBmcm9tICcuL3N0YXJ0dXAnO1xyXG5pbXBvcnQgVG9kb0ljb24gZnJvbSBcIi4uL2ltYWdlcy90by1kby1saXN0LnN2Z1wiO1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuaW1wb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9IGZyb20gJy4vbWFuaXB1bGF0ZURPTSc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgaGVhZGVyVG9kb0ljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGhlYWRlclRvZG9JY29uLnNyYyA9IFRvZG9JY29uO1xyXG5cclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT4vLyBUbyBkbzwvaDE+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy90by1kby1saXN0LnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWljb24tY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInRvZG9zLWR1ZVwiIGNsYXNzPVwibWVudS1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkhvbWU8L2E+PHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj43PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RHVlIFRvZGF5PC9hPjxzcGFuIGNsYXNzPVwibnVtYmVyLW9mLXRhc2tzXCI+Mjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkR1ZSBUaGVzZSBXZWVrPC9hPjxzcGFuIGNsYXNzPVwibnVtYmVyLW9mLXRhc2tzXCI+MTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMj48YSBocmVmPVwiI1wiIGlkPVwicHJvamVjdHMtbGlua1wiPlByb2plY3RzPC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzPVwibWVudS1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z2V0UHJvamVjdHMocHJvamVjdHNMaXN0LCB0b2RvTGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHRvZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2FkZC1wbHVzLWNpcmNsZS5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmV3IFRvIGRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRwcm9qZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9hZGQtcGx1cy1jaXJjbGUuc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5ldyBQcm9qZWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0b2RvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXMtbGlzdFwiIGlkPVwiaXRlbS1saXN0LVgtWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7ZGlzcGxheVRvRG9kcyh0b2RvTGlzdCl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1vZGFsLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICAvLy0tLSEhIS0tLS8vXHJcbiAgICBjb25zdCBoZWFkZXJJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1pY29uLWNvbnRhaW5lcicpO1xyXG4gICAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUb2RvSWNvbik7XHJcbiAgICBoYW5kbGVQcm9qZWN0Q291bnROdW1iZXIodG9kb0xpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb2RvQ29udGFpbmVyKGZpbHRlcmVkRWxlbWVudHMpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcclxuXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZihmaWx0ZXJlZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zLWxpc3RcIj5cclxuICAgICAgICAgICAgJHtkaXNwbGF5VG9Eb2RzKGZpbHRlcmVkRWxlbWVudHMpfSAgXHJcbiAgICAgICAgPC91bD5cclxuICAgIGA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1zLWxpc3RcIj5cclxuICAgICAgICAgICAgPGgyPkVtcHR5IFByb2plY3QhPC9oMj5cclxuICAgICAgICAgICAgPHA+Q3JlYXRlIGEgbmV3IHRvLWRvIGl0ZW0gb3IgZGVsZXRlIHByb2plY3QuPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiPkRlbGV0ZSBwcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgICAgIGhhbmRsZUVtcHR5UHJvamVjdFBhZ2UoY29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdENvbnRhaW5lcihwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICR7Z2V0UHJvamVjdHMocHJvamVjdHNMaXN0LCB0b2RvTGlzdCl9XHJcbiAgICBgO1xyXG59XHJcbiAgICBcclxuZnVuY3Rpb24gaGFuZGxlRW1wdHlQcm9qZWN0UGFnZShjb250YWluZXIpe1xyXG4gICAgY29uc3QgaWRUb0RlbGV0ZSA9IGdldEFjdGl2ZUxpbmsoKTtcclxuXHJcbiAgICBjb25zdCB7IHByb2plY3RzTGlzdCwgdG9kb0xpc3QgfSA9IGRlZmF1bHRWYWx1ZXM7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ0bikge1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoaWRUb0RlbGV0ZSwgcHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAvL2RlbGV0ZVByb2plY3QoMywgcHJvamVjdHNMaXN0KSBFeGFtcGxlIGNhbGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0c0xpc3QsIHRvZG9MaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmVMaW5rKCkge1xyXG4gICAgY29uc3QgYWN0aXZlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgYS5hY3RpdmVcIik7XHJcbiAgICBpZiAoYWN0aXZlTGluaykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJZCA9IGFjdGl2ZUxpbmsuY2xvc2VzdCgnbGknKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pZCcpO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0SWQ7XHJcbiAgICB9IFxyXG59XHJcblxyXG4vL1VudGlsIGkgZmlndXJlIG91dCBhc3luYy1hd2FpdCBpIHVzZSB0aGVzZSBmdW5jdGlvbiB0byBhZGQgdGhlIGV2ZW50bGlzdGVuZXJzXHJcbi8vYWZ0ZXIgdGhlIFVJIGlzIHJlbmRlcmVkLiBBZGRpbmcgdGhlIGNhbGwgdG8gc2V0dXBFdmVudExpc3RlbmVycyBpbiByZW5kZXJVSSByZXR1cm5lZCBhIHdlYnBhY2sgbW9kdWxlIGVycm9yXHJcbi8vYmVjYXVzZSB0aGUgVUkgd2FzIG5vdCBmdWxseSByZW5kZXJlZC5cclxuZnVuY3Rpb24gY2FsbEV2ZW50cygpe1xyXG4gICAgY29uc3QgeyBwcm9qZWN0c0xpc3QsIHRvZG9MaXN0IH0gPSBkZWZhdWx0VmFsdWVzO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0LCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIGNhbGxFdmVudHM6XCIsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5jYWxsRXZlbnRzKCk7XHJcblxyXG5leHBvcnQgeyByZW5kZXJVSSwgcmVuZGVyVG9kb0NvbnRhaW5lciwgcmVuZGVyUHJvamVjdENvbnRhaW5lciB9OyIsImltcG9ydCB7IHJlbmRlclRvZG9Db250YWluZXIsIHJlbmRlclByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0J5UHJvamVjdCwgZGlzcGxheVRvRG9kcywgZGVsZXRlVG9kb0l0ZW0gfSBmcm9tICcuL2hhbmRsZXRvZG9zJztcclxuaW1wb3J0IHsgaGFuZGxlUHJvamVjdENvdW50TnVtYmVyIH0gZnJvbSBcIi4vaGFuZGxlcHJvamVjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJVSSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vaGFuZGxlcHJvamVjdFwiO1xyXG5cclxubGV0IHN0YXR1c09mVUkgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL01lbnUgbGlua3MgaW50ZXJhY3Rpb25cclxuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlua3MgYVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKG1vZGFsQ29udGFpbmVyKSB7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBpZD1cImFkZC1wcm9qZWN0LW1vZGFsXCIgY2xhc3M9XCJtb2RhbCBhY3RpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5DcmVhdGUgYSBuZXcgUHJvamVjdDwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlByb2plY3QgbmFtZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Ub0RvTW9kYWwobW9kYWxDb250YWluZXIpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiYWRkLW1vZGFsLXRvZG9cIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBUbyBEbzwvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtdG9kby1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZWRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWJ0bi1ncnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsb3dcIj5Mb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1lZGl1bVwiPk1lZGl1bTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiaGlnaFwiPkhpZ2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGFkZENsb3NlRXZlbnRMaXN0ZW5lcnMobW9kYWxDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuVmlld01vZGFsKGluZGV4LCB0b2RvTGlzdCwgbW9kYWxDb250YWluZXIpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwidmlldy1tb2RhbFwiIGNsYXNzPVwibW9kYWwgYWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2Nsb3NlLWVsbGlwc2Uuc3ZnXCIgY2xhc3M9XCJjbG9zZS1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgIDxoMj4ke3RvZG9MaXN0W2luZGV4XS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC10aXRsZVwiPlByb2plY3Q6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dG9kb0xpc3RbaW5kZXhdLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLXRpdGxlXCI+UHJpb3JpdHk6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dG9kb0xpc3RbaW5kZXhdLnByaW9yaXR5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLXRpdGxlXCI+RHVlIERhdGU6IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiR7dG9kb0xpc3RbaW5kZXhdLmR1ZURhdGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj5EZXRhaWxzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3RvZG9MaXN0W2luZGV4XS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGFkZENsb3NlRXZlbnRMaXN0ZW5lcnMobW9kYWxDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGFsKGluZGV4LCB0b2RvTGlzdCwgbW9kYWxDb250YWluZXIpIHtcclxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGlkPVwiZWRpdC1tb2RhbC10b2RvXCIgY2xhc3M9XCJtb2RhbCBhY3RpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5DcmVhdGUgYSBuZXcgVG8gRG88L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvY2xvc2UtZWxsaXBzZS13aGl0ZS1iZy5zdmdcIiBjbGFzcz1cImNsb3NlLXByb2plY3QtbW9kYWwtYnV0dG9uIGNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHt0b2RvTGlzdFtpbmRleF0udGl0bGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPVwiJHt0b2RvTGlzdFtpbmRleF0uZGVzY3JpcHRpb259XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlZGF0ZVwiIHZhbHVlPVwiJHt0b2RvTGlzdFtpbmRleF0uZHVlRGF0ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWJ0bi1ncnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsb3dcIj5Mb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1lZGl1bVwiPk1lZGl1bTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiaGlnaFwiPkhpZ2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Db25maXJtIGVkaXQ8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VG9kb1N0YXR1cyhpbmRleCwgdGFyZ2V0LCBwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KSB7XHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IHRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLmlkIC0xID09IGluZGV4KTtcclxuICAgIHRvZG9JdGVtLnN0YXR1cyA9IHRhcmdldC5jaGVja2VkOyBcclxuXHJcbiAgICBpZiAoIXRvZG9JdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRvZG8gaXRlbSBub3QgZm91bmQ6XCIsIGlkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoc3RhdHVzT2ZVSSkge1xyXG4gICAgICAgIGRpc3BsYXlUb0RvZHModG9kb0xpc3QpO1xyXG4gICAgICAgIGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCB0b2RvSXRlbS5wcm9qZWN0KTsgICAgICAgIFxyXG4gICAgICAgIHJlbmRlclByb2plY3RDb250YWluZXIocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdENvdW50TnVtYmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcikge1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b25zID0gbW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xyXG4gICAgY2xvc2VCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KSB7XHJcbiAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpbmsnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcHJvamVjdCcpO1xyXG4gICAgY29uc3QgYWRkVG9Eb0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0b2RvJyk7XHJcblxyXG4gICAgYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wZW5Qcm9qZWN0TW9kYWwobW9kYWxDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkVG9Eb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wZW5Ub0RvTW9kYWwobW9kYWxDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcclxuICAgICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0b2RvTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy5pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaXN0SXRlbSA/IGxpc3RJdGVtLmlkLnNwbGl0KCctJylbMV0gOiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy52aWV3LWJ0bicpKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuVmlld01vZGFsKGluZGV4LCB0b2RvTGlzdCwgbW9kYWxDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcuZWRpdC1idG4nKSkge1xyXG4gICAgICAgICAgICAgICAgb3BlbkVkaXRNb2RhbChpbmRleCwgdG9kb0xpc3QsIG1vZGFsQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1idG4nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlVG9kb0l0ZW0oaW5kZXgsIHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5VG9kb1N0YXR1cyhpbmRleCwgdGFyZ2V0LCBwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gcHJvamVjdCBsaW5rc1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3RzIGxpXCIpO1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChsaSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yID0gbGkucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYW5jaG9yLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIHJlbmRlclRvZG9Db250YWluZXIoZmlsdGVyZWRUb2Rvcyk7XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2plY3RDb3VudE51bWJlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXNPZlVJID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBzdGF0aWMgaWRDb3VudGVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBQcm9qZWN0LmNhbGNJZCgpO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gMDtcclxuICAgIH0gICBcclxuXHJcbiAgICBzdGF0aWMgY2FsY0lkKCkge1xyXG4gICAgICAgIHJldHVybiArK1Byb2plY3QuaWRDb3VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjSXRlbSgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpdGVtcyh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgIC8vIHRoaXMuX2l0ZW1zID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQge2hhbmRsZVByb2plY3R9IGZyb20gJy4vaGFuZGxlcHJvamVjdCc7XHJcbmltcG9ydCB7cmVuZGVyVUl9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9tYW5pcHVsYXRlRE9NJztcclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcclxuICAgIGxldCByZW5kZXJPbmx5Q29udGFpbmVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IG5ld1RvRG87XHJcbiAgICBsZXQgZGVmYXVsdFByb2plY3Q7XHJcblxyXG4gICAgY29uc3QgdG9kb3MgPSBbXHJcbiAgICAgICAgbmV3IFRvZG8oJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdsb3cnLCBmYWxzZSwgJ0hvbWUnKSxcclxuICAgICAgICBuZXcgVG9kbygnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdsb3cnLCB0cnVlLCAnSG9tZScpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ21lZGl1bScsIHRydWUsICdMZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdSZXBhaXIgYmxvZycsICdGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyJywgJzIwMjQtMDMtMjknLCAnaGlnaCcsIGZhbHNlLCAnTGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnaGlnaCcsIGZhbHNlLCAnTGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnQXBwIGltcGxlbWVudGF0aW9uJywgJ0FkZCBhYmlsaXR5IHRvIGV4dHJhY3QgdGhlIHByb2plY3RzIGZyb20gdGhlIGFycmF5JywgJzIwMjQtMTItMjQnLCAnbG93JywgdHJ1ZSwgJ0FjdGl2ZSBsZWFybmluZycpLFxyXG4gICAgICAgIG5ldyBUb2RvKCdYeXgnLCAnU29tZSByYW5kb20gdGV4dCcsICcyMDI0LTA1LTMxJywgJ2xvdycsIHRydWUsICdBY3RpdmUgbGVhcm5pbmcnKSxcclxuICAgICAgICBuZXcgVG9kbygnQUJDJywgJ0ZpcnN0IHRocmVlIGxldGVycyBmcm9tIHRoZSBhbGdoYScsICcyMDI0LTEwLTMwJywgJ2hpZ2gnLCBmYWxzZSwgJ0FjdGl2ZSBsZWFybmluZycpXHJcbiAgICAgICAgXHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICB0b2Rvcy5mb3JFYWNoKG5ld1RvRG8gPT4ge1xyXG4gICAgICAgIHRvZG9MaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdChuZXdUb0RvLCBwcm9qZWN0c0xpc3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9kb0xpc3QsXHJcbiAgICAgICAgcHJvamVjdHNMaXN0LFxyXG4gICAgICAgIHJlbmRlck9ubHlDb250YWluZXIsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdFZhbHVlcyB9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gICAgc3RhdGljIGlkQ291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBUb2RvLmNhbGNJZCgpO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDsgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNhbGNJZCgpIHtcclxuICAgICAgICByZXR1cm4gKytUb2RvLmlkQ291bnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0dXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcclxuICAgIH0gXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tb2R1bGVzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9