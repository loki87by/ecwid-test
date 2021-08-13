export const createElement = (tagName, params, container, text) => {
  const element = document.createElement(tagName);

  if (text) {
    element.textContent = text;
  }

  if (params) {
    Object.entries(params).forEach((param) => {
      element.setAttribute(String(param[0]), String(param[1]));
    });
  }

  if (container) {
    container.appendChild(element);
  }
  return element;
};

export function changeSlide(direction, data) {

  if (direction === 0) {
    data.pos--;
  } else {
    data.pos++;
  }
  for (let i = 0; i < data.slides.length; i++) {
    data.slides[i].style = `transform: translateX(${-data.pos * data.shift}${
      data.shiftUnit
    });`;

    if (i === data.pos) {

      if (data.pos <= data.icons.length && data.pos > data.limit - 1) {
        data.icons[i - data.limit].classList.add(data.activeIconClass);
      }
    } else {

      if (i <= data.icons.length && i > data.limit - 1) {
        data.icons[i - data.limit].classList.remove(data.activeIconClass);
      }
    }
  }

  if (data.pos === data.slides.length - data.limit) {
    data.icons[data.slides.length - (data.limit + data.pos)].classList.add(
      data.activeIconClass
    );
    setTimeout(() => {
      for (let i = 0; i < data.slides.length; i++) {
        data.slides[i].style = `transition: none; transform: translateX(-${
          data.shift * data.limit
        }${data.shiftUnit})`;
      }
      data.pos = data.limit;
    }, 1100);
  }

  if (data.pos === data.limit - 1) {
    data.icons[data.icons.length - 1].classList.add(data.activeIconClass);
    setTimeout(() => {
      for (let i = 0; i < data.slides.length; i++) {
        data.slides[i].style = `transition: none; transform: translateX(-${
          data.shift * (data.slides.length - (data.limit + 1))
        }${data.shiftUnit})`;
      }
      data.pos = data.slides.length - (data.limit + 1);
    }, 1100);
  }
}

export function clickSlide(evt, data) {

  if (evt.target.classList.contains(data.activeIconClass)) {
    return;
  }
  let currentIndex;
  let activeIndex;
  let direction;
  Array.from(data.icons).forEach((item, index) => {

    if (item === evt.target) {
      currentIndex = index;
    }

    if (item.classList.contains(data.activeIconClass)) {
      activeIndex = index;
    }
  });
  const diff = currentIndex - activeIndex;
  diff > 0 ? (direction = 1) : (direction = 0);
  for (let i = 0; i < Math.abs(diff); i++) {
    changeSlide(direction, data);
  }
}
