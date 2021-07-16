function print() {
  /*
  filter, includes, from을 사용하여 문자열 'e'가 포함된
  노드로 구성된 배열을 만들어서 변환하기
  - filter => Array에 대해서 사용 가능
  */
  let list = document.querySelectorAll("li"); // Node
  let listArray = Array.from(list); // li 노드로 구성된 배열
  let resultArray = listArray.filter(function (value) {
    return value.innerText.includes("e");
  });
  console.log(resultArray);
  console.log(resultArray.length);
}
print();
