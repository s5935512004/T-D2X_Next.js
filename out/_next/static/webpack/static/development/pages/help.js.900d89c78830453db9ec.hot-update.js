webpackHotUpdate("static\\development\\pages\\help.js",{

/***/ "./components/QandA.js":
/*!*****************************!*\
  !*** ./components/QandA.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
var _jsxFileName = "c:\\Users\\Sunday\\Documents\\Project\\T-D2X-next\\components\\QandA.js";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "post", function (evt) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('https://calm-plains-71371.herokuapp.com/api', {
        symptom: _this.state.code
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

        _this.post2('T0U1'); //this.setState({T: 'คุณมีอาการอย่างไรเด่น'})
        //this.setState({U1:'อาเจียน',U2:'อุจจาระร่วง'})

      } else if (_this.state.count == 3 && _this.state.tstate == 3) {
        //อาเจียน T1U1
        _this.state.count++; //count = 4

        _this.post2('T1U1');
        /*this.setState({T: 'เกิดจากอาหารเป็นพิษ หรือกระเพาะและลำไส้อักเสบจากไวรัส'})
        setTimeout(() => {
            this.setState({T: 'ต้องรักษาตามอาการ ป้องกันและรักษาภาวะขาดน้ำและเกลือแร่ด้วย ORT/ORS/IVF'})
            }, 2000)
        this.setState({U1:'กลับไปหน้าหลัก',U2:'สักซื้อเกลือแร่'})*/

      } else if (_this.state.count == 4 && _this.state.tstate == 4) {
        //ถ่ายเป็นน้ำ T2U1
        _this.state.count++; //count = 5

        _this.state.tstate++;

        _this.post2('T2U1'); //this.setState({T: 'คุณมีอาการรุนแรงไหม'})
        //this.setState({U1:'ปานกลางถึงรุ่นแรง',U2:'มีน้อยหรือไม่มีเลย'})

      } else if (_this.state.count == 5 && _this.state.tstate == 5) {
        //ปานกลางถึงรุ่นแรง T3U1
        _this.state.count++; //count = 6

        _this.state.tstate++;

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

        _this.post2('T1U2'); //this.setState({T: 'คุณถ่ายเป็นอย่างไรบ้าง'})
        //this.setState({U1:'ถ่ายเป็นน้ำ',U2:'ถ่ายเป็นมูกเลือด'})

      } else if (_this.state.count == 4 && _this.state.tstate == 4) {
        //ถ่ายเป็นมูกเลือด T2U2
        _this.state.count++; //count = 5

        _this.post2('T2U2'); //this.setState({T: 'คุณจะต้องตรวจอึจจาระด้วยกล้องจุลทรรศน์และเพาะเชื้อ'})
        //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'กลับสู่หน้าหลัก'})

      } else if (_this.state.count == 5 && _this.state.tstate == 5) {
        //ปานกลางถึงรุ่นแรง T3U2
        _this.state.count++; //count = 6

        _this.post2('T3U2'); //this.setState({T: 'คุณจะต้องดื่มเกลือแร่ป้องกันการขาดน้ำด้วย ORT'})
        //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'สั่งซื้อเกลือแร่'})

      }
    });

    _this.state = {
      T: "สวัสดี คุณต้องการให้ช่วยไหมครับ",
      U1: "ต้องการความช่วยเหลือ",
      U2: "ต้องการหาโรงพยาบาลใกล้เคียง",
      code: 'T0U1',
      data: {},
      count: 1,
      tstate: 1
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
            lineNumber: 166
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 8,
          style: boxstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: tstyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, "T")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mtstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, _this2.state.T)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 8,
          sm: 8,
          style: boxMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.callByU1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, _this2.state.U1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          style: mastyle,
          onClick: _this2.callByU2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, _this2.state.U2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2,
          sm: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: ustyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, "U")))));
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, QandAE());
    }
  }]);

  return QandA;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QandA);

/***/ })

})
//# sourceMappingURL=help.js.900d89c78830453db9ec.hot-update.js.map