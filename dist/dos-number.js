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