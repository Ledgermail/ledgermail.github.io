const featuresList = document.querySelector(".features-list");
const featuresTitle = document.querySelector(".features-title");


const sectionOptions = {
  rootMargin: " -5% 0px 0px 0px",
};
const featuresObserver = new IntersectionObserver(function (
  entries,
  featuresObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("floating-features");
    }
  });
},
sectionOptions);

featuresObserver.observe(featuresList);

const featuresTitleObserver = new IntersectionObserver(function (
  entries,
  featuresTitleObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("floating-text-top");
    }
  });
},
sectionOptions);
featuresTitleObserver.observe(featuresTitle);
