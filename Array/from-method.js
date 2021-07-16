// arguments => addMark에 매개변수 없어도 arguments로 처리됨
function addMark() {
  let newData = [];

  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }
  console.log(newData);
}
addMark(1, 2, 3, 4, 5);

// ES2015의 from method로 "진짜 배열" 만들기
//argument.map이 불가능하므로(argument는 배열이 아니여서 map을 쓸 수 없음)
// Array.from을 이용해서 배열을 만들어준다.
function addMark() {
  let realArray = Array.from(arguments);
  let newData = realArray.map(function (value) {
    return value + "~";
  });
  console.log(newData);
}
addMark(5, 4, 3, 2, 1);
