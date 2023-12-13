// 3_array.js

// [0] 기존 자바스크립트

var queryString = "kind=it&title=python&cnt=2";
var chunks = queryString.split("&");
var result = {};
for (var i = 0; i < chunks.length; i++) {
  var parts = chunks[i].split("=");
  result[parts[0]] = parts[1];
}
console.log(result); // { kind: 'it', title: 'python', cnt: '2' }

// [1] forEach()
var queryString = "kind=it&title=python&cnt=2";
var chunks = queryString.split("&");
var result = {};

chunks.forEach((chunk) => {
  const [key, value] = chunk.split("=");
  result[key] = value;
});

console.log(result); // { kind: 'it', title: 'python', cnt: '2' }

// [2] map()
var queryString = "kind=it&title=python&cnt=2";
var chunks = queryString.split("&");
var result = chunks.map((chunk) => {
  const [key, value] = chunk.split("=");
  return { key, value };
});

console.log(result);
/*[
    { key: 'kind', value: 'it' },
    { key: 'title', value: 'python' },
    { key: 'cnt', value: '2' }
  ]
*/
