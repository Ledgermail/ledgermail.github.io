$("#submit-preregister").on("touchstart click", sendEmail);

function sendEmail(e) {
  // e.preventDefault();
  var preregister = $("#preregister-form");
  var alertmessage = preregister.find(".message");

  var name = document.getElementById("preregister_name").value;
  email = document.getElementById("preregister_email").value;
  age = document.getElementById("preregister_age").value;
  website = document.getElementById("preregister_website").value;
  if (name != "" && email != "" && Number(age) > 17) {
    document.getElementById("submit-preregister").disabled = true;
    document.getElementById("submit-preregister").style.color = "grey";
    var data = {
      name: name,
      email: email,
      age: age,
      website: website,
    };
    var test = new URLSearchParams(
      Object.keys(data).map((key) => [key, data[key]])
    );

    fetch(
      "https://tqobynyog0.execute-api.us-east-2.amazonaws.com/default/contact-form",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: test.toString(),
      }
    ).then((response) => {
      preregister.clearForm();

      
      alertmessage.removeClass("hide notDisplay").addClass("show display").slideDown(400);
      document.getElementById("submit-preregister").disabled = false;
      document.getElementById("submit-preregister").style.color = "white";
    });

    // .error((error) => {
    //   console.log(error);
    // });
  }

  setTimeout(() => {
    alertmessage.removeClass("show display").addClass("hide notDisplay");
  }, 10000);
}
