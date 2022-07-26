// aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li");

navList.forEach((navItemI) => {
  const aTag = navItemI.querySelector("a");
  aTag.addEventListener("click", function () {
    var progressIns = document.querySelectorAll(".progress-in");
    if(this.getAttribute("href").split("#")[1]==="about"){
      progressIns.forEach((progressIn) => {
        progressIn.classList.add("animation");
      });
    }
    else{
      progressIns.forEach((progressIn) => {
        progressIn.classList.remove("animation");
      });
    }
    navList.forEach((navItemY) => {
      const navLink = navItemY.querySelector("a");
      if (navLink.classList.contains("active")) {
        showSection("back-section", navLink);
      }
      navLink.classList.remove("active");
    });
    this.classList.add("active");
    showSection("active", this);
    asideSectionTogglerBtn();
  });
});

const showSection = (class_status, element) => {
  const target = element.getAttribute("href").split("#")[1];
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove(class_status);
  });
  document.querySelector("#" + target).classList.add(class_status);
};

// nav toogler
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

const asideSectionTogglerBtn = () => {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
};

const hireMeBtns = document.querySelectorAll(".hire-me");
hireMeBtns.forEach((hireMeBtn) => {
  hireMeBtn.addEventListener("click", () => {
    navList.forEach((navItem) => {
      navItem.querySelector("a").classList.remove("active");
    });
    var contactNavLink = document.querySelector('a[href="#contact"]');
    contactNavLink.classList.add("active");
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    const backSection = document.querySelector(
      "#" + hireMeBtn.getAttribute("data-section")
    );
    backSection.classList.add("back-section");
    document.querySelector("#contact").classList.add("active");
  });
});

// hide all when scroll

const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  section.addEventListener("scroll", () => {
    document.querySelector(".style-switcher").classList.remove("open");
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
  });
  section.addEventListener("click", () => {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
  });
});
