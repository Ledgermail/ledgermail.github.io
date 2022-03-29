const ledgerMail = document.querySelector(".ledgerMail");
const ledgerChat = document.querySelector(".ledgerChat");
const ledgerPay = document.querySelector(".ledgerPay");
const ledgerLive = document.querySelector(".ledgerLive");
const mental = document.querySelector(".mental");

const sectionOptions = {
  rootMargin: " 10px 0px 0px 0px",
};
const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector(".image").classList.add("floating-image");
      entry.target.querySelector(".text").classList.add("floating-text");
    }
  });
},
sectionOptions);

sectionObserver.observe(ledgerMail);
sectionObserver.observe(ledgerChat);
sectionObserver.observe(ledgerPay);
sectionObserver.observe(ledgerLive);
sectionObserver.observe(mental);
