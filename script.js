import setHeaderListItems from "./components/header.js";
import setMenuListItems from "./components/menu.js";
import setSlides from "./components/slider.js";
import setAdvantages from "./components/advantages.js";
import { changeSlide, clickSlide } from "./consts/helpers.js";

const slider = document.querySelector(".slider__wrapper");
const icons = document.querySelector(".slider__icons");
const sliderButtons = document.querySelectorAll(".slider__button");

let slidePosition = 1;

let sliderData = {
  slides: slider.children,
  pos: slidePosition,
  icons: icons.children,
  activeIconClass: "slider__icon_active",
  shift: 100,
  shiftUnit: "%",
  limit: 1,
};

setHeaderListItems();
setMenuListItems();
setSlides();
setAdvantages();

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", () => {
    changeSlide(i, sliderData);
  });
}

for (let i = 0; i < icons.children.length; i++) {
  icons.children[i].addEventListener("click", (e) => {
    clickSlide(e, sliderData);
  });
}
