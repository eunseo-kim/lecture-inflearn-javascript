// JSON
var data = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
  {
    name: "Eternal Flame",
    age: 1000000,
    secretIdentity: "Unknown",
    powers: ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel"],
  },
];
// Destructuring 활용 JSON파싱
// 방법 1 - 3번째 사람의 power 파싱
/*
let [, , person3] = data;
let { name, age, secretIdentity, powers } = person3;
console.log(powers);
*/

// 방법 2 - 한번에 파싱
let [, , { name, age, secretIdentity, powers }] = data;
console.log(name);
