"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dosCommonJs = require("dos-common-js");

var _dosCommonJs2 = _interopRequireDefault(_dosCommonJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 数値型を数値型にして出力（変更なし）
 */
_dosCommonJs2.default.extendMethod(Number, "toNumber", function () {
  return this;
});

/**
 * 数値型を文字列型にして出力
 */
_dosCommonJs2.default.extendMethod(Number, "toString", function () {
  return this + "";
});

/**
 * digitでしていた桁数になるように四捨五入する
 */
_dosCommonJs2.default.extendMethod(Number, "round", function () {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var digitKei = Math.pow(10, digit);
  var tmp = Math.round(this / digitKei) * digitKei;
  var divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length > digit * -1) {
    return divs[0] + '.' + divs[1].slice(0, -1 * digit) - 0;
  }
  return tmp;
});

/**
 * digitでしていた桁数になるように切り捨てる
 */
_dosCommonJs2.default.extendMethod(Number, "floor", function () {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var digitKei = Math.pow(10, digit);
  var tmp = Math.floor(this / digitKei) * digitKei;
  var divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length > digit * -1) {
    return divs[0] + "." + divs[1].slice(0, -1 * digit) - 0;
  }
  return tmp;
});

/**
 * digitでしていた桁数になるように切り上げる
 */
_dosCommonJs2.default.extendMethod(Number, "ceil", function () {
  var digit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var digitKei = Math.pow(10, digit);
  var tmp = Math.ceil(this / digitKei) * digitKei;
  var divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length > digit * -1) {
    return divs[0] + "." + divs[1].slice(0, -1 * digit) - 0;
  }
  return tmp;
});

/**
 * 数値分の配列を生成
 */
_dosCommonJs2.default.extendMethod(Number, "createArray", function (seed) {
  var result = [];
  for (var i = 0; i < this; i++) {
    var inputVal = null;
    if ((typeof seed === "undefined" ? "undefined" : _typeof(seed)).toLowerCase() == "function") inputVal = seed(i);

    if ((typeof seed === "undefined" ? "undefined" : _typeof(seed)).toLowerCase() != "function") inputVal = seed;

    result.push(inputVal);
  }
  return result;
});

/**
 * 数値分の配列を生成
 */
_dosCommonJs2.default.extendMethod(Number, "times", function (func) {
  var arr = this.createArray(0);
  return arr.map(function (v, i) {
    return func(i);
  });
});