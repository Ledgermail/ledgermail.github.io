let media = new Swiper(".media", {
  autoHeight: true,
  autoplay: { delay: 1000 },
  slidesPerView:
    window.innerWidth > 1024 ? 6 : window.innerWidth >= 640 ? 4 : 2,
  spaceBetween: 24,
  // centeredSlides: true,
  speed: 2000,
  loop: true,
});
let partners = new Swiper(".partners", {
  autoHeight: true,
  autoplay: { delay: 1000 },
  slidesPerView:
    window.innerWidth > 1024 ? 6 : window.innerWidth >= 640 ? 4 : 2,
  spaceBetween: 24,
  // centeredSlides: true,
  speed: 2000,
  loop: true,
});
let dashboard = new Swiper(".dashboard", {
  autoHeight: true,
  autoplay: { delay: 3000 },
  speed: 2000,
  loop: true,
});

let features = new Swiper(".features", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  autoplay: { delay: 3000 },
  slidesPerView:
    window.innerWidth > 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1,
  spaceBetween: 48,
  speed: 1000,
  loop: true,
});
let ecosystem = new Swiper(".ecosystem", {
  autoHeight: true,
  autoplay: { delay: 2000 },
  slidesPerView:
    window.innerWidth >= 1280
      ? 4
      : window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 640
      ? 2
      : 1,
  spaceBetween:   window.innerWidth >= 1280
  ? 8
  : window.innerWidth >= 1024
  ? 16
  : window.innerWidth >= 640
  ? 32
  : 0,
  speed: 1000,
  loop: true,
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1280) {
    features.params.slidesPerView = 3;
    media.params.slidesPerView = 6;
    partners.params.slidesPerView = 6;
    ecosystem.params.slidesPerView = 4;
  } else if (window.innerWidth > 1024) {
    features.params.slidesPerView = 3;
    media.params.slidesPerView = 6;
    partners.params.slidesPerView = 6;
    ecosystem.params.slidesPerView = 3;
  } else if (window.innerWidth > 639) {
    features.params.slidesPerView = 2;
    media.params.slidesPerView = 4;
    partners.params.slidesPerView = 4;
    ecosystem.params.slidesPerView = 2;
  } else {
    features.params.slidesPerView = 1;
    media.params.slidesPerView = 2;
    partners.params.slidesPerView = 2;
    ecosystem.params.slidesPerView = 1;
  }
});
