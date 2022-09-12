const dropdownLi = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");

function rotate(e) {
  if (e.target.children[0].style.rotate === "180deg") {
    e.target.children[0].style.rotate = "0deg";
  } else {
    e.target.children[0].style.rotate = "180deg";
  }
}

function setOpacity(e) {
  if (e.target.nextElementSibling.style.opacity === "1") {
    rotate(e);
    reset();
    return;
  }

  reset();
  rotate(e);
  e.target.nextElementSibling.style.opacity = "1";
  e.target.nextElementSibling.style.top = "0";
  e.target.nextElementSibling.style.pointerEvents = "all";
}

function reset() {
  for (ul of dropdown) {
    ul.style.opacity = "0";
    ul.style.top = "-10px";
    ul.style.pointerEvents = "none";
  }
  for (btn of dropdownLi) {
    btn.children[0].style.rotate = "0deg";
  }
}

for (button of dropdownLi) {
  button.addEventListener("mouseover", (e) => setOpacity(e));
  button.addEventListener("click", (e) => setOpacity(e));
}

for (menu of dropdown) {
  menu.addEventListener("mouseleave", () => reset());
}
