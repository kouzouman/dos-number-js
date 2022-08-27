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
 * digitでしていた桁数になるように四捨五入する
 */
cf.extendMethod(Number, "round", function (digit=0) {
  const digitKei = Math.pow(10, digit)
  const tmp = Math.round(this / digitKei) * digitKei;
  const divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length  > digit * -1) {
    return divs[0] + '.' + divs[1].slice(0, (-1*digit)) - 0
  }
  return tmp
})

/**
 * digitでしていた桁数になるように切り捨てる
 */
cf.extendMethod(Number, "floor", function (digit=0) {
  const digitKei = Math.pow(10, digit)
  const tmp = Math.floor(this / digitKei) * digitKei;
  const divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length > digit * -1) {
    return divs[0] + "." + divs[1].slice(0, -1 * digit) - 0;
  }
  return tmp
})

/**
 * digitでしていた桁数になるように切り上げる
 */
cf.extendMethod(Number, "ceil", function (digit=0) {
  const digitKei = Math.pow(10, digit)
  const tmp = Math.ceil(this / digitKei) * digitKei;
  const divs = (tmp + "").split(".");
  if (divs.length > 1 && divs[1].length > digit * -1) {
    return divs[0] + "." + divs[1].slice(0, -1 * digit) - 0;
  }
  return tmp
})

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
