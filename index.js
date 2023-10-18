"use strict";

let colors;

const btn = document.querySelector(".btn");
const span = document.querySelector("span");
const menu = document.querySelectorAll("li");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex");

window.addEventListener("load", () => {
  colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  simple.classList.add("active");
  span.innerText = "#f1f5f8";
});

function getRandomNumber(value) {
  return Math.floor(Math.random() * value);
}

menu.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("simple")) {
      e.currentTarget.classList.add("active");
      e.currentTarget.nextElementSibling.classList.remove("active");
      colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    } else if (e.currentTarget.classList.contains("hex")) {
      e.currentTarget.classList.add("active");
      e.currentTarget.previousElementSibling.classList.remove("active");
      colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    }
  });
});

btn.addEventListener("click", () => {
  let randomNumber = getRandomNumber(colors.length);
  if (simple.classList.contains("active")) {
    span.innerText = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
  } else {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += colors[getRandomNumber(colors.length)];
    }
    span.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
  }
});
