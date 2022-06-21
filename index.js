const question = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

question.addEventListener("click", () => {
  question.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-response");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.classList.add("show-response");
  answer.style.background = "red";
});
const mousemouve = document.querySelector(".mousemouve");

window.addEventListener("mousemove", (e) => {
  mousemouve.style.left = e.pageX + "px";
  mousemouve.style.top = e.pageY + "px";

  // mousemove.style.left = e.pageX + "px";
  // mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemouve.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemouve.style.transform = "scale(1) translate(-50%, -50%)";
  mousemouve.style.border = "2px solid teal";
});

question.addEventListener("mouseenter", () => {
  question.style.background = "blue";
});

question.addEventListener("mouseout", () => {
  question.style.background = "pink";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./z.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    ring();
    keypressContainer.style.color = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.color = "red";
  } else {
    keypressContainer.style.color = "blue";
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

const inputName = document.getElementById("name");
const select = document.querySelector("select");
const form = document.querySelector("form");
const result = document.querySelector("form > div");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cvg.checked) {
    result.innerHTML = `
    <h3> pseudo: ${pseudo} <h3/>
    <h4> language: ${language} <h4/>
    `;
  } else {
    alert(`veuillez accepter les cvg`);
  }
});
