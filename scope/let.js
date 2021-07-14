// var : 블록 스코프가 없다.
var name = "global var";

function home1() {
  var homevar = "homevar";
  for (var i = 0; i < 100; i++) {}
  console.log(i); //100 출력
}
home1();

// let : 블록 레벨 스코프
var name = "global var";

function home2() {
  var homevar = "homevar";
  for (let i = 0; i < 100; i++) {}
  console.log(i); //error
}
home2();
