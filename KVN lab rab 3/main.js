const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
function toggleMenuVisibility() {
menuList.classList.toggle("hide");


}
menuBtn.addEventListener("click", toggleMenuVisibility);
// Скрипт для раскрытия блока portfolio
const portfolioText = document.querySelector(".portfolio_text");
const portbtn = document.querySelector(".portfolio__btn");
const portfolioImg = document.querySelector(".portfolio_img");


portfolioText.classList.toggle("hide");
portfolioImg.classList.toggle("hide");

function toggleportvisibility() {
portfolioText.classList.toggle("hide");
portfolioImg.classList.toggle("hide");


}
menuBtn.addEventListener("click", toggleMenuVisibility);
