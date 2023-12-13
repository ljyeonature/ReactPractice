// 5_bind_this.js

// [1]
var obj = { result: 0 };
obj.add = function (x, y) {
  this.result = x + y; // this??? obj 객체
};

console.log(obj); // { result: 0, add: [Function (anonymous)] }
obj.add(3, 4);
console.log(obj.result); // 7
console.log("1> ---------------------------");

// [2]
var obj2 = {};

var add = function (x, y) {
  this.result = x + y; // bind 되지 않았다면 : this ???? global 변수
};
add = add.bind(obj2);
add(3, 4);
console.log(obj2); // {} => bind 후 : { result: 7 }
console.log(obj2.result); // undefined => bind 후 : 7
// console.log(result); // 7
