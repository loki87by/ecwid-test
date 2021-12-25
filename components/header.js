import { createElement } from "../consts/helpers.js";
import { HEADER_LIST_ITEM } from "../consts/consts.js";

const info = document.querySelector(".header__info");

function createListItem(index, container) {
  const li = createElement("li", { class: "header__info-item" }, container);
  createElement(
    "img",
    { src: HEADER_LIST_ITEM[index].src, alt: HEADER_LIST_ITEM[index].alt },
    li
  );
  const div = createElement("div", { class: "header__info-text" }, li);
  createElement("p", {}, div, HEADER_LIST_ITEM[index].text1);
  createElement("p", {}, div, HEADER_LIST_ITEM[index].text2);
}

export default function setHeaderListItems() {
  for (let i = 0; i < HEADER_LIST_ITEM.length; i++) {
    createListItem(i, info);
  }
}
