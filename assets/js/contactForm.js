function submitForm() {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LeHBSUfAAAAAAt-BKDFMUsxpsjoaE6oM4KKAsRN", {
        action: "submit",
      })
      .then(function (token) {
        let data = {};
        data.firstName = document.getElementById("first_name").value;
        data.lastName = document.getElementById("last_name").value;
        data.email = document.getElementById("email").value;
        data.number = document.getElementById("number").value;
        data.subject = document.getElementById("subject").value;
        data.message = document.getElementById("message").value;
        {
          email: "";
          firstName: "";
          lastName: "";
          message: "";
          number: "";
          subject: "";
        }
        console.log("🚀 ~ file: contactUs.html ~ line 353 ~ data", data);
        // document.getElementById("contactForm").reset();
      });
  });
}
