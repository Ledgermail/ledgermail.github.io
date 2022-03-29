const aboutImage = document.querySelector(".about-image");
const aboutText = document.querySelector(".about-text");
const sectionOptions = {
  rootMargin: " -5% 0px 0px 0px",
};
const aboutImageObserver = new IntersectionObserver(function (
  entries,
  aboutImageObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("floating-image-bottom");
    }
  });
},
sectionOptions);

aboutImageObserver.observe(aboutImage);

const aboutTextObserver = new IntersectionObserver(function (
  entries,
  aboutTextObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("floating-Text-top");
    }
  });
},
sectionOptions);

aboutTextObserver.observe(aboutText);