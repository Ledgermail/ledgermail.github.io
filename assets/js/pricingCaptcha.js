(function () {
  var response;
  var verifyCallback = function (resp) {
    qf_results.removeClass("alert-danger alert-success").html("");
    response = resp;
  };

  function onSubmit() {
    return new Promise(function (resolve, reject) {
      if (response) {
        $("#pricing-form").ajaxSubmit({
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
              grecaptcha.reset(pricingFormWidget);
              $("#pricing-form")
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
 

  onLoad = function () {
   
    pricingFormWidget = grecaptcha.render("pricing-form-captcha", {
      sitekey: "6Le9FxkbAAAAAFZoz7TzhkrXK0uuRaL2hUlVhMEa",
      callback: verifyCallback,
    });
  };

  if (!$().validate || !$().ajaxSubmit) {
    console.log("pricingForm: jQuery Form or Form Validate not Defined.");
    return true;
  }
  // ContactForm
  var pricingForm = $("#pricing-form");
  if (pricingForm.length > 0) {
    var selectRec = pricingForm.find("select.required"),
      qf_results = pricingForm.find(".form-results");

    pricingForm.validate({
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

})(jQuery);
