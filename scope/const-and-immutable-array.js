function home() {
  const list = ["a", "b", "c"];
  list.push("d"); // 재할당은 불가능하지만 요소를 변경(추가/삭제)할 수 있다.
  console.log(list);
}
home();

// immutable array를 만들기
const list1 = ["a", "b", "c"];
list2 = [].concat(list1, "d");
console.log(list1, list2);
