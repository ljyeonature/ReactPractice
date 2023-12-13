// 4_function.js

// (0) function 명령어
function func1(first, second) {
  return first + second;
}

// (1) function literal (변수값)
var func2 = function (first, second) {
  return first + second;
};

// (2) arrow function (화살표 함수)
var func3 = (first, second) => {
  return first + second;
};
// 하나의 return 값이 있다면, return 없이 써도 된다
var func4 = (first, second) => first + second;

console.log(func1(1, 2)); // 3
console.log(func2(2, 3)); // 5
console.log(func3(3, 4)); // 7
console.log(func4(4, 5)); // 9

class MyClass {
  value = 10;
  constructor() {
    // [1] function literal
    var func1_add = function (f, s) {
      return this.value + f + s;
    }.bind(this); // this : MyClass => 연결이 되야 value를 찾을 수 있음
    console.log("확인1: " + func1_add(1, 2));

    // [2] arrow function
    //      => bind() 하지 않아도 됨
    var func2_add = (f, s) => this.value + f + s;
    console.log("확인2: " + func2_add(1, 2));
  }
}

var my = new MyClass();
