// ====open menu====
const menuOpenButton = document.querySelector("#open-menu");
const menuCloseButton = document.querySelector("#close-menu");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
// ====close menu====
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
