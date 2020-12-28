webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./utils/useMousePosition.js":
/*!***********************************!*\
  !*** ./utils/useMousePosition.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useMousePosition = function useMousePosition() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: null,
    y: null
  }),
      mousePosition = _useState[0],
      setMousePosition = _useState[1];

  var updateMousePosition = function updateMousePosition(ev) {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("mousemove", updateMousePosition);
    return function () {
      return window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

/* harmony default export */ __webpack_exports__["default"] = (useMousePosition);

/***/ })

})
//# sourceMappingURL=index.js.552e6077eb0f4118a6dd.hot-update.js.map