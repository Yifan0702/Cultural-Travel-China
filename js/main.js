window.onload = () => {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll(".p");

  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  var index = 0;

  initialize();

  var timer = setInterval(next, 4000);

  left.addEventListener("click", prev);
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 4000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 4000);
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      clearInterval(timer);
      timer = null;
      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
    });
  }

  function prev() {
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    buttons[index].style.backgroundColor = "#000";
  }

  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};
