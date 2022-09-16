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

// const logo = document.querySelector("a .logo");
const titleSpans = document.querySelectorAll("h1 span");
const nav = document.querySelectorAll(".menu__list");
const h3 = document.querySelectorAll("h3");
const cardImg = document.querySelectorAll(".card__img");
const cardTxt = document.querySelectorAll(".card__txt");
const line = document.querySelectorAll(".line");
const lineReverse = document.querySelectorAll(".line__reverse");

window.addEventListener("load", function () {
  timeLine
    // .from(
    //   logo,
    //   1,
    //   {
    //     top: -50, opacity: 0, ease: "power2.out"
    //   },
    //   "-=1"
    // )
    .staggerFrom(
      titleSpans,
      0.2,
      { top: -50, opacity: 0, ease: "power2.out" },
      0.1
    )
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

// https://codeorum.com/tutorials/dark-mode-with-css-variables-and-vanilla-js

// checkbox input value
let themeSwitcher = document.querySelector('.theme-switcher input');
// get current theme from localStorage
let currentTheme = localStorage.getItem('theme');

// check what is current theme right now and activate it
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitcher.checked = true;
    }
}

// switch between themes
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// event listener on checkbox change
themeSwitcher.addEventListener('change', switchTheme, false);


// const darkModeToggle = document.getElementById("dark-mode");

// darkModeToggle.addEventListener("change", () => {
//   document.body.classList.toggle("dark");
// });

// //form contact

// document.querySelector("button").addEventListener("click", (e) => {
//   e.preventDefault();
//   const contactForm = document.querySelector("#form");
//   const name = document.querySelector('[name="name"]');
//   const email = document.querySelector('[name="email"]');
//   const message = document.querySelector('[name="content"]');
//   // validation before sending the data
//   if (
//     name.value.length === 0 ||
//     email.value.length === 0 ||
//     message.value.length === 0
//   ) {
//     alert("merci de compléter les champs");
//   } else {
//     let data = new FormData(contactForm);
//     fetch("https://formsubmit.crazysmyley@gmail.com", {
//       method: "POST",
//       body: data,
//     });
//     alert("Merci, votre message a bien été envoyé");
//     contactForm.reset();
//     window.open("./index.html");
//   }
// });
