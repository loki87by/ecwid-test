import { createElement } from "../consts/helpers.js";
import { SLIDER_ITEM } from "../consts/consts.js";

const slider = document.querySelector(".slider__wrapper");
const icons = document.querySelector(".slider__icons");

function createSlide(index, container) {
  createElement(
    "img",
    {
      src: SLIDER_ITEM[index].src,
      alt: SLIDER_ITEM[index].alt,
      class: "slider__image",
    },
    container
  );
  createElement("div", { class: "slider__icon" }, icons);
}

export default function setSlides() {
  for (let i = 0; i < SLIDER_ITEM.length; i++) {
    createSlide(i, slider);
  }

  const firstCopy = slider.children[0].cloneNode(true);
  const lastCopy = slider.children[slider.children.length - 1].cloneNode(true);
  slider.appendChild(firstCopy);
  slider.insertBefore(lastCopy, slider.children[0]);

  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].style = "transform: translateX(-100%)";
  }

  icons.children[0].classList.add("slider__icon_active");
}
