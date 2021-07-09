function sendEmail() {
  var preregister = $("#preregister-form");
  preregister.validate({
    invalidHandler: function () {
      console.log("1");
    },
    submitHandler: function (form) {
      console.log("🚀 ~ file: sendMail.js ~ line 8 ~ sendEmail ~ form", form);
      console.log("2");
    },
  });
  var alertmessage = preregister.find(".message");
  var name = document.getElementById("preregister-name");
  email = preregister.find(".email");
  age = preregister.find(".age");

  if (name.length && email.length && age.length) {
    alertmessage
      .removeClass("alert alert-danger alert-success")
      .addClass("alert alert-success")
      .html("Thank you!");
  }
  setTimeout(() => {
    if (contactForm.length > 0) {
      alert(
        "pre registration successful. Please check your email for confirmation"
      );
    }
  }, 2000);

  setTimeout(() => {
    preregister.clearForm();
  }, 10000);
}
