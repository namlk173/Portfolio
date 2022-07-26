// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const modalSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
  modalSwitcher.classList.toggle("open");
});


// theme color

const alternateStyles = document.querySelectorAll(".alternate-style");
const setActiveStyle = (color) => {
  alternateStyles.forEach((style) => {
    color === style.getAttribute("title")
      ? style.removeAttribute("disabled")
      : style.setAttribute("disabled", "true");
  });
};

// Theme light and dark
const dayNight = document.querySelector(".day-night");
const dayNightIcon = dayNight.querySelector("i");
dayNight.addEventListener("click", () => {
  dayNightIcon.classList.toggle("fa-sun");
  dayNightIcon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  document.body.classList.contains("dark")
    ? dayNightIcon.classList.add("fa-sun")
    : dayNightIcon.classList.add("fa-moon");
});
