webpackHotUpdate("static/development/pages/index.js",{

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

  useEffect(function () {
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
//# sourceMappingURL=index.js.7a57b17bd13dbf1b4a50.hot-update.js.map