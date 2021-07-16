// 새로운 방법의 Object 생성하기
function getObj() {
  const name = "crong";
  const getName = function () {
    return name;
  };
  const setName = function (newName) {
    name = newName;
  };
  const printName = function () {
    console.log(name);
  };

  /*  
  이렇게 번거롭게 작성하지 않고 바로 getName, setName, printName으로 작성해서 리턴해도 된다.
    return {
      getName: getName,
      setName: setName,
      printName: printName,
    };
  */
  return { getName, setName, printName };
}
var obj = getObj();
console.log(obj);
console.log(obj.getName());
obj.printName();
