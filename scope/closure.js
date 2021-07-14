// 어휘적 범위 지정(Lexical scoping)
function init() {
  var name = "Eunseo"; //name은 init에 의해 생성된 지역 변수
  //displayName()는 내부 함수이면서 클로저
  function displayName() {
    console.log(name); //부모 함수에서 선언된 변수를 사용
  }
  displayName();
}
init();

//Closure(클로저)
function makeFunc() {
  var name = "Eunseo";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
