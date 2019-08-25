"use strict";

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