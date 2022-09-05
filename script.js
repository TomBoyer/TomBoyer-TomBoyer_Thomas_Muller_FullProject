//burger menu

const toogle = document.querySelector(".toggle");
const body = document.querySelector("body");

toogle.addEventListener("click", function () {
  body.classList.toggle("open");
});
