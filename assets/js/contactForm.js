function submitForm() {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LeHBSUfAAAAAAt-BKDFMUsxpsjoaE6oM4KKAsRN", {
        action: "submit",
      })
      .then(function (token) {
        let invalid = document.querySelector(".invalid-info");
        let success = document.querySelector(".success-info");
        let error = document.querySelector(".error-info");
        let firstName = document.querySelector(".first-label");
        let email = document.querySelector(".email-label");
        let message = document.querySelector(".message-label");
        let contactButton = document.querySelector(".contact-button");
        let data = {};

        data.firstName = document.getElementById("first_name").value;
        data.lastName = document.getElementById("last_name").value;
        data.email = document.getElementById("email").value;
        data.number = document.getElementById("number").value;
        data.subject = document.getElementById("subject").value;
        data.message = document.getElementById("message").value;

        firstName.classList.remove("text-red-700");
        email.classList.remove("text-red-700");
        message.classList.remove("text-red-700");
        invalid.classList.add("hidden");
        error.classList.add("hidden");
        success.classList.add("hidden");

        contactButton.disabled = true;
        contactButton.innerText = "sending Message...";
        if (
          data.firstName.length === 0 ||
          data.email.length === 0 ||
          data.message.length === 0
        ) {
          firstName.classList.add("text-red-700");
          email.classList.add("text-red-700");
          message.classList.add("text-red-700");
          invalid.classList.toggle("hidden");
          contactButton.disabled = false;
          contactButton.innerText = "Send message!";
          return;
        }

        const url = "https://mail.ledgermail.io/api/admin/website-contact";

        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.status < 400) {
              setTimeout(() => {
                success.classList.toggle("hidden");
              }, 10000);
              success.classList.toggle("hidden");
              document.getElementById("contactForm").reset();
            } else {
              setTimeout(() => {
                error.classList.toggle("hidden");
              }, 10000);
              error.classList.toggle("hidden");
            }
          })
          .then(() => {
            contactButton.disabled = false;
            contactButton.innerText = "Send message!";
          });
      });
  });
}
