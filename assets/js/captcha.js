(function() {
  
  var onSubmit = function(response) {
    return new Promise(function(resolve, reject){
        if(response){
            $("#contact-form").ajaxSubmit({
              target: qf_results,
              dataType: "json",
              success: function(data) {
                var type =
                  data.result === "error" ? "alert-danger" : "alert-success";
                qf_results
                  .removeClass("alert-danger alert-success")
                  .addClass("alert " + type)
                  .html(data.message)
                  .slideDown(400);
                if (data.result !== "error") {
                  $(form)
                    .clearForm()
                    .find(".input-field")
                    .removeClass("input-focused");
                }
              }
            });
        }
        resolve();
    })
  };
  var onSubmitPop = function(response) {
    return new Promise(function(resolve, reject){
        if(response){
            $("#p-contact-form").ajaxSubmit({
              target: qf_results,
              dataType: "json",
              success: function(data) {
                var type =
                  data.result === "error" ? "alert-danger" : "alert-success";
                qf_results
                  .removeClass("alert-danger alert-success")
                  .addClass("alert " + type)
                  .html(data.message)
                  .slideDown(400);
                if (data.result !== "error") {
                  $(form)
                    .clearForm()
                    .find(".input-field")
                    .removeClass("input-focused");
                }
              }
            });
        }
        resolve();
    })
  };

  onLoad = function() {
    contactPopWidget = grecaptcha.render("contact-pop-captcha", {
      sitekey: "6Lf5X5EUAAAAAOsnMMtfxZKXioIOuK1gGLf2vF8E",
      callback: onSubmitPop
    });
    contactFormWidget = grecaptcha.render("contact-form-captcha", {
        sitekey: "6Lf5X5EUAAAAAOsnMMtfxZKXioIOuK1gGLf2vF8E",
        callback: onSubmit
      });
  };

  if (!$().validate || !$().ajaxSubmit) {
    console.log("contactForm: jQuery Form or Form Validate not Defined.");
    return true;
  }
  // ContactForm
  var contactForm = $("#contact-form");
  if (contactForm.length > 0) {
    var selectRec = contactForm.find("select.required"),
      qf_results = contactForm.find(".form-results");
    contactForm.validate({
      invalidHandler: function() {
        qf_results.slideUp(400);
      },
      submitHandler: function(form) {
        qf_results.slideUp(400);
        grecaptcha.execute(contactFormWidget);
      }
    });
    selectRec.on("change", function() {
      $(this).valid();
    });
  }

  var contactForm = $("#p-contact-form");
  if (contactForm.length > 0) {
    var selectRec = contactForm.find("select.required"),
      qf_results = contactForm.find(".form-results");
    contactForm.validate({
      invalidHandler: function() {
        qf_results.slideUp(400);
      },
      submitHandler: function(form) {
        qf_results.slideUp(400);
        grecaptcha.execute(contactPopWidget);
      }
    });
    selectRec.on("change", function() {
      $(this).valid();
    });
  }
})(jQuery);
