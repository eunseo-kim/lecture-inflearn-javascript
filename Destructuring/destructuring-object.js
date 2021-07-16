let obj = {
  name: "eunseo",
  address: "korea",
  age: "22",
};

// destructuring
let { name, age } = obj;
console.log(name, age);

// destructuring + 이름 바꾸기
let { name: myName, age: myAge } = obj;
console.log(myName, myAge);
