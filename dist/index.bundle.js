/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/OpenSans_Condensed-Regular.ttf */ "./src/fonts/OpenSans_Condensed-Regular.ttf",
          ),
          __webpack_require__.b,
        );
        var ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/OpenSans_SemiCondensed-Bold.ttf */ "./src/fonts/OpenSans_SemiCondensed-Bold.ttf",
          ),
          __webpack_require__.b,
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___,
          );
        var ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___,
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `@font-face {
  font-family: "main-font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-style: normal;
}

@font-face {
  font-family: "bold-font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
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
  overflow-x: hidden;
  /* overflow: hidden;  */
}

body {
  min-height: 100vh;
  height: 100vh;
  font-family: "main-font";
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
  background-color: #f7f7f7;
  color: #501f3a;
  border: 2px solid #501f3a;
  padding: 0.75rem 1rem;
  border-radius: 3px;
}

button:hover {
  border: none;
  cursor: pointer;
  color: #f7f7f7;
  background-color: #9f8693;
}

/* End of general styles */

.container {
  width: 1280px;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.header {
  background-color: #c38d9e;
  color: #f7f7f7;
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

@media only screen and (max-width: 624px) {
  body {
    height: 100%;
  }
  .content-container {
    flex-direction: column;
  }
}

.menu {
  flex: 1;
  background-color: #eeeeee;
  border-right: 0.5px solid #b9b9b9;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: left;
  border-bottom-left-radius: 5px;
}

.menu-links li {
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.number-of-tasks {
  background-color: #c38d9e;
  font-size: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  font-family: bold-font;
  color: #f7f7ee;
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
  color: #501f3a;
}

.menu-links .active::before,
.menu-links a:hover::before {
  content: "// ";
}

.menu-links,
.todo-container {
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 0.5px solid #b9b9b9;
  overflow-y: auto;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #c38d9e #eeeeee;
  height: 200px;
}

.todo-container {
  min-height: 41rem;
  flex: 4;
  border-bottom: none;
}

.content-container h2 {
  color: #141414;
  margin-bottom: 1rem;
}

#projects-link {
  text-decoration: none;
  font-weight: 600;
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
  color: #c38d9e;
  font-family: bold-font;
  font-size: 1.2rem;
}

.addtodo p {
  color: #501f3a;
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

.emptyPageNotification {
  margin: 2rem;
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
  scrollbar-color: #c38d9e #eeeeee;
}

.item {
  background-color: #eeeeee;
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
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-out;
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
  background-color: #ffa500;
}

.priority.high {
  background-color: #ff0000;
}

.priority::before {
  content: "";
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
  background-color: #f7f7f7;
}

input[type="checkbox"]::before {
  margin: 0 auto;
  content: "";
  width: 15px;
  height: 15px;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
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
  border: 1px solid #501f3a;
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

.modal.active {
  display: block;
}

.modal-content {
  color: #501f3a;
  background-color: #eeeeee;
  padding: 2rem;
  width: 80%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.2);
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
.detail:first-of-type .detail-title {
  margin-right: 1.1rem;
}

.detail:nth-of-type(2) .detail-title {
  margin-right: 0.95rem;
}

.detail:nth-of-type(3) .detail-title {
  margin-right: 0.35rem;
}

.detail:last-of-type .detail-title {
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
  right: 0;
  transform: translate(-40%, 40%);
}

/* Add project modal & Todo modal*/

.modal-header {
  margin: -2rem -2rem 0 -2rem;
  padding: 1rem;
  background-color: #c38d9e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header p {
  color: #f7f7f7;
  font-size: 1.5rem;
  font-family: bold-font;
}

#add-project-modal > .modal-content,
#add-modal-todo > .modal-content,
#edit-modal-todo > .modal-content {
  height: 35rem;
  max-width: 50rem;
  background-color: #f7f7f7;
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
#edit-modal-todo .input-container {
  align-items: flex-start;
}

#add-project-modal form input[type="text"],
#add-modal-todo form input[type="text"],
#edit-modal-todo form input[type="text"],
form input[type="date"],
select {
  font-family: main-font;
  font-size: 1rem;
  border: none;
  width: 100%;
  padding: 0.5rem;
  letter-spacing: 1px;
  color: #141414;
  background-color: white;
}

#add-modal-todo ul li,
#edit-modal-todo ul li,
select {
  width: 100%;
  margin-top: 0.4rem;
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
  background-color: #f7f7f7;
}

#add-project-modal form button:hover,
#add-modal-todo form button:hover,
#edit-modal-todo form button:hover {
  color: #f7f7f7;
  background-color: #2a9d8f;
}

#add-modal-todo .button-container,
#edit-modal-todo .button-container {
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

.priority-btn-grup #low {
  color: #2a9d8f;
  border-color: #2a9d8f;
}

.priority-btn-grup #low:hover,
.priority-btn-grup #low.active-priority {
  color: #f7f7f7;
  background-color: #2a9d8f;
}

.priority-btn-grup #medium {
  color: #ffa500;
  border-color: #ffa500;
}

.priority-btn-grup #medium:hover,
.priority-btn-grup #medium.active-priority {
  color: #f7f7f7;
  background-color: #ffa500;
}

.priority-btn-grup #high {
  color: #ff0000;
  border-color: #ff0000;
}

.priority-btn-grup #high:hover,
.priority-btn-grup #high.active-priority {
  color: #f7f7f7;
  background-color: #ff0000;
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
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              '@font-face {\n  font-family: "main-font";\n  src: url("./fonts/OpenSans_Condensed-Regular.ttf") format("truetype");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "bold-font";\n  src: url(./fonts/OpenSans_SemiCondensed-Bold.ttf) format("truetype");\n  font-style: normal;\n}\n\n/* General styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  overflow-x: hidden;\n  /* overflow: hidden;  */\n}\n\nbody {\n  min-height: 100vh;\n  height: 100vh;\n  font-family: "main-font";\n  background-color: #2a9d8f;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n}\n\nimg {\n  max-width: 25px;\n  height: auto;\n}\n\nbutton {\n  max-width: 190px;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: #f7f7f7;\n  color: #501f3a;\n  border: 2px solid #501f3a;\n  padding: 0.75rem 1rem;\n  border-radius: 3px;\n}\n\nbutton:hover {\n  border: none;\n  cursor: pointer;\n  color: #f7f7f7;\n  background-color: #9f8693;\n}\n\n/* End of general styles */\n\n.container {\n  width: 1280px;\n  display: flex;\n  flex-direction: column;\n  background-color: #f7f7f7;\n  margin: 1rem;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n}\n.header {\n  background-color: #c38d9e;\n  color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 2rem;\n  font-family: bold-font;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  letter-spacing: 0.3rem;\n  gap: 1rem;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.header img {\n  max-width: 50px;\n}\n\n.content-container {\n  display: flex;\n}\n\n@media only screen and (max-width: 624px) {\n  body {\n    height: 100%;\n  }\n  .content-container {\n    flex-direction: column;\n  }\n}\n\n.menu {\n  flex: 1;\n  background-color: #eeeeee;\n  border-right: 0.5px solid #b9b9b9;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  text-align: left;\n  border-bottom-left-radius: 5px;\n}\n\n.menu-links li {\n  margin-bottom: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.number-of-tasks {\n  background-color: #c38d9e;\n  font-size: 0.8rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  font-family: bold-font;\n  color: #f7f7ee;\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-links li a {\n  font-size: 1.5rem;\n  text-decoration: none;\n  color: #141414;\n}\n\n.menu-links .active,\n.menu-links a:hover {\n  font-family: bold-font;\n  color: #501f3a;\n}\n\n.menu-links .active::before,\n.menu-links a:hover::before {\n  content: "// ";\n}\n\n.menu-links,\n.todo-container {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-bottom: 0.5px solid #b9b9b9;\n  overflow-y: auto;\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #c38d9e #eeeeee;\n  height: 200px;\n}\n\n.todo-container {\n  min-height: 41rem;\n  flex: 4;\n  border-bottom: none;\n}\n\n.content-container h2 {\n  color: #141414;\n  margin-bottom: 1rem;\n}\n\n#projects-link {\n  text-decoration: none;\n  font-weight: 600;\n  color: #141414;\n}\n\n.addtodo,\n.addproject {\n  display: flex;\n  align-items: center;\n  align-content: center;\n}\n\n.addtodo p,\n.addproject p {\n  color: #c38d9e;\n  font-family: bold-font;\n  font-size: 1.2rem;\n}\n\n.addtodo p {\n  color: #501f3a;\n}\n\n.addtodo img,\n.addproject img {\n  max-width: 60px;\n  height: auto;\n  margin-right: 2rem;\n}\n\n.buttons-container {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  justify-content: center;\n}\n\n.emptyPageNotification {\n  margin: 2rem;\n}\n\n.items-list {\n  padding: 3rem;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n  overflow-y: auto;\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #c38d9e #eeeeee;\n}\n\n.item {\n  background-color: #eeeeee;\n  padding: 0.5rem 0.5rem 0.5rem 0;\n  height: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.item:hover {\n  transform: scale(1.003);\n  transform-origin: 50% 50%;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-out;\n}\n\n.action-grup,\n.name-grup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.priority {\n  height: 50px;\n  position: relative;\n}\n\n.priority.low {\n  background-color: #2a9d8f;\n}\n\n.priority.medium {\n  background-color: #ffa500;\n}\n\n.priority.high {\n  background-color: #ff0000;\n}\n\n.priority::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  background-color: inherit;\n}\n\n/* checkbox handlder */\ninput[type="checkbox"] {\n  width: 25px;\n  height: 25px;\n  accent-color: #2a9d8f;\n}\n\ninput[type="checkbox"] {\n  appearance: none;\n  -webkit-appearance: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  justify-items: center;\n  font-size: 2rem;\n  padding: 0.2rem;\n  border: 3px solid #2a9d8f;\n  border-radius: 0.3rem;\n  background-color: #f7f7f7;\n}\n\ninput[type="checkbox"]::before {\n  margin: 0 auto;\n  content: "";\n  width: 15px;\n  height: 15px;\n  clip-path: polygon(\n    20% 0%,\n    0% 20%,\n    30% 50%,\n    0% 80%,\n    20% 100%,\n    50% 70%,\n    80% 100%,\n    100% 80%,\n    70% 50%,\n    100% 20%,\n    80% 0%,\n    50% 30%\n  );\n  transform: scale(0);\n  background-color: #2a9d8f;\n}\n\ninput[type="checkbox"]:checked::before {\n  transform: scale(1);\n}\n/* endof checkbox handler */\n\n.finished.name-grup p {\n  text-decoration: line-through;\n  opacity: 0.4;\n}\n\n.finished.action-grup {\n  opacity: 0.4;\n}\n\n#due-date {\n  font-size: 0.8rem;\n}\n\n.action-grup button {\n  background-color: transparent;\n  min-width: 1px;\n  padding: 0.2rem;\n  border: 1px solid #501f3a;\n}\n\n.action-grup img:hover {\n  opacity: 0.6;\n}\n\n/* General & View Modal Styles */\n.modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(8px);\n  z-index: 1;\n}\n\n.modal.active {\n  display: block;\n}\n\n.modal-content {\n  color: #501f3a;\n  background-color: #eeeeee;\n  padding: 2rem;\n  width: 80%;\n  max-width: 600px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 3px 3px 20px 10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n\n.modal-content h2 {\n  margin-bottom: 1rem;\n}\n\n.detail {\n  display: flex;\n}\n\n.detail p {\n  display: inline-block;\n}\n.detail:first-of-type .detail-title {\n  margin-right: 1.1rem;\n}\n\n.detail:nth-of-type(2) .detail-title {\n  margin-right: 0.95rem;\n}\n\n.detail:nth-of-type(3) .detail-title {\n  margin-right: 0.35rem;\n}\n\n.detail:last-of-type .detail-title {\n  margin-right: 1.2rem;\n}\n\n.detail-title {\n  font-weight: bold;\n}\n\n.close-btn {\n  cursor: pointer;\n}\n\n.close-modal-button {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-40%, 40%);\n}\n\n/* Add project modal & Todo modal*/\n\n.modal-header {\n  margin: -2rem -2rem 0 -2rem;\n  padding: 1rem;\n  background-color: #c38d9e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-header p {\n  color: #f7f7f7;\n  font-size: 1.5rem;\n  font-family: bold-font;\n}\n\n#add-project-modal > .modal-content,\n#add-modal-todo > .modal-content,\n#edit-modal-todo > .modal-content {\n  height: 35rem;\n  max-width: 50rem;\n  background-color: #f7f7f7;\n}\n\n#add-project-modal form,\n#add-modal-todo form,\n#edit-modal-todo form {\n  padding: 1rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.input-container {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  color: #141414;\n}\n\n#add-modal-todo .input-container,\n#edit-modal-todo .input-container {\n  align-items: flex-start;\n}\n\n#add-project-modal form input[type="text"],\n#add-modal-todo form input[type="text"],\n#edit-modal-todo form input[type="text"],\nform input[type="date"],\nselect {\n  font-family: main-font;\n  font-size: 1rem;\n  border: none;\n  width: 100%;\n  padding: 0.5rem;\n  letter-spacing: 1px;\n  color: #141414;\n  background-color: white;\n}\n\n#add-modal-todo ul li,\n#edit-modal-todo ul li,\nselect {\n  width: 100%;\n  margin-top: 0.4rem;\n}\n\n#add-modal-todo ul li input,\n#edit-modal-todo ul li input {\n  margin-top: 0.3rem;\n}\n\n#add-project-modal form button,\n#add-modal-todo form button,\n#edit-modal-todo form button {\n  font-family: bold-font;\n  max-width: 8rem;\n  border: 1px solid #2a9d8f;\n  padding: 0.4rem 0.2rem;\n  color: #2a9d8f;\n  background-color: #f7f7f7;\n}\n\n#add-project-modal form button:hover,\n#add-modal-todo form button:hover,\n#edit-modal-todo form button:hover {\n  color: #f7f7f7;\n  background-color: #2a9d8f;\n}\n\n#add-modal-todo .button-container,\n#edit-modal-todo .button-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n#add-modal-todo .priority-btn-grup,\n#edit-modal-todo .priority-btn-grup {\n  display: flex;\n  gap: 0.8rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.priority-btn-grup button {\n  min-width: 4.5rem;\n}\n\n.priority-btn-grup #low {\n  color: #2a9d8f;\n  border-color: #2a9d8f;\n}\n\n.priority-btn-grup #low:hover,\n.priority-btn-grup #low.active-priority {\n  color: #f7f7f7;\n  background-color: #2a9d8f;\n}\n\n.priority-btn-grup #medium {\n  color: #ffa500;\n  border-color: #ffa500;\n}\n\n.priority-btn-grup #medium:hover,\n.priority-btn-grup #medium.active-priority {\n  color: #f7f7f7;\n  background-color: #ffa500;\n}\n\n.priority-btn-grup #high {\n  color: #ff0000;\n  border-color: #ff0000;\n}\n\n.priority-btn-grup #high:hover,\n.priority-btn-grup #high.active-priority {\n  color: #f7f7f7;\n  background-color: #ff0000;\n}\n\n/* Footer */\n.attribution {\n  text-align: center;\n  width: 100%;\n  padding-bottom: 0.3rem;\n  font-size: 0.7rem;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.attribution a {\n  margin-left: 0.3rem;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"',
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/modules/handleproject.js":
      /*!**************************************!*\
  !*** ./src/modules/handleproject.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ deleteProject: () => /* binding */ deleteProject,
          /* harmony export */ getProjects: () => /* binding */ getProjects,
          /* harmony export */ getProjetsByDueDate: () =>
            /* binding */ getProjetsByDueDate,
          /* harmony export */ handleProject: () => /* binding */ handleProject,
          /* harmony export */ handleProjectCountNumber: () =>
            /* binding */ handleProjectCountNumber,
          /* harmony export */ renderDueTodosContainer: () =>
            /* binding */ renderDueTodosContainer,
          /* harmony export */
        });
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project */ "./src/modules/project.js");
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./index */ "./src/modules/index.js");
        /* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./manipulateDOM */ "./src/modules/manipulateDOM.js",
          );
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/isToday.js",
          );
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/isThisWeek.js",
          );

        function handleProject(
          newToDo = null,
          projectsList,
          todoList,
          passedProjectName = null,
        ) {
          let existingProject = null;
          if (passedProjectName) {
            existingProject = projectsList.find(
              (project) => project.name === passedProjectName,
            );

            if (!existingProject) {
              processProject(passedProjectName, projectsList);
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.renderProjectContainer)(
                projectsList,
                todoList,
              );
              (0,
              _manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.setupEventListeners)(
                todoList,
                projectsList,
              );
            } else {
              alert("Project name cannot be duplicated");
              return;
            }
          } else {
            const defaultProjectExists = projectsList.some(
              (project) => project.name === "Default",
            );

            if (!defaultProjectExists) {
              const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]("Default");
              projectsList.push(defaultProject);
            }

            const projectName = newToDo.project;
            existingProject = projectsList.find(
              (project) => project.name === projectName,
            );

            if (!existingProject) {
              processProject(projectName, projectsList);
            } else {
              return;
            }
          }
        }

        function processProject(projectName, projectsList) {
          const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[
            "default"
          ](projectName);
          projectsList.push(newProject);
          localStorage.setItem("projectsList", JSON.stringify(projectsList));

          return projectsList;
        }

        function getProjects(projectsList, todoList = null, currentProject) {
          if (!todoList) {
            let selectContent = "";

            projectsList.forEach((element) => {
              selectContent += `
            <option value="${element.name}" ${currentProject === element.name ? "selected" : ""}>${element.name}</option>
            `;
            });

            return selectContent;
          } else {
            let ulContent = "";

            projectsList.forEach((element) => {
              ulContent += `
                <li data-project-id="${element.id}">
                    <a href="#" class="project-link">${element.name}</a>
                    <span class="number-of-tasks">${countTodoinProject(element.name, todoList)}</span>
                </li>
            `;
            });

            return ulContent;
          }
        }

        function getProjetsByDueDate(todoList) {
          const dueTodayTodos = todoList.filter(
            (todo) =>
              (0, date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(
                new Date(todo.dueDate),
              ) && !todo._status,
          );
          const dueThisWeekTodos = todoList.filter(
            (todo) =>
              (0, date_fns__WEBPACK_IMPORTED_MODULE_4__.isThisWeek)(
                new Date(todo.dueDate),
              ) && !todo._status,
          );

          return { dueTodayTodos, dueThisWeekTodos };
        }

        function renderDueTodosContainer(todoList) {
          const { dueTodayTodos, dueThisWeekTodos } =
            getProjetsByDueDate(todoList);

          let ulContent = "";
          ulContent = `
        <li><a href="#" id="home-link">Home</a><span class="number-of-tasks">${countIncompleteTodos(todoList)}</span></li>
        <li><a href="#" id="today-link">Due Today</a><span class="number-of-tasks">${dueTodayTodos.length}</span></li>
        <li><a href="#" id="week-link">Due This Week</a><span class="number-of-tasks">${dueThisWeekTodos.length}</span></li>
    `;

          return ulContent;
        }

        function countIncompleteTodos(todoList) {
          let count = 0;
          todoList.forEach((elemement) => {
            if (!elemement.status) {
              count++;
            }
          });

          return count;
        }

        function countTodoinProject(element, todoList) {
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
            console.log(
              "handleProjectCountNumber: No elements found with the class 'number-of-tasks'.",
            );
          }

          numberBouble.forEach((bouble) => {
            if (bouble.innerHTML == 0) {
              bouble.style.display = "none";
            }
          });
        }

        function deleteProject(idToDelete, projectsList, todoList) {
          const projectIndex = projectsList.findIndex(
            (project) => project.id == idToDelete,
          );

          if (projectIndex !== -1) {
            projectsList.splice(projectIndex, 1);
            localStorage.setItem("projectsList", JSON.stringify(projectsList));
            (0, _index__WEBPACK_IMPORTED_MODULE_1__.renderUI)(
              projectsList,
              todoList,
            );
            (0,
            _manipulateDOM__WEBPACK_IMPORTED_MODULE_2__.setupEventListeners)(
              todoList,
              projectsList,
            );
          }
        }

        /***/
      },

    /***/ "./src/modules/handletodos.js":
      /*!************************************!*\
  !*** ./src/modules/handletodos.js ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addNewTodo: () => /* binding */ addNewTodo,
          /* harmony export */ deleteTodoItem: () =>
            /* binding */ deleteTodoItem,
          /* harmony export */ displayToDods: () => /* binding */ displayToDods,
          /* harmony export */ editTodo: () => /* binding */ editTodo,
          /* harmony export */ getTodosByProject: () =>
            /* binding */ getTodosByProject,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/modules/index.js");
        /* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./manipulateDOM */ "./src/modules/manipulateDOM.js",
          );
        /* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./handleproject */ "./src/modules/handleproject.js",
          );
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/format.js",
          );

        function displayToDods(todoList) {
          let ulContent = "";

          todoList.forEach((element) => {
            ulContent += `
            <li class="item" id="item-${element.id}">
                <div class="name-grup ${element.status ? "finished" : ""}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" class="todo-checkbox" ${element.status ? "checked" : ""}>
                    <p class="finished">${element.title}</p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ""}">
                    <p id="due-date">${(0, date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(element.dueDate), "MMM do")}</p>
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
          return todoList.filter(
            (taskList) => taskList.project === curentElement,
          );
        }

        function addNewTodo(
          todoTitle,
          todoDescription,
          selectedProject,
          selecteDate,
          selectedPriority,
          todoList,
          projectsList,
        ) {
          const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["default"](
            todoTitle,
            todoDescription,
            selecteDate,
            selectedPriority,
            false,
            selectedProject,
          );

          if (!checkForDuplicateTitle(newTodo, todoList)) {
            todoList.push(newTodo);
            localStorage.setItem("todoList", JSON.stringify(todoList));
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(
              projectsList,
              todoList,
            );
            (0,
            _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.setupEventListeners)(
              todoList,
              projectsList,
            );
          } else {
            alert("Title needs to be unique");
            return;
          }
        }

        function editTodo(
          projectId,
          todoTitle,
          todoDescription,
          selectedProject,
          selecteDate,
          selectedPriority,
          todoList,
          projectsList,
        ) {
          const selectedTodo = todoList[projectId];
          selectedTodo._title = todoTitle;
          selectedTodo._description = todoDescription;
          selectedTodo._project = selectedProject;
          selectedTodo._dueDate = selecteDate;
          selectedTodo._priority = selectedPriority;

          localStorage.setItem("todoList", JSON.stringify(todoList));
          (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(
            projectsList,
            todoList,
          );
          (0, _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.setupEventListeners)(
            todoList,
            projectsList,
          );
        }

        function checkForDuplicateTitle(newTodo, todoList) {
          return todoList.some((todoList) => todoList.title === newTodo.title);
        }

        function deleteTodoItem(elementId, todoList, projectsList) {
          const todoIndex = todoList.findIndex((todo) => todo.id == elementId);

          todoList.splice(todoIndex, 1);
          localStorage.setItem("todoList", JSON.stringify(todoList));

          if (_manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.statusOfUI) {
            const projectName =
              _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.filteredTodos[0]
                .project;
            let filteredTodosAfterDeletion = getTodosByProject(
              todoList,
              projectName,
            );
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
              filteredTodosAfterDeletion,
            );
            (0,
            _handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProjectCountNumber)();
          } else {
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(
              projectsList,
              todoList,
            );
            (0,
            _manipulateDOM__WEBPACK_IMPORTED_MODULE_1__.setupEventListeners)(
              todoList,
              projectsList,
            );
            if (todoList.length == 0) {
              (0, _index__WEBPACK_IMPORTED_MODULE_0__.handleEmptyProjectPage)();
            }
          }
        }

        /***/
      },

    /***/ "./src/modules/index.js":
      /*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ displayToDods: () =>
            /* reexport safe */ _handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods,
          /* harmony export */ handleEmptyProjectPage: () =>
            /* binding */ handleEmptyProjectPage,
          /* harmony export */ renderHomeMenu: () =>
            /* binding */ renderHomeMenu,
          /* harmony export */ renderProjectContainer: () =>
            /* binding */ renderProjectContainer,
          /* harmony export */ renderTodoContainer: () =>
            /* binding */ renderTodoContainer,
          /* harmony export */ renderUI: () => /* binding */ renderUI,
          /* harmony export */
        });
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../style.css */ "./src/style.css");
        /* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./handleproject */ "./src/modules/handleproject.js",
          );
        /* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./handletodos */ "./src/modules/handletodos.js",
          );
        /* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./startup */ "./src/modules/startup.js");
        /* harmony import */ var _images_to_do_list_svg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../images/to-do-list.svg */ "./src/images/to-do-list.svg",
          );
        /* harmony import */ var _manipulateDOM__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./manipulateDOM */ "./src/modules/manipulateDOM.js",
          );

        //correct typo above: should be displayTodos

        function renderUI(projectsList, todoList) {
          let container = document.querySelector(".container");
          const headerTodoIcon = new Image();
          headerTodoIcon.src =
            _images_to_do_list_svg__WEBPACK_IMPORTED_MODULE_4__;

          if (!container) {
            container = document.createElement("div");
            container.classList.add("container");
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
                    ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_1__.renderDueTodosContainer)(todoList)}
                </ul>
                <ul id="projects" class="menu-links">
                    ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_1__.getProjects)(projectsList, todoList)}
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
                    ${(0, _handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods)(todoList)}
                </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;

          if (todoList.length == 0) {
            const errorMessage = `<p class="emptyPageNotification">There are no more todos.</p>`;
            renderTodoContainer(todoList, errorMessage);
            localStorage.setItem("todoList", JSON.stringify(todoList));
          }

          //---!!!---//
          const headerIconContainer = document.getElementById(
            "header-icon-container",
          );
          headerIconContainer.appendChild(headerTodoIcon);
          (0,
          _handleproject__WEBPACK_IMPORTED_MODULE_1__.handleProjectCountNumber)(
            todoList,
          );
        }

        function renderTodoContainer(filteredTodos, errorMessage) {
          let container = document.querySelector(".todo-container");

          container.innerHTML = "";

          if (filteredTodos.length > 0) {
            container.innerHTML = `
        <ul class="items-list">
            ${(0, _handletodos__WEBPACK_IMPORTED_MODULE_2__.displayToDods)(filteredTodos)}  
        </ul>
    `;
          } else {
            container.innerHTML = `
        <div class="items-list">
            ${errorMessage}
        </div>
        `;

            if (!errorMessage) {
              container.innerHTML = `
            <div class="items-list">
                <h2>Empty Project!</h2>
                <p>Create a new to-do item or delete project.</p>
                <button class="delete-btn">Delete project</button>
            </div>
            `;
            }

            handleEmptyProjectPage();
          }
        }

        function renderProjectContainer(projectsList, todoList) {
          let container = document.getElementById("projects");

          container.innerHTML = "";
          container.innerHTML = `
        ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_1__.getProjects)(projectsList, todoList)}
    `;
        }

        function renderHomeMenu(todoList) {
          let container = document.getElementById("todos-due");

          container.innerHTML = "";
          container.innerHTML = `
        ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_1__.renderDueTodosContainer)(todoList)}
    `;
        }

        function handleEmptyProjectPage() {
          let container = document.querySelector(".todo-container");

          const { projectsList, todoList } =
            _startup__WEBPACK_IMPORTED_MODULE_3__.defaultValues;

          getActiveLink(function (idToDelete) {
            const deleteBtn = container.querySelector(".delete-btn");
            if (deleteBtn) {
              deleteBtn.addEventListener("click", function () {
                (0, _handleproject__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(
                  idToDelete,
                  projectsList,
                  todoList,
                );
              });
            } else {
              console.log("RenderUI case");
            }
          });
        }

        function getActiveLink(callback) {
          const linkContainer = document.querySelector("#projects");

          linkContainer.addEventListener("click", function (event) {
            const target = event.target;
            const activeProjectId =
              target.parentElement.getAttribute("data-project-id");

            // Pass the activeProjectId to the callback function
            if (callback && typeof callback === "function") {
              callback(activeProjectId);
            }
          });
        }

        //Until i figure out async-await i use these function to add the eventlisteners
        //after the UI is rendered. Adding the call to setupEventListeners in renderUI returned a webpack module error
        //because the UI was not fully rendered.
        function callEvents() {
          const { projectsList, todoList } =
            _startup__WEBPACK_IMPORTED_MODULE_3__.defaultValues;

          try {
            (0,
            _manipulateDOM__WEBPACK_IMPORTED_MODULE_5__.setupEventListeners)(
              todoList,
              projectsList,
            );
          } catch (error) {
            console.error("Error calling callEvents:", error);
          }
        }
        callEvents();

        /***/
      },

    /***/ "./src/modules/manipulateDOM.js":
      /*!**************************************!*\
  !*** ./src/modules/manipulateDOM.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ filteredTodos: () => /* binding */ filteredTodos,
          /* harmony export */ setupEventListeners: () =>
            /* binding */ setupEventListeners,
          /* harmony export */ statusOfUI: () => /* binding */ statusOfUI,
          /* harmony export */
        });
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./index */ "./src/modules/index.js");
        /* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./handletodos */ "./src/modules/handletodos.js",
          );
        /* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./handleproject */ "./src/modules/handleproject.js",
          );
        /* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! date-fns */ "./node_modules/date-fns/format.js",
          );

        let statusOfUI = false;
        let filteredTodos = [];

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          (function () {
            document.addEventListener("DOMContentLoaded", function () {
              //Menu links interaction
              const menuLinks = document.querySelectorAll(".menu-links a");

              menuLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                  menuLinks.forEach(function (link) {
                    link.classList.remove("active");
                  });
                  this.classList.add("active");
                });
              });
            });
          })();

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
                    <input type="text" id="name" required>
                </div>
                <button id="create-project">Create project</button>
            </form>
            
        </div>
    </div>
    `;

          addCloseEventListeners(modalContainer);
        }

        function openToDoModal(modalContainer, projectsList) {
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
                        <input type="text" id="title" required>
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description">
                    </li>
                    <li>    
                        <label for="project">Project</label>
                        <select id="projects-select" name="projects">
                            ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_2__.getProjects)(projectsList)}    
                        </select> 
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low" class="active-priority" type="button">Low</button>
                        <button id="medium" type="button">Medium</button>
                        <button id="high" type="button">High</button>
                    </div>

                    <button id="create-todo">Create project</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
          addCloseEventListeners(modalContainer);
        }

        function openViewModal(elementId, todoList, modalContainer) {
          modalContainer.innerHTML = "";
          modalContainer.innerHTML = `
    <div id="view-modal" class="modal active">
        <div class="modal-content">
            <img src="../src/images/close-ellipse.svg" class="close-modal-button close-btn">
            <h2>${todoList[elementId].title}</h2>
            <div class="detail">
                <p class="detail-title">Project: </p>
                <p>${todoList[elementId].project}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Priority: </p>
                <p>${todoList[elementId].priority}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Due Date: </p>
                <p>${(0, date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(todoList[elementId].dueDate), "do MMM yyy")}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Details: </p>
                <p>${todoList[elementId].description}</p>
            </div>
        </div>    
    </div>
    `;
          addCloseEventListeners(modalContainer);
        }

        function openEditModal(
          elementId,
          todoList,
          projectsList,
          modalContainer,
        ) {
          modalContainer.innerHTML = "";
          modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Edit To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
            </div>
            <form data-formid="${todoList[elementId].id}">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" value="${todoList[elementId].title}">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description" value="${todoList[elementId].description}">
                    </li>
                    <li>    
                        <label for="project">Project</label>
                        <select id="projects-select" name="projects">
                            ${(0, _handleproject__WEBPACK_IMPORTED_MODULE_2__.getProjects)(projectsList, null, todoList[elementId].project)} 
                        </select> 
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate" value="${todoList[elementId].dueDate}">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low" class="${todoList[elementId].priority === "low" ? "active-priority" : ""}">Low</button>
                        <button id="medium" class="${todoList[elementId].priority === "medium" ? "active-priority" : ""}">Medium</button>
                        <button id="high" class="${todoList[elementId].priority === "high" ? "active-priority" : ""}">High</button>
                    </div>

                    <button id="edit-modal-todo">Confirm edit</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;

          addCloseEventListeners(modalContainer);
        }

        function modifyTodoStatus(elementId, target, projectsList, todoList) {
          const todoItem = todoList.find((todo) => todo.id == elementId);
          todoItem.status = target.checked;

          if (!todoItem) {
            return;
          }

          if (statusOfUI) {
            (0, _handletodos__WEBPACK_IMPORTED_MODULE_1__.displayToDods)(
              todoList,
            );
            (0, _handletodos__WEBPACK_IMPORTED_MODULE_1__.getTodosByProject)(
              todoList,
              todoItem.project,
            );
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderProjectContainer)(
              projectsList,
              todoList,
            );
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderHomeMenu)(todoList);
            (0,
            _handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProjectCountNumber)();
          } else {
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(
              projectsList,
              todoList,
            );
          }
          setupEventListeners(todoList, projectsList);
        }

        function addCloseEventListeners(modalContainer) {
          const closeButtons = modalContainer.querySelectorAll(".close-btn");
          closeButtons.forEach((button) => {
            button.addEventListener("click", function () {
              modalContainer.innerHTML = "";
            });
          });
        }

        function setupEventListeners(todoList, projectsList) {
          const todoListContainer = document.querySelector(".todo-container");
          let modalContainer = document.getElementById("modal-container");

          //Home and dueDate menu section
          const { dueTodayTodos, dueThisWeekTodos } = (0,
          _handleproject__WEBPACK_IMPORTED_MODULE_2__.getProjetsByDueDate)(
            todoList,
          );
          const todayTodosLink = document.getElementById("today-link");
          const thisWeekTodosLink = document.getElementById("week-link");

          todayTodosLink.addEventListener("click", function () {
            if (dueTodayTodos.length !== 0) {
              (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
                dueTodayTodos,
              );
            } else {
              const errorMessage = `<p class="emptyPageNotification">There are no todos with due date today.</p>`;
              (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
                dueTodayTodos,
                errorMessage,
              );
            }

            return (statusOfUI = true);
          });

          thisWeekTodosLink.addEventListener("click", function () {
            if (dueThisWeekTodos.length !== 0) {
              (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
                dueThisWeekTodos,
              );
            } else {
              const errorMessage = `<p class="emptyPageNotification">There are no todos with due date this week.</p>`;
              (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
                dueThisWeekTodos,
                errorMessage,
              );
            }

            return (statusOfUI = true);
          });

          //
          const homeLink = document.getElementById("home-link");
          const addProjectBTN = document.querySelector(".addproject");
          const addToDoBTN = document.querySelector(".addtodo");

          addProjectBTN.addEventListener("click", function () {
            openProjectModal(modalContainer, projectsList);
          });

          addToDoBTN.addEventListener("click", function () {
            openToDoModal(modalContainer, projectsList);
          });

          homeLink.addEventListener("click", function () {
            (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderUI)(
              projectsList,
              todoList,
            );
            setupEventListeners(todoList, projectsList);
            statusOfUI = false;
          });

          function adUIListeners(event) {
            const target = event.target;
            const listItem = target.closest(".item");
            const elementId = listItem ? +listItem.id.split("-")[1] : null;

            if (elementId !== null) {
              if (target.closest(".view-btn")) {
                openViewModal(elementId, todoList, modalContainer);
              } else if (target.closest(".edit-btn")) {
                openEditModal(
                  elementId,
                  todoList,
                  projectsList,
                  modalContainer,
                );
              } else if (target.closest(".delete-btn")) {
                (0, _handletodos__WEBPACK_IMPORTED_MODULE_1__.deleteTodoItem)(
                  elementId,
                  todoList,
                  projectsList,
                );
              } else if (target.classList.contains("todo-checkbox")) {
                modifyTodoStatus(elementId, target, projectsList, todoList);
                todoListContainer.removeEventListener("click", adUIListeners);
              }
            }
          }

          todoListContainer.addEventListener("click", adUIListeners);

          // Attach event listeners to project links
          const projectList = document.querySelectorAll("#projects li");
          console.log(projectList);

          projectList.forEach((li) => {
            const anchor = li.querySelector("a");
            anchor.addEventListener("click", function (event) {
              console.log("Anchor log fired");
              event.preventDefault();
              const projectName = anchor.textContent;
              console.log(projectName);

              filteredTodos = (0,
              _handletodos__WEBPACK_IMPORTED_MODULE_1__.getTodosByProject)(
                todoList,
                projectName,
              );

              (0, _index__WEBPACK_IMPORTED_MODULE_0__.renderTodoContainer)(
                filteredTodos,
              );
              (0,
              _handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProjectCountNumber)();

              projectList.forEach((item) => {
                const link = item.querySelector("a");
                link.classList.remove("active");
              });

              anchor.classList.add("active");
              statusOfUI = true;
              return statusOfUI, filteredTodos;
            });
          });

          //Event listeners for new Projects/Todos and handlers for edits
          modalContainer.addEventListener("click", function (event) {
            if (event.target && event.target.id === "create-project") {
              event.preventDefault();

              const passedProjectName = document
                .querySelector("#name")
                .value.trim();
              if (passedProjectName.length === 0) {
                alert("Project name cannot be empty");
                return;
              } else {
                (0, _handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProject)(
                  null,
                  projectsList,
                  todoList,
                  passedProjectName,
                );
                modalContainer.innerHTML = "";
              }
            }

            const priorityBTNS = document.querySelectorAll(
              ".priority-btn-grup button",
            );

            priorityBTNS.forEach((btn) => {
              btn.addEventListener("click", function (event) {
                event.preventDefault();

                priorityBTNS.forEach((button) =>
                  button.classList.remove("active-priority"),
                );

                this.classList.add("active-priority");
              });
            });

            if (event.target && event.target.id === "create-todo") {
              event.preventDefault();
              const todoTitle = document.getElementById("title").value.trim();
              const todoDescription = document
                .getElementById("description")
                .value.trim();
              const projectsDropdown =
                document.getElementById("projects-select");
              const selectedProject = projectsDropdown.value;
              const selecteDate =
                document.querySelector('input[type="date"]').value;
              const activePriorityBtn = document.querySelector(
                ".priority-btn-grup .active-priority",
              );
              const selectedPriority = activePriorityBtn
                ? activePriorityBtn.id
                : null;

              if (
                todoTitle &&
                selectedProject &&
                selecteDate &&
                selectedPriority
              ) {
                (0, _handletodos__WEBPACK_IMPORTED_MODULE_1__.addNewTodo)(
                  todoTitle,
                  todoDescription,
                  selectedProject,
                  selecteDate,
                  selectedPriority,
                  todoList,
                  projectsList,
                );
                modalContainer.innerHTML = "";
              } else {
                alert("Required fields: Title and Date");
                return;
              }
            }
            if (event.target && event.target.id === "edit-modal-todo") {
              event.preventDefault();

              const form = document.getElementsByTagName("form");
              const projectId = form[0].dataset.formid;
              const todoTitle = document.getElementById("title").value.trim();
              const todoDescription = document
                .getElementById("description")
                .value.trim();
              const projectsDropdown =
                document.getElementById("projects-select");
              const selectedProject = projectsDropdown.value;
              const selecteDate =
                document.querySelector('input[type="date"]').value;
              const activePriorityBtn = document.querySelector(
                ".priority-btn-grup .active-priority",
              );
              const selectedPriority = activePriorityBtn
                ? activePriorityBtn.id
                : null;

              (0, _handletodos__WEBPACK_IMPORTED_MODULE_1__.editTodo)(
                projectId,
                todoTitle,
                todoDescription,
                selectedProject,
                selecteDate,
                selectedPriority,
                todoList,
                projectsList,
              );
            }
          });
        }

        /***/
      },

    /***/ "./src/modules/project.js":
      /*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Project,
          /* harmony export */
        });
        class Project {
          static idCounter = -1;

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
            console.log(value);
            // this._items = value;
          }
        }

        /***/
      },

    /***/ "./src/modules/startup.js":
      /*!********************************!*\
  !*** ./src/modules/startup.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ defaultValues: () => /* binding */ defaultValues,
          /* harmony export */
        });
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./project */ "./src/modules/project.js");
        /* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./handleproject */ "./src/modules/handleproject.js",
          );
        /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./index */ "./src/modules/index.js");

        const defaultValues = (function () {
          let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
          let projectsList =
            JSON.parse(localStorage.getItem("projectsList")) || [];
          let renderOnlyContainer = false;

          if (!todoList || todoList.length === 0) {
            todoList = [
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Write on blog",
                "Write about last part from TicTacToe game",
                "2024-10-15",
                "low",
                false,
                "Home",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "TheOdinProject chapter 2",
                "Finish theOdinProject chapter 2",
                "2024-10-17",
                "low",
                true,
                "Home",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "New Odin Chapter",
                "Start a new OdinProjectChapter",
                "2024-10-16",
                "medium",
                true,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Repair blog",
                "Fix social links on blog header",
                "2024-03-29",
                "high",
                false,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Read daily a pattern",
                "https://www.patterns.dev/vanilla/import-on-interaction",
                "2024-03-20",
                "high",
                false,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "App implementation",
                "Add ability to extract the projects from the array",
                "2024-12-24",
                "low",
                true,
                "Active learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Xyx",
                "Some random text",
                "2024-09-31",
                "low",
                true,
                "Active learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "ABC",
                "First three letters from the alphabet",
                "2024-10-16",
                "high",
                false,
                "Active learning",
              ),
              //surplus
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "XYZ",
                "Some letters from the alphabet",
                "2024-10-18",
                "high",
                false,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "TheOdinProject chapter 15",
                "Finish theOdinProject chapter 15",
                "2024-10-17",
                "medium",
                true,
                "Home",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee projects",
                "lorem20",
                "2024-10-13",
                "high",
                true,
                "Zee",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee3 projects",
                "lorem20",
                "2024-10-15",
                "low",
                false,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee4 projects",
                "lorem20",
                "2024-10-15",
                "high",
                true,
                "Learning",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee5projects",
                "lorem20",
                "2024-10-16",
                "low",
                true,
                "Zee",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee6 projects",
                "lorem20",
                "2024-10-17",
                "high",
                false,
                "Zee",
              ),
              new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                "Zee7 projects",
                "lorem20",
                "2024-10-18",
                "high",
                true,
                "Home",
              ),
            ];

            projectsList = [];
            todoList.forEach((newToDo) => {
              (0, _handleproject__WEBPACK_IMPORTED_MODULE_2__.handleProject)(
                newToDo,
                projectsList,
              );
            });
          } else {
            todoList = JSON.parse(localStorage.getItem("todoList")).map(
              (item) =>
                new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](
                  item._title,
                  item._description,
                  item._dueDate,
                  item._priority,
                  item._status,
                  item._project,
                ),
            );

            projectsList = JSON.parse(localStorage.getItem("projectsList")).map(
              (item) =>
                new _project__WEBPACK_IMPORTED_MODULE_1__["default"](
                  item._name,
                ),
            );
          }

          localStorage.setItem("todoList", JSON.stringify(todoList));
          localStorage.setItem("projectsList", JSON.stringify(projectsList));

          (0, _index__WEBPACK_IMPORTED_MODULE_3__.renderUI)(
            projectsList,
            todoList,
          );

          return {
            todoList,
            projectsList,
            renderOnlyContainer,
          };
        })();

        /***/
      },

    /***/ "./src/modules/todo.js":
      /*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Todo,
          /* harmony export */
        });
        class Todo {
          static idCounter = -1;

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

          //set project(value){
          //  this.project = value;
          //}
        }

        /***/
      },

    /***/ "./src/fonts/OpenSans_Condensed-Regular.ttf":
      /*!**************************************************!*\
  !*** ./src/fonts/OpenSans_Condensed-Regular.ttf ***!
  \**************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "52dfa12fd5d4293eb596.ttf";

        /***/
      },

    /***/ "./src/fonts/OpenSans_SemiCondensed-Bold.ttf":
      /*!***************************************************!*\
  !*** ./src/fonts/OpenSans_SemiCondensed-Bold.ttf ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "7b3fd25fa49a4264418d.ttf";

        /***/
      },

    /***/ "./src/images/to-do-list.svg":
      /*!***********************************!*\
  !*** ./src/images/to-do-list.svg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "e5afd804d47fb87ee262.svg";

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addLeadingZeros: () =>
            /* binding */ addLeadingZeros,
          /* harmony export */
        });
        function addLeadingZeros(number, targetLength) {
          const sign = number < 0 ? "-" : "";
          const output = Math.abs(number)
            .toString()
            .padStart(targetLength, "0");
          return sign + output;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/defaultOptions.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getDefaultOptions: () =>
            /* binding */ getDefaultOptions,
          /* harmony export */ setDefaultOptions: () =>
            /* binding */ setDefaultOptions,
          /* harmony export */
        });
        let defaultOptions = {};

        function getDefaultOptions() {
          return defaultOptions;
        }

        function setDefaultOptions(newOptions) {
          defaultOptions = newOptions;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/formatters.js":
      /*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatters: () => /* binding */ formatters,
          /* harmony export */
        });
        /* harmony import */ var _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js",
          );
        /* harmony import */ var _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js",
          );
        /* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js",
          );
        /* harmony import */ var _getWeek_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js",
          );
        /* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js",
          );
        /* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js",
          );
        /* harmony import */ var _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js",
          );

        const dayPeriodEnum = {
          am: "am",
          pm: "pm",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        };

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* | Milliseconds in day            |
         * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
         * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
         * |  d  | Day of month                   |  D  | Day of year                    |
         * |  e  | Local day of week              |  E  | Day of week                    |
         * |  f  |                                |  F* | Day of week in month           |
         * |  g* | Modified Julian day            |  G  | Era                            |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  i! | ISO day of week                |  I! | ISO week of year               |
         * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
         * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
         * |  l* | (deprecated)                   |  L  | Stand-alone month              |
         * |  m  | Minute                         |  M  | Month                          |
         * |  n  |                                |  N  |                                |
         * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
         * |  p! | Long localized time            |  P! | Long localized date            |
         * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
         * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
         * |  u  | Extended year                  |  U* | Cyclic year                    |
         * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
         * |  w  | Local week of year             |  W* | Week of month                  |
         * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
         * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
         * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         *
         * Letters marked by ! are non-standard, but implemented by date-fns:
         * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
         * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
         *   i.e. 7 for Sunday, 1 for Monday, etc.
         * - `I` is ISO week of year, as opposed to `w` which is local week of year.
         * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
         *   `R` is supposed to be used in conjunction with `I` and `i`
         *   for universal ISO week-numbering date, whereas
         *   `Y` is supposed to be used in conjunction with `w` and `e`
         *   for week-numbering date specific to the locale.
         * - `P` is long localized date format
         * - `p` is long localized time format
         */

        const formatters = {
          // Era
          G: function (date, token, localize) {
            const era = date.getFullYear() > 0 ? 1 : 0;
            switch (token) {
              // AD, BC
              case "G":
              case "GG":
              case "GGG":
                return localize.era(era, { width: "abbreviated" });
              // A, B
              case "GGGGG":
                return localize.era(era, { width: "narrow" });
              // Anno Domini, Before Christ
              case "GGGG":
              default:
                return localize.era(era, { width: "wide" });
            }
          },

          // Year
          y: function (date, token, localize) {
            // Ordinal number
            if (token === "yo") {
              const signedYear = date.getFullYear();
              // Returns 1 for 1 BC (which is year 0 in JavaScript)
              const year = signedYear > 0 ? signedYear : 1 - signedYear;
              return localize.ordinalNumber(year, { unit: "year" });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(
              date,
              token,
            );
          },

          // Local week-numbering year
          Y: function (date, token, localize, options) {
            const signedWeekYear = (0,
            _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(
              date,
              options,
            );
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const weekYear =
              signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

            // Two digit year
            if (token === "YY") {
              const twoDigitYear = weekYear % 100;
              return (0,
              _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                twoDigitYear,
                2,
              );
            }

            // Ordinal number
            if (token === "Yo") {
              return localize.ordinalNumber(weekYear, { unit: "year" });
            }

            // Padding
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              weekYear,
              token.length,
            );
          },

          // ISO week-numbering year
          R: function (date, token) {
            const isoWeekYear = (0,
            _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(
              date,
            );

            // Padding
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              isoWeekYear,
              token.length,
            );
          },

          // Extended year. This is a single number designating the year of this calendar system.
          // The main difference between `y` and `u` localizers are B.C. years:
          // | Year | `y` | `u` |
          // |------|-----|-----|
          // | AC 1 |   1 |   1 |
          // | BC 1 |   1 |   0 |
          // | BC 2 |   2 |  -1 |
          // Also `yy` always returns the last two digits of a year,
          // while `uu` pads single digit years to 2 characters and returns other years unchanged.
          u: function (date, token) {
            const year = date.getFullYear();
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              year,
              token.length,
            );
          },

          // Quarter
          Q: function (date, token, localize) {
            const quarter = Math.ceil((date.getMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "Q":
                return String(quarter);
              // 01, 02, 03, 04
              case "QQ":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  quarter,
                  2,
                );
              // 1st, 2nd, 3rd, 4th
              case "Qo":
                return localize.ordinalNumber(quarter, { unit: "quarter" });
              // Q1, Q2, Q3, Q4
              case "QQQ":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "QQQQQ":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "formatting",
                });
              // 1st quarter, 2nd quarter, ...
              case "QQQQ":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // Stand-alone quarter
          q: function (date, token, localize) {
            const quarter = Math.ceil((date.getMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "q":
                return String(quarter);
              // 01, 02, 03, 04
              case "qq":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  quarter,
                  2,
                );
              // 1st, 2nd, 3rd, 4th
              case "qo":
                return localize.ordinalNumber(quarter, { unit: "quarter" });
              // Q1, Q2, Q3, Q4
              case "qqq":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "qqqqq":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "standalone",
                });
              // 1st quarter, 2nd quarter, ...
              case "qqqq":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },

          // Month
          M: function (date, token, localize) {
            const month = date.getMonth();
            switch (token) {
              case "M":
              case "MM":
                return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(
                  date,
                  token,
                );
              // 1st, 2nd, ..., 12th
              case "Mo":
                return localize.ordinalNumber(month + 1, { unit: "month" });
              // Jan, Feb, ..., Dec
              case "MMM":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // J, F, ..., D
              case "MMMMM":
                return localize.month(month, {
                  width: "narrow",
                  context: "formatting",
                });
              // January, February, ..., December
              case "MMMM":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // Stand-alone month
          L: function (date, token, localize) {
            const month = date.getMonth();
            switch (token) {
              // 1, 2, ..., 12
              case "L":
                return String(month + 1);
              // 01, 02, ..., 12
              case "LL":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  month + 1,
                  2,
                );
              // 1st, 2nd, ..., 12th
              case "Lo":
                return localize.ordinalNumber(month + 1, { unit: "month" });
              // Jan, Feb, ..., Dec
              case "LLL":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // J, F, ..., D
              case "LLLLL":
                return localize.month(month, {
                  width: "narrow",
                  context: "standalone",
                });
              // January, February, ..., December
              case "LLLL":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },

          // Local week of year
          w: function (date, token, localize, options) {
            const week = (0, _getWeek_js__WEBPACK_IMPORTED_MODULE_4__.getWeek)(
              date,
              options,
            );

            if (token === "wo") {
              return localize.ordinalNumber(week, { unit: "week" });
            }

            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              week,
              token.length,
            );
          },

          // ISO week of year
          I: function (date, token, localize) {
            const isoWeek = (0,
            _getISOWeek_js__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

            if (token === "Io") {
              return localize.ordinalNumber(isoWeek, { unit: "week" });
            }

            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              isoWeek,
              token.length,
            );
          },

          // Day of the month
          d: function (date, token, localize) {
            if (token === "do") {
              return localize.ordinalNumber(date.getDate(), { unit: "date" });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(
              date,
              token,
            );
          },

          // Day of year
          D: function (date, token, localize) {
            const dayOfYear = (0,
            _getDayOfYear_js__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

            if (token === "Do") {
              return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
            }

            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              dayOfYear,
              token.length,
            );
          },

          // Day of week
          E: function (date, token, localize) {
            const dayOfWeek = date.getDay();
            switch (token) {
              // Tue
              case "E":
              case "EE":
              case "EEE":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "EEEEE":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "EEEEEE":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "EEEE":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // Local day of week
          e: function (date, token, localize, options) {
            const dayOfWeek = date.getDay();
            const localDayOfWeek =
              (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (Nth day of week with current locale or weekStartsOn)
              case "e":
                return String(localDayOfWeek);
              // Padded numerical value
              case "ee":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  localDayOfWeek,
                  2,
                );
              // 1st, 2nd, ..., 7th
              case "eo":
                return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
              case "eee":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "eeeee":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "eeeeee":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "eeee":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // Stand-alone local day of week
          c: function (date, token, localize, options) {
            const dayOfWeek = date.getDay();
            const localDayOfWeek =
              (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (same as in `e`)
              case "c":
                return String(localDayOfWeek);
              // Padded numerical value
              case "cc":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  localDayOfWeek,
                  token.length,
                );
              // 1st, 2nd, ..., 7th
              case "co":
                return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
              case "ccc":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "standalone",
                });
              // T
              case "ccccc":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "standalone",
                });
              // Tu
              case "cccccc":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "standalone",
                });
              // Tuesday
              case "cccc":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "standalone",
                });
            }
          },

          // ISO day of week
          i: function (date, token, localize) {
            const dayOfWeek = date.getDay();
            const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
            switch (token) {
              // 2
              case "i":
                return String(isoDayOfWeek);
              // 02
              case "ii":
                return (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                  isoDayOfWeek,
                  token.length,
                );
              // 2nd
              case "io":
                return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
              // Tue
              case "iii":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting",
                });
              // T
              case "iiiii":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting",
                });
              // Tu
              case "iiiiii":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting",
                });
              // Tuesday
              case "iiii":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // AM or PM
          a: function (date, token, localize) {
            const hours = date.getHours();
            const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

            switch (token) {
              case "a":
              case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return localize
                  .dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting",
                  })
                  .toLowerCase();
              case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // AM, PM, midnight, noon
          b: function (date, token, localize) {
            const hours = date.getHours();
            let dayPeriodEnumValue;
            if (hours === 12) {
              dayPeriodEnumValue = dayPeriodEnum.noon;
            } else if (hours === 0) {
              dayPeriodEnumValue = dayPeriodEnum.midnight;
            } else {
              dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            }

            switch (token) {
              case "b":
              case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return localize
                  .dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting",
                  })
                  .toLowerCase();
              case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // in the morning, in the afternoon, in the evening, at night
          B: function (date, token, localize) {
            const hours = date.getHours();
            let dayPeriodEnumValue;
            if (hours >= 17) {
              dayPeriodEnumValue = dayPeriodEnum.evening;
            } else if (hours >= 12) {
              dayPeriodEnumValue = dayPeriodEnum.afternoon;
            } else if (hours >= 4) {
              dayPeriodEnumValue = dayPeriodEnum.morning;
            } else {
              dayPeriodEnumValue = dayPeriodEnum.night;
            }

            switch (token) {
              case "B":
              case "BB":
              case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting",
                });
            }
          },

          // Hour [1-12]
          h: function (date, token, localize) {
            if (token === "ho") {
              let hours = date.getHours() % 12;
              if (hours === 0) hours = 12;
              return localize.ordinalNumber(hours, { unit: "hour" });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(
              date,
              token,
            );
          },

          // Hour [0-23]
          H: function (date, token, localize) {
            if (token === "Ho") {
              return localize.ordinalNumber(date.getHours(), { unit: "hour" });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(
              date,
              token,
            );
          },

          // Hour [0-11]
          K: function (date, token, localize) {
            const hours = date.getHours() % 12;

            if (token === "Ko") {
              return localize.ordinalNumber(hours, { unit: "hour" });
            }

            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              hours,
              token.length,
            );
          },

          // Hour [1-24]
          k: function (date, token, localize) {
            let hours = date.getHours();
            if (hours === 0) hours = 24;

            if (token === "ko") {
              return localize.ordinalNumber(hours, { unit: "hour" });
            }

            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              hours,
              token.length,
            );
          },

          // Minute
          m: function (date, token, localize) {
            if (token === "mo") {
              return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute",
              });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(
              date,
              token,
            );
          },

          // Second
          s: function (date, token, localize) {
            if (token === "so") {
              return localize.ordinalNumber(date.getSeconds(), {
                unit: "second",
              });
            }

            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(
              date,
              token,
            );
          },

          // Fraction of second
          S: function (date, token) {
            return _lightFormatters_js__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(
              date,
              token,
            );
          },

          // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
          X: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();

            if (timezoneOffset === 0) {
              return "Z";
            }

            switch (token) {
              // Hours and optional minutes
              case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `XX`
              case "XXXX":
              case "XX": // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `XXX`
              case "XXXXX":
              case "XXX": // Hours and minutes with `:` delimiter
              default:
                return formatTimezone(timezoneOffset, ":");
            }
          },

          // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
          x: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();

            switch (token) {
              // Hours and optional minutes
              case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `xx`
              case "xxxx":
              case "xx": // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `xxx`
              case "xxxxx":
              case "xxx": // Hours and minutes with `:` delimiter
              default:
                return formatTimezone(timezoneOffset, ":");
            }
          },

          // Timezone (GMT)
          O: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();

            switch (token) {
              // Short
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
              // Long
              case "OOOO":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
          },

          // Timezone (specific non-location)
          z: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();

            switch (token) {
              // Short
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
              // Long
              case "zzzz":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
          },

          // Seconds timestamp
          t: function (date, token, _localize) {
            const timestamp = Math.trunc(+date / 1000);
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              timestamp,
              token.length,
            );
          },

          // Milliseconds timestamp
          T: function (date, token, _localize) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              +date,
              token.length,
            );
          },
        };

        function formatTimezoneShort(offset, delimiter = "") {
          const sign = offset > 0 ? "-" : "+";
          const absOffset = Math.abs(offset);
          const hours = Math.trunc(absOffset / 60);
          const minutes = absOffset % 60;
          if (minutes === 0) {
            return sign + String(hours);
          }
          return (
            sign +
            String(hours) +
            delimiter +
            (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
              minutes,
              2,
            )
          );
        }

        function formatTimezoneWithOptionalMinutes(offset, delimiter) {
          if (offset % 60 === 0) {
            const sign = offset > 0 ? "-" : "+";
            return (
              sign +
              (0,
              _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
                Math.abs(offset) / 60,
                2,
              )
            );
          }
          return formatTimezone(offset, delimiter);
        }

        function formatTimezone(offset, delimiter = "") {
          const sign = offset > 0 ? "-" : "+";
          const absOffset = Math.abs(offset);
          const hours = (0,
          _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
            Math.trunc(absOffset / 60),
            2,
          );
          const minutes = (0,
          _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(
            absOffset % 60,
            2,
          );
          return sign + hours + delimiter + minutes;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ lightFormatters: () =>
            /* binding */ lightFormatters,
          /* harmony export */
        });
        /* harmony import */ var _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js",
          );

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* |                                |
         * |  d  | Day of month                   |  D  |                                |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  m  | Minute                         |  M  | Month                          |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  y  | Year (abs)                     |  Y  |                                |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         */

        const lightFormatters = {
          // Year
          y(date, token) {
            // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
            // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
            // |----------|-------|----|-------|-------|-------|
            // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
            // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
            // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
            // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
            // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              token === "yy" ? year % 100 : year,
              token.length,
            );
          },

          // Month
          M(date, token) {
            const month = date.getMonth();
            return token === "M"
              ? String(month + 1)
              : (0,
                _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
                  month + 1,
                  2,
                );
          },

          // Day of the month
          d(date, token) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              date.getDate(),
              token.length,
            );
          },

          // AM or PM
          a(date, token) {
            const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

            switch (token) {
              case "a":
              case "aa":
                return dayPeriodEnumValue.toUpperCase();
              case "aaa":
                return dayPeriodEnumValue;
              case "aaaaa":
                return dayPeriodEnumValue[0];
              case "aaaa":
              default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
            }
          },

          // Hour [1-12]
          h(date, token) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              date.getHours() % 12 || 12,
              token.length,
            );
          },

          // Hour [0-23]
          H(date, token) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              date.getHours(),
              token.length,
            );
          },

          // Minute
          m(date, token) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              date.getMinutes(),
              token.length,
            );
          },

          // Second
          s(date, token) {
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              date.getSeconds(),
              token.length,
            );
          },

          // Fraction of second
          S(date, token) {
            const numberOfDigits = token.length;
            const milliseconds = date.getMilliseconds();
            const fractionalSeconds = Math.trunc(
              milliseconds * Math.pow(10, numberOfDigits - 3),
            );
            return (0,
            _addLeadingZeros_js__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(
              fractionalSeconds,
              token.length,
            );
          },
        };

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ longFormatters: () =>
            /* binding */ longFormatters,
          /* harmony export */
        });
        const dateLongFormatter = (pattern, formatLong) => {
          switch (pattern) {
            case "P":
              return formatLong.date({ width: "short" });
            case "PP":
              return formatLong.date({ width: "medium" });
            case "PPP":
              return formatLong.date({ width: "long" });
            case "PPPP":
            default:
              return formatLong.date({ width: "full" });
          }
        };

        const timeLongFormatter = (pattern, formatLong) => {
          switch (pattern) {
            case "p":
              return formatLong.time({ width: "short" });
            case "pp":
              return formatLong.time({ width: "medium" });
            case "ppp":
              return formatLong.time({ width: "long" });
            case "pppp":
            default:
              return formatLong.time({ width: "full" });
          }
        };

        const dateTimeLongFormatter = (pattern, formatLong) => {
          const matchResult = pattern.match(/(P+)(p+)?/) || [];
          const datePattern = matchResult[1];
          const timePattern = matchResult[2];

          if (!timePattern) {
            return dateLongFormatter(pattern, formatLong);
          }

          let dateTimeFormat;

          switch (datePattern) {
            case "P":
              dateTimeFormat = formatLong.dateTime({ width: "short" });
              break;
            case "PP":
              dateTimeFormat = formatLong.dateTime({ width: "medium" });
              break;
            case "PPP":
              dateTimeFormat = formatLong.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              dateTimeFormat = formatLong.dateTime({ width: "full" });
              break;
          }

          return dateTimeFormat
            .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
            .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
        };

        const longFormatters = {
          p: timeLongFormatter,
          P: dateTimeLongFormatter,
        };

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getTimezoneOffsetInMilliseconds: () =>
            /* binding */ getTimezoneOffsetInMilliseconds,
          /* harmony export */
        });
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
         * They usually appear for dates that denote time before the timezones were introduced
         * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
         * and GMT+01:00:00 after that date)
         *
         * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
         * which would lead to incorrect calculations.
         *
         * This function returns the timezone offset in milliseconds that takes seconds in account.
         */
        function getTimezoneOffsetInMilliseconds(date) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
          );
          const utcDate = new Date(
            Date.UTC(
              _date.getFullYear(),
              _date.getMonth(),
              _date.getDate(),
              _date.getHours(),
              _date.getMinutes(),
              _date.getSeconds(),
              _date.getMilliseconds(),
            ),
          );
          utcDate.setUTCFullYear(_date.getFullYear());
          return +date - +utcDate;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/normalizeDates.js":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/normalizeDates.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ normalizeDates: () =>
            /* binding */ normalizeDates,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );

        function normalizeDates(context, ...dates) {
          const normalize =
            _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom.bind(
              null,
              context || dates.find((date) => typeof date === "object"),
            );
          return dates.map(normalize);
        }

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/protectedTokens.js":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isProtectedDayOfYearToken: () =>
            /* binding */ isProtectedDayOfYearToken,
          /* harmony export */ isProtectedWeekYearToken: () =>
            /* binding */ isProtectedWeekYearToken,
          /* harmony export */ warnOrThrowProtectedError: () =>
            /* binding */ warnOrThrowProtectedError,
          /* harmony export */
        });
        const dayOfYearTokenRE = /^D+$/;
        const weekYearTokenRE = /^Y+$/;

        const throwTokens = ["D", "DD", "YY", "YYYY"];

        function isProtectedDayOfYearToken(token) {
          return dayOfYearTokenRE.test(token);
        }

        function isProtectedWeekYearToken(token) {
          return weekYearTokenRE.test(token);
        }

        function warnOrThrowProtectedError(token, format, input) {
          const _message = message(token, format, input);
          console.warn(_message);
          if (throwTokens.includes(token)) throw new RangeError(_message);
        }

        function message(token, format, input) {
          const subject = token[0] === "Y" ? "years" : "days of the month";
          return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/constants.js":
      /*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ constructFromSymbol: () =>
            /* binding */ constructFromSymbol,
          /* harmony export */ daysInWeek: () => /* binding */ daysInWeek,
          /* harmony export */ daysInYear: () => /* binding */ daysInYear,
          /* harmony export */ maxTime: () => /* binding */ maxTime,
          /* harmony export */ millisecondsInDay: () =>
            /* binding */ millisecondsInDay,
          /* harmony export */ millisecondsInHour: () =>
            /* binding */ millisecondsInHour,
          /* harmony export */ millisecondsInMinute: () =>
            /* binding */ millisecondsInMinute,
          /* harmony export */ millisecondsInSecond: () =>
            /* binding */ millisecondsInSecond,
          /* harmony export */ millisecondsInWeek: () =>
            /* binding */ millisecondsInWeek,
          /* harmony export */ minTime: () => /* binding */ minTime,
          /* harmony export */ minutesInDay: () => /* binding */ minutesInDay,
          /* harmony export */ minutesInHour: () => /* binding */ minutesInHour,
          /* harmony export */ minutesInMonth: () =>
            /* binding */ minutesInMonth,
          /* harmony export */ minutesInYear: () => /* binding */ minutesInYear,
          /* harmony export */ monthsInQuarter: () =>
            /* binding */ monthsInQuarter,
          /* harmony export */ monthsInYear: () => /* binding */ monthsInYear,
          /* harmony export */ quartersInYear: () =>
            /* binding */ quartersInYear,
          /* harmony export */ secondsInDay: () => /* binding */ secondsInDay,
          /* harmony export */ secondsInHour: () => /* binding */ secondsInHour,
          /* harmony export */ secondsInMinute: () =>
            /* binding */ secondsInMinute,
          /* harmony export */ secondsInMonth: () =>
            /* binding */ secondsInMonth,
          /* harmony export */ secondsInQuarter: () =>
            /* binding */ secondsInQuarter,
          /* harmony export */ secondsInWeek: () => /* binding */ secondsInWeek,
          /* harmony export */ secondsInYear: () => /* binding */ secondsInYear,
          /* harmony export */
        });
        /**
         * @module constants
         * @summary Useful constants
         * @description
         * Collection of useful date constants.
         *
         * The constants could be imported from `date-fns/constants`:
         *
         * ```ts
         * import { maxTime, minTime } from "./constants/date-fns/constants";
         *
         * function isAllowedTime(time) {
         *   return time <= maxTime && time >= minTime;
         * }
         * ```
         */

        /**
         * @constant
         * @name daysInWeek
         * @summary Days in 1 week.
         */
        const daysInWeek = 7;

        /**
         * @constant
         * @name daysInYear
         * @summary Days in 1 year.
         *
         * @description
         * How many days in a year.
         *
         * One years equals 365.2425 days according to the formula:
         *
         * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
         * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
         */
        const daysInYear = 365.2425;

        /**
         * @constant
         * @name maxTime
         * @summary Maximum allowed time.
         *
         * @example
         * import { maxTime } from "./constants/date-fns/constants";
         *
         * const isValid = 8640000000000001 <= maxTime;
         * //=> false
         *
         * new Date(8640000000000001);
         * //=> Invalid Date
         */
        const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

        /**
         * @constant
         * @name minTime
         * @summary Minimum allowed time.
         *
         * @example
         * import { minTime } from "./constants/date-fns/constants";
         *
         * const isValid = -8640000000000001 >= minTime;
         * //=> false
         *
         * new Date(-8640000000000001)
         * //=> Invalid Date
         */
        const minTime = -maxTime;

        /**
         * @constant
         * @name millisecondsInWeek
         * @summary Milliseconds in 1 week.
         */
        const millisecondsInWeek = 604800000;

        /**
         * @constant
         * @name millisecondsInDay
         * @summary Milliseconds in 1 day.
         */
        const millisecondsInDay = 86400000;

        /**
         * @constant
         * @name millisecondsInMinute
         * @summary Milliseconds in 1 minute
         */
        const millisecondsInMinute = 60000;

        /**
         * @constant
         * @name millisecondsInHour
         * @summary Milliseconds in 1 hour
         */
        const millisecondsInHour = 3600000;

        /**
         * @constant
         * @name millisecondsInSecond
         * @summary Milliseconds in 1 second
         */
        const millisecondsInSecond = 1000;

        /**
         * @constant
         * @name minutesInYear
         * @summary Minutes in 1 year.
         */
        const minutesInYear = 525600;

        /**
         * @constant
         * @name minutesInMonth
         * @summary Minutes in 1 month.
         */
        const minutesInMonth = 43200;

        /**
         * @constant
         * @name minutesInDay
         * @summary Minutes in 1 day.
         */
        const minutesInDay = 1440;

        /**
         * @constant
         * @name minutesInHour
         * @summary Minutes in 1 hour.
         */
        const minutesInHour = 60;

        /**
         * @constant
         * @name monthsInQuarter
         * @summary Months in 1 quarter.
         */
        const monthsInQuarter = 3;

        /**
         * @constant
         * @name monthsInYear
         * @summary Months in 1 year.
         */
        const monthsInYear = 12;

        /**
         * @constant
         * @name quartersInYear
         * @summary Quarters in 1 year
         */
        const quartersInYear = 4;

        /**
         * @constant
         * @name secondsInHour
         * @summary Seconds in 1 hour.
         */
        const secondsInHour = 3600;

        /**
         * @constant
         * @name secondsInMinute
         * @summary Seconds in 1 minute.
         */
        const secondsInMinute = 60;

        /**
         * @constant
         * @name secondsInDay
         * @summary Seconds in 1 day.
         */
        const secondsInDay = secondsInHour * 24;

        /**
         * @constant
         * @name secondsInWeek
         * @summary Seconds in 1 week.
         */
        const secondsInWeek = secondsInDay * 7;

        /**
         * @constant
         * @name secondsInYear
         * @summary Seconds in 1 year.
         */
        const secondsInYear = secondsInDay * daysInYear;

        /**
         * @constant
         * @name secondsInMonth
         * @summary Seconds in 1 month
         */
        const secondsInMonth = secondsInYear / 12;

        /**
         * @constant
         * @name secondsInQuarter
         * @summary Seconds in 1 quarter.
         */
        const secondsInQuarter = secondsInMonth * 3;

        /**
         * @constant
         * @name constructFromSymbol
         * @summary Symbol enabling Date extensions to inherit properties from the reference date.
         *
         * The symbol is used to enable the `constructFrom` function to construct a date
         * using a reference date and a value. It allows to transfer extra properties
         * from the reference date to the new date. It's useful for extensions like
         * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
         * a constructor argument.
         */
        const constructFromSymbol = Symbol.for("constructDateFrom");

        /***/
      },

    /***/ "./node_modules/date-fns/constructFrom.js":
      /*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ constructFrom: () => /* binding */ constructFrom,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./constants.js */ "./node_modules/date-fns/constants.js",
          );

        /**
         * @name constructFrom
         * @category Generic Helpers
         * @summary Constructs a date using the reference date and the value
         *
         * @description
         * The function constructs a new date using the constructor from the reference
         * date and the given value. It helps to build generic functions that accept
         * date extensions.
         *
         * It defaults to `Date` if the passed reference date is a number or a string.
         *
         * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
         * enabling to transfer extra properties from the reference date to the new date.
         * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
         * that accept a time zone as a constructor argument.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         *
         * @param date - The reference date to take constructor from
         * @param value - The value to create the date
         *
         * @returns Date initialized using the given date and value
         *
         * @example
         * import { constructFrom } from "./constructFrom/date-fns";
         *
         * // A function that clones a date preserving the original type
         * function cloneDate<DateType extends Date>(date: DateType): DateType {
         *   return constructFrom(
         *     date, // Use constructor from the given date
         *     date.getTime() // Use the date value to create a new date
         *   );
         * }
         */
        function constructFrom(date, value) {
          if (typeof date === "function") return date(value);

          if (
            date &&
            typeof date === "object" &&
            _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in
              date
          )
            return date[
              _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol
            ](value);

          if (date instanceof Date) return new date.constructor(value);

          return new Date(value);
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          constructFrom;

        /***/
      },

    /***/ "./node_modules/date-fns/constructNow.js":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/constructNow.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ constructNow: () => /* binding */ constructNow,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );

        /**
         * @name constructNow
         * @category Generic Helpers
         * @summary Constructs a new current date using the passed value constructor.
         * @pure false
         *
         * @description
         * The function constructs a new current date using the constructor from
         * the reference date. It helps to build generic functions that accept date
         * extensions and use the current date.
         *
         * It defaults to `Date` if the passed reference date is a number or a string.
         *
         * @param date - The reference date to take constructor from
         *
         * @returns Current date initialized using the given date constructor
         *
         * @example
         * import { constructNow, isSameDay } from 'date-fns'
         *
         * function isToday<DateType extends Date>(
         *   date: DateArg<DateType>,
         * ): boolean {
         *   // If we were to use `new Date()` directly, the function would  behave
         *   // differently in different timezones and return false for the same date.
         *   return isSameDay(date, constructNow(date));
         * }
         */
        function constructNow(date) {
          return (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(
            date,
            Date.now(),
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          constructNow;

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInCalendarDays.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ differenceInCalendarDays: () =>
            /* binding */ differenceInCalendarDays,
          /* harmony export */
        });
        /* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js",
          );
        /* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js",
          );
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./constants.js */ "./node_modules/date-fns/constants.js",
          );
        /* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js",
          );

        /**
         * The {@link differenceInCalendarDays} function options.
         */

        /**
         * @name differenceInCalendarDays
         * @category Day Helpers
         * @summary Get the number of calendar days between the given dates.
         *
         * @description
         * Get the number of calendar days between the given dates. This means that the times are removed
         * from the dates and then the difference in days is calculated.
         *
         * @param laterDate - The later date
         * @param earlierDate - The earlier date
         * @param options - The options object
         *
         * @returns The number of calendar days
         *
         * @example
         * // How many calendar days are between
         * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
         * const result = differenceInCalendarDays(
         *   new Date(2012, 6, 2, 0, 0),
         *   new Date(2011, 6, 2, 23, 0)
         * )
         * //=> 366
         * // How many calendar days are between
         * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
         * const result = differenceInCalendarDays(
         *   new Date(2011, 6, 3, 0, 1),
         *   new Date(2011, 6, 2, 23, 59)
         * )
         * //=> 1
         */
        function differenceInCalendarDays(laterDate, earlierDate, options) {
          const [laterDate_, earlierDate_] = (0,
          _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
            options?.in,
            laterDate,
            earlierDate,
          );

          const laterStartOfDay = (0,
          _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(laterDate_);
          const earlierStartOfDay = (0,
          _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(earlierDate_);

          const laterTimestamp =
            +laterStartOfDay -
            (0,
            _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(
              laterStartOfDay,
            );
          const earlierTimestamp =
            +earlierStartOfDay -
            (0,
            _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(
              earlierStartOfDay,
            );

          // Round the number of days to the nearest integer because the number of
          // milliseconds in a day is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return Math.round(
            (laterTimestamp - earlierTimestamp) /
              _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInDay,
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          differenceInCalendarDays;

        /***/
      },

    /***/ "./node_modules/date-fns/format.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ format: () => /* binding */ format,
          /* harmony export */ formatDate: () => /* binding */ format,
          /* harmony export */ formatters: () =>
            /* reexport safe */ _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatters,
          /* harmony export */ longFormatters: () =>
            /* reexport safe */ _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__.longFormatters,
          /* harmony export */
        });
        /* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/locale/en-US.js",
          );
        /* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js",
          );
        /* harmony import */ var _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js",
          );
        /* harmony import */ var _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js",
          );
        /* harmony import */ var _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js",
          );
        /* harmony import */ var _isValid_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./isValid.js */ "./node_modules/date-fns/isValid.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        // Rexports of internal for libraries to use.
        // See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874

        // This RegExp consists of three parts separated by `|`:
        // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
        //   (one of the certain letters followed by `o`)
        // - (\w)\1* matches any sequences of the same letter
        // - '' matches two quote characters in a row
        // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
        //   except a single quote symbol, which ends the sequence.
        //   Two quote characters do not end the sequence.
        //   If there is no matching single quote
        //   then the sequence will continue until the end of the string.
        // - . matches any single character unmatched by previous parts of the RegExps
        const formattingTokensRegExp =
          /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

        // This RegExp catches symbols escaped by quotes, and also
        // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
        const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

        const escapedStringRegExp = /^'([^]*?)'?$/;
        const doubleQuoteRegExp = /''/g;
        const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

        /**
         * The {@link format} function options.
         */

        /**
         * @name format
         * @alias formatDate
         * @category Common Helpers
         * @summary Format the date.
         *
         * @description
         * Return the formatted date string in the given format. The result may vary by locale.
         *
         * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
         * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * The characters wrapped between two single quotes characters (') are escaped.
         * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
         * (see the last example)
         *
         * Format of the string is based on Unicode Technical Standard #35:
         * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
         * with a few additions (see note 7 below the table).
         *
         * Accepted patterns:
         * | Unit                            | Pattern | Result examples                   | Notes |
         * |---------------------------------|---------|-----------------------------------|-------|
         * | Era                             | G..GGG  | AD, BC                            |       |
         * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
         * |                                 | GGGGG   | A, B                              |       |
         * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
         * |                                 | yy      | 44, 01, 00, 17                    | 5     |
         * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
         * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
         * |                                 | yyyyy   | ...                               | 3,5   |
         * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
         * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
         * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
         * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
         * |                                 | YYYYY   | ...                               | 3,5   |
         * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
         * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
         * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
         * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
         * |                                 | RRRRR   | ...                               | 3,5,7 |
         * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
         * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
         * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
         * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
         * |                                 | uuuuu   | ...                               | 3,5   |
         * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
         * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | QQ      | 01, 02, 03, 04                    |       |
         * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
         * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
         * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | qq      | 01, 02, 03, 04                    |       |
         * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
         * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
         * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | MM      | 01, 02, ..., 12                   |       |
         * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
         * |                                 | MMMM    | January, February, ..., December  | 2     |
         * |                                 | MMMMM   | J, F, ..., D                      |       |
         * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
         * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | LL      | 01, 02, ..., 12                   |       |
         * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
         * |                                 | LLLL    | January, February, ..., December  | 2     |
         * |                                 | LLLLL   | J, F, ..., D                      |       |
         * | Local week of year              | w       | 1, 2, ..., 53                     |       |
         * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | ww      | 01, 02, ..., 53                   |       |
         * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
         * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | II      | 01, 02, ..., 53                   | 7     |
         * | Day of month                    | d       | 1, 2, ..., 31                     |       |
         * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
         * |                                 | dd      | 01, 02, ..., 31                   |       |
         * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
         * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
         * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
         * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
         * |                                 | DDDD    | ...                               | 3     |
         * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
         * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
         * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
         * |                                 | ii      | 01, 02, ..., 07                   | 7     |
         * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
         * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
         * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
         * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
         * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
         * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | ee      | 02, 03, ..., 01                   |       |
         * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
         * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
         * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | cc      | 02, 03, ..., 01                   |       |
         * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
         * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | AM, PM                          | a..aa   | AM, PM                            |       |
         * |                                 | aaa     | am, pm                            |       |
         * |                                 | aaaa    | a.m., p.m.                        | 2     |
         * |                                 | aaaaa   | a, p                              |       |
         * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
         * |                                 | bbb     | am, pm, noon, midnight            |       |
         * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
         * |                                 | bbbbb   | a, p, n, mi                       |       |
         * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
         * |                                 | BBBB    | at night, in the morning, ...     | 2     |
         * |                                 | BBBBB   | at night, in the morning, ...     |       |
         * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
         * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
         * |                                 | hh      | 01, 02, ..., 11, 12               |       |
         * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
         * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
         * |                                 | HH      | 00, 01, 02, ..., 23               |       |
         * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
         * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
         * |                                 | KK      | 01, 02, ..., 11, 00               |       |
         * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
         * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
         * |                                 | kk      | 24, 01, 02, ..., 23               |       |
         * | Minute                          | m       | 0, 1, ..., 59                     |       |
         * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | mm      | 00, 01, ..., 59                   |       |
         * | Second                          | s       | 0, 1, ..., 59                     |       |
         * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | ss      | 00, 01, ..., 59                   |       |
         * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
         * |                                 | SS      | 00, 01, ..., 99                   |       |
         * |                                 | SSS     | 000, 001, ..., 999                |       |
         * |                                 | SSSS    | ...                               | 3     |
         * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
         * |                                 | XX      | -0800, +0530, Z                   |       |
         * |                                 | XXX     | -08:00, +05:30, Z                 |       |
         * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
         * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
         * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
         * |                                 | xx      | -0800, +0530, +0000               |       |
         * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
         * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
         * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
         * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
         * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
         * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
         * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
         * | Seconds timestamp               | t       | 512969520                         | 7     |
         * |                                 | tt      | ...                               | 3,7   |
         * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
         * |                                 | TT      | ...                               | 3,7   |
         * | Long localized date             | P       | 04/29/1453                        | 7     |
         * |                                 | PP      | Apr 29, 1453                      | 7     |
         * |                                 | PPP     | April 29th, 1453                  | 7     |
         * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
         * | Long localized time             | p       | 12:00 AM                          | 7     |
         * |                                 | pp      | 12:00:00 AM                       | 7     |
         * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
         * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
         * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
         * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
         * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
         * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
         * Notes:
         * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
         *    are the same as "stand-alone" units, but are different in some languages.
         *    "Formatting" units are declined according to the rules of the language
         *    in the context of a date. "Stand-alone" units are always nominative singular:
         *
         *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
         *
         *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
         *
         * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
         *    the single quote characters (see below).
         *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
         *    the output will be the same as default pattern for this unit, usually
         *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
         *    are marked with "2" in the last column of the table.
         *
         *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
         *
         * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
         *    The output will be padded with zeros to match the length of the pattern.
         *
         *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
         *
         * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
         *    These tokens represent the shortest form of the quarter.
         *
         * 5. The main difference between `y` and `u` patterns are B.C. years:
         *
         *    | Year | `y` | `u` |
         *    |------|-----|-----|
         *    | AC 1 |   1 |   1 |
         *    | BC 1 |   1 |   0 |
         *    | BC 2 |   2 |  -1 |
         *
         *    Also `yy` always returns the last two digits of a year,
         *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
         *
         *    | Year | `yy` | `uu` |
         *    |------|------|------|
         *    | 1    |   01 |   01 |
         *    | 14   |   14 |   14 |
         *    | 376  |   76 |  376 |
         *    | 1453 |   53 | 1453 |
         *
         *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
         *    except local week-numbering years are dependent on `options.weekStartsOn`
         *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
         *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
         *
         * 6. Specific non-location timezones are currently unavailable in `date-fns`,
         *    so right now these tokens fall back to GMT timezones.
         *
         * 7. These patterns are not in the Unicode Technical Standard #35:
         *    - `i`: ISO day of week
         *    - `I`: ISO week of year
         *    - `R`: ISO week-numbering year
         *    - `t`: seconds timestamp
         *    - `T`: milliseconds timestamp
         *    - `o`: ordinal number modifier
         *    - `P`: long localized date
         *    - `p`: long localized time
         *
         * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
         *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
         *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * @param date - The original date
         * @param format - The string of tokens
         * @param options - An object with options
         *
         * @returns The formatted date string
         *
         * @throws `date` must not be Invalid Date
         * @throws `options.locale` must contain `localize` property
         * @throws `options.locale` must contain `formatLong` property
         * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws format string contains an unescaped latin alphabet character
         *
         * @example
         * // Represent 11 February 2014 in middle-endian format:
         * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
         * //=> '02/11/2014'
         *
         * @example
         * // Represent 2 July 2014 in Esperanto:
         * import { eoLocale } from 'date-fns/locale/eo'
         * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
         *   locale: eoLocale
         * })
         * //=> '2-a de julio 2014'
         *
         * @example
         * // Escape string by single quote characters:
         * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
         * //=> "3 o'clock"
         */
        function format(date, formatStr, options) {
          const defaultOptions = (0,
          _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
          const locale =
            options?.locale ??
            defaultOptions.locale ??
            _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_3__.enUS;

          const firstWeekContainsDate =
            options?.firstWeekContainsDate ??
            options?.locale?.options?.firstWeekContainsDate ??
            defaultOptions.firstWeekContainsDate ??
            defaultOptions.locale?.options?.firstWeekContainsDate ??
            1;

          const weekStartsOn =
            options?.weekStartsOn ??
            options?.locale?.options?.weekStartsOn ??
            defaultOptions.weekStartsOn ??
            defaultOptions.locale?.options?.weekStartsOn ??
            0;

          const originalDate = (0,
          _toDate_js__WEBPACK_IMPORTED_MODULE_4__.toDate)(date, options?.in);

          if (
            !(0, _isValid_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)
          ) {
            throw new RangeError("Invalid time value");
          }

          let parts = formatStr
            .match(longFormattingTokensRegExp)
            .map((substring) => {
              const firstCharacter = substring[0];
              if (firstCharacter === "p" || firstCharacter === "P") {
                const longFormatter =
                  _lib_format_longFormatters_js__WEBPACK_IMPORTED_MODULE_1__
                    .longFormatters[firstCharacter];
                return longFormatter(substring, locale.formatLong);
              }
              return substring;
            })
            .join("")
            .match(formattingTokensRegExp)
            .map((substring) => {
              // Replace two single quote characters with one single quote character
              if (substring === "''") {
                return { isToken: false, value: "'" };
              }

              const firstCharacter = substring[0];
              if (firstCharacter === "'") {
                return { isToken: false, value: cleanEscapedString(substring) };
              }

              if (
                _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__
                  .formatters[firstCharacter]
              ) {
                return { isToken: true, value: substring };
              }

              if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
                throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                    firstCharacter +
                    "`",
                );
              }

              return { isToken: false, value: substring };
            });

          // invoke localize preprocessor (only for french locales at the moment)
          if (locale.localize.preprocessor) {
            parts = locale.localize.preprocessor(originalDate, parts);
          }

          const formatterOptions = {
            firstWeekContainsDate,
            weekStartsOn,
            locale,
          };

          return parts
            .map((part) => {
              if (!part.isToken) return part.value;

              const token = part.value;

              if (
                (!options?.useAdditionalWeekYearTokens &&
                  (0,
                  _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(
                    token,
                  )) ||
                (!options?.useAdditionalDayOfYearTokens &&
                  (0,
                  _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(
                    token,
                  ))
              ) {
                (0,
                _lib_protectedTokens_js__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(
                  token,
                  formatStr,
                  String(date),
                );
              }

              const formatter =
                _lib_format_formatters_js__WEBPACK_IMPORTED_MODULE_0__
                  .formatters[token[0]];
              return formatter(
                originalDate,
                token,
                locale.localize,
                formatterOptions,
              );
            })
            .join("");
        }

        function cleanEscapedString(input) {
          const matched = input.match(escapedStringRegExp);

          if (!matched) {
            return input;
          }

          return matched[1].replace(doubleQuoteRegExp, "'");
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = format;

        /***/
      },

    /***/ "./node_modules/date-fns/getDayOfYear.js":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getDayOfYear: () => /* binding */ getDayOfYear,
          /* harmony export */
        });
        /* harmony import */ var _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js",
          );
        /* harmony import */ var _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link getDayOfYear} function options.
         */

        /**
         * @name getDayOfYear
         * @category Day Helpers
         * @summary Get the day of the year of the given date.
         *
         * @description
         * Get the day of the year of the given date.
         *
         * @param date - The given date
         * @param options - The options
         *
         * @returns The day of year
         *
         * @example
         * // Which day of the year is 2 July 2014?
         * const result = getDayOfYear(new Date(2014, 6, 2))
         * //=> 183
         */
        function getDayOfYear(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          const diff = (0,
          _differenceInCalendarDays_js__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(
            _date,
            (0, _startOfYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(
              _date,
            ),
          );
          const dayOfYear = diff + 1;
          return dayOfYear;
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          getDayOfYear;

        /***/
      },

    /***/ "./node_modules/date-fns/getISOWeek.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getISOWeek: () => /* binding */ getISOWeek,
          /* harmony export */
        });
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./constants.js */ "./node_modules/date-fns/constants.js",
          );
        /* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js",
          );
        /* harmony import */ var _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link getISOWeek} function options.
         */

        /**
         * @name getISOWeek
         * @category ISO Week Helpers
         * @summary Get the ISO week of the given date.
         *
         * @description
         * Get the ISO week of the given date.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @param date - The given date
         * @param options - The options
         *
         * @returns The ISO week
         *
         * @example
         * // Which week of the ISO-week numbering year is 2 January 2005?
         * const result = getISOWeek(new Date(2005, 0, 2))
         * //=> 53
         */
        function getISOWeek(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          const diff =
            +(0,
            _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(
              _date,
            ) -
            +(0,
            _startOfISOWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(
              _date,
            );

          // Round the number of weeks to the nearest integer because the number of
          // milliseconds in a week is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return (
            Math.round(
              diff /
                _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek,
            ) + 1
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          getISOWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/getISOWeekYear.js":
      /*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getISOWeekYear: () =>
            /* binding */ getISOWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link getISOWeekYear} function options.
         */

        /**
         * @name getISOWeekYear
         * @category ISO Week-Numbering Year Helpers
         * @summary Get the ISO week-numbering year of the given date.
         *
         * @description
         * Get the ISO week-numbering year of the given date,
         * which always starts 3 days before the year's first Thursday.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @param date - The given date
         *
         * @returns The ISO week-numbering year
         *
         * @example
         * // Which ISO-week numbering year is 2 January 2005?
         * const result = getISOWeekYear(new Date(2005, 0, 2))
         * //=> 2004
         */
        function getISOWeekYear(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          const year = _date.getFullYear();

          const fourthOfJanuaryOfNextYear = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(
            _date,
            0,
          );
          fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
          fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
          const startOfNextYear = (0,
          _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(
            fourthOfJanuaryOfNextYear,
          );

          const fourthOfJanuaryOfThisYear = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(
            _date,
            0,
          );
          fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
          fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
          const startOfThisYear = (0,
          _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(
            fourthOfJanuaryOfThisYear,
          );

          if (_date.getTime() >= startOfNextYear.getTime()) {
            return year + 1;
          } else if (_date.getTime() >= startOfThisYear.getTime()) {
            return year;
          } else {
            return year - 1;
          }
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          getISOWeekYear;

        /***/
      },

    /***/ "./node_modules/date-fns/getWeek.js":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getWeek: () => /* binding */ getWeek,
          /* harmony export */
        });
        /* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./constants.js */ "./node_modules/date-fns/constants.js",
          );
        /* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js",
          );
        /* harmony import */ var _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link getWeek} function options.
         */

        /**
         * @name getWeek
         * @category Week Helpers
         * @summary Get the local week index of the given date.
         *
         * @description
         * Get the local week index of the given date.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @param date - The given date
         * @param options - An object with options
         *
         * @returns The week
         *
         * @example
         * // Which week of the local week numbering year is 2 January 2005 with default options?
         * const result = getWeek(new Date(2005, 0, 2))
         * //=> 2
         *
         * @example
         * // Which week of the local week numbering year is 2 January 2005,
         * // if Monday is the first day of the week,
         * // and the first week of the year always contains 4 January?
         * const result = getWeek(new Date(2005, 0, 2), {
         *   weekStartsOn: 1,
         *   firstWeekContainsDate: 4
         * })
         * //=> 53
         */
        function getWeek(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          const diff =
            +(0, _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(
              _date,
              options,
            ) -
            +(0,
            _startOfWeekYear_js__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(
              _date,
              options,
            );

          // Round the number of weeks to the nearest integer because the number of
          // milliseconds in a week is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return (
            Math.round(
              diff /
                _constants_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek,
            ) + 1
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = getWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/getWeekYear.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ getWeekYear: () => /* binding */ getWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js",
          );
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link getWeekYear} function options.
         */

        /**
         * @name getWeekYear
         * @category Week-Numbering Year Helpers
         * @summary Get the local week-numbering year of the given date.
         *
         * @description
         * Get the local week-numbering year of the given date.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @param date - The given date
         * @param options - An object with options.
         *
         * @returns The local week-numbering year
         *
         * @example
         * // Which week numbering year is 26 December 2004 with the default settings?
         * const result = getWeekYear(new Date(2004, 11, 26))
         * //=> 2005
         *
         * @example
         * // Which week numbering year is 26 December 2004 if week starts on Saturday?
         * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
         * //=> 2004
         *
         * @example
         * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
         * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
         * //=> 2004
         */
        function getWeekYear(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          const year = _date.getFullYear();

          const defaultOptions = (0,
          _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
          const firstWeekContainsDate =
            options?.firstWeekContainsDate ??
            options?.locale?.options?.firstWeekContainsDate ??
            defaultOptions.firstWeekContainsDate ??
            defaultOptions.locale?.options?.firstWeekContainsDate ??
            1;

          const firstWeekOfNextYear = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(
            options?.in || date,
            0,
          );
          firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
          firstWeekOfNextYear.setHours(0, 0, 0, 0);
          const startOfNextYear = (0,
          _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(
            firstWeekOfNextYear,
            options,
          );

          const firstWeekOfThisYear = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(
            options?.in || date,
            0,
          );
          firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
          firstWeekOfThisYear.setHours(0, 0, 0, 0);
          const startOfThisYear = (0,
          _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(
            firstWeekOfThisYear,
            options,
          );

          if (+_date >= +startOfNextYear) {
            return year + 1;
          } else if (+_date >= +startOfThisYear) {
            return year;
          } else {
            return year - 1;
          }
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          getWeekYear;

        /***/
      },

    /***/ "./node_modules/date-fns/isDate.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isDate: () => /* binding */ isDate,
          /* harmony export */
        });
        /**
         * @name isDate
         * @category Common Helpers
         * @summary Is the given value a date?
         *
         * @description
         * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
         *
         * @param value - The value to check
         *
         * @returns True if the given value is a date
         *
         * @example
         * // For a valid date:
         * const result = isDate(new Date())
         * //=> true
         *
         * @example
         * // For an invalid date:
         * const result = isDate(new Date(NaN))
         * //=> true
         *
         * @example
         * // For some value:
         * const result = isDate('2014-02-31')
         * //=> false
         *
         * @example
         * // For an object:
         * const result = isDate({})
         * //=> false
         */
        function isDate(value) {
          return (
            value instanceof Date ||
            (typeof value === "object" &&
              Object.prototype.toString.call(value) === "[object Date]")
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = isDate;

        /***/
      },

    /***/ "./node_modules/date-fns/isSameDay.js":
      /*!********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.js ***!
  \********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isSameDay: () => /* binding */ isSameDay,
          /* harmony export */
        });
        /* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js",
          );
        /* harmony import */ var _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js",
          );

        /**
         * The {@link isSameDay} function options.
         */

        /**
         * @name isSameDay
         * @category Day Helpers
         * @summary Are the given dates in the same day (and year and month)?
         *
         * @description
         * Are the given dates in the same day (and year and month)?
         *
         * @param laterDate - The first date to check
         * @param earlierDate - The second date to check
         * @param options - An object with options
         *
         * @returns The dates are in the same day (and year and month)
         *
         * @example
         * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
         * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
         * //=> true
         *
         * @example
         * // Are 4 September and 4 October in the same day?
         * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
         * //=> false
         *
         * @example
         * // Are 4 September, 2014 and 4 September, 2015 in the same day?
         * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
         * //=> false
         */
        function isSameDay(laterDate, earlierDate, options) {
          const [dateLeft_, dateRight_] = (0,
          _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
            options?.in,
            laterDate,
            earlierDate,
          );
          return (
            +(0, _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(
              dateLeft_,
            ) ===
            +(0, _startOfDay_js__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(
              dateRight_,
            )
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          isSameDay;

        /***/
      },

    /***/ "./node_modules/date-fns/isSameWeek.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isSameWeek: () => /* binding */ isSameWeek,
          /* harmony export */
        });
        /* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/normalizeDates.js */ "./node_modules/date-fns/_lib/normalizeDates.js",
          );
        /* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js",
          );

        /**
         * The {@link isSameWeek} function options.
         */

        /**
         * @name isSameWeek
         * @category Week Helpers
         * @summary Are the given dates in the same week (and month and year)?
         *
         * @description
         * Are the given dates in the same week (and month and year)?
         *
         * @param laterDate - The first date to check
         * @param earlierDate - The second date to check
         * @param options - An object with options
         *
         * @returns The dates are in the same week (and month and year)
         *
         * @example
         * // Are 31 August 2014 and 4 September 2014 in the same week?
         * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
         * //=> true
         *
         * @example
         * // If week starts with Monday,
         * // are 31 August 2014 and 4 September 2014 in the same week?
         * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
         *   weekStartsOn: 1
         * })
         * //=> false
         *
         * @example
         * // Are 1 January 2014 and 1 January 2015 in the same week?
         * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
         * //=> false
         */
        function isSameWeek(laterDate, earlierDate, options) {
          const [laterDate_, earlierDate_] = (0,
          _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_0__.normalizeDates)(
            options?.in,
            laterDate,
            earlierDate,
          );
          return (
            +(0, _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(
              laterDate_,
              options,
            ) ===
            +(0, _startOfWeek_js__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(
              earlierDate_,
              options,
            )
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          isSameWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/isThisWeek.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isThisWeek: () => /* binding */ isThisWeek,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js",
          );
        /* harmony import */ var _isSameWeek_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./isSameWeek.js */ "./node_modules/date-fns/isSameWeek.js",
          );

        /**
         * The {@link isThisWeek} function options.
         */

        /**
         * @name isThisWeek
         * @category Week Helpers
         * @summary Is the given date in the same week as the current date?
         * @pure false
         *
         * @description
         * Is the given date in the same week as the current date?
         *
         * @param date - The date to check
         * @param options - The object with options
         *
         * @returns The date is in this week
         *
         * @example
         * // If today is 25 September 2014, is 21 September 2014 in this week?
         * const result = isThisWeek(new Date(2014, 8, 21))
         * //=> true
         *
         * @example
         * // If today is 25 September 2014 and week starts with Monday
         * // is 21 September 2014 in this week?
         * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
         * //=> false
         */
        function isThisWeek(date, options) {
          return (0, _isSameWeek_js__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(
            (0, _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(
              options?.in || date,
              date,
            ),
            (0, _constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(
              options?.in || date,
            ),
            options,
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          isThisWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/isToday.js":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/isToday.js ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isToday: () => /* binding */ isToday,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./constructNow.js */ "./node_modules/date-fns/constructNow.js",
          );
        /* harmony import */ var _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./isSameDay.js */ "./node_modules/date-fns/isSameDay.js",
          );

        /**
         * The {@link isToday} function options.
         */

        /**
         * @name isToday
         * @category Day Helpers
         * @summary Is the given date today?
         * @pure false
         *
         * @description
         * Is the given date today?
         *
         * @param date - The date to check
         * @param options - An object with options
         *
         * @returns The date is today
         *
         * @example
         * // If today is 6 October 2014, is 6 October 14:00:00 today?
         * const result = isToday(new Date(2014, 9, 6, 14, 0))
         * //=> true
         */
        function isToday(date, options) {
          return (0, _isSameDay_js__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(
            (0, _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(
              options?.in || date,
              date,
            ),
            (0, _constructNow_js__WEBPACK_IMPORTED_MODULE_2__.constructNow)(
              options?.in || date,
            ),
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = isToday;

        /***/
      },

    /***/ "./node_modules/date-fns/isValid.js":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ isValid: () => /* binding */ isValid,
          /* harmony export */
        });
        /* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./isDate.js */ "./node_modules/date-fns/isDate.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * @name isValid
         * @category Common Helpers
         * @summary Is the given date valid?
         *
         * @description
         * Returns false if argument is Invalid Date and true otherwise.
         * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
         * Invalid Date is a Date, whose time value is NaN.
         *
         * Time value of Date: http://es5.github.io/#x15.9.1.1
         *
         * @param date - The date to check
         *
         * @returns The date is valid
         *
         * @example
         * // For the valid date:
         * const result = isValid(new Date(2014, 1, 31))
         * //=> true
         *
         * @example
         * // For the value, convertible into a date:
         * const result = isValid(1393804800000)
         * //=> true
         *
         * @example
         * // For the invalid date:
         * const result = isValid(new Date(''))
         * //=> false
         */
        function isValid(date) {
          return !(
            (!(0, _isDate_js__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) &&
              typeof date !== "number") ||
            isNaN(+(0, _toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date))
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = isValid;

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildFormatLongFn: () =>
            /* binding */ buildFormatLongFn,
          /* harmony export */
        });
        function buildFormatLongFn(args) {
          return (options = {}) => {
            // TODO: Remove String()
            const width = options.width
              ? String(options.width)
              : args.defaultWidth;
            const format =
              args.formats[width] || args.formats[args.defaultWidth];
            return format;
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildLocalizeFn: () =>
            /* binding */ buildLocalizeFn,
          /* harmony export */
        });
        /**
         * The localize function argument callback which allows to convert raw value to
         * the actual type.
         *
         * @param value - The value to convert
         *
         * @returns The converted value
         */

        /**
         * The map of localized values for each width.
         */

        /**
         * The index type of the locale unit value. It types conversion of units of
         * values that don't start at 0 (i.e. quarters).
         */

        /**
         * Converts the unit value to the tuple of values.
         */

        /**
         * The tuple of localized era values. The first element represents BC,
         * the second element represents AD.
         */

        /**
         * The tuple of localized quarter values. The first element represents Q1.
         */

        /**
         * The tuple of localized day values. The first element represents Sunday.
         */

        /**
         * The tuple of localized month values. The first element represents January.
         */

        function buildLocalizeFn(args) {
          return (value, options) => {
            const context = options?.context
              ? String(options.context)
              : "standalone";

            let valuesArray;
            if (context === "formatting" && args.formattingValues) {
              const defaultWidth =
                args.defaultFormattingWidth || args.defaultWidth;
              const width = options?.width
                ? String(options.width)
                : defaultWidth;

              valuesArray =
                args.formattingValues[width] ||
                args.formattingValues[defaultWidth];
            } else {
              const defaultWidth = args.defaultWidth;
              const width = options?.width
                ? String(options.width)
                : args.defaultWidth;

              valuesArray = args.values[width] || args.values[defaultWidth];
            }
            const index = args.argumentCallback
              ? args.argumentCallback(value)
              : value;

            // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
            return valuesArray[index];
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildMatchFn: () => /* binding */ buildMatchFn,
          /* harmony export */
        });
        function buildMatchFn(args) {
          return (string, options = {}) => {
            const width = options.width;

            const matchPattern =
              (width && args.matchPatterns[width]) ||
              args.matchPatterns[args.defaultMatchWidth];
            const matchResult = string.match(matchPattern);

            if (!matchResult) {
              return null;
            }
            const matchedString = matchResult[0];

            const parsePatterns =
              (width && args.parsePatterns[width]) ||
              args.parsePatterns[args.defaultParseWidth];

            const key = Array.isArray(parsePatterns)
              ? findIndex(parsePatterns, (pattern) =>
                  pattern.test(matchedString),
                )
              : // [TODO] -- I challenge you to fix the type
                findKey(parsePatterns, (pattern) =>
                  pattern.test(matchedString),
                );

            let value;

            value = args.valueCallback ? args.valueCallback(key) : key;
            value = options.valueCallback
              ? // [TODO] -- I challenge you to fix the type
                options.valueCallback(value)
              : value;

            const rest = string.slice(matchedString.length);

            return { value, rest };
          };
        }

        function findKey(object, predicate) {
          for (const key in object) {
            if (
              Object.prototype.hasOwnProperty.call(object, key) &&
              predicate(object[key])
            ) {
              return key;
            }
          }
          return undefined;
        }

        function findIndex(array, predicate) {
          for (let key = 0; key < array.length; key++) {
            if (predicate(array[key])) {
              return key;
            }
          }
          return undefined;
        }

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
      /*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ buildMatchPatternFn: () =>
            /* binding */ buildMatchPatternFn,
          /* harmony export */
        });
        function buildMatchPatternFn(args) {
          return (string, options = {}) => {
            const matchResult = string.match(args.matchPattern);
            if (!matchResult) return null;
            const matchedString = matchResult[0];

            const parseResult = string.match(args.parsePattern);
            if (!parseResult) return null;
            let value = args.valueCallback
              ? args.valueCallback(parseResult[0])
              : parseResult[0];

            // [TODO] I challenge you to fix the type
            value = options.valueCallback
              ? options.valueCallback(value)
              : value;

            const rest = string.slice(matchedString.length);

            return { value, rest };
          };
        }

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US.js":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ enUS: () => /* binding */ enUS,
          /* harmony export */
        });
        /* harmony import */ var _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js",
          );
        /* harmony import */ var _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js",
          );
        /* harmony import */ var _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js",
          );
        /* harmony import */ var _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js",
          );
        /* harmony import */ var _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js",
          );

        /**
         * @category Locales
         * @summary English locale (United States).
         * @language English
         * @iso-639-2 eng
         * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
         * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
         */
        const enUS = {
          code: "en-US",
          formatDistance:
            _en_US_lib_formatDistance_js__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
          formatLong:
            _en_US_lib_formatLong_js__WEBPACK_IMPORTED_MODULE_1__.formatLong,
          formatRelative:
            _en_US_lib_formatRelative_js__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
          localize:
            _en_US_lib_localize_js__WEBPACK_IMPORTED_MODULE_3__.localize,
          match: _en_US_lib_match_js__WEBPACK_IMPORTED_MODULE_4__.match,
          options: {
            weekStartsOn: 0 /* Sunday */,
            firstWeekContainsDate: 1,
          },
        };

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = enUS;

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatDistance: () =>
            /* binding */ formatDistance,
          /* harmony export */
        });
        const formatDistanceLocale = {
          lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
          },

          xSeconds: {
            one: "1 second",
            other: "{{count}} seconds",
          },

          halfAMinute: "half a minute",

          lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
          },

          xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes",
          },

          aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours",
          },

          xHours: {
            one: "1 hour",
            other: "{{count}} hours",
          },

          xDays: {
            one: "1 day",
            other: "{{count}} days",
          },

          aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks",
          },

          xWeeks: {
            one: "1 week",
            other: "{{count}} weeks",
          },

          aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months",
          },

          xMonths: {
            one: "1 month",
            other: "{{count}} months",
          },

          aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years",
          },

          xYears: {
            one: "1 year",
            other: "{{count}} years",
          },

          overXYears: {
            one: "over 1 year",
            other: "over {{count}} years",
          },

          almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years",
          },
        };

        const formatDistance = (token, count, options) => {
          let result;

          const tokenValue = formatDistanceLocale[token];
          if (typeof tokenValue === "string") {
            result = tokenValue;
          } else if (count === 1) {
            result = tokenValue.one;
          } else {
            result = tokenValue.other.replace("{{count}}", count.toString());
          }

          if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) {
              return "in " + result;
            } else {
              return result + " ago";
            }
          }

          return result;
        };

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatLong: () => /* binding */ formatLong,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js",
          );

        const dateFormats = {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        };

        const timeFormats = {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        };

        const dateTimeFormats = {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        };

        const formatLong = {
          date: (0,
          _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)(
            {
              formats: dateFormats,
              defaultWidth: "full",
            },
          ),

          time: (0,
          _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)(
            {
              formats: timeFormats,
              defaultWidth: "full",
            },
          ),

          dateTime: (0,
          _lib_buildFormatLongFn_js__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)(
            {
              formats: dateTimeFormats,
              defaultWidth: "full",
            },
          ),
        };

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatRelative: () =>
            /* binding */ formatRelative,
          /* harmony export */
        });
        const formatRelativeLocale = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };

        const formatRelative = (token, _date, _baseDate, _options) =>
          formatRelativeLocale[token];

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ localize: () => /* binding */ localize,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js",
          );

        const eraValues = {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        };

        const quarterValues = {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        };

        // Note: in English, the names of days of the week and months are capitalized.
        // If you are making a new locale based on this one, check if the same is true for the language you're working on.
        // Generally, formatted dates should look like they are in the middle of a sentence,
        // e.g. in Spanish language the weekdays and months should be in the lowercase.
        const monthValues = {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],

          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        };

        const dayValues = {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        };

        const dayPeriodValues = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        };

        const formattingDayPeriodValues = {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        };

        const ordinalNumber = (dirtyNumber, _options) => {
          const number = Number(dirtyNumber);

          // If ordinal numbers depend on context, for example,
          // if they are different for different grammatical genders,
          // use `options.unit`.
          //
          // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
          // 'day', 'hour', 'minute', 'second'.

          const rem100 = number % 100;
          if (rem100 > 20 || rem100 < 10) {
            switch (rem100 % 10) {
              case 1:
                return number + "st";
              case 2:
                return number + "nd";
              case 3:
                return number + "rd";
            }
          }
          return number + "th";
        };

        const localize = {
          ordinalNumber,

          era: (0,
          _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)(
            {
              values: eraValues,
              defaultWidth: "wide",
            },
          ),

          quarter: (0,
          _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)(
            {
              values: quarterValues,
              defaultWidth: "wide",
              argumentCallback: (quarter) => quarter - 1,
            },
          ),

          month: (0,
          _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)(
            {
              values: monthValues,
              defaultWidth: "wide",
            },
          ),

          day: (0,
          _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)(
            {
              values: dayValues,
              defaultWidth: "wide",
            },
          ),

          dayPeriod: (0,
          _lib_buildLocalizeFn_js__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)(
            {
              values: dayPeriodValues,
              defaultWidth: "wide",
              formattingValues: formattingDayPeriodValues,
              defaultFormattingWidth: "wide",
            },
          ),
        };

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
      /*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ match: () => /* binding */ match,
          /* harmony export */
        });
        /* harmony import */ var _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js",
          );
        /* harmony import */ var _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js",
          );

        const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
        const parseOrdinalNumberPattern = /\d+/i;

        const matchEraPatterns = {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        };
        const parseEraPatterns = {
          any: [/^b/i, /^(a|c)/i],
        };

        const matchQuarterPatterns = {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        };
        const parseQuarterPatterns = {
          any: [/1/i, /2/i, /3/i, /4/i],
        };

        const matchMonthPatterns = {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        };
        const parseMonthPatterns = {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],

          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        };

        const matchDayPatterns = {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        };
        const parseDayPatterns = {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        };

        const matchDayPeriodPatterns = {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        };
        const parseDayPeriodPatterns = {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        };

        const match = {
          ordinalNumber: (0,
          _lib_buildMatchPatternFn_js__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)(
            {
              matchPattern: matchOrdinalNumberPattern,
              parsePattern: parseOrdinalNumberPattern,
              valueCallback: (value) => parseInt(value, 10),
            },
          ),

          era: (0,
          _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
            matchPatterns: matchEraPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseEraPatterns,
            defaultParseWidth: "any",
          }),

          quarter: (0,
          _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
            matchPatterns: matchQuarterPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseQuarterPatterns,
            defaultParseWidth: "any",
            valueCallback: (index) => index + 1,
          }),

          month: (0,
          _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
            matchPatterns: matchMonthPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseMonthPatterns,
            defaultParseWidth: "any",
          }),

          day: (0,
          _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
            matchPatterns: matchDayPatterns,
            defaultMatchWidth: "wide",
            parsePatterns: parseDayPatterns,
            defaultParseWidth: "any",
          }),

          dayPeriod: (0,
          _lib_buildMatchFn_js__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
            matchPatterns: matchDayPeriodPatterns,
            defaultMatchWidth: "any",
            parsePatterns: parseDayPeriodPatterns,
            defaultParseWidth: "any",
          }),
        };

        /***/
      },

    /***/ "./node_modules/date-fns/startOfDay.js":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfDay: () => /* binding */ startOfDay,
          /* harmony export */
        });
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link startOfDay} function options.
         */

        /**
         * @name startOfDay
         * @category Day Helpers
         * @summary Return the start of a day for the given date.
         *
         * @description
         * Return the start of a day for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - The options
         *
         * @returns The start of a day
         *
         * @example
         * // The start of a day for 2 September 2014 11:55:00:
         * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Tue Sep 02 2014 00:00:00
         */
        function startOfDay(date, options) {
          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          _date.setHours(0, 0, 0, 0);
          return _date;
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfDay;

        /***/
      },

    /***/ "./node_modules/date-fns/startOfISOWeek.js":
      /*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfISOWeek: () =>
            /* binding */ startOfISOWeek,
          /* harmony export */
        });
        /* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js",
          );

        /**
         * The {@link startOfISOWeek} function options.
         */

        /**
         * @name startOfISOWeek
         * @category ISO Week Helpers
         * @summary Return the start of an ISO week for the given date.
         *
         * @description
         * Return the start of an ISO week for the given date.
         * The result will be in the local timezone.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of an ISO week
         *
         * @example
         * // The start of an ISO week for 2 September 2014 11:55:00:
         * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Mon Sep 01 2014 00:00:00
         */
        function startOfISOWeek(date, options) {
          return (0, _startOfWeek_js__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(
            date,
            { ...options, weekStartsOn: 1 },
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfISOWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/startOfISOWeekYear.js":
      /*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfISOWeekYear: () =>
            /* binding */ startOfISOWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js",
          );
        /* harmony import */ var _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js",
          );

        /**
         * The {@link startOfISOWeekYear} function options.
         */

        /**
         * @name startOfISOWeekYear
         * @category ISO Week-Numbering Year Helpers
         * @summary Return the start of an ISO week-numbering year for the given date.
         *
         * @description
         * Return the start of an ISO week-numbering year,
         * which always starts 3 days before the year's first Thursday.
         * The result will be in the local timezone.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of an ISO week-numbering year
         *
         * @example
         * // The start of an ISO week-numbering year for 2 July 2005:
         * const result = startOfISOWeekYear(new Date(2005, 6, 2))
         * //=> Mon Jan 03 2005 00:00:00
         */
        function startOfISOWeekYear(date, options) {
          const year = (0,
          _getISOWeekYear_js__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(
            date,
            options,
          );
          const fourthOfJanuary = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(
            options?.in || date,
            0,
          );
          fourthOfJanuary.setFullYear(year, 0, 4);
          fourthOfJanuary.setHours(0, 0, 0, 0);
          return (0,
          _startOfISOWeek_js__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(
            fourthOfJanuary,
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfISOWeekYear;

        /***/
      },

    /***/ "./node_modules/date-fns/startOfWeek.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfWeek: () => /* binding */ startOfWeek,
          /* harmony export */
        });
        /* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js",
          );
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link startOfWeek} function options.
         */

        /**
         * @name startOfWeek
         * @category Week Helpers
         * @summary Return the start of a week for the given date.
         *
         * @description
         * Return the start of a week for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of a week
         *
         * @example
         * // The start of a week for 2 September 2014 11:55:00:
         * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Sun Aug 31 2014 00:00:00
         *
         * @example
         * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
         * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
         * //=> Mon Sep 01 2014 00:00:00
         */
        function startOfWeek(date, options) {
          const defaultOptions = (0,
          _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
          const weekStartsOn =
            options?.weekStartsOn ??
            options?.locale?.options?.weekStartsOn ??
            defaultOptions.weekStartsOn ??
            defaultOptions.locale?.options?.weekStartsOn ??
            0;

          const _date = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(
            date,
            options?.in,
          );
          const day = _date.getDay();
          const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

          _date.setDate(_date.getDate() - diff);
          _date.setHours(0, 0, 0, 0);
          return _date;
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfWeek;

        /***/
      },

    /***/ "./node_modules/date-fns/startOfWeekYear.js":
      /*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfWeekYear: () =>
            /* binding */ startOfWeekYear,
          /* harmony export */
        });
        /* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js",
          );
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );
        /* harmony import */ var _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js",
          );
        /* harmony import */ var _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js",
          );

        /**
         * The {@link startOfWeekYear} function options.
         */

        /**
         * @name startOfWeekYear
         * @category Week-Numbering Year Helpers
         * @summary Return the start of a local week-numbering year for the given date.
         *
         * @description
         * Return the start of a local week-numbering year.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of a week-numbering year
         *
         * @example
         * // The start of an a week-numbering year for 2 July 2005 with default settings:
         * const result = startOfWeekYear(new Date(2005, 6, 2))
         * //=> Sun Dec 26 2004 00:00:00
         *
         * @example
         * // The start of a week-numbering year for 2 July 2005
         * // if Monday is the first day of week
         * // and 4 January is always in the first week of the year:
         * const result = startOfWeekYear(new Date(2005, 6, 2), {
         *   weekStartsOn: 1,
         *   firstWeekContainsDate: 4
         * })
         * //=> Mon Jan 03 2005 00:00:00
         */
        function startOfWeekYear(date, options) {
          const defaultOptions = (0,
          _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
          const firstWeekContainsDate =
            options?.firstWeekContainsDate ??
            options?.locale?.options?.firstWeekContainsDate ??
            defaultOptions.firstWeekContainsDate ??
            defaultOptions.locale?.options?.firstWeekContainsDate ??
            1;

          const year = (0,
          _getWeekYear_js__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(
            date,
            options,
          );
          const firstWeek = (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(
            options?.in || date,
            0,
          );
          firstWeek.setFullYear(year, 0, firstWeekContainsDate);
          firstWeek.setHours(0, 0, 0, 0);
          const _date = (0,
          _startOfWeek_js__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(
            firstWeek,
            options,
          );
          return _date;
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfWeekYear;

        /***/
      },

    /***/ "./node_modules/date-fns/startOfYear.js":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ startOfYear: () => /* binding */ startOfYear,
          /* harmony export */
        });
        /* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./toDate.js */ "./node_modules/date-fns/toDate.js",
          );

        /**
         * The {@link startOfYear} function options.
         */

        /**
         * @name startOfYear
         * @category Year Helpers
         * @summary Return the start of a year for the given date.
         *
         * @description
         * Return the start of a year for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - The options
         *
         * @returns The start of a year
         *
         * @example
         * // The start of a year for 2 September 2014 11:55:00:
         * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
         * //=> Wed Jan 01 2014 00:00:00
         */
        function startOfYear(date, options) {
          const date_ = (0, _toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(
            date,
            options?.in,
          );
          date_.setFullYear(date_.getFullYear(), 0, 1);
          date_.setHours(0, 0, 0, 0);
          return date_;
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          startOfYear;

        /***/
      },

    /***/ "./node_modules/date-fns/toDate.js":
      /*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */ toDate: () => /* binding */ toDate,
          /* harmony export */
        });
        /* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js",
          );

        /**
         * @name toDate
         * @category Common Helpers
         * @summary Convert the given argument to an instance of Date.
         *
         * @description
         * Convert the given argument to an instance of Date.
         *
         * If the argument is an instance of Date, the function returns its clone.
         *
         * If the argument is a number, it is treated as a timestamp.
         *
         * If the argument is none of the above, the function returns Invalid Date.
         *
         * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
         * enabling to transfer extra properties from the reference date to the new date.
         * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
         * that accept a time zone as a constructor argument.
         *
         * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param argument - The value to convert
         *
         * @returns The parsed date in the local time zone
         *
         * @example
         * // Clone the date:
         * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert the timestamp to date:
         * const result = toDate(1392098430000)
         * //=> Tue Feb 11 2014 11:30:30
         */
        function toDate(argument, context) {
          // [TODO] Get rid of `toDate` or `constructFrom`?
          return (0,
          _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(
            context || argument,
            argument,
          );
        }

        // Fallback for modularized imports:
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = toDate;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (
        document.currentScript &&
        document.currentScript.tagName.toUpperCase() === "SCRIPT"
      )
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ index: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(
    "./src/modules/index.js",
  );
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDRDQUE0QywySkFBMEQ7QUFDdEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxRQUFRLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxhQUFhLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEs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QUNNO0FBQ2dCO0FBQ2I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkNBQUk7QUFDZCxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZDQUFJO0FBQ2QsVUFBVSw2Q0FBSTtBQUNkLFVBQVUsNkNBQUk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw2REFBYTtBQUNuQixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxZQUFZLDZDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0RBQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxPQUFPLHdFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFdBQVcsd0VBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxTQUFTLHdFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHOztBQUVILE9BQU8sd0VBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSx3RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTDBEO0FBQ2M7O0FBRXhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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akY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hhbmRsZXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGV0b2Rvcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbWFuaXB1bGF0ZURPTS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGFydHVwLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL25vcm1hbGl6ZURhdGVzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldERheU9mWWVhci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVXZWVrLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4uanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlllYXIuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfU2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtYWluLWZvbnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGQtZm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAgKi9cbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJtYWluLWZvbnRcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMjVweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBtYXgtd2lkdGg6IDE5MHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNTAxZjNhO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTAxZjNhO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWY4NjkzO1xufVxuXG4vKiBFbmQgb2YgZ2VuZXJhbCBzdHlsZXMgKi9cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNDUpIDBweCAyNXB4IDIwcHggLTIwcHg7XG59XG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzOGQ5ZTtcbiAgY29sb3I6ICNmN2Y3Zjc7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogYm9sZC1mb250O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjRweCkge1xuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5tZW51IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjYjliOWI5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi5tZW51LWxpbmtzIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5udW1iZXItb2YtdGFza3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XG4gIGNvbG9yOiAjZjdmN2VlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtbGlua3MgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMTQxNDE0O1xufVxuXG4ubWVudS1saW5rcyAuYWN0aXZlLFxuLm1lbnUtbGlua3MgYTpob3ZlciB7XG4gIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XG4gIGNvbG9yOiAjNTAxZjNhO1xufVxuXG4ubWVudS1saW5rcyAuYWN0aXZlOjpiZWZvcmUsXG4ubWVudS1saW5rcyBhOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi8vIFwiO1xufVxuXG4ubWVudS1saW5rcyxcbi50b2RvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYjliOWI5O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYzM4ZDllICNlZWVlZWU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDQxcmVtO1xuICBmbGV4OiA0O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29udGVudC1jb250YWluZXIgaDIge1xuICBjb2xvcjogIzE0MTQxNDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuI3Byb2plY3RzLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTQxNDE0O1xufVxuXG4uYWRkdG9kbyxcbi5hZGRwcm9qZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkdG9kbyBwLFxuLmFkZHByb2plY3QgcCB7XG4gIGNvbG9yOiAjYzM4ZDllO1xuICBmb250LWZhbWlseTogYm9sZC1mb250O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmFkZHRvZG8gcCB7XG4gIGNvbG9yOiAjNTAxZjNhO1xufVxuXG4uYWRkdG9kbyBpbWcsXG4uYWRkcHJvamVjdCBpbWcge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW1wdHlQYWdlTm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luOiAycmVtO1xufVxuXG4uaXRlbXMtbGlzdCB7XG4gIHBhZGRpbmc6IDNyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNnJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogI2MzOGQ5ZSAjZWVlZWVlO1xufVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAzKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5hY3Rpb24tZ3J1cCxcbi5uYW1lLWdydXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJpb3JpdHkge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByaW9yaXR5LmxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XG59XG5cbi5wcmlvcml0eS5tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xufVxuXG4ucHJpb3JpdHkuaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbi5wcmlvcml0eTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLyogY2hlY2tib3ggaGFuZGxkZXIgKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFjY2VudC1jb2xvcjogIzJhOWQ4Zjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzJhOWQ4ZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMjAlIDAlLFxuICAgIDAlIDIwJSxcbiAgICAzMCUgNTAlLFxuICAgIDAlIDgwJSxcbiAgICAyMCUgMTAwJSxcbiAgICA1MCUgNzAlLFxuICAgIDgwJSAxMDAlLFxuICAgIDEwMCUgODAlLFxuICAgIDcwJSA1MCUsXG4gICAgMTAwJSAyMCUsXG4gICAgODAlIDAlLFxuICAgIDUwJSAzMCVcbiAgKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4Zjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4vKiBlbmRvZiBjaGVja2JveCBoYW5kbGVyICovXG5cbi5maW5pc2hlZC5uYW1lLWdydXAgcCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5maW5pc2hlZC5hY3Rpb24tZ3J1cCB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuI2R1ZS1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5hY3Rpb24tZ3J1cCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwMWYzYTtcbn1cblxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLyogR2VuZXJhbCAmIFZpZXcgTW9kYWwgU3R5bGVzICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tb2RhbC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBjb2xvcjogIzUwMWYzYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubW9kYWwtY29udGVudCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlsIHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGV0YWlsOmZpcnN0LW9mLXR5cGUgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMS4xcmVtO1xufVxuXG4uZGV0YWlsOm50aC1vZi10eXBlKDIpIC5kZXRhaWwtdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDAuOTVyZW07XG59XG5cbi5kZXRhaWw6bnRoLW9mLXR5cGUoMykgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMC4zNXJlbTtcbn1cblxuLmRldGFpbDpsYXN0LW9mLXR5cGUgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xufVxuXG4uZGV0YWlsLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbG9zZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZS1tb2RhbC1idXR0b24ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIDQwJSk7XG59XG5cbi8qIEFkZCBwcm9qZWN0IG1vZGFsICYgVG9kbyBtb2RhbCovXG5cbi5tb2RhbC1oZWFkZXIge1xuICBtYXJnaW46IC0ycmVtIC0ycmVtIDAgLTJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWhlYWRlciBwIHtcbiAgY29sb3I6ICNmN2Y3Zjc7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogYm9sZC1mb250O1xufVxuXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcbiNhZGQtbW9kYWwtdG9kbyA+IC5tb2RhbC1jb250ZW50LFxuI2VkaXQtbW9kYWwtdG9kbyA+IC5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAzNXJlbTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbn1cblxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0sXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgY29sb3I6ICMxNDE0MTQ7XG59XG5cbiNhZGQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyLFxuI2VkaXQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuI2FkZC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXG5mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IG1haW4tZm9udDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjMTQxNDE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2FkZC1tb2RhbC10b2RvIHVsIGxpLFxuI2VkaXQtbW9kYWwtdG9kbyB1bCBsaSxcbnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG5cbiNhZGQtbW9kYWwtdG9kbyB1bCBsaSBpbnB1dCxcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQge1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbixcbiNlZGl0LW1vZGFsLXRvZG8gZm9ybSBidXR0b24ge1xuICBmb250LWZhbWlseTogYm9sZC1mb250O1xuICBtYXgtd2lkdGg6IDhyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYTlkOGY7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjJyZW07XG4gIGNvbG9yOiAjMmE5ZDhmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xufVxuXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSBidXR0b246aG92ZXIsXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmN2Y3Zjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XG59XG5cbiNhZGQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lcixcbiNlZGl0LW1vZGFsLXRvZG8gLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuI2FkZC1tb2RhbC10b2RvIC5wcmlvcml0eS1idG4tZ3J1cCxcbiNlZGl0LW1vZGFsLXRvZG8gLnByaW9yaXR5LWJ0bi1ncnVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjhyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnByaW9yaXR5LWJ0bi1ncnVwIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNC41cmVtO1xufVxuXG4ucHJpb3JpdHktYnRuLWdydXAgI2xvdyB7XG4gIGNvbG9yOiAjMmE5ZDhmO1xuICBib3JkZXItY29sb3I6ICMyYTlkOGY7XG59XG5cbi5wcmlvcml0eS1idG4tZ3J1cCAjbG93OmhvdmVyLFxuLnByaW9yaXR5LWJ0bi1ncnVwICNsb3cuYWN0aXZlLXByaW9yaXR5IHtcbiAgY29sb3I6ICNmN2Y3Zjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XG59XG5cbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtIHtcbiAgY29sb3I6ICNmZmE1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmYTUwMDtcbn1cblxuLnByaW9yaXR5LWJ0bi1ncnVwICNtZWRpdW06aG92ZXIsXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bS5hY3RpdmUtcHJpb3JpdHkge1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcbn1cblxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoOmhvdmVyLFxuLnByaW9yaXR5LWJ0bi1ncnVwICNoaWdoLmFjdGl2ZS1wcmlvcml0eSB7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xufVxuXG4vKiBGb290ZXIgKi9cbi5hdHRyaWJ1dGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYXR0cmlidXRpb24gYSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsK0RBQXFFO0VBQ3JFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwrREFBb0U7RUFDcEUsa0JBQWtCO0FBQ3BCOztBQUVBLG1CQUFtQjtBQUNuQjs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJB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eUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIm1haW4tZm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJib2xkLWZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoLi9mb250cy9PcGVuU2Fuc19TZW1pQ29uZGVuc2VkLUJvbGQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgICovXFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWluLWZvbnRcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDE5MHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICBjb2xvcjogIzUwMWYzYTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDFmM2E7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2Y3ZjdmNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Zjg2OTM7XFxufVxcblxcbi8qIEVuZCBvZiBnZW5lcmFsIHN0eWxlcyAqL1xcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEyODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcXG59XFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4ZDllO1xcbiAgY29sb3I6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogYm9sZC1mb250O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgbWF4LXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjRweCkge1xcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIC5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi5tZW51IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjYjliOWI5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1lbnUtbGlua3MgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubnVtYmVyLW9mLXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxuICBjb2xvcjogI2Y3ZjdlZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWxpbmtzIGxpIGEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzE0MTQxNDtcXG59XFxuXFxuLm1lbnUtbGlua3MgLmFjdGl2ZSxcXG4ubWVudS1saW5rcyBhOmhvdmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBib2xkLWZvbnQ7XFxuICBjb2xvcjogIzUwMWYzYTtcXG59XFxuXFxuLm1lbnUtbGlua3MgLmFjdGl2ZTo6YmVmb3JlLFxcbi5tZW51LWxpbmtzIGE6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLy8gXFxcIjtcXG59XFxuXFxuLm1lbnUtbGlua3MsXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiOWI5Yjk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYzM4ZDllICNlZWVlZWU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogNDFyZW07XFxuICBmbGV4OiA0O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIGgyIHtcXG4gIGNvbG9yOiAjMTQxNDE0O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI3Byb2plY3RzLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMTQxNDE0O1xcbn1cXG5cXG4uYWRkdG9kbyxcXG4uYWRkcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZHRvZG8gcCxcXG4uYWRkcHJvamVjdCBwIHtcXG4gIGNvbG9yOiAjYzM4ZDllO1xcbiAgZm9udC1mYW1pbHk6IGJvbGQtZm9udDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWRkdG9kbyBwIHtcXG4gIGNvbG9yOiAjNTAxZjNhO1xcbn1cXG5cXG4uYWRkdG9kbyBpbWcsXFxuLmFkZHByb2plY3QgaW1nIHtcXG4gIG1heC13aWR0aDogNjBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHlQYWdlTm90aWZpY2F0aW9uIHtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLml0ZW1zLWxpc3Qge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjZyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYzM4ZDllICNlZWVlZWU7XFxufVxcblxcbi5pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uYWN0aW9uLWdydXAsXFxuLm5hbWUtZ3J1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJpb3JpdHkubG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbi5wcmlvcml0eS5tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTUwMDtcXG59XFxuXFxuLnByaW9yaXR5LmhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG59XFxuXFxuLnByaW9yaXR5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIGNoZWNrYm94IGhhbmRsZGVyICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGFjY2VudC1jb2xvcjogIzJhOWQ4ZjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyYTlkOGY7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAyMCUgMCUsXFxuICAgIDAlIDIwJSxcXG4gICAgMzAlIDUwJSxcXG4gICAgMCUgODAlLFxcbiAgICAyMCUgMTAwJSxcXG4gICAgNTAlIDcwJSxcXG4gICAgODAlIDEwMCUsXFxuICAgIDEwMCUgODAlLFxcbiAgICA3MCUgNTAlLFxcbiAgICAxMDAlIDIwJSxcXG4gICAgODAlIDAlLFxcbiAgICA1MCUgMzAlXFxuICApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qIGVuZG9mIGNoZWNrYm94IGhhbmRsZXIgKi9cXG5cXG4uZmluaXNoZWQubmFtZS1ncnVwIHAge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5maW5pc2hlZC5hY3Rpb24tZ3J1cCB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbiNkdWUtZGF0ZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmFjdGlvbi1ncnVwIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi13aWR0aDogMXB4O1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzUwMWYzYTtcXG59XFxuXFxuLmFjdGlvbi1ncnVwIGltZzpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi8qIEdlbmVyYWwgJiBWaWV3IE1vZGFsIFN0eWxlcyAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBjb2xvcjogIzUwMWYzYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZXRhaWwgcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kZXRhaWw6Zmlyc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogMS4xcmVtO1xcbn1cXG5cXG4uZGV0YWlsOm50aC1vZi10eXBlKDIpIC5kZXRhaWwtdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjk1cmVtO1xcbn1cXG5cXG4uZGV0YWlsOm50aC1vZi10eXBlKDMpIC5kZXRhaWwtdGl0bGUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjM1cmVtO1xcbn1cXG5cXG4uZGV0YWlsOmxhc3Qtb2YtdHlwZSAuZGV0YWlsLXRpdGxlIHtcXG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xcbn1cXG5cXG4uZGV0YWlsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLWJ1dHRvbiB7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCA0MCUpO1xcbn1cXG5cXG4vKiBBZGQgcHJvamVjdCBtb2RhbCAmIFRvZG8gbW9kYWwqL1xcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgbWFyZ2luOiAtMnJlbSAtMnJlbSAwIC0ycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzhkOWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciBwIHtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogYm9sZC1mb250O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtbW9kYWwgPiAubW9kYWwtY29udGVudCxcXG4jYWRkLW1vZGFsLXRvZG8gPiAubW9kYWwtY29udGVudCxcXG4jZWRpdC1tb2RhbC10b2RvID4gLm1vZGFsLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAzNXJlbTtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtbW9kYWwgZm9ybSxcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSxcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6ICMxNDE0MTQ7XFxufVxcblxcbiNhZGQtbW9kYWwtdG9kbyAuaW5wdXQtY29udGFpbmVyLFxcbiNlZGl0LW1vZGFsLXRvZG8gLmlucHV0LWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LW1vZGFsIGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbiNhZGQtbW9kYWwtdG9kbyBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4jZWRpdC1tb2RhbC10b2RvIGZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmZvcm0gaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbnNlbGVjdCB7XFxuICBmb250LWZhbWlseTogbWFpbi1mb250O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICMxNDE0MTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZC1tb2RhbC10b2RvIHVsIGxpLFxcbiNlZGl0LW1vZGFsLXRvZG8gdWwgbGksXFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xcbn1cXG5cXG4jYWRkLW1vZGFsLXRvZG8gdWwgbGkgaW5wdXQsXFxuI2VkaXQtbW9kYWwtdG9kbyB1bCBsaSBpbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbixcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b24sXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogYm9sZC1mb250O1xcbiAgbWF4LXdpZHRoOiA4cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzJhOWQ4ZjtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjJyZW07XFxuICBjb2xvcjogIzJhOWQ4ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxufVxcblxcbiNhZGQtcHJvamVjdC1tb2RhbCBmb3JtIGJ1dHRvbjpob3ZlcixcXG4jYWRkLW1vZGFsLXRvZG8gZm9ybSBidXR0b246aG92ZXIsXFxuI2VkaXQtbW9kYWwtdG9kbyBmb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2Y3ZjdmNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbiNhZGQtbW9kYWwtdG9kbyAuYnV0dG9uLWNvbnRhaW5lcixcXG4jZWRpdC1tb2RhbC10b2RvIC5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNhZGQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAsXFxuI2VkaXQtbW9kYWwtdG9kbyAucHJpb3JpdHktYnRuLWdydXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi1ncnVwIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDQuNXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWJ0bi1ncnVwICNsb3cge1xcbiAgY29sb3I6ICMyYTlkOGY7XFxuICBib3JkZXItY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbi5wcmlvcml0eS1idG4tZ3J1cCAjbG93OmhvdmVyLFxcbi5wcmlvcml0eS1idG4tZ3J1cCAjbG93LmFjdGl2ZS1wcmlvcml0eSB7XFxuICBjb2xvcjogI2Y3ZjdmNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbi5wcmlvcml0eS1idG4tZ3J1cCAjbWVkaXVtIHtcXG4gIGNvbG9yOiAjZmZhNTAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZhNTAwO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bTpob3ZlcixcXG4ucHJpb3JpdHktYnRuLWdydXAgI21lZGl1bS5hY3RpdmUtcHJpb3JpdHkge1xcbiAgY29sb3I6ICNmN2Y3Zjc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNTAwO1xcbn1cXG5cXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2gge1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBib3JkZXItY29sb3I6ICNmZjAwMDA7XFxufVxcblxcbi5wcmlvcml0eS1idG4tZ3J1cCAjaGlnaDpob3ZlcixcXG4ucHJpb3JpdHktYnRuLWdydXAgI2hpZ2guYWN0aXZlLXByaW9yaXR5IHtcXG4gIGNvbG9yOiAjZjdmN2Y3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmF0dHJpYnV0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLmF0dHJpYnV0aW9uIGEge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyByZW5kZXJVSSwgcmVuZGVyUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vbWFuaXB1bGF0ZURPTVwiO1xuaW1wb3J0IHsgaXNUaGlzV2VlaywgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0KFxuICBuZXdUb0RvID0gbnVsbCxcbiAgcHJvamVjdHNMaXN0LFxuICB0b2RvTGlzdCxcbiAgcGFzc2VkUHJvamVjdE5hbWUgPSBudWxsLFxuKSB7XG4gIGxldCBleGlzdGluZ1Byb2plY3QgPSBudWxsO1xuICBpZiAocGFzc2VkUHJvamVjdE5hbWUpIHtcbiAgICBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0c0xpc3QuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHBhc3NlZFByb2plY3ROYW1lLFxuICAgICk7XG5cbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgcHJvY2Vzc1Byb2plY3QocGFzc2VkUHJvamVjdE5hbWUsIHByb2plY3RzTGlzdCk7XG4gICAgICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xuICAgICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGR1cGxpY2F0ZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0RXhpc3RzID0gcHJvamVjdHNMaXN0LnNvbWUoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBcIkRlZmF1bHRcIixcbiAgICApO1xuXG4gICAgaWYgKCFkZWZhdWx0UHJvamVjdEV4aXN0cykge1xuICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG4gICAgICBwcm9qZWN0c0xpc3QucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdUb0RvLnByb2plY3Q7XG4gICAgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSxcbiAgICApO1xuXG4gICAgaWYgKCFleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgIHByb2Nlc3NQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0c0xpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0c0xpc3QpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuXG4gIHJldHVybiBwcm9qZWN0c0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKHByb2plY3RzTGlzdCwgdG9kb0xpc3QgPSBudWxsLCBjdXJyZW50UHJvamVjdCkge1xuICBpZiAoIXRvZG9MaXN0KSB7XG4gICAgbGV0IHNlbGVjdENvbnRlbnQgPSBcIlwiO1xuXG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHNlbGVjdENvbnRlbnQgKz0gYFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZWxlbWVudC5uYW1lfVwiICR7Y3VycmVudFByb2plY3QgPT09IGVsZW1lbnQubmFtZSA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9PiR7ZWxlbWVudC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgYDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3RDb250ZW50O1xuICB9IGVsc2Uge1xuICAgIGxldCB1bENvbnRlbnQgPSBcIlwiO1xuXG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHVsQ29udGVudCArPSBgXG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtcHJvamVjdC1pZD1cIiR7ZWxlbWVudC5pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInByb2plY3QtbGlua1wiPiR7ZWxlbWVudC5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4ke2NvdW50VG9kb2luUHJvamVjdChlbGVtZW50Lm5hbWUsIHRvZG9MaXN0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdWxDb250ZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb2pldHNCeUR1ZURhdGUodG9kb0xpc3QpIHtcbiAgY29uc3QgZHVlVG9kYXlUb2RvcyA9IHRvZG9MaXN0LmZpbHRlcihcbiAgICAodG9kbykgPT4gaXNUb2RheShuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpKSAmJiAhdG9kby5fc3RhdHVzLFxuICApO1xuICBjb25zdCBkdWVUaGlzV2Vla1RvZG9zID0gdG9kb0xpc3QuZmlsdGVyKFxuICAgICh0b2RvKSA9PiBpc1RoaXNXZWVrKG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSkpICYmICF0b2RvLl9zdGF0dXMsXG4gICk7XG5cbiAgcmV0dXJuIHsgZHVlVG9kYXlUb2RvcywgZHVlVGhpc1dlZWtUb2RvcyB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJEdWVUb2Rvc0NvbnRhaW5lcih0b2RvTGlzdCkge1xuICBjb25zdCB7IGR1ZVRvZGF5VG9kb3MsIGR1ZVRoaXNXZWVrVG9kb3MgfSA9IGdldFByb2pldHNCeUR1ZURhdGUodG9kb0xpc3QpO1xuXG4gIGxldCB1bENvbnRlbnQgPSBcIlwiO1xuICB1bENvbnRlbnQgPSBgXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGlkPVwiaG9tZS1saW5rXCI+SG9tZTwvYT48c3BhbiBjbGFzcz1cIm51bWJlci1vZi10YXNrc1wiPiR7Y291bnRJbmNvbXBsZXRlVG9kb3ModG9kb0xpc3QpfTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBpZD1cInRvZGF5LWxpbmtcIj5EdWUgVG9kYXk8L2E+PHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4ke2R1ZVRvZGF5VG9kb3MubGVuZ3RofTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBpZD1cIndlZWstbGlua1wiPkR1ZSBUaGlzIFdlZWs8L2E+PHNwYW4gY2xhc3M9XCJudW1iZXItb2YtdGFza3NcIj4ke2R1ZVRoaXNXZWVrVG9kb3MubGVuZ3RofTwvc3Bhbj48L2xpPlxuICAgIGA7XG5cbiAgcmV0dXJuIHVsQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY291bnRJbmNvbXBsZXRlVG9kb3ModG9kb0xpc3QpIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgdG9kb0xpc3QuZm9yRWFjaCgoZWxlbWVtZW50KSA9PiB7XG4gICAgaWYgKCFlbGVtZW1lbnQuc3RhdHVzKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBjb3VudFRvZG9pblByb2plY3QoZWxlbWVudCwgdG9kb0xpc3QpIHtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRvZG9MaXN0W2ldLnByb2plY3QgPT09IGVsZW1lbnQgJiYgIXRvZG9MaXN0W2ldLnN0YXR1cykge1xuICAgICAgY291bnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q291bnROdW1iZXIoKSB7XG4gIGNvbnN0IG51bWJlckJvdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubnVtYmVyLW9mLXRhc2tzXCIpO1xuXG4gIGlmIChudW1iZXJCb3VibGUubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcImhhbmRsZVByb2plY3RDb3VudE51bWJlcjogTm8gZWxlbWVudHMgZm91bmQgd2l0aCB0aGUgY2xhc3MgJ251bWJlci1vZi10YXNrcycuXCIsXG4gICAgKTtcbiAgfVxuXG4gIG51bWJlckJvdWJsZS5mb3JFYWNoKChib3VibGUpID0+IHtcbiAgICBpZiAoYm91YmxlLmlubmVySFRNTCA9PSAwKSB7XG4gICAgICBib3VibGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWRUb0RlbGV0ZSwgcHJvamVjdHNMaXN0LCB0b2RvTGlzdCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0c0xpc3QuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09IGlkVG9EZWxldGUsXG4gICk7XG5cbiAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XG4gICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBoYW5kbGVQcm9qZWN0LFxuICBnZXRQcm9qZWN0cyxcbiAgcmVuZGVyRHVlVG9kb3NDb250YWluZXIsXG4gIGdldFByb2pldHNCeUR1ZURhdGUsXG4gIGRlbGV0ZVByb2plY3QsXG4gIGhhbmRsZVByb2plY3RDb3VudE51bWJlcixcbn07XG4iLCJpbXBvcnQgeyByZW5kZXJVSSwgcmVuZGVyVG9kb0NvbnRhaW5lciwgaGFuZGxlRW1wdHlQcm9qZWN0UGFnZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzLFxuICBzdGF0dXNPZlVJLFxuICBmaWx0ZXJlZFRvZG9zLFxufSBmcm9tIFwiLi9tYW5pcHVsYXRlRE9NXCI7XG5pbXBvcnQgeyBoYW5kbGVQcm9qZWN0Q291bnROdW1iZXIgfSBmcm9tIFwiLi9oYW5kbGVwcm9qZWN0XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gZGlzcGxheVRvRG9kcyh0b2RvTGlzdCkge1xuICBsZXQgdWxDb250ZW50ID0gXCJcIjtcblxuICB0b2RvTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgdWxDb250ZW50ICs9IGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiBpZD1cIml0ZW0tJHtlbGVtZW50LmlkfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLWdydXAgJHtlbGVtZW50LnN0YXR1cyA/IFwiZmluaXNoZWRcIiA6IFwiXCJ9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSAke2VsZW1lbnQucHJpb3JpdHl9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tY2hlY2tib3hcIiAke2VsZW1lbnQuc3RhdHVzID8gXCJjaGVja2VkXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmaW5pc2hlZFwiPiR7ZWxlbWVudC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncnVwICR7ZWxlbWVudC5zdGF0dXMgPyBcImZpbmlzaGVkXCIgOiBcIlwifVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImR1ZS1kYXRlXCI+JHtmb3JtYXQobmV3IERhdGUoZWxlbWVudC5kdWVEYXRlKSwgXCJNTU0gZG9cIil9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidmlldy1idG5cIiBpZD1cInZpZXctYnRuLSR7ZWxlbWVudC5pZH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvdmlldy5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtYnRuXCIgaWQ9XCJlZGl0LWJ0bi0ke2VsZW1lbnQuaWR9XCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2VkaXQuc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnRuXCIgaWQ9XCJkZWxldGUtYnRuLSR7ZWxlbWVudC5pZH1cIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgfSk7XG5cbiAgcmV0dXJuIHVsQ29udGVudDtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kb3NCeVByb2plY3QodG9kb0xpc3QsIGN1cmVudEVsZW1lbnQpIHtcbiAgcmV0dXJuIHRvZG9MaXN0LmZpbHRlcigodGFza0xpc3QpID0+IHRhc2tMaXN0LnByb2plY3QgPT09IGN1cmVudEVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdUb2RvKFxuICB0b2RvVGl0bGUsXG4gIHRvZG9EZXNjcmlwdGlvbixcbiAgc2VsZWN0ZWRQcm9qZWN0LFxuICBzZWxlY3RlRGF0ZSxcbiAgc2VsZWN0ZWRQcmlvcml0eSxcbiAgdG9kb0xpc3QsXG4gIHByb2plY3RzTGlzdCxcbikge1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgdG9kb1RpdGxlLFxuICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICBzZWxlY3RlRGF0ZSxcbiAgICBzZWxlY3RlZFByaW9yaXR5LFxuICAgIGZhbHNlLFxuICAgIHNlbGVjdGVkUHJvamVjdCxcbiAgKTtcblxuICBpZiAoIWNoZWNrRm9yRHVwbGljYXRlVGl0bGUobmV3VG9kbywgdG9kb0xpc3QpKSB7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gICAgcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XG4gICAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIlRpdGxlIG5lZWRzIHRvIGJlIHVuaXF1ZVwiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gZWRpdFRvZG8oXG4gIHByb2plY3RJZCxcbiAgdG9kb1RpdGxlLFxuICB0b2RvRGVzY3JpcHRpb24sXG4gIHNlbGVjdGVkUHJvamVjdCxcbiAgc2VsZWN0ZURhdGUsXG4gIHNlbGVjdGVkUHJpb3JpdHksXG4gIHRvZG9MaXN0LFxuICBwcm9qZWN0c0xpc3QsXG4pIHtcbiAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gdG9kb0xpc3RbcHJvamVjdElkXTtcbiAgc2VsZWN0ZWRUb2RvLl90aXRsZSA9IHRvZG9UaXRsZTtcbiAgc2VsZWN0ZWRUb2RvLl9kZXNjcmlwdGlvbiA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgc2VsZWN0ZWRUb2RvLl9wcm9qZWN0ID0gc2VsZWN0ZWRQcm9qZWN0O1xuICBzZWxlY3RlZFRvZG8uX2R1ZURhdGUgPSBzZWxlY3RlRGF0ZTtcbiAgc2VsZWN0ZWRUb2RvLl9wcmlvcml0eSA9IHNlbGVjdGVkUHJpb3JpdHk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcbiAgc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JEdXBsaWNhdGVUaXRsZShuZXdUb2RvLCB0b2RvTGlzdCkge1xuICByZXR1cm4gdG9kb0xpc3Quc29tZSgodG9kb0xpc3QpID0+IHRvZG9MaXN0LnRpdGxlID09PSBuZXdUb2RvLnRpdGxlKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oZWxlbWVudElkLCB0b2RvTGlzdCwgcHJvamVjdHNMaXN0KSB7XG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9MaXN0LmZpbmRJbmRleCgodG9kbykgPT4gdG9kby5pZCA9PSBlbGVtZW50SWQpO1xuXG4gIHRvZG9MaXN0LnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG5cbiAgaWYgKHN0YXR1c09mVUkpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZpbHRlcmVkVG9kb3NbMF0ucHJvamVjdDtcbiAgICBsZXQgZmlsdGVyZWRUb2Rvc0FmdGVyRGVsZXRpb24gPSBnZXRUb2Rvc0J5UHJvamVjdCh0b2RvTGlzdCwgcHJvamVjdE5hbWUpO1xuICAgIHJlbmRlclRvZG9Db250YWluZXIoZmlsdGVyZWRUb2Rvc0FmdGVyRGVsZXRpb24pO1xuICAgIGhhbmRsZVByb2plY3RDb3VudE51bWJlcigpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlclVJKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnModG9kb0xpc3QsIHByb2plY3RzTGlzdCk7XG4gICAgaWYgKHRvZG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBoYW5kbGVFbXB0eVByb2plY3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdldFRvZG9zQnlQcm9qZWN0LFxuICBkaXNwbGF5VG9Eb2RzLFxuICBhZGROZXdUb2RvLFxuICBlZGl0VG9kbyxcbiAgZGVsZXRlVG9kb0l0ZW0sXG59O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBnZXRQcm9qZWN0cyxcbiAgcmVuZGVyRHVlVG9kb3NDb250YWluZXIsXG4gIGhhbmRsZVByb2plY3RDb3VudE51bWJlcixcbn0gZnJvbSBcIi4vaGFuZGxlcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVRvRG9kcyB9IGZyb20gXCIuL2hhbmRsZXRvZG9zXCI7XG4vL2NvcnJlY3QgdHlwbyBhYm92ZTogc2hvdWxkIGJlIGRpc3BsYXlUb2Rvc1xuaW1wb3J0IHsgZGVmYXVsdFZhbHVlcyB9IGZyb20gXCIuL3N0YXJ0dXBcIjtcbmltcG9ydCBUb2RvSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RvLWRvLWxpc3Quc3ZnXCI7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vaGFuZGxlcHJvamVjdFwiO1xuaW1wb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL21hbmlwdWxhdGVET01cIjtcblxuZnVuY3Rpb24gcmVuZGVyVUkocHJvamVjdHNMaXN0LCB0b2RvTGlzdCkge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IGhlYWRlclRvZG9JY29uID0gbmV3IEltYWdlKCk7XG4gIGhlYWRlclRvZG9JY29uLnNyYyA9IFRvZG9JY29uO1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMT4vLyBUbyBkbzwvaDE+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL3RvLWRvLWxpc3Quc3ZnXCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1pY29uLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwidG9kb3MtZHVlXCIgY2xhc3M9XCJtZW51LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICR7cmVuZGVyRHVlVG9kb3NDb250YWluZXIodG9kb0xpc3QpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwicHJvamVjdHNcIiBjbGFzcz1cIm1lbnUtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtnZXRQcm9qZWN0cyhwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkdG9kb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2FkZC1wbHVzLWNpcmNsZS5zdmdcIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5ldyBUbyBkbzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRwcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvYWRkLXBsdXMtY2lyY2xlLnN2Z1wiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmV3IFByb2plY3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0b2RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zLWxpc3RcIiBpZD1cIml0ZW0tbGlzdC1YLVhcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtkaXNwbGF5VG9Eb2RzKHRvZG9MaXN0KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm1vZGFsLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGA7XG5cbiAgaWYgKHRvZG9MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYDxwIGNsYXNzPVwiZW1wdHlQYWdlTm90aWZpY2F0aW9uXCI+VGhlcmUgYXJlIG5vIG1vcmUgdG9kb3MuPC9wPmA7XG4gICAgcmVuZGVyVG9kb0NvbnRhaW5lcih0b2RvTGlzdCwgZXJyb3JNZXNzYWdlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gIH1cblxuICAvLy0tLSEhIS0tLS8vXG4gIGNvbnN0IGhlYWRlckljb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1pY29uLWNvbnRhaW5lclwiKTtcbiAgaGVhZGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUb2RvSWNvbik7XG4gIGhhbmRsZVByb2plY3RDb3VudE51bWJlcih0b2RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9Db250YWluZXIoZmlsdGVyZWRUb2RvcywgZXJyb3JNZXNzYWdlKSB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChmaWx0ZXJlZFRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8dWwgY2xhc3M9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgICAgICAke2Rpc3BsYXlUb0RvZHMoZmlsdGVyZWRUb2Rvcyl9ICBcbiAgICAgICAgPC91bD5cbiAgICBgO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgICAgICAke2Vycm9yTWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICBpZiAoIWVycm9yTWVzc2FnZSkge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGgyPkVtcHR5IFByb2plY3QhPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5DcmVhdGUgYSBuZXcgdG8tZG8gaXRlbSBvciBkZWxldGUgcHJvamVjdC48L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIj5EZWxldGUgcHJvamVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgIH1cblxuICAgIGhhbmRsZUVtcHR5UHJvamVjdFBhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGFpbmVyKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7Z2V0UHJvamVjdHMocHJvamVjdHNMaXN0LCB0b2RvTGlzdCl9XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVySG9tZU1lbnUodG9kb0xpc3QpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtZHVlXCIpO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAke3JlbmRlckR1ZVRvZG9zQ29udGFpbmVyKHRvZG9MaXN0KX1cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFbXB0eVByb2plY3RQYWdlKCkge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCB7IHByb2plY3RzTGlzdCwgdG9kb0xpc3QgfSA9IGRlZmF1bHRWYWx1ZXM7XG5cbiAgZ2V0QWN0aXZlTGluayhmdW5jdGlvbiAoaWRUb0RlbGV0ZSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1idG5cIik7XG4gICAgaWYgKGRlbGV0ZUJ0bikge1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QoaWRUb0RlbGV0ZSwgcHJvamVjdHNMaXN0LCB0b2RvTGlzdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJSZW5kZXJVSSBjYXNlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUxpbmsoY2FsbGJhY2spIHtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbiAgbGlua0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3RJZCA9XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG5cbiAgICAvLyBQYXNzIHRoZSBhY3RpdmVQcm9qZWN0SWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjYWxsYmFjayhhY3RpdmVQcm9qZWN0SWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vVW50aWwgaSBmaWd1cmUgb3V0IGFzeW5jLWF3YWl0IGkgdXNlIHRoZXNlIGZ1bmN0aW9uIHRvIGFkZCB0aGUgZXZlbnRsaXN0ZW5lcnNcbi8vYWZ0ZXIgdGhlIFVJIGlzIHJlbmRlcmVkLiBBZGRpbmcgdGhlIGNhbGwgdG8gc2V0dXBFdmVudExpc3RlbmVycyBpbiByZW5kZXJVSSByZXR1cm5lZCBhIHdlYnBhY2sgbW9kdWxlIGVycm9yXG4vL2JlY2F1c2UgdGhlIFVJIHdhcyBub3QgZnVsbHkgcmVuZGVyZWQuXG5mdW5jdGlvbiBjYWxsRXZlbnRzKCkge1xuICBjb25zdCB7IHByb2plY3RzTGlzdCwgdG9kb0xpc3QgfSA9IGRlZmF1bHRWYWx1ZXM7XG5cbiAgdHJ5IHtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjYWxsaW5nIGNhbGxFdmVudHM6XCIsIGVycm9yKTtcbiAgfVxufVxuY2FsbEV2ZW50cygpO1xuXG5leHBvcnQge1xuICByZW5kZXJVSSxcbiAgcmVuZGVyVG9kb0NvbnRhaW5lcixcbiAgZGlzcGxheVRvRG9kcyxcbiAgcmVuZGVyUHJvamVjdENvbnRhaW5lcixcbiAgcmVuZGVySG9tZU1lbnUsXG4gIGhhbmRsZUVtcHR5UHJvamVjdFBhZ2UsXG59O1xuIiwiaW1wb3J0IHtcbiAgcmVuZGVyVG9kb0NvbnRhaW5lcixcbiAgcmVuZGVyUHJvamVjdENvbnRhaW5lcixcbiAgcmVuZGVySG9tZU1lbnUsXG59IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge1xuICBnZXRUb2Rvc0J5UHJvamVjdCxcbiAgZGlzcGxheVRvRG9kcyxcbiAgYWRkTmV3VG9kbyxcbiAgZWRpdFRvZG8sXG4gIGRlbGV0ZVRvZG9JdGVtLFxufSBmcm9tIFwiLi9oYW5kbGV0b2Rvc1wiO1xuaW1wb3J0IHtcbiAgaGFuZGxlUHJvamVjdCxcbiAgaGFuZGxlUHJvamVjdENvdW50TnVtYmVyLFxuICBnZXRQcm9qZXRzQnlEdWVEYXRlLFxufSBmcm9tIFwiLi9oYW5kbGVwcm9qZWN0XCI7XG5pbXBvcnQgeyByZW5kZXJVSSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gXCIuL2hhbmRsZXByb2plY3RcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5sZXQgc3RhdHVzT2ZVSSA9IGZhbHNlO1xubGV0IGZpbHRlcmVkVG9kb3MgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vTWVudSBsaW5rcyBpbnRlcmFjdGlvblxuICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1saW5rcyBhXCIpO1xuXG4gICAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWVudUxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE1vZGFsKG1vZGFsQ29udGFpbmVyKSB7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwiYWRkLXByb2plY3QtbW9kYWxcIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBQcm9qZWN0PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Qcm9qZWN0IG5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGUtcHJvamVjdFwiPkNyZWF0ZSBwcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gb3BlblRvRG9Nb2RhbChtb2RhbENvbnRhaW5lciwgcHJvamVjdHNMaXN0KSB7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwiYWRkLW1vZGFsLXRvZG9cIiBjbGFzcz1cIm1vZGFsIGFjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBhIG5ldyBUbyBEbzwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvY2xvc2UtZWxsaXBzZS13aGl0ZS1iZy5zdmdcIiBjbGFzcz1cImNsb3NlLXRvZG8tbW9kYWwtYnV0dG9uIGNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByb2plY3RzLXNlbGVjdFwiIG5hbWU9XCJwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Z2V0UHJvamVjdHMocHJvamVjdHNMaXN0KX0gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj4gIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktYnRuLWdydXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG93XCIgY2xhc3M9XCJhY3RpdmUtcHJpb3JpdHlcIiB0eXBlPVwiYnV0dG9uXCI+TG93PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWVkaXVtXCIgdHlwZT1cImJ1dHRvblwiPk1lZGl1bTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhpZ2hcIiB0eXBlPVwiYnV0dG9uXCI+SGlnaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlLXRvZG9cIj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIG9wZW5WaWV3TW9kYWwoZWxlbWVudElkLCB0b2RvTGlzdCwgbW9kYWxDb250YWluZXIpIHtcbiAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgaWQ9XCJ2aWV3LW1vZGFsXCIgY2xhc3M9XCJtb2RhbCBhY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jbG9zZS1lbGxpcHNlLnN2Z1wiIGNsYXNzPVwiY2xvc2UtbW9kYWwtYnV0dG9uIGNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgPGgyPiR7dG9kb0xpc3RbZWxlbWVudElkXS50aXRsZX08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLXRpdGxlXCI+UHJvamVjdDogPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7dG9kb0xpc3RbZWxlbWVudElkXS5wcm9qZWN0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLXRpdGxlXCI+UHJpb3JpdHk6IDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3RvZG9MaXN0W2VsZW1lbnRJZF0ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwtdGl0bGVcIj5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7Zm9ybWF0KG5ldyBEYXRlKHRvZG9MaXN0W2VsZW1lbnRJZF0uZHVlRGF0ZSksIFwiZG8gTU1NIHl5eVwiKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC10aXRsZVwiPkRldGFpbHM6IDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3RvZG9MaXN0W2VsZW1lbnRJZF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICBcbiAgICA8L2Rpdj5cbiAgICBgO1xuICBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RhbChlbGVtZW50SWQsIHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QsIG1vZGFsQ29udGFpbmVyKSB7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwiZWRpdC1tb2RhbC10b2RvXCIgY2xhc3M9XCJtb2RhbCBhY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5FZGl0IFRvIERvPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jbG9zZS1lbGxpcHNlLXdoaXRlLWJnLnN2Z1wiIGNsYXNzPVwiY2xvc2UtcHJvamVjdC1tb2RhbC1idXR0b24gY2xvc2UtYnRuXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIGRhdGEtZm9ybWlkPVwiJHt0b2RvTGlzdFtlbGVtZW50SWRdLmlkfVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke3RvZG9MaXN0W2VsZW1lbnRJZF0udGl0bGV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7dG9kb0xpc3RbZWxlbWVudElkXS5kZXNjcmlwdGlvbn1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJvamVjdHMtc2VsZWN0XCIgbmFtZT1cInByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtnZXRQcm9qZWN0cyhwcm9qZWN0c0xpc3QsIG51bGwsIHRvZG9MaXN0W2VsZW1lbnRJZF0ucHJvamVjdCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZWRhdGVcIj5EdWUgZGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVkYXRlXCIgdmFsdWU9XCIke3RvZG9MaXN0W2VsZW1lbnRJZF0uZHVlRGF0ZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj4gIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktYnRuLWdydXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibG93XCIgY2xhc3M9XCIke3RvZG9MaXN0W2VsZW1lbnRJZF0ucHJpb3JpdHkgPT09IFwibG93XCIgPyBcImFjdGl2ZS1wcmlvcml0eVwiIDogXCJcIn1cIj5Mb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtZWRpdW1cIiBjbGFzcz1cIiR7dG9kb0xpc3RbZWxlbWVudElkXS5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIiA/IFwiYWN0aXZlLXByaW9yaXR5XCIgOiBcIlwifVwiPk1lZGl1bTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImhpZ2hcIiBjbGFzcz1cIiR7dG9kb0xpc3RbZWxlbWVudElkXS5wcmlvcml0eSA9PT0gXCJoaWdoXCIgPyBcImFjdGl2ZS1wcmlvcml0eVwiIDogXCJcIn1cIj5IaWdoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlZGl0LW1vZGFsLXRvZG9cIj5Db25maXJtIGVkaXQ8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgYWRkQ2xvc2VFdmVudExpc3RlbmVycyhtb2RhbENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRvZG9TdGF0dXMoZWxlbWVudElkLCB0YXJnZXQsIHByb2plY3RzTGlzdCwgdG9kb0xpc3QpIHtcbiAgY29uc3QgdG9kb0l0ZW0gPSB0b2RvTGlzdC5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09IGVsZW1lbnRJZCk7XG4gIHRvZG9JdGVtLnN0YXR1cyA9IHRhcmdldC5jaGVja2VkO1xuXG4gIGlmICghdG9kb0l0ZW0pIHtcbiAgICBcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdHVzT2ZVSSkge1xuICAgIGRpc3BsYXlUb0RvZHModG9kb0xpc3QpO1xuICAgIGdldFRvZG9zQnlQcm9qZWN0KHRvZG9MaXN0LCB0b2RvSXRlbS5wcm9qZWN0KTtcbiAgICByZW5kZXJQcm9qZWN0Q29udGFpbmVyKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xuICAgIHJlbmRlckhvbWVNZW51KHRvZG9MaXN0KTtcbiAgICBoYW5kbGVQcm9qZWN0Q291bnROdW1iZXIoKTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcbiAgfVxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKHRvZG9MaXN0LCBwcm9qZWN0c0xpc3QpO1xufVxuXG5mdW5jdGlvbiBhZGRDbG9zZUV2ZW50TGlzdGVuZXJzKG1vZGFsQ29udGFpbmVyKSB7XG4gIGNvbnN0IGNsb3NlQnV0dG9ucyA9IG1vZGFsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvc2UtYnRuXCIpO1xuICBjbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyh0b2RvTGlzdCwgcHJvamVjdHNMaXN0KSB7XG4gIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250YWluZXJcIik7XG5cbiAgLy9Ib21lIGFuZCBkdWVEYXRlIG1lbnUgc2VjdGlvblxuICBjb25zdCB7IGR1ZVRvZGF5VG9kb3MsIGR1ZVRoaXNXZWVrVG9kb3MgfSA9IGdldFByb2pldHNCeUR1ZURhdGUodG9kb0xpc3QpO1xuICBjb25zdCB0b2RheVRvZG9zTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktbGlua1wiKTtcbiAgY29uc3QgdGhpc1dlZWtUb2Rvc0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstbGlua1wiKTtcblxuICB0b2RheVRvZG9zTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChkdWVUb2RheVRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmVuZGVyVG9kb0NvbnRhaW5lcihkdWVUb2RheVRvZG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYDxwIGNsYXNzPVwiZW1wdHlQYWdlTm90aWZpY2F0aW9uXCI+VGhlcmUgYXJlIG5vIHRvZG9zIHdpdGggZHVlIGRhdGUgdG9kYXkuPC9wPmA7XG4gICAgICByZW5kZXJUb2RvQ29udGFpbmVyKGR1ZVRvZGF5VG9kb3MsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChzdGF0dXNPZlVJID0gdHJ1ZSk7XG4gIH0pO1xuXG4gIHRoaXNXZWVrVG9kb3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGR1ZVRoaXNXZWVrVG9kb3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZW5kZXJUb2RvQ29udGFpbmVyKGR1ZVRoaXNXZWVrVG9kb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgPHAgY2xhc3M9XCJlbXB0eVBhZ2VOb3RpZmljYXRpb25cIj5UaGVyZSBhcmUgbm8gdG9kb3Mgd2l0aCBkdWUgZGF0ZSB0aGlzIHdlZWsuPC9wPmA7XG4gICAgICByZW5kZXJUb2RvQ29udGFpbmVyKGR1ZVRoaXNXZWVrVG9kb3MsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChzdGF0dXNPZlVJID0gdHJ1ZSk7XG4gIH0pO1xuXG4gIC8vXG4gIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWxpbmtcIik7XG4gIGNvbnN0IGFkZFByb2plY3RCVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHByb2plY3RcIik7XG4gIGNvbnN0IGFkZFRvRG9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHRvZG9cIik7XG5cbiAgYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG9wZW5Qcm9qZWN0TW9kYWwobW9kYWxDb250YWluZXIsIHByb2plY3RzTGlzdCk7XG4gIH0pO1xuXG4gIGFkZFRvRG9CVE4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBvcGVuVG9Eb01vZGFsKG1vZGFsQ29udGFpbmVyLCBwcm9qZWN0c0xpc3QpO1xuICB9KTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJlbmRlclVJKHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnModG9kb0xpc3QsIHByb2plY3RzTGlzdCk7XG4gICAgc3RhdHVzT2ZVSSA9IGZhbHNlO1xuICB9KTtcblxuICBmdW5jdGlvbiBhZFVJTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGxpc3RJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKTtcbiAgICBjb25zdCBlbGVtZW50SWQgPSBsaXN0SXRlbSA/ICtsaXN0SXRlbS5pZC5zcGxpdChcIi1cIilbMV0gOiBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoXCIudmlldy1idG5cIikpIHtcbiAgICAgICAgICAgIG9wZW5WaWV3TW9kYWwoZWxlbWVudElkLCB0b2RvTGlzdCwgbW9kYWxDb250YWluZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KFwiLmVkaXQtYnRuXCIpKSB7XG4gICAgICAgICAgICBvcGVuRWRpdE1vZGFsKGVsZW1lbnRJZCwgdG9kb0xpc3QsIHByb2plY3RzTGlzdCwgbW9kYWxDb250YWluZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZS1idG5cIikpIHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9JdGVtKGVsZW1lbnRJZCwgdG9kb0xpc3QsIHByb2plY3RzTGlzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRvZG8tY2hlY2tib3hcIikpIHtcbiAgICAgICAgICAgIG1vZGlmeVRvZG9TdGF0dXMoZWxlbWVudElkLCB0YXJnZXQsIHByb2plY3RzTGlzdCwgdG9kb0xpc3QpO1xuICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkVUlMaXN0ZW5lcnMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG50b2RvTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRVSUxpc3RlbmVycyk7XG5cbiAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBwcm9qZWN0IGxpbmtzXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0cyBsaVwiKTtcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG4gIHByb2plY3RMaXN0LmZvckVhY2goKGxpKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gbGkucXVlcnlTZWxlY3RvcihcImFcIik7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQW5jaG9yIGxvZyBmaXJlZFwiKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYW5jaG9yLnRleHRDb250ZW50O1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuXG4gICAgICBmaWx0ZXJlZFRvZG9zID0gZ2V0VG9kb3NCeVByb2plY3QodG9kb0xpc3QsIHByb2plY3ROYW1lKTtcblxuICAgICAgcmVuZGVyVG9kb0NvbnRhaW5lcihmaWx0ZXJlZFRvZG9zKTtcbiAgICAgIGhhbmRsZVByb2plY3RDb3VudE51bWJlcigpO1xuXG4gICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9KTtcblxuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBzdGF0dXNPZlVJID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0dXNPZlVJLCBmaWx0ZXJlZFRvZG9zO1xuICAgIH0pO1xuICB9KTtcblxuICAvL0V2ZW50IGxpc3RlbmVycyBmb3IgbmV3IFByb2plY3RzL1RvZG9zIGFuZCBoYW5kbGVycyBmb3IgZWRpdHNcbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmlkID09PSBcImNyZWF0ZS1wcm9qZWN0XCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHBhc3NlZFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmIChwYXNzZWRQcm9qZWN0TmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWxlcnQoXCJQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVQcm9qZWN0KG51bGwsIHByb2plY3RzTGlzdCwgdG9kb0xpc3QsIHBhc3NlZFByb2plY3ROYW1lKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmlvcml0eUJUTlMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ0bi1ncnVwIGJ1dHRvblwiKTtcblxuICAgIHByaW9yaXR5QlROUy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgcHJpb3JpdHlCVE5TLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcmlvcml0eVwiKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmlkID09PSBcImNyZWF0ZS10b2RvXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlLnRyaW0oKTtcbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgIC52YWx1ZS50cmltKCk7XG4gICAgICBjb25zdCBwcm9qZWN0c0Ryb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1zZWxlY3RcIik7XG4gICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0c0Ryb3Bkb3duLnZhbHVlO1xuICAgICAgY29uc3Qgc2VsZWN0ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuICAgICAgY29uc3QgYWN0aXZlUHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wcmlvcml0eS1idG4tZ3J1cCAuYWN0aXZlLXByaW9yaXR5XCIsXG4gICAgICApO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IGFjdGl2ZVByaW9yaXR5QnRuID8gYWN0aXZlUHJpb3JpdHlCdG4uaWQgOiBudWxsO1xuXG4gICAgICBpZiAodG9kb1RpdGxlICYmIHNlbGVjdGVkUHJvamVjdCAmJiBzZWxlY3RlRGF0ZSAmJiBzZWxlY3RlZFByaW9yaXR5KSB7XG4gICAgICAgIGFkZE5ld1RvZG8oXG4gICAgICAgICAgdG9kb1RpdGxlLFxuICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICBzZWxlY3RlZFByb2plY3QsXG4gICAgICAgICAgc2VsZWN0ZURhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRQcmlvcml0eSxcbiAgICAgICAgICB0b2RvTGlzdCxcbiAgICAgICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICAgICk7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlJlcXVpcmVkIGZpZWxkczogVGl0bGUgYW5kIERhdGVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaWQgPT09IFwiZWRpdC1tb2RhbC10b2RvXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBmb3JtWzBdLmRhdGFzZXQuZm9ybWlkO1xuICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZS50cmltKCk7XG4gICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAudmFsdWUudHJpbSgpO1xuICAgICAgY29uc3QgcHJvamVjdHNEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtc2VsZWN0XCIpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHNEcm9wZG93bi52YWx1ZTtcbiAgICAgIGNvbnN0IHNlbGVjdGVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZTtcbiAgICAgIGNvbnN0IGFjdGl2ZVByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIucHJpb3JpdHktYnRuLWdydXAgLmFjdGl2ZS1wcmlvcml0eVwiLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHkgPSBhY3RpdmVQcmlvcml0eUJ0biA/IGFjdGl2ZVByaW9yaXR5QnRuLmlkIDogbnVsbDtcblxuICAgICAgZWRpdFRvZG8oXG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgdG9kb1RpdGxlLFxuICAgICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdCxcbiAgICAgICAgc2VsZWN0ZURhdGUsXG4gICAgICAgIHNlbGVjdGVkUHJpb3JpdHksXG4gICAgICAgIHRvZG9MaXN0LFxuICAgICAgICBwcm9qZWN0c0xpc3QsXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHNldHVwRXZlbnRMaXN0ZW5lcnMsIHN0YXR1c09mVUksIGZpbHRlcmVkVG9kb3MgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgaWRDb3VudGVyID0gLTE7XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuX2lkID0gUHJvamVjdC5jYWxjSWQoKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9pdGVtcyA9IDA7XG4gIH1cblxuICBzdGF0aWMgY2FsY0lkKCkge1xuICAgIHJldHVybiArK1Byb2plY3QuaWRDb3VudGVyO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICB9XG5cbiAgY2FsY0l0ZW0oKSB7XG4gICAgdGhpcy5faXRlbXMgKz0gMTtcbiAgfVxuXG4gIHNldCBpdGVtcyh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvLyB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBoYW5kbGVQcm9qZWN0IH0gZnJvbSBcIi4vaGFuZGxlcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVUkgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRvZG9MaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKSB8fCBbXTtcbiAgbGV0IHByb2plY3RzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIikpIHx8IFtdO1xuICBsZXQgcmVuZGVyT25seUNvbnRhaW5lciA9IGZhbHNlO1xuXG4gIGlmICghdG9kb0xpc3QgfHwgdG9kb0xpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgdG9kb0xpc3QgPSBbXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJXcml0ZSBvbiBibG9nXCIsXG4gICAgICAgIFwiV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWVcIixcbiAgICAgICAgXCIyMDI0LTEwLTE1XCIsXG4gICAgICAgIFwibG93XCIsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIkhvbWVcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJUaGVPZGluUHJvamVjdCBjaGFwdGVyIDJcIixcbiAgICAgICAgXCJGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAyXCIsXG4gICAgICAgIFwiMjAyNC0xMC0xN1wiLFxuICAgICAgICBcImxvd1wiLFxuICAgICAgICB0cnVlLFxuICAgICAgICBcIkhvbWVcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJOZXcgT2RpbiBDaGFwdGVyXCIsXG4gICAgICAgIFwiU3RhcnQgYSBuZXcgT2RpblByb2plY3RDaGFwdGVyXCIsXG4gICAgICAgIFwiMjAyNC0xMC0xNlwiLFxuICAgICAgICBcIm1lZGl1bVwiLFxuICAgICAgICB0cnVlLFxuICAgICAgICBcIkxlYXJuaW5nXCIsXG4gICAgICApLFxuICAgICAgbmV3IFRvZG8oXG4gICAgICAgIFwiUmVwYWlyIGJsb2dcIixcbiAgICAgICAgXCJGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyXCIsXG4gICAgICAgIFwiMjAyNC0wMy0yOVwiLFxuICAgICAgICBcImhpZ2hcIixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiTGVhcm5pbmdcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJSZWFkIGRhaWx5IGEgcGF0dGVyblwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LnBhdHRlcm5zLmRldi92YW5pbGxhL2ltcG9ydC1vbi1pbnRlcmFjdGlvblwiLFxuICAgICAgICBcIjIwMjQtMDMtMjBcIixcbiAgICAgICAgXCJoaWdoXCIsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIkxlYXJuaW5nXCIsXG4gICAgICApLFxuICAgICAgbmV3IFRvZG8oXG4gICAgICAgIFwiQXBwIGltcGxlbWVudGF0aW9uXCIsXG4gICAgICAgIFwiQWRkIGFiaWxpdHkgdG8gZXh0cmFjdCB0aGUgcHJvamVjdHMgZnJvbSB0aGUgYXJyYXlcIixcbiAgICAgICAgXCIyMDI0LTEyLTI0XCIsXG4gICAgICAgIFwibG93XCIsXG4gICAgICAgIHRydWUsXG4gICAgICAgIFwiQWN0aXZlIGxlYXJuaW5nXCIsXG4gICAgICApLFxuICAgICAgbmV3IFRvZG8oXG4gICAgICAgIFwiWHl4XCIsXG4gICAgICAgIFwiU29tZSByYW5kb20gdGV4dFwiLFxuICAgICAgICBcIjIwMjQtMDktMzFcIixcbiAgICAgICAgXCJsb3dcIixcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgXCJBY3RpdmUgbGVhcm5pbmdcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJBQkNcIixcbiAgICAgICAgXCJGaXJzdCB0aHJlZSBsZXR0ZXJzIGZyb20gdGhlIGFscGhhYmV0XCIsXG4gICAgICAgIFwiMjAyNC0xMC0xNlwiLFxuICAgICAgICBcImhpZ2hcIixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiQWN0aXZlIGxlYXJuaW5nXCIsXG4gICAgICApLFxuICAgICAgLy9zdXJwbHVzXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJYWVpcIixcbiAgICAgICAgXCJTb21lIGxldHRlcnMgZnJvbSB0aGUgYWxwaGFiZXRcIixcbiAgICAgICAgXCIyMDI0LTEwLTE4XCIsXG4gICAgICAgIFwiaGlnaFwiLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgXCJMZWFybmluZ1wiLFxuICAgICAgKSxcbiAgICAgIG5ldyBUb2RvKFxuICAgICAgICBcIlRoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMTVcIixcbiAgICAgICAgXCJGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAxNVwiLFxuICAgICAgICBcIjIwMjQtMTAtMTdcIixcbiAgICAgICAgXCJtZWRpdW1cIixcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgXCJIb21lXCIsXG4gICAgICApLFxuICAgICAgbmV3IFRvZG8oXCJaZWUgcHJvamVjdHNcIiwgXCJsb3JlbTIwXCIsIFwiMjAyNC0xMC0xM1wiLCBcImhpZ2hcIiwgdHJ1ZSwgXCJaZWVcIiksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJaZWUzIHByb2plY3RzXCIsXG4gICAgICAgIFwibG9yZW0yMFwiLFxuICAgICAgICBcIjIwMjQtMTAtMTVcIixcbiAgICAgICAgXCJsb3dcIixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiTGVhcm5pbmdcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcbiAgICAgICAgXCJaZWU0IHByb2plY3RzXCIsXG4gICAgICAgIFwibG9yZW0yMFwiLFxuICAgICAgICBcIjIwMjQtMTAtMTVcIixcbiAgICAgICAgXCJoaWdoXCIsXG4gICAgICAgIHRydWUsXG4gICAgICAgIFwiTGVhcm5pbmdcIixcbiAgICAgICksXG4gICAgICBuZXcgVG9kbyhcIlplZTVwcm9qZWN0c1wiLCBcImxvcmVtMjBcIiwgXCIyMDI0LTEwLTE2XCIsIFwibG93XCIsIHRydWUsIFwiWmVlXCIpLFxuICAgICAgbmV3IFRvZG8oXCJaZWU2IHByb2plY3RzXCIsIFwibG9yZW0yMFwiLCBcIjIwMjQtMTAtMTdcIiwgXCJoaWdoXCIsIGZhbHNlLCBcIlplZVwiKSxcbiAgICAgIG5ldyBUb2RvKFwiWmVlNyBwcm9qZWN0c1wiLCBcImxvcmVtMjBcIiwgXCIyMDI0LTEwLTE4XCIsIFwiaGlnaFwiLCB0cnVlLCBcIkhvbWVcIiksXG4gICAgXTtcblxuICAgIHByb2plY3RzTGlzdCA9IFtdO1xuICAgIHRvZG9MaXN0LmZvckVhY2goKG5ld1RvRG8pID0+IHtcbiAgICAgIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSkubWFwKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIG5ldyBUb2RvKFxuICAgICAgICAgIGl0ZW0uX3RpdGxlLFxuICAgICAgICAgIGl0ZW0uX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgIGl0ZW0uX2R1ZURhdGUsXG4gICAgICAgICAgaXRlbS5fcHJpb3JpdHksXG4gICAgICAgICAgaXRlbS5fc3RhdHVzLFxuICAgICAgICAgIGl0ZW0uX3Byb2plY3QsXG4gICAgICAgICksXG4gICAgKTtcblxuICAgIHByb2plY3RzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0xpc3RcIikpLm1hcChcbiAgICAgIChpdGVtKSA9PiBuZXcgUHJvamVjdChpdGVtLl9uYW1lKSxcbiAgICApO1xuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzTGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcblxuICByZW5kZXJVSShwcm9qZWN0c0xpc3QsIHRvZG9MaXN0KTtcblxuICByZXR1cm4ge1xuICAgIHRvZG9MaXN0LFxuICAgIHByb2plY3RzTGlzdCxcbiAgICByZW5kZXJPbmx5Q29udGFpbmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGVmYXVsdFZhbHVlcyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIHN0YXRpYyBpZENvdW50ZXIgPSAtMTtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IFRvZG8uY2FsY0lkKCk7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgc3RhdGljIGNhbGNJZCgpIHtcbiAgICByZXR1cm4gKytUb2RvLmlkQ291bnRlcjtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG5cbiAgc2V0IHN0YXR1cyh2YWx1ZSkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICB9XG5cbiAgLy9zZXQgcHJvamVjdCh2YWx1ZSl7XG4gIC8vICB0aGlzLnByb2plY3QgPSB2YWx1ZTtcbiAgLy99XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLmpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsuanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLmpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsuanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLmpzXCI7XG5cbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MuanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKCtkYXRlIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoK2RhdGUsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLmpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uL2NvbnN0cnVjdEZyb20uanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGVzKGNvbnRleHQsIC4uLmRhdGVzKSB7XG4gIGNvbnN0IG5vcm1hbGl6ZSA9IGNvbnN0cnVjdEZyb20uYmluZChcbiAgICBudWxsLFxuICAgIGNvbnRleHQgfHwgZGF0ZXMuZmluZCgoZGF0ZSkgPT4gdHlwZW9mIGRhdGUgPT09IFwib2JqZWN0XCIpLFxuICApO1xuICByZXR1cm4gZGF0ZXMubWFwKG5vcm1hbGl6ZSk7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VycyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzaWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2libGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21TeW1ib2xcbiAqIEBzdW1tYXJ5IFN5bWJvbCBlbmFibGluZyBEYXRlIGV4dGVuc2lvbnMgdG8gaW5oZXJpdCBwcm9wZXJ0aWVzIGZyb20gdGhlIHJlZmVyZW5jZSBkYXRlLlxuICpcbiAqIFRoZSBzeW1ib2wgaXMgdXNlZCB0byBlbmFibGUgdGhlIGBjb25zdHJ1Y3RGcm9tYCBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgYSBkYXRlXG4gKiB1c2luZyBhIHJlZmVyZW5jZSBkYXRlIGFuZCBhIHZhbHVlLiBJdCBhbGxvd3MgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllc1xuICogZnJvbSB0aGUgcmVmZXJlbmNlIGRhdGUgdG8gdGhlIG5ldyBkYXRlLiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlXG4gKiBbYFRaRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy90eikgdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXNcbiAqIGEgY29uc3RydWN0b3IgYXJndW1lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RGcm9tU3ltYm9sID0gU3ltYm9sLmZvcihcImNvbnN0cnVjdERhdGVGcm9tXCIpO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbVN5bWJvbCB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBTdGFydGluZyBmcm9tIHYzLjcuMCwgaXQgYWxsb3dzIHRvIGNvbnN0cnVjdCBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS9kYXRlLWZuc1wiO1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGU+KGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29uc3RydWN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApO1xuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIGRhdGUgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGRhdGUodmFsdWUpO1xuXG4gIGlmIChkYXRlICYmIHR5cGVvZiBkYXRlID09PSBcIm9iamVjdFwiICYmIGNvbnN0cnVjdEZyb21TeW1ib2wgaW4gZGF0ZSlcbiAgICByZXR1cm4gZGF0ZVtjb25zdHJ1Y3RGcm9tU3ltYm9sXSh2YWx1ZSk7XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuXG4gIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVBcmc8RGF0ZVR5cGU+LFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIGxhdGVyRGF0ZSAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZWFybGllckRhdGUgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdFxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhsYXRlckRhdGUsIGVhcmxpZXJEYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IFtsYXRlckRhdGVfLCBlYXJsaWVyRGF0ZV9dID0gbm9ybWFsaXplRGF0ZXMoXG4gICAgb3B0aW9ucz8uaW4sXG4gICAgbGF0ZXJEYXRlLFxuICAgIGVhcmxpZXJEYXRlLFxuICApO1xuXG4gIGNvbnN0IGxhdGVyU3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkobGF0ZXJEYXRlXyk7XG4gIGNvbnN0IGVhcmxpZXJTdGFydE9mRGF5ID0gc3RhcnRPZkRheShlYXJsaWVyRGF0ZV8pO1xuXG4gIGNvbnN0IGxhdGVyVGltZXN0YW1wID1cbiAgICArbGF0ZXJTdGFydE9mRGF5IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhsYXRlclN0YXJ0T2ZEYXkpO1xuICBjb25zdCBlYXJsaWVyVGltZXN0YW1wID1cbiAgICArZWFybGllclN0YXJ0T2ZEYXkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGVhcmxpZXJTdGFydE9mRGF5KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgobGF0ZXJUaW1lc3RhbXAgLSBlYXJsaWVyVGltZXN0YW1wKSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLmpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcbmV4cG9ydCB7IGZvcm1hdHRlcnMsIGxvbmdGb3JtYXR0ZXJzIH07XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuZXhwb3J0IHsgZm9ybWF0IGFzIGZvcm1hdERhdGUgfTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGxvY2FsZSA9IG9wdGlvbnM/LmxvY2FsZSA/PyBkZWZhdWx0T3B0aW9ucy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRhdGUsIG9wdGlvbnM/LmluKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZlllYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0RGF5T2ZZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXkgb2YgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldElTT1dlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShfZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKSAtICtzdGFydE9mV2Vla1llYXIoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWs7XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSwgb3B0aW9ucz8uaW4pO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZOZXh0WWVhcikge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmICgrX2RhdGUgPj0gK3N0YXJ0T2ZUaGlzWWVhcikge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJpbXBvcnQgeyBub3JtYWxpemVEYXRlcyB9IGZyb20gXCIuL19saWIvbm9ybWFsaXplRGF0ZXMuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5LmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1NhbWVEYXl9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0gbGF0ZXJEYXRlIC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBlYXJsaWVyRGF0ZSAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkobGF0ZXJEYXRlLCBlYXJsaWVyRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBbZGF0ZUxlZnRfLCBkYXRlUmlnaHRfXSA9IG5vcm1hbGl6ZURhdGVzKFxuICAgIG9wdGlvbnM/LmluLFxuICAgIGxhdGVyRGF0ZSxcbiAgICBlYXJsaWVyRGF0ZSxcbiAgKTtcbiAgcmV0dXJuICtzdGFydE9mRGF5KGRhdGVMZWZ0XykgPT09ICtzdGFydE9mRGF5KGRhdGVSaWdodF8pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IG5vcm1hbGl6ZURhdGVzIH0gZnJvbSBcIi4vX2xpYi9ub3JtYWxpemVEYXRlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0gbGF0ZXJEYXRlIC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBlYXJsaWVyRGF0ZSAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsobGF0ZXJEYXRlLCBlYXJsaWVyRGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBbbGF0ZXJEYXRlXywgZWFybGllckRhdGVfXSA9IG5vcm1hbGl6ZURhdGVzKFxuICAgIG9wdGlvbnM/LmluLFxuICAgIGxhdGVyRGF0ZSxcbiAgICBlYXJsaWVyRGF0ZSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICArc3RhcnRPZldlZWsobGF0ZXJEYXRlXywgb3B0aW9ucykgPT09ICtzdGFydE9mV2VlayhlYXJsaWVyRGF0ZV8sIG9wdGlvbnMpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cuanNcIjtcbmltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RoaXNXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKFxuICAgIGNvbnN0cnVjdEZyb20ob3B0aW9ucz8uaW4gfHwgZGF0ZSwgZGF0ZSksXG4gICAgY29uc3RydWN0Tm93KG9wdGlvbnM/LmluIHx8IGRhdGUpLFxuICAgIG9wdGlvbnMsXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNUaGlzV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cuanNcIjtcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUb2RheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGlzU2FtZURheShcbiAgICBjb25zdHJ1Y3RGcm9tKG9wdGlvbnM/LmluIHx8IGRhdGUsIGRhdGUpLFxuICAgIGNvbnN0cnVjdE5vdyhvcHRpb25zPy5pbiB8fCBkYXRlKSxcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLmpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUuanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0aWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIHJldHVybiAhKCghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB8fCBpc05hTigrdG9EYXRlKGRhdGUpKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gW1RPRE9dIC0tIEkgY2hhbGxlbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gW1RPRE9dIC0tIEkgY2hhbGxlbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBbVE9ET10gSSBjaGFsbGVuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUuanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLmpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLmpzXCI7XG5cbmNvbnN0IGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJCXCIsIFwiQVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIkJDXCIsIFwiQURcIl0sXG4gIHdpZGU6IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXSxcbn07XG5cbmNvbnN0IHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlExXCIsIFwiUTJcIiwgXCJRM1wiLCBcIlE0XCJdLFxuICB3aWRlOiBbXCIxc3QgcXVhcnRlclwiLCBcIjJuZCBxdWFydGVyXCIsIFwiM3JkIHF1YXJ0ZXJcIiwgXCI0dGggcXVhcnRlclwiXSxcbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbmNvbnN0IG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXSxcblxuICB3aWRlOiBbXG4gICAgXCJKYW51YXJ5XCIsXG4gICAgXCJGZWJydWFyeVwiLFxuICAgIFwiTWFyY2hcIixcbiAgICBcIkFwcmlsXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1bmVcIixcbiAgICBcIkp1bHlcIixcbiAgICBcIkF1Z3VzdFwiLFxuICAgIFwiU2VwdGVtYmVyXCIsXG4gICAgXCJPY3RvYmVyXCIsXG4gICAgXCJOb3ZlbWJlclwiLFxuICAgIFwiRGVjZW1iZXJcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJTXCIsIFwiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCJdLFxuICBzaG9ydDogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIHdpZGU6IFtcbiAgICBcIlN1bmRheVwiLFxuICAgIFwiTW9uZGF5XCIsXG4gICAgXCJUdWVzZGF5XCIsXG4gICAgXCJXZWRuZXNkYXlcIixcbiAgICBcIlRodXJzZGF5XCIsXG4gICAgXCJGcmlkYXlcIixcbiAgICBcIlNhdHVyZGF5XCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwibmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiBcImFcIixcbiAgICBwbTogXCJwXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlcIixcbiAgICBub29uOiBcIm5cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogXCJBTVwiLFxuICAgIHBtOiBcIlBNXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiBcImEubS5cIixcbiAgICBwbTogXCJwLm0uXCIsXG4gICAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgICBub29uOiBcIm5vb25cIixcbiAgICBtb3JuaW5nOiBcImluIHRoZSBtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImluIHRoZSBhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImluIHRoZSBldmVuaW5nXCIsXG4gICAgbmlnaHQ6IFwiYXQgbmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IG9yZGluYWxOdW1iZXIgPSAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICBjb25zdCByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwic3RcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwibmRcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwicmRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArIFwidGhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IGJ1aWxkTWF0Y2hGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4uanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZkRheX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgLi4ub3B0aW9ucywgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIuanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsuanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZJU09XZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKiBAdHlwZVBhcmFtIFJlc3VsdERhdGUgLSBUaGUgcmVzdWx0IGBEYXRlYCB0eXBlLCBpdCBpcyB0aGUgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBjb250ZXh0IGZ1bmN0aW9uIGlmIGl0IGlzIHBhc3NlZCwgb3IgaW5mZXJyZWQgZnJvbSB0aGUgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShvcHRpb25zPy5pbiB8fCBkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLmpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICogQHR5cGVQYXJhbSBSZXN1bHREYXRlIC0gVGhlIHJlc3VsdCBgRGF0ZWAgdHlwZSwgaXQgaXMgdGhlIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgY29udGV4dCBmdW5jdGlvbiBpZiBpdCBpcyBwYXNzZWQsIG9yIGluZmVycmVkIGZyb20gdGhlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlXyA9IHRvRGF0ZShkYXRlLCBvcHRpb25zPy5pbik7XG4gIGRhdGVfLnNldEZ1bGxZZWFyKGRhdGVfLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBkYXRlXy5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGVfO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20uanNcIjtcblxuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogU3RhcnRpbmcgZnJvbSB2My43LjAsIGl0IGNsb25lcyBhIGRhdGUgdXNpbmcgYFtTeW1ib2wuZm9yKFwiY29uc3RydWN0RGF0ZUZyb21cIildYFxuICogZW5hYmxpbmcgdG8gdHJhbnNmZXIgZXh0cmEgcHJvcGVydGllcyBmcm9tIHRoZSByZWZlcmVuY2UgZGF0ZSB0byB0aGUgbmV3IGRhdGUuXG4gKiBJdCdzIHVzZWZ1bCBmb3IgZXh0ZW5zaW9ucyBsaWtlIFtgVFpEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3R6KVxuICogdGhhdCBhY2NlcHQgYSB0aW1lIHpvbmUgYXMgYSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqIEB0eXBlUGFyYW0gUmVzdWx0RGF0ZSAtIFRoZSByZXN1bHQgYERhdGVgIHR5cGUsIGl0IGlzIHRoZSB0eXBlIHJldHVybmVkIGZyb20gdGhlIGNvbnRleHQgZnVuY3Rpb24gaWYgaXQgaXMgcGFzc2VkLCBvciBpbmZlcnJlZCBmcm9tIHRoZSBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCwgY29udGV4dCkge1xuICAvLyBbVE9ET10gR2V0IHJpZCBvZiBgdG9EYXRlYCBvciBgY29uc3RydWN0RnJvbWA/XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGNvbnRleHQgfHwgYXJndW1lbnQsIGFyZ3VtZW50KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tb2R1bGVzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
