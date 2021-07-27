(function () {
  var response;
  var verifyCallback = function (resp) {
    qf_results.removeClass("alert-danger alert-success").html("");
    response = resp;
  };

  function onSubmit() {
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
              .slideDown(1600);

            if (data.result !== "error") {
              grecaptcha.reset(contactFormWidget);
              $("#contact-form")
                .clearForm()
                .find(".input-field")
                .removeClass("input-focused");
            }
          },
        });
      } else {
        qf_results
          .removeClass("alert-danger alert-success")
          .addClass("alert alert-danger")
          .html("complete captcha")
          .slideDown(800);
      }
      resolve();
    });
  }
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
          },
        });
      }
      resolve();
    });
  };

  onLoad = function () {
    contactPopWidget = grecaptcha.render("contact-pop-captcha", {
      sitekey: "6Le9FxkbAAAAAFZoz7TzhkrXK0uuRaL2hUlVhMEa",
      callback: onSubmitPop,
    });
    contactFormWidget = grecaptcha.render("contact-form-captcha", {
      sitekey: "6Le9FxkbAAAAAFZoz7TzhkrXK0uuRaL2hUlVhMEa",
      callback: verifyCallback,
    });
  };

  if (!$().validate || !$().ajaxSubmit) {
    // console.log("contactForm: jQuery Form or Form Validate not Defined.");
    return true;
  }
  // ContactForm
  var contactForm = $("#contact-form");
  if (contactForm.length > 0) {
    var selectRec = contactForm.find("select.required"),
      qf_results = contactForm.find(".form-results");

    contactForm.validate({
      invalidHandler: function () {
        qf_results.slideUp(800);
      },
      submitHandler: function (form) {
        qf_results.slideUp(800);

        onSubmit();
      },
    });
    selectRec.on("change", function () {
      $(this).valid();
    });
  }

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
        contactPopWidget;
      },
    });
    selectRec.on("change", function () {
      $(this).valid();
    });
  }
})(jQuery);
