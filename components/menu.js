import { createElement } from "../consts/helpers.js";
import { MENU_LIST_ITEM } from "../consts/consts.js";

const menu = document.querySelector(".menu__navigation");

function createListItem(index, container) {
  const li = createElement("li", {}, container);
  createElement(
    "a",
    { href: "#", class: "menu__item" },
    li,
    MENU_LIST_ITEM[index]
  );
}

export default function setMenuListItems() {
  for (let i = 0; i < MENU_LIST_ITEM.length; i++) {
    createListItem(i, menu);
  }
}
