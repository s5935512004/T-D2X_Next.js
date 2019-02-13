module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(1);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(6);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(11);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(5);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__(4);
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// CONCATENATED MODULE: ./components/Header.js















var Header_Header = function Header() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 16
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 12,
    style: {
      backgroundColor: '#1F1F1F',
      position: 'relative'
    },
    align: "center"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("img", {
    src: "https://github.com/s5935512004/T-D2X_Next.js/blob/master/Pictures/Logo.png?raw=true",
    width: "40",
    height: "40",
    className: "jsx-3866341379"
  })), external_react_default.a.createElement(link_default.a, {
    href: "/shop"
  }, external_react_default.a.createElement(Button_default.a, {
    style: {
      color: 'white',
      position: 'absolute',
      right: 0,
      marginTop: '5px',
      marginRight: '10px'
    },
    color: "primary",
    variant: "contained"
  }, "Shop"))), external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 0
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 12,
    style: {
      /*opacity: 0.4, */
      position: 'relative'
    }
  }, external_react_default.a.createElement("ul", {
    className: "jsx-3866341379"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3866341379"
  }, external_react_default.a.createElement("a", {
    className: "jsx-3866341379"
  }, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"))), external_react_default.a.createElement(link_default.a, {
    href: "/help"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3866341379"
  }, external_react_default.a.createElement("a", {
    className: "jsx-3866341379"
  }, "\u0E16\u0E32\u0E21\u0E2B\u0E21\u0E2D"))))), external_react_default.a.createElement(Fab_default.a, {
    variant: "extended",
    size: "small",
    color: "default",
    style: {
      position: 'absolute',
      right: 0,
      marginTop: '5px',
      marginRight: '10px',
      paddingRight: '15px',
      paddingLeft: '15px',
      color: '#fff',
      backgroundColor: '#3f51b5'
    }
  }, "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"), external_react_default.a.createElement(Fab_default.a, {
    variant: "extended",
    size: "small",
    color: "default",
    style: {
      position: 'absolute',
      float: 'Right',
      right: 0,
      marginTop: '5px',
      marginRight: '115px',
      paddingRight: '15px',
      paddingLeft: '15px',
      color: '#fff',
      backgroundColor: '#3f51b5'
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), external_react_default.a.createElement(style_default.a, {
    styleId: "3866341379",
    css: ["img.jsx-3866341379{cursor:pointer;}", "ul.jsx-3866341379{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#000000;opacity:0.7;}", "li.jsx-3866341379{cursor:pointer;float:left;}", "li.jsx-3866341379 a.jsx-3866341379{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;}", "li.jsx-3866341379:hover{color:#58c5ff;cursor:pointer;opacity:'1';}", "li.jsx-3866341379 a.jsx-3866341379:hover{color:#1e88e5;opacity:1;}", "@media (max-width:600px){}"]
  })));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js

var style = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  padding: '1rem',
  backgroundColor: '#EEEEEE',
  textAlign: 'center'
};

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    style: style
  }, external_react_default.a.createElement("p", null, "T-D2X React-Next v0.0.2"));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.js




var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Header, null), props.children, external_react_default.a.createElement(components_Footer, null));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);



var home = function home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    container: true,
    spacing: 16
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://github.com/s5935512004/T-D2X_Next.js/blob/master/Pictures/HomePic.jpg?raw=true",
    width: "100%",
    height: "100%"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var _material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_lime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__);












var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/lime");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ })
/******/ ]);