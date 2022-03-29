const contactDetails = document.querySelector(".contact-details");

const sectionOptions = {
  rootMargin: " 10px 0px 0px 0px",
};
const contactObserver = new IntersectionObserver(function (
  entries,
  contactObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactDetails.classList.add("floating-image");
    }
  });
},
sectionOptions);

contactObserver.observe(contactDetails);