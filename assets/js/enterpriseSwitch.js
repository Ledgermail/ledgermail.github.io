const customizationHeader = document.querySelector(".customization-header");
const commercializationHeader = document.querySelector(
  ".commercialization-header"
);
const customizationImage = document.querySelector(".customization-image");
const commercializationImage = document.querySelector(".commercialization-image")

const customizationText = document.querySelector(".customization-text");
const commercializationText = document.querySelector(".commercialization-text");
function switchEnterprises(enterprise) {
  if (enterprise === "commercialization") {
    customizationHeader.classList.remove("border-b");
    commercializationHeader.classList.add("border-b");
    customizationText.style.display = "none";
    commercializationText.style.display = "block";
    customizationImage.style.display = "none";
    commercializationImage.style.display = "block";
  } else {
    customizationHeader.classList.add("border-b");
    commercializationHeader.classList.remove("border-b");
    customizationText.style.display = "block";
    commercializationText.style.display = "none";
    customizationImage.style.display = "block";
    commercializationImage.style.display = "none";
  }
}
