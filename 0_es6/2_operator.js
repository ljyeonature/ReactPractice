// 2_operator.js

// [1] 논리연산자와 결합

var arr = ["ONE", "TWO"];
var first = arr[0]; // 'ONE'
var third = arr[2]; //

console.log(first);
// console.log(second); // 멈춘다... second is not defined
console.log(third); // undefined

console.log(first || "empty"); // ONE
console.log(third || "empty"); // empty

// [2] 삼항연산자와 truthy, falsy
var truthy = true;
// var truthy = 1;
// var truthy = -1;      // 0이 아닌 숫자 모두 true
// var truthy = "0";     // 문자는 true
// var truthy = "false"; // 문자는 true
// var truthy = [];      // 빈 배열 true    | 파이썬에서는 False
// var truthy = {};      // 빈 객체 true    | 파이썬에서는 False

var samhang = truthy ? "참" : "거짓";
console.log(samhang); // 참

var falsy = false;
// var falsy = 0;         // 0은 false
// var falsy = null;      // false
// var falsy = NaN;       // false
// var falsy = undefined; // false
// var falsy = "";        // false

var samhang2 = falsy ? "참" : "거짓";
console.log(samhang2); // 거짓

// [3] 요소분해
var list = [100, 200];
var [item1 = 1, item2 = 2, item3 = 300] = list;

console.log(item1); // 100 : list 안에 값이 있기 때문에 기본값 필요없음
console.log(item2); // 200 : list 안에 값이 있기 때문에 기본값 필요없음
console.log(item3); // undefined => 300 : 값이 없을 때만 기본값 처리 함.

// [4] 전개연산자(...)
var objOne = { hana: 1, dul: 2, gita: 0 };
var objTwo = { sam: 3, sa: 4, gita: -1 };

var old_combined = {
  hana: objOne.hana,
  dul: objOne.dul,
  gita: objOne.gita, // 0
  sam: objTwo.sam,
  sa: objTwo.sa,
  gita: objTwo.gita, // -1 : 덮어짐.
};
console.log(old_combined); // { hana: 1, dul: 2, gita: -1, sam: 3, sa: 4 }

var new_combined = {
  ...objOne,
  ...objTwo,
};
console.log(new_combined); // // { hana: 1, dul: 2, gita: -1, sam: 3, sa: 4 }

var { gita, ...sunseo } = new_combined;
console.log(gita); // -1
console.log(sunseo); // { hana: 1, dul: 2, sam: 3, sa: 4 }
