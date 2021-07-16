// spread operator(...) - 펼침연산자

let pre = ["apple", "orange", 100];
let newData = [...pre];

// 기존의 참조를 끊고 새로운 공간에 새로운 배열로 '복사'한 것이다.
console.log(pre === newData); // false임
console.log(pre, newData);
