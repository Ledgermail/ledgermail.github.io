const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navItems = document.querySelector(".nav-items");
let iconColor = document.getElementById("menu-button");
const sectionOne = document.querySelector(".header-section");

const sectionOneOptions = {
  rootMargin: " 50px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.remove("nav-light");
      nav.style.fill = "black";
      nav.classList.add("nav-dark");
      navItems.classList.remove("text-dark");
      navItems.classList.add("text-light");
      iconColor.setAttribute("stroke", "white");
    } else {
      nav.classList.remove("nav-dark");
      nav.classList.add("nav-light");
      navItems.classList.remove("text-light");
      navItems.classList.add("text-dark");
      iconColor.setAttribute("stroke", "black");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});