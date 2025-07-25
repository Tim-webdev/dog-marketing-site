// home signedin.js

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const mainNav = document.querySelector(".main-nav");

  if (menuIcon && mainNav) {
    menuIcon.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }
});
