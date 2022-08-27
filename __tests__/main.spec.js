require("../index");

test("toString", () => {
  const num = 4;
  expect(num.toString()).toBe("4");
});

test("createArray", () => {
  const times = 10;
  const arr = times.createArray((i) => 2000 + i);
  console.log(arr);
  for (let i = 0; i < 10; i++) {
    expect(arr[i]).toBe(2000 + i);
  }
});

test("createArray", () => {
  const seed = 10;
  const res = seed.times((i) => i);
  res.forEach((v, i) => expect(v).toBe(i));
});

test("round_ceil_floor", () => {

  expect((123.1234).floor(-2)).toBe(123.12  );
  expect((123.1234).round(-2)).toBe(123.12  );
  expect((123.1234).ceil(-2)).toBe(123.13  );
  expect((123.1264).floor(-2)).toBe(123.12  );
  expect((123.1264).round(-2)).toBe(123.13  );
  expect((123.1264).ceil(-2)).toBe(123.13  );

  expect((123.4567).floor(-2)).toBe(123.45  );
  expect((123.4567).round(-2)).toBe(123.46  );
  expect((123.4567).ceil(-2)).toBe(123.46  );
  expect((123.4564).floor(-2)).toBe(123.45  );
  expect((123.4564).round(-2)).toBe(123.46  );
  expect((123.4564).ceil(-2)).toBe(123.46  );


  expect((123.1234).floor(2)).toBe(100);
  expect((123.1234).round(2)).toBe(100);
  expect((123.1234).ceil(2)).toBe(200);
  expect((155.1264).floor(2)).toBe(100);
  expect((155.1264).round(2)).toBe(200);
  expect((155.1264).ceil(2)).toBe(200);



})
