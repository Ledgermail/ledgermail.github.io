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
  var onSubmitPop = function (response) {
    return new Promise(function (resolve, reject) {
      if (response) {
        $("#p-contact-form").ajaxSubmit({
          target: qf_results_p,
          dataType: "json",
          success: function (data) {
            var type =
              data.result === "error" ? "alert-danger" : "alert-success";
            qf_results_p
              .removeClass("alert-danger alert-success")
              .addClass("alert " + type)
              .html("Thank you!")
              .slideDown(400);
            if (data.result !== "error") {
              $("#p-contact-form")
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
    contactPopWidget = grecaptcha.render("contact-pop-captcha", {
      sitekey: "6LdUlwsbAAAAAONrbGgIsgAWhpUf0zmh1q2H6S8O",
      callback: onSubmitPop
    });
     var contactForm = $("#contact-form");
  if (contactForm.length > 0) {
    console.log(contactForm.length);
    var selectRec = contactForm.find("select.required"),
    qf_results = contactForm.find(".form-results"),
    qf_captcha = contactForm.find(".form-captcha");
    contactForm.validate({
      invalidHandler: function () {
        qf_results.slideUp(800);
        console.log("invalid");
      },
      submitHandler: function (form) {
        console.log("clicked");
         qf_captcha
              .removeClass("alert-danger alert-success")
              .addClass("alert alert-danger")
              .html("please verify captcha")
        grecaptcha.render("contact-form-captcha", {
        sitekey: "6Le9FxkbAAAAAFZoz7TzhkrXK0uuRaL2hUlVhMEa",
        callback: onSubmit,
   
    });
      }
    });
    selectRec.on("change", function () {
      $(this).valid();
    });
  }

//     contactFormWidget = grecaptcha.render("contact-form-captcha", {
//       sitekey: "6Le9FxkbAAAAAFZoz7TzhkrXK0uuRaL2hUlVhMEa",
//       callback: onSubmit,
   
//     });
  };

  if (!$().validate || !$().ajaxSubmit) {
    console.log("contactForm: jQuery Form or Form Validate not Defined.");
    return true;
  }
  // ContactForm
//   var contactForm = $("#contact-form");
//   if (contactForm.length > 0) {
//     console.log(contactForm.length);
//     var selectRec = contactForm.find("select.required"),
//     qf_results = contactForm.find(".form-results"),
//     qf_captcha = contactForm.find(".form-captcha");
//     contactForm.validate({
//       invalidHandler: function () {
//         qf_results.slideUp(800);
//         console.log("invalid");
//       },
//       submitHandler: function (form) {
//         console.log("clicked");
//          qf_captcha
//               .removeClass("alert-danger alert-success")
//               .addClass("alert alert-danger")
//               .html("please verify captcha")
//       }
//     });
//     selectRec.on("change", function () {
//       $(this).valid();
//     });
//   }

  var pContactForm = $("#p-contact-form");
  if (pContactForm.length > 0) {
    var selectRec = pContactForm.find("select.required"),
      qf_results_p = pContactForm.find(".form-results");
    pContactForm.validate({
      invalidHandler: function () {
        qf_results_p.slideUp(400);
      },
      submitHandler: function (form) {
        qf_results_p.slideUp(400);
        grecaptcha.execute(contactPopWidget);
      }
    });
    selectRec.on("change", function () {
      $(this).valid();
    });
  }
})(jQuery);
