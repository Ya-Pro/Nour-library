let menu = document.getElementById("menu");
let list = document.querySelector("ul");
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  list.classList.toggle("is-active");
});
