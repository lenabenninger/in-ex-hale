import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleIn = document.querySelector("#title-in");
const titleCircleOne = document.querySelector("#title-circle-one");
const titleEx = document.querySelector("#title-ex");
const titleCircleTwo = document.querySelector("#title-circle-two");
const titleHale = document.querySelector("#title-hale");
const titleSubtitle = document.querySelector(".title-subtitle");
const boxTitle = document.querySelector(".box-title");
const boxTimer = document.querySelector(".timer");
const timeSelected = document.querySelectorAll(".time");
const startBtn = document.querySelector(".btn");

const tlTitle = gsap.timeline();

tlTitle.from(titleIn, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.from(titleCircleOne, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.from(titleEx, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.from(titleCircleTwo, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.from(titleHale, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.from(titleSubtitle, {
  opacity: 0,
  duration: 0.5,
});

tlTitle.to(boxTitle, {
  opacity: 0,
  duration: 0.6,
});

tlTitle.from(
  boxTimer,
  {
    opacity: 0,
    duration: 1.5,
  },
  "<"
);

timeSelected.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.add("active");
  });
});

startBtn.addEventListener("click", function () {
  boxTimer.style.opacity = "0";
});
