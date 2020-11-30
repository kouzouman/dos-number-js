import cf from "dos-common-js";

/**
 * 数値型を数値型にして出力（変更なし）
 */
cf.extendMethod(Number, "toNumber", function () {
  return this;
});

/**
 * 数値型を文字列型にして出力
 */
cf.extendMethod(Number, "toString", function () {
  return this + "";
});

/**
 * 数値分の配列を生成
 */
cf.extendMethod(Number, "createArray", function (seed) {
  let result = [];
  for (let i = 0; i < this; i++) {
    let inputVal = null;
    if ((typeof seed).toLowerCase() == "function") inputVal = seed(i);

    if ((typeof seed).toLowerCase() != "function") inputVal = seed;

    result.push(inputVal);
  }
  return result;
});

/**
 * 数値分の配列を生成
 */
cf.extendMethod(Number, "times", function (func) {
  const arr = this.createArray(0);
  return arr.map((v, i) => func(i));
});
