// Menu open close
let menuIcon = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("move");
  navLinks.classList.toggle("open-menu");
};
// Language
let languageIcon = document.querySelector(".language-icon");
let languageBox = document.querySelector(".language-box");

languageIcon.onclick = () => {
  languageBox.classList.toggle("open-language");
};

window.ityped.init(document.querySelector(".ityped"), {
  strings: [
    "IF YOU WANT TO FIND THE IDEAL PARTNER OF YOUR CRITERIA!? 🥰  ",
    "TRY YOURSELF IN LOVE.. 💗  ",
    "MAKE NEW FRIENDS AND HAVE A COMPLETELY NEW EXPERIENCE...🤗   ",
    "THEN TAS DATING SOCIAL NETWORK IS MADE FOR YOU! 💕   ",
  ],
  loop: true,
});
