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
