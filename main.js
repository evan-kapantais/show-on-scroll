window.addEventListener("scroll", show);

function show() {
  const boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    if (window.scrollY >= boxes[i].offsetTop - window.innerHeight / 1.5) {
      boxes[i].style.background = "#444";
    } else {
      boxes[i].style.background = "#ccc";
    }
  }
}