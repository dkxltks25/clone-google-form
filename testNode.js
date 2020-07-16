const obj = [
  { id: [{ a: false }, { a: false }] },
  { id: [{ a: true }, { a: false }] },
  { id: [{ a: false }, { a: false }] },
];
const obj1 = [{ a: true }, { a: false }, { a: false }];

const value = obj.indexOf(
  obj.filter((item) =>
    ({
      ...item,
      id: item.id.filter((item) => item.a),
    }.id.length === 1
      ? true
      : false),
  )[0],
);
const value1 = obj1.filter((item) => item.a);
//console.dir(value1);
console.log(Array.isArray([]) && [].length);

const isEmpty = (array) => Array.i(array);
