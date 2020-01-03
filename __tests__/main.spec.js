require("../index");

test("toString", () => {
  const num = 4;
  expect(num.toString()).toBe("4");
});

test("createArray", () => {
  const times = 10;
  const arr = times.createArray(i => 2000 + i);
  console.log(arr);
  for (let i = 0; i < 10; i++) {
    expect(arr[i]).toBe(2000 + i);
  }
});
