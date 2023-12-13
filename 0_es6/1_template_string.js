// 1_template_string.js

var num1 = 10;
var num2 = 20;

var old_result = num1 + "*" + num2 + "=" + num1 * num2;
console.log(old_result);

var new_result = `${num1}*${num2}=${num1 * num2}`;
console.log(new_result);

/* **********************
    js 파일 상태에서는 템플릿 스프링이 실행됨
    그러나 jsp 파일 안에서 내부 스크립트에서는 인식 못함
*/
