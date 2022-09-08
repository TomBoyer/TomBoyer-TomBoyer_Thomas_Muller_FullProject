//gsap

let timeLine = gsap.timeline();

//burger menu

const toogle = document.querySelector(".toggle");
const body = document.querySelector("body");

toogle.addEventListener("click", function () {
  if (body.classList.contains("open")) {
    //fermer menu
    body.classList.remove("open");
  } else {
    //ouvrir menu
    body.classList.add("open");

    timeLine.from(".menu__list", {
      x: 40,
      opacity: 0,
      stagger: 0.25,
      delay: 0.3,
    });
  }
});

//menu desktop

const nav = document.querySelectorAll(".menu__list");
const h3 = document.querySelectorAll("h3");
const cardImg = document.querySelectorAll(".card__img");
const cardTxt = document.querySelectorAll(".card__txt");
const line = document.querySelectorAll(".line");
const lineReverse = document.querySelectorAll(".line__reverse");

window.addEventListener("load", function () {
  timeLine
    .staggerFrom(nav, 1, { left: -60, opacity: 0, ease: "power2.out" }, 0.3)
    .staggerFrom(
      h3,
      0.5,
      { top: -50, opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(line, 0.8, { width: 0, ease: "power2.out" }, 0.2, "-=1")
    .staggerFrom(
      lineReverse,
      1,
      { marginLeft: "100%", width: 0, ease: "power2.out" },
      0.2,
      "-=1"
    )
    .staggerFrom(
      cardImg,
      0.5,
      { left: -200, opacity: 0, ease: "power2.out" },
      0.2,
      "-=1.5"
    )
    .staggerFrom(
      cardTxt,
      0.5,
      { right: -200, opacity: 0, ease: "power2.out" },
      0.2,
      "-=1"
    );
});

//darkmode

const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
