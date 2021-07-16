// Destructuring 활용_Event객체전달
// event 객체에서 우리가 원하는 데이터만 넘겨주기
document.querySelector("div").addEventListener("click", function ({ target }) {
  console.log(target.innerText);
});
