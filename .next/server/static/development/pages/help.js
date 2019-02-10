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














var style = {
  fontSize: '16px',
  color: '#ffffff'
};
var login = {
  marginTop: 6,
  marginRight: 15,
  marginBottom: 6,
  paddingLeft: 30,
  paddingRight: 30,
  color: '#ffffff'
};
var topbar = {
  backgroundColor: 'black',
  position: 'absolute',
  right: 0,
  top: 0,
  left: 0,
  paddingTop: '10px',
  paddingBottom: '10px',
  color: 'blue'
};
var shop = {
  marginRight: '20px'
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1662030054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1662030054",
    css: "S.jsx-1662030054{cursor:pointer;color:#2da9eb;fontSize:'17px';}S.jsx-1662030054:hover{color:#58c5ff;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VuZGF5XFxEb2N1bWVudHNcXFByb2plY3RcXFQtRDJYLW5leHRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2dCLEFBRzRCLEFBS0QsY0FDQyxDQUxELGNBQ0UsQUFLbEIsZ0JBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxTdW5kYXlcXERvY3VtZW50c1xcUHJvamVjdFxcVC1EMlgtbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYidcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicydcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSdcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0J1xyXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYidcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgY29sb3I6ICcjZmZmZmZmJyxcclxufVxyXG5jb25zdCBsb2dpbiA9IHtcclxuICBtYXJnaW5Ub3A6IDYsXHJcbiAgbWFyZ2luUmlnaHQ6IDE1LFxyXG4gIG1hcmdpbkJvdHRvbTogNixcclxuICBwYWRkaW5nTGVmdDogMzAsXHJcbiAgcGFkZGluZ1JpZ2h0OiAzMCxcclxuICBjb2xvcjogJyNmZmZmZmYnLFxyXG59XHJcbmNvbnN0IHRvcGJhciA9IHtcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcGFkZGluZ1RvcDogJzEwcHgnLFxyXG4gIHBhZGRpbmdCb3R0b206ICcxMHB4JyxcclxuICBjb2xvcjogJ2JsdWUnLFxyXG59XHJcbmNvbnN0IHNob3AgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBTIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkYTllYjtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFM6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU4YzVmZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvcGJhclwiIGFsaWduPVwicmlnaHRcIiBzdHlsZT17dG9wYmFyfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezh9ID5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezEwfSBhbGlnbj1cImNlbnRlclwiPkxvZ288L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezJ9IGFsaWduPVwicmlnaHRcIiA+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgPEZhYiB2YXJpYW50PVwiZXh0ZW5kZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcInN0eWxlPXtzaG9wfSA+U2hvcDwvRmFiPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTB9IG1kPXsxMH0gbGc9ezEwfSA+XHJcbiAgICAgICAgPFRhYnMgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMzNDc5ZScsIHBhZGRpbmdUb3A6ICc1MHB4J319PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuC4q+C4meC5ieC4suC4q+C4peC4seC4gVwiIHN0eWxlPXtzdHlsZX0gaWQ9XCJTXCI+PC9UYWI+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2hlbHBcIj5cclxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIuC4luC4suC4oeC4q+C4oeC4rVwiIHN0eWxlPXtzdHlsZX0+PC9UYWI+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9IG1kPXsyfSBsZz17Mn0gPlxyXG4gICAgICAgIDxUYWJzIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMzMzQ3OWUnLCBwYWRkaW5nVG9wOiAnNTBweCcgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXtsb2dpbn0+4Lil4Lit4LiH4LiK4Li34LmI4Lit4LmA4LiC4LmJ4Liy4LmD4LiK4LmJPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHN0eWxlPXtsb2dpbn0+4Liq4Lih4Lix4LiE4Lij4Liq4Lih4Liy4LiK4Li04LiBPC9CdXR0b24+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgPC9kaXY+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=C:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\Header.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "topbar",
    align: "right",
    style: topbar,
    className: "jsx-1662030054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 10,
    sm: 10,
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 2,
    sm: 2,
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "extended",
    color: "primary",
    size: "small",
    style: shop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Shop"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 10,
    lg: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      backgroundColor: '#33479e',
      paddingTop: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",
    style: style,
    id: "S",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/help",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_4___default.a, {
    label: "\u0E16\u0E32\u0E21\u0E2B\u0E21\u0E2D",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    sm: 2,
    md: 2,
    lg: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      backgroundColor: '#33479e',
      paddingTop: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "outlined",
    style: login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "\u0E25\u0E2D\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "outlined",
    style: login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01")))));
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











var boxstyle = {
  margin: '30px 0px'
};
var tstyles = {
  marginLeft: '15px',
  marginTop: '30px',
  marginBottom: '40px'
};
var ustyles = {
  marginRight: '15px',
  float: 'Right',
  marginBottom: '15px'
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

var QandA =
/*#__PURE__*/
function (_Component) {
  _inherits(QandA, _Component);

  function QandA() {
    var _this;

    _classCallCheck(this, QandA);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QandA).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "get", function () {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://calm-plains-71371.herokuapp.com/api').then(function (res) {
        console.log(res.data);

        _this.setState({
          T: res.data.type
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "post2", function (evt) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('https://calm-plains-71371.herokuapp.com/api', {
        symptom: evt
      }).then(function (res) {
        //console.log("res :"+res)
        _this.setState({
          data: res.data
        }, function () {
          return console.log(_this.state.data);
        });

        _this.setState({
          T: _this.state.data.T
        });

        _this.setState({
          U1: _this.state.data.U1
        });

        _this.setState({
          U2: _this.state.data.U2
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callByU1", function () {
      if (_this.state.count == 1 && _this.state.tstate == 1) {
        _this.state.count++; //count = 2

        _this.state.tstate++;

        _this.get();

        _this.setState({
          U1: 'ใช่',
          U2: 'ไม่ใช่'
        });
      } else if (_this.state.count == 2 && _this.state.tstate == 2) {
        //ใช่ T0U1
        _this.state.count++; //count = 3

        _this.state.tstate++;
        _this.state.stathis++;
        _this.objHis.a2 = 'มีอุจาระร่วงมากว่า 14 วัน';

        _this.post2('T0U1'); //this.setState({T: 'คุณมีอาการอย่างไรเด่น'})
        //this.setState({U1:'อาเจียน',U2:'อุจจาระร่วง'})

      } else if (_this.state.count == 3 && _this.state.tstate == 3) {
        //อาเจียน T1U1
        _this.state.count++; //count = 4

        _this.state.stathis++;

        _this.post2('T1U1');

        _this.objHis.a3 = 'อาเจียน';
        /*this.setState({T: 'เกิดจากอาหารเป็นพิษ หรือกระเพาะและลำไส้อักเสบจากไวรัส'})
        setTimeout(() => {
            this.setState({T: 'ต้องรักษาตามอาการ ป้องกันและรักษาภาวะขาดน้ำและเกลือแร่ด้วย ORT/ORS/IVF'})
            }, 2000)
        this.setState({U1:'กลับไปหน้าหลัก',U2:'สักซื้อเกลือแร่'})*/
      } else if (_this.state.count == 4 && _this.state.tstate == 4) {
        //ถ่ายเป็นน้ำ T2U1
        _this.state.count++; //count = 5

        _this.state.tstate++;
        _this.state.stathis++;
        _this.objHis.a4 = 'ถ่ายเป็นน้ำ';

        _this.post2('T2U1'); //this.setState({T: 'คุณมีอาการรุนแรงไหม'})
        //this.setState({U1:'ปานกลางถึงรุ่นแรง',U2:'มีน้อยหรือไม่มีเลย'})

      } else if (_this.state.count == 5 && _this.state.tstate == 5) {
        //ปานกลางถึงรุ่นแรง T3U1
        _this.state.count++; //count = 6

        _this.state.tstate++;
        _this.state.stathis++;
        _this.objHis.a5 = 'ปานกลางถึงรุ่นแรง';

        _this.post2('T3U1'); //this.setState({T: 'คุณจะต้องดื่มเกลือแร่ทดแทนน้ำที่ขาดด้วย ORS/IVF โดยเร็ว'})
        //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'สั่งซื้อเกลือแร่'})

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callByU2", function () {
      if (_this.state.count == 1 && _this.state.tstate == 1) {
        //ต้องการหาโรงพยาบาลใกล้เคียง
        _this.setState({
          T: 'เปิด Google Map สิครับ'
        });
      } else if (_this.state.count == 2 && _this.state.tstate == 2) {
        //ไม่ใช่ T0U2
        _this.state.count++;

        _this.post2('T0U2'); //this.setState({T: 'คุณควรพักผ่อนเยอะๆ นะครับ'})

      } else if (_this.state.count == 3 && _this.state.tstate == 3) {
        //อุจจาระร่วง T1U2
        _this.state.count++; //count = 4

        _this.state.tstate++;
        _this.state.stathis++;
        _this.objHis.a3 = 'มีอาการอุจจาระร่วงเด่น';

        _this.post2('T1U2'); //this.setState({T: 'คุณถ่ายเป็นอย่างไรบ้าง'})
        //this.setState({U1:'ถ่ายเป็นน้ำ',U2:'ถ่ายเป็นมูกเลือด'})

      } else if (_this.state.count == 4 && _this.state.tstate == 4) {
        //ถ่ายเป็นมูกเลือด T2U2
        _this.state.count++; //count = 5

        _this.state.stathis++;
        _this.objHis.a4 = 'ถ่ายเป็นมูกเลือด';

        _this.post2('T2U2'); //this.setState({T: 'คุณจะต้องตรวจอึจจาระด้วยกล้องจุลทรรศน์และเพาะเชื้อ'})
        //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'กลับสู่หน้าหลัก'})

      } else if (_this.state.count == 5 && _this.state.tstate == 5) {
        //มีน้อยหรือไม่มีเลย T3U2
        _this.state.count++; //count = 6

        _this.state.stathis++;
        _this.objHis.a5 = 'มีน้อยหรือไม่มีเลย';

        _this.post2('T3U2'); //this.setState({T: 'คุณจะต้องดื่มเกลือแร่ป้องกันการขาดน้ำด้วย ORT'})
        //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'สั่งซื้อเกลือแร่'})

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "chipHistory", function (text) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9___default.a, {
        color: "primary",
        variant: "outlined",
        label: text,
        style: {
          marginTop: '15px',
          marginRight: '2px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hisQA", function (x, t1, t2, t3, t4, t5) {
      if (x == 1) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 0,
          direction: "row",
          justify: "flex-start",
          alignItems: "flex-start",
          style: {
            marginTop: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, _this.chipHistory(t1)));
      } else if (x == 2) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 0,
          direction: "row",
          justify: "flex-start",
          alignItems: "flex-start",
          style: {
            marginTop: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, _this.chipHistory(t1), _this.chipHistory(t2)));
      } else if (x == 3) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 0,
          direction: "row",
          justify: "flex-start",
          alignItems: "flex-start",
          style: {
            marginTop: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, _this.chipHistory(t1), _this.chipHistory(t2), _this.chipHistory(t3)));
      } else if (x == 4) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 0,
          direction: "row",
          justify: "flex-start",
          alignItems: "flex-start",
          style: {
            marginTop: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, _this.chipHistory(t1), _this.chipHistory(t2), _this.chipHistory(t3), _this.chipHistory(t4)));
      } else if (x == 5) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 0,
          direction: "row",
          justify: "flex-start",
          alignItems: "flex-start",
          style: {
            marginTop: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, _this.chipHistory(t1), _this.chipHistory(t2), _this.chipHistory(t3), _this.chipHistory(t4), _this.chipHistory(t5)));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callHistoryCondition", function () {
      if (_this.state.stathis == 1) {
        return _this.hisQA(1, _this.objHis.a1);
      } else if (_this.state.stathis == 2) {
        return _this.hisQA(2, _this.objHis.a1, _this.objHis.a2);
      } else if (_this.state.stathis == 3) {
        return _this.hisQA(3, _this.objHis.a1, _this.objHis.a2, _this.objHis.a3);
      } else if (_this.state.stathis == 4) {
        return _this.hisQA(4, _this.objHis.a1, _this.objHis.a2, _this.objHis.a3, _this.objHis.a4);
      } else if (_this.state.stathis == 5) {
        return _this.hisQA(5, _this.objHis.a1, _this.objHis.a2, _this.objHis.a3, _this.objHis.a4, _this.objHis.a5);
      }
    });

    _this.state = {
      T: "สวัสดี คุณต้องการให้ช่วยไหมครับ",
      U1: "ต้องการความช่วยเหลือ",
      U2: "ต้องการหาโรงพยาบาลใกล้เคียง",
      code: 'T0U1',
      data: {},
      count: 1,
      tstate: 1,
      stathis: 1
    };
    _this.objHis = {
      a1: 'ต้องการความช่วยเหลือ',
      a2: '',
      a3: '',
      a4: '',
      a5: ''
    };
    return _this;
  }

  _createClass(QandA, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var QandAE = function QandAE() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 12,
          style: boxstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: tstyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, "T")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mtstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, _this2.state.T)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          style: boxMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.callByU1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, _this2.state.U1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.callByU2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, _this2.state.U2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: ustyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, "U")))));
      };

      var callHistory = function callHistory() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, _this2.callHistoryCondition());
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, callHistory(), QandAE());
    }
  }]);

  return QandA;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QandA);

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
    sm: 2,
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
    sm: 8,
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
    sm: 2,
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

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

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