(function () {
    $("#pricing-submit").click(function () {
        var pricingForm = $("#pricing-form");
        qf_results = pricingForm.find(".form-results");
        var fname = $("#first-name").val();
        var lname = $("#last-name").val();
        $("#name").val(fname + ' ' + lname);
        if (pricingForm.length > 0) {
            var selectRec = pricingForm.find("select.required")
            pricingForm.validate({
                invalidHandler: function () {
                    qf_results.slideUp(800);
                },
                submitHandler: function (form) {
                    qf_results.slideUp(800);
                    grecaptcha.execute();

                }
            });
            selectRec.on("change", function () {
                $(this).valid();
            });
        }
    });

    onSubmit = function () {
        return new Promise(function (resolve, reject) {
            $("#pricing-form").ajaxSubmit({
                success: function (data) {
                    var pricingForm = $("#pricing-form");
                    qf_results = pricingForm.find(".form-results");
                    var type =
                        data.result === "error" ? "alert-danger" : "alert-success";
                    var qf_results =
                        qf_results
                            .removeClass("alert-danger alert-success")
                            .addClass("alert " + type)
                            .html("Thank you!")
                            .slideDown(400);
                    if (data.result !== "error") {
                        $("#pricing-form")
                            .clearForm()
                            .find(".input-field")
                            .removeClass("input-focused");
                    }
                },
                dataType: "json",
            });
            resolve();
        });
    }
})(jQuery);