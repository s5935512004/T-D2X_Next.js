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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var menuHelp = function menuHelp() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    align: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    style: {
      marginRight: "3px",
      marginTop: '30px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 0,
    sm: 3,
    style: {
      backgroundColor: ""
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 9,
    style: {
      backgroundColor: "#f5f9fa",
      paddingRight: "10px",
      paddingLeft: "10px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2784817918"
  }, "\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E19\u0E34\u0E22\u0E21"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/popular1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2784817918"
  }, "\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E19\u0E49\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E48\u0E19\u0E41\u0E23\u0E07")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/popular2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2784817918"
  }, "\u0E21\u0E35\u0E2D\u0E32\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E16\u0E48\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E38\u0E48\u0E19\u0E41\u0E23\u0E07")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2784817918",
    css: ["p.jsx-2784817918{cursor:pointer;color:#2da9eb;fontSize:'17px';}", "p.jsx-2784817918:hover{color:#3f51b5;cursor:pointer;}"]
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (menuHelp);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(1);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(9);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(22);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(6);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__(19);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(17);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@material-ui/core/Chip"
var Chip_ = __webpack_require__(24);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(15);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(20);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// CONCATENATED MODULE: ./components/QandA.js
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














var QandA_App =
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
      external_axios_default.a.get('' + _this.state.port).then(function (res) {
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
        external_axios_default.a.post('' + _this.state.port, {
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
        external_axios_default.a.post('' + _this.state.port, {
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
      external_axios_default.a.post('http://157.230.43.83:3001/q', {
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
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Paper_default.a, null, external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 12,
          style: boxstyle
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 2,
          sm: 2,
          align: "center"
        }, external_react_default.a.createElement(Avatar_default.a, {
          style: tstyles
        }, "T")), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 8,
          sm: 8
        }, external_react_default.a.createElement(Paper_default.a, {
          style: mtstyle
        }, _this2.state.data.title)), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 2,
          sm: 2
        })), external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 12
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 2,
          sm: 2
        }), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 8,
          sm: 8,
          style: boxMessage
        }, external_react_default.a.createElement(Paper_default.a, {
          style: mastyle,
          onClick: _this2.send1
        }, _this2.state.data.symptom.U1.title), external_react_default.a.createElement(Paper_default.a, {
          style: mastyle,
          onClick: _this2.send2
        }, _this2.state.data.symptom.U2.title)), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 2,
          sm: 2,
          align: "center"
        }, external_react_default.a.createElement(Avatar_default.a, {
          style: ustyles
        }, "U")))));
      };

      var Recommend = function Recommend() {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 24
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2
        }), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8
        }, external_react_default.a.createElement(Card_default.a, {
          style: cardstyle
        }, external_react_default.a.createElement("h2", {
          align: "center"
        }, _this2.state.data.title), external_react_default.a.createElement("p", {
          onClick: _this2.send1
        }, _this2.state.data.symptom.S1.title))), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2
        })));
      };

      var cardstyle = {
        marginTop: '30px',
        paddingLeft: '10px',
        paddingRight: '10px'
      };

      var Develop = function Develop() {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Grid_default.a, {
          container: true,
          spacing: 24
        }, external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2
        }), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 8,
          md: 8,
          lg: 8
        }, external_react_default.a.createElement(Card_default.a, {
          style: cardstyle
        }, external_react_default.a.createElement("h2", {
          align: "center"
        }, _this2.state.data.title), external_react_default.a.createElement("p", {
          onClick: _this2.reset
        }, "Coming Soon"))), external_react_default.a.createElement(Grid_default.a, {
          item: true,
          xs: 12,
          sm: 2,
          md: 2,
          lg: 2
        })));
      };

      var Progress = function Progress() {
        return external_react_default.a.createElement("div", {
          style: cardstyle
        }, external_react_default.a.createElement(CircularProgress_default.a, {
          color: "primary"
        }));
      };

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          data = _this$state.data,
          main = _this$state.main;
      return external_react_default.a.createElement("center", null, isLoading === true && main === false && external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", {
        colSpan: "5"
      }, external_react_default.a.createElement("center", null, Progress()))), main === true && this.get(), isLoading === false && main === false && data.title === 'กำลังพัฒนา' && external_react_default.a.createElement("center", null, Develop()), isLoading === false && main === false && data.type === 'summit' && external_react_default.a.createElement("center", null, Recommend()), isLoading === false && data.symptom.count === 2 && main === false && external_react_default.a.createElement("center", null, QandAE()));
    }
  }]);

  return App;
}(external_react_["Component"]);

/* harmony default export */ var QandA = (QandA_App);
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
// EXTERNAL MODULE: ./components/menuHelp.js
var menuHelp = __webpack_require__(16);

// CONCATENATED MODULE: ./pages/help.js






var help_About = function About() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 24
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 3,
    md: 3,
    lg: 3
  }, external_react_default.a.createElement(menuHelp["a" /* default */], null)), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, external_react_default.a.createElement(QandA, null)), external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 3,
    md: 3,
    lg: 3
  }))));
};

/* harmony default export */ var help = __webpack_exports__["default"] = (help_About);

/***/ })
/******/ ]);