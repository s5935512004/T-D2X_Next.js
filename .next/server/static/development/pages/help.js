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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\Footer.js";

var style = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  padding: '1rem',
  backgroundColor: '#EEEEEE',
  textAlign: 'center'
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "T-D2X React-Next v0.0.2"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\Header.js";















var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 12,
    style: {
      backgroundColor: '#1F1F1F',
      position: 'relative'
    },
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://github.com/s5935512004/T-D2X_Next.js/blob/master/Pictures/Logo.png?raw=true",
    width: "40",
    height: "40",
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: 'white',
      position: 'absolute',
      right: 0,
      marginTop: '5px',
      marginRight: '10px'
    },
    color: "primary",
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Shop"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 12,
    style: {
      /*opacity: 0.4, */
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3866341379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "\u0E16\u0E32\u0E21\u0E2B\u0E21\u0E2D"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default.a, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3866341379",
    css: "img.jsx-3866341379{cursor:pointer;}ul.jsx-3866341379{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#000000;opacity:0.7;}li.jsx-3866341379{cursor:pointer;float:left;}li.jsx-3866341379 a.jsx-3866341379{display:block;color:white;text-align:center;padding:14px 16px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3866341379:hover{color:#58c5ff;cursor:pointer;opacity:'1';}li.jsx-3866341379 a.jsx-3866341379:hover{color:#1e88e5;opacity:1;}@media (max-width:600px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VuZGF5XFxEb2N1bWVudHNcXFByb2plY3RcXFQtRDJYLW5leHRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGtCLEFBSXdCLEFBS00sQUFRTixBQUtELEFBT0ksQUFLSixjQVhGLEFBT08sQUFLVCxDQTlCWixBQWFhLE1BUkYsR0EwQlgsRUFoQkEsQUFJb0IsR0FRakIsQ0FyQlMsVUFDTSxDQW9CZCxHQVBnQixZQVpPLE1BYUosbUJBWlQsWUFDZCxtQkFZQSIsImZpbGUiOiJDOlxcVXNlcnNcXFN1bmRheVxcRG9jdW1lbnRzXFxQcm9qZWN0XFxULUQyWC1uZXh0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJ1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnXHJcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTZ9ID5cclxuICAgICAgPEdyaWQgIGl0ZW0geHM9ezEyfSBzbT17MTJ9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzFGMUYxRicsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19IGFsaWduPSdjZW50ZXInID5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vczU5MzU1MTIwMDQvVC1EMlhfTmV4dC5qcy9ibG9iL21hc3Rlci9QaWN0dXJlcy9Mb2dvLnBuZz9yYXc9dHJ1ZVwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiPjwvaW1nPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3tjb2xvcjond2hpdGUnLHBvc2l0aW9uOidhYnNvbHV0ZScscmlnaHQ6MCxtYXJnaW5Ub3A6JzVweCcsbWFyZ2luUmlnaHQ6JzEwcHgnfX1jb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+U2hvcDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfSA+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gc3R5bGU9e3sgLypvcGFjaXR5OiAwLjQsICovIHBvc2l0aW9uOiAncmVsYXRpdmUnfX0gPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxsaT48YT7guKvguJnguYnguLLguKvguKXguLHguIE8L2E+PC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2hlbHBcIj5cclxuICAgICAgICAgICAgICA8bGk+PGE+4LiW4Liy4Lih4Lir4Lih4LitPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxGYWIgdmFyaWFudD1cImV4dGVuZGVkXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOic1cHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonMTBweCcgLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6JzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDonMTVweCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzZjUxYjUnLFxyXG4gICAgICAgICAgICAgICAgICB9fT7guKXguIfguIrguLfguYjguK3guYDguILguYnguLLguYPguIrguYlcclxuXHJcbiAgICAgICAgICA8L0ZhYj5cclxuICAgICAgICAgIDxGYWIgdmFyaWFudD1cImV4dGVuZGVkXCIgc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJkZWZhdWx0XCJcclxuICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgZmxvYXQ6J1JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6MCxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOic1cHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDonMTE1cHgnICxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OicxNXB4JyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6JzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2Y1MWI1JyxcclxuICAgICAgICAgICAgICAgICAgfX0+4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgICA8L0ZhYj5cclxuICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBcclxuICAgICAgaW1ne1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9OYXZpZ2F0aW9uIFxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAvL29wYWNpdHk6ICcwJ1xyXG4gICAgICB9IFxyXG4gICAgICBsaSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU4YzVmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAnMSdcclxuICAgICAgICAgIH1cclxuICAgICAgbGkgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMxZTg4ZTU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7fVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9HcmlkPlxyXG4gIDwvZGl2PlxyXG4pXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\Header.js */",
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\Layout.js";




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/QandA.js":
/*!*****************************!*\
  !*** ./components/QandA.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\QandA.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.setState({
        main: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "get", function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('' + _this.state.port).then(function (res) {
        console.log(res.data.title);

        _this.setState({
          data: res.data
        }, function () {
          return console.log(_this.state.data);
        });
      }).finally(function () {
        _this.setState({
          isLoading: false,
          main: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reset", function () {
      _this.setState({
        main: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "send1", function (evt) {
      _this.setState({
        isLoading: true
      });

      evt.preventDefault();

      if (_this.state.data.order.substring(0, 1) === 'S') {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('' + _this.state.port, {
          order: _this.state.data.symptom.S1.nextOrder
        }).then(function (res) {
          console.log(res);

          _this.setState({
            data: res.data
          }, function () {
            return console.log(_this.state.data);
          });
        }).catch(function (error) {
          console.log(error.message);
        }).finally(function () {
          _this.setState({
            isLoading: false,
            main: false
          });
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('' + _this.state.port, {
          order: _this.state.data.symptom.U1.nextOrder
        }).then(function (res) {
          console.log(res);

          _this.setState({
            data: res.data
          }, function () {
            return console.log(_this.state.data);
          });
        }).catch(function (error) {
          console.log(error.message);
        }).finally(function () {
          _this.setState({
            isLoading: false,
            main: false
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "send2", function (evt) {
      _this.setState({
        isLoading: true
      });

      evt.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('http://157.230.43.83:3001/q', {
        order: _this.state.data.symptom.U2.nextOrder
      }).then(function (res) {
        console.log(res);

        _this.setState({
          data: res.data
        }, function () {
          return console.log(_this.state.data);
        });
      }).catch(function (error) {
        console.log(error.message);
      }).finally(function () {
        _this.setState({
          isLoading: false,
          main: false
        });
      });
    });

    _this.state = {
      ans: "",
      text: "",
      data: {},
      port: "http://157.230.43.83:3001/q",
      isLoading: true,
      main: true
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var QandAE = function QandAE() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 12,
          style: boxstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: tstyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "T")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mtstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, _this2.state.data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          style: boxMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.send1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, _this2.state.data.symptom.U1.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.send2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, _this2.state.data.symptom.U2.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: ustyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "U")))));
      };

      var Recommend = function Recommend() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: cardstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, _this2.state.data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          onClick: _this2.send1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, _this2.state.data.symptom.S1.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        })));
      };

      var cardstyle = {
        marginTop: '30px',
        paddingLeft: '10px',
        paddingRight: '10px'
      };

      var Develop = function Develop() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10___default.a, {
          style: cardstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, _this2.state.data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          onClick: _this2.reset,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, "Coming Soon"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        })));
      };

      var Progress = function Progress() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: cardstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default.a, {
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }));
      };

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          data = _this$state.data,
          main = _this$state.main;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, isLoading === true && main === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, Progress()))), main === true && this.get(), isLoading === false && main === false && data.title === 'กำลังพัฒนา' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, Develop()), isLoading === false && main === false && data.type === 'summit' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, Recommend()), isLoading === false && data.symptom.count === 2 && main === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, QandAE()));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
var boxstyle = {
  margin: '30px 0px'
};
var tstyles = {
  align: 'center',
  //marginLeft: '15px',
  marginTop: '28px' //marginBottom: '40px',

};
var ustyles = {//marginRight: '15px',
  //float: 'Right',
  //marginBottom: '15px',
};
var qastyles = {
  margin: '10px 0px'
};
var mtstyle = {
  padding: '7px',
  cursor: 'pointer',
  textAlign: 'left',
  marginTop: '30px',
  fontSize: '18px'
};
var mastyle = {
  padding: '7px',
  cursor: 'pointer',
  textAlign: 'right',
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '18px'
};
var boxMessage = {
  marginBottom: '30px'
};

/***/ }),

/***/ "./components/menuHelp.js":
/*!********************************!*\
  !*** ./components/menuHelp.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\menuHelp.js";





var menuHelp = function menuHelp() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    style: {
      marginRight: "3px",
      marginTop: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 0,
    sm: 3,
    style: {
      backgroundColor: ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    style: {
      backgroundColor: "#f5f9fa",
      paddingRight: "10px",
      paddingLeft: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2784817918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E19\u0E34\u0E22\u0E21"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/popular1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2784817918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E19\u0E49\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E48\u0E19\u0E41\u0E23\u0E07")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/popular2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2784817918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E48\u0E19\u0E41\u0E23\u0E07")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2784817918",
    css: "p.jsx-2784817918{cursor:pointer;color:#2da9eb;fontSize:'17px';}p.jsx-2784817918:hover{color:#3f51b5;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VuZGF5XFxEb2N1bWVudHNcXFByb2plY3RcXFQtRDJYLW5leHRcXGNvbXBvbmVudHNcXG1lbnVIZWxwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVvQixBQUc0QixBQUtELGNBQ0MsQ0FMRCxjQUNFLEFBS2xCLGdCQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU3VuZGF5XFxEb2N1bWVudHNcXFByb2plY3RcXFQtRDJYLW5leHRcXGNvbXBvbmVudHNcXG1lbnVIZWxwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbWVudUhlbHAgPSAoKSA9PiAoXHJcbiAgPGRpdiBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsIG1hcmdpblRvcDogJzMwcHgnIH19PlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXswfSBzbT17M30gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIlwiIH19PjwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs5fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y1ZjlmYVwiLCBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiLCBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGgyPuC4hOC4s+C4luC4suC4oeC4l+C4teC5iOC4meC4tOC4ouC4oTwvaDI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wb3B1bGFyMVwiPlxyXG4gICAgICAgICAgICA8cD7guKHguLXguK3guLLguIHguLLguKPguJbguYjguLLguKLguYDguJvguYfguJnguJnguYnguLPguK3guKLguYjguLLguIfguKPguLjguYjguJnguYHguKPguIc8L3A+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcG9wdWxhcjJcIj5cclxuICAgICAgICAgICAgPHA+4Lih4Li14Lit4Liy4LiB4Liy4Lij4LiW4LmI4Liy4Lii4LmA4Lib4LmH4LiZ4LiW4LmI4Liy4Lii4LmA4Lib4LmH4LiZ4Lih4Li54LiB4LmA4Lil4Li34Lit4LiU4Lit4Lii4LmI4Liy4LiH4Lij4Li44LmI4LiZ4LmB4Lij4LiHPC9wPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkYTllYjtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHA6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNmNTFiNTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG5cclxuICA8L2RpdiA+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVIZWxwIl19 */\n/*@ sourceURL=C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\menuHelp.js */",
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (menuHelp);

/***/ }),

/***/ "./pages/help.js":
/*!***********************!*\
  !*** ./pages/help.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_QandA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QandA */ "./components/QandA.js");
/* harmony import */ var _components_menuHelp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menuHelp */ "./components/menuHelp.js");
var _jsxFileName = "C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\pages\\help.js";






var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    md: 3,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_menuHelp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_QandA__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 3,
    md: 3,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/help.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/help.js */"./pages/help.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=help.js.map