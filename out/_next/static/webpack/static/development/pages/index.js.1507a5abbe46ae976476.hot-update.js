webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SelectedImage.js":
/*!*************************************!*\
  !*** ./components/SelectedImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var _this = undefined,
    _jsxFileName = "/Volumes/Ryan-T5/ryan-portfolio/components/SelectedImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Checkmark = function Checkmark(_ref) {
  var selected = _ref.selected;
  return __jsx("div", {
    style: selected ? {
      left: "4px",
      top: "4px",
      position: "absolute",
      zIndex: "1"
    } : {
      display: "none"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx("svg", {
    style: {
      fill: "white",
      position: "absolute"
    },
    width: "24px",
    height: "24px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "12.5",
    cy: "12.2",
    r: "8.292",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  })), __jsx("svg", {
    style: {
      fill: "#06befa",
      position: "absolute"
    },
    width: "24px",
    height: "24px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })));
};

var imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
var selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
var cont = {
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderRadius: "2px"
};

var SelectedImage = function SelectedImage(_ref2) {
  var index = _ref2.index,
      stagger = _ref2.stagger,
      photo = _ref2.photo,
      margin = _ref2.margin,
      direction = _ref2.direction,
      top = _ref2.top,
      left = _ref2.left,
      selected = _ref2.selected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(selected),
      isSelected = _useState[0],
      setIsSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1]; //calculate x,y scale


  var sx = (100 - 30 / photo.width * 100) / 100;
  var sy = (100 - 30 / photo.height * 100) / 100;
  selectedImgStyle.transform = "translateZ(0px) scale3d(".concat(sx, ", ").concat(sy, ", 1)");

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  var photoAnimation = {
    hidden: {
      scale: .3,
      opacity: 0,
      x: Math.floor(Math.random() * 1600) - 800,
      y: Math.floor(Math.random() * 1600) - 800,
      z: Math.floor(Math.random() * 1600) - 800,
      filter: blur("800px")
    },
    show: {
      scale: 1,
      opacity: 1,
      filter: blur(0),
      x: 0,
      y: 0,
      z: 0,
      transition: {
        delay: stagger + 0.3,
        duration: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  var handleOnClick = function handleOnClick(e) {
    setIsSelected(!isSelected);
  };

  var handleMouseEnter = function handleMouseEnter(e) {
    setIsHovered(true);
  };

  var handleMouseLeave = function handleMouseLeave(e) {
    setIsHovered(false);
    console.log(isHovered);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsSelected(selected);
  }, [selected]);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: photoAnimation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: _objectSpread({
      margin: margin,
      height: photo.height,
      width: photo.width
    }, cont),
    className: "gallery-item " + (!isSelected ? "not-selected" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(Checkmark, {
    selected: isSelected ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alt: photo.title,
    style: isSelected ? _objectSpread({}, imgStyle, {}, selectedImgStyle) : _objectSpread({}, imgStyle)
  }, photo, {
    onClick: handleOnClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  })), isHovered && __jsx("div", {
    style: {
      position: "absolute",
      zIndex: 100000000,
      fontSize: "5rem",
      top: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, photo.desc), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, ".not-selected:hover{outline:2px solid #fff}")));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedImage);

/***/ })

})
//# sourceMappingURL=index.js.1507a5abbe46ae976476.hot-update.js.map