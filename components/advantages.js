import { ADVANTAGES_ITEM } from "../consts/consts.js";
import { createElement } from "../consts/helpers.js";

const advantages = document.querySelector(".advantages");

function createAdvantage(index) {
  const div = createElement("div", { class: "advantages__item" }, advantages);
  createElement(
    "img",
    { src: ADVANTAGES_ITEM[index].src, alt: ADVANTAGES_ITEM[index].alt },
    div
  );
  const text = createElement("h3", { class: "advantages__text" }, div);
  createElement("span", {}, text, ADVANTAGES_ITEM[index].text1);
  createElement("span", {}, text, ADVANTAGES_ITEM[index].text2);
}

export default function setAdvantages() {
  for (let i = 0; i < ADVANTAGES_ITEM.length; i++) {
    createAdvantage(i);
  }
}
