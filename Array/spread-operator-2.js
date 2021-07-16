// 배열 중간에 pre 넣기 (... 활용)
let pre = [100, 200, "hello", null];
let newData = [10, 50, ...pre, 500];
console.log(newData);

// 매개변수로 ... 전달하기
function sum(a, b, c) {
  return a + b + c;
}

let data = [100, 200, 300];

// 방법1. 노가다
console.log(sum(data[0], data[1], data[2]));
// 방법2. 이전 방법 (apply)
console.log(sum.apply(null, data));
// 방법3. ...로 간단하게 해결
console.log(sum(...data));
