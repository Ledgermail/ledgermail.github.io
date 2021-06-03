(function () {
  var onSubmit = function (response) {
    return new Promise(function (resolve, reject) {
      if (response) {
        $("#contact-form").ajaxSubmit({
          target: qf_results,
          dataType: "json",
          success: function (data) {
            var type =
              data.result === "error" ? "alert-danger" : "alert-success";
            qf_results
              .removeClass("alert-danger alert-success")
              .addClass("alert " + type)
              .html("Thank you!")
              .slideDown(400);
            if (data.result !== "error") {
              $("#contact-form")
                .clearForm()
                .find(".input-field")
                .removeClass("input-focused");
            }
          }
        });
      }
      resolve();
    });
  };

  onLoad = function () {
    contactFormWidget = grecaptcha.render("contact-form-captcha", {
      sitekey: "6LcupwsbAAAAAP-8IFRXYIkSa8Mvr8bHkGeWWGuT",
      callback: onSubmit
    });
  };

  if (!$().validate || !$().ajaxSubmit) {
    console.log("contactForm: jQuery Form or Form Validate not Defined.");
    return true;
  }
  // ContactForm
//   var contactForm = $("#contact-form");
//   if (contactForm.length > 0) {
//     var selectRec = contactForm.find("select.required"),
//     qf_results = contactForm.find(".form-results");
//     contactForm.validate({
//       invalidHandler: function () {
//         qf_results.slideUp(800);
//       },
//       submitHandler: function (form) {
//         qf_results.slideUp(800);
//         console.log("form : ", form)
//         grecaptcha.execute(contactFormWidget);
//       }
//     });
//     selectRec.on("change", function () {
//       $(this).valid();
//     });
//   }
})(jQuery);
