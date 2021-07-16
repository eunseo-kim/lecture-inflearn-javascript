// 1. 고전적인 for문
var data1 = [1, 2, undefined, NaN, null, ""];
for (var i = 0; i < data1.length; i++) {
  console.log("data[i]:", data1[i]);
}

// 2. for each
var data2 = [1, 2, undefined, NaN, null, ""];
data2.forEach(function (value) {
  console.log("value:", value);
});

// 3. for in
var data3 = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () {};
for (let idx in data3) {
  console.log("data[idx]:", data3[idx]);
}
// for in을 쓸 경우 prototype을 이용해 추가적인 상위 객체까지 순회한다. (문제!)
// 따라서 for in으로는
// 그리고 Array.prototype.getIndex = function () {}; 이런 방법도 좋지는 않다!

//4. for of
var data4 = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function () {};
for (let value of data4) {
  console.log("value:", value);
}

// 4+. for of로 이렇게 문자열도 순회할 수 있다.
var string = "Hello My Name is Eunseo";
for (let char of string) {
  console.log("char:", char);
}
