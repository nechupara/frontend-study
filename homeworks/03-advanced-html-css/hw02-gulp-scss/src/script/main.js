const menuBtn = document.querySelector(".header__menu-btn");
const headerMenu = document.querySelector(".header__menu");

const mql = window.matchMedia("(max-width: 768px)");

mql.addEventListener("change", () => {
  menuBtn.classList.remove("opened");
  headerMenu.classList.remove("burger");
});

menuBtn.addEventListener("click", (e) => {
  if (!e.target.classList.contains("header__menu-btn")) return;

  menuBtn.classList.toggle("opened");
  if (menuBtn.classList.contains("opened")) {
    headerMenu.classList.add("burger");
  } else {
    headerMenu.classList.remove("burger");
  }
});
