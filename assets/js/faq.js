$(document).ready(async function () {
  await fetch("./assets/js/faqData.json")
    .then((response) => response.json())
    .then((data) => {
      Object.keys(data).map((key) => {
        showQuestions(data[key]);
      });
    });
  // await $(".faqs-container .faq-singular:first-child")
  //   .addClass("active")
  //   .children(".faq-answer")
  //   .slideDown(); //Remove this line if you dont want the first item to be opened automatically.
  await $(".faq-question").bind("click", function () {
    console.log($(this));
    if ($(this).parent().hasClass("active")) {
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});

function showQuestions(data) {
  let container = document.getElementById("container");
  let item = document.createElement("div");
  item.innerHTML = `
     
        <h2 class="faq-question">
          ${data.question}
        </h2>
        <div class="faq-answer">
          <div>
            ${data.answer}
          </div>
        </div>
     
    `;
  item.classList.add("faq-singular");
  container.appendChild(item);
}

