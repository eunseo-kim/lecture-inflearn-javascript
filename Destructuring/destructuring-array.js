let data = ["a", "b", "c", "d"];

// 일반적인 방법
let first = data[0];
let second = data[1];
console.log(first, second);

// Destructuring
let [one, , three] = data;
console.log(one, three);
