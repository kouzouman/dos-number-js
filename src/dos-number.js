import cf from "dos-common-js";

/**
 * 数値型を数値型にして出力（変更なし）
 */
cf.extendMethod(Number, "toNumber", function() {
  return this;
});

/**
 * 数値型を文字列型にして出力
 */
cf.extendMethod(Number, "toString", function() {
  return this + "";
});
