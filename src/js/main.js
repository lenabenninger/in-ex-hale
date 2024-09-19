import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleIn = document.querySelector("#title-in");
const titleCircleOne = document.querySelector("#title-circle-one");
const titleEx = document.querySelector("#title-ex");
const titleCircleTwo = document.querySelector("#title-circle-two");
const titleHale = document.querySelector("#title-hale");

const tlTitle = gsap.timeline();

tlTitle.from(titleIn, {
  opacity: 0,
  duration: 3,
});

tlTitle.from(titleCircleOne, {
  opacity: 0,
  duration: 3,
});
