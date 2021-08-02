$("#submit-preregister").on("touchstart click", sendEmail);
function sendEmail(e) {
  // e.preventDefault();
  var preregister = $("#preregister-form");
  var alertmessage = preregister.find(".message");
  var errormessage = preregister.find(".errorMessage");
  alertmessage.removeClass("show display").addClass("hide notDisplay");
  errormessage.removeClass("show display").addClass("hide notDisplay");
  var name = document.getElementById("preregister_name").value;
  email = document.getElementById("preregister_email").value;
  age = document.getElementById("preregister_age").value;
  website = document.getElementById("preregister_website").value;

  if (name != "" && ValidateEmail(email) && Number(age) > 17) {
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

    fetch("https://pl-reg.herokuapp.com/", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        preregister.clearForm();
        alertmessage
          .removeClass("hide notDisplay")
          .addClass("show display")
          .slideDown(400);
        document.getElementById("submit-preregister").disabled = false;
        document.getElementById("submit-preregister").style.color = "white";
      } else if (response.status === 502) {
        errormessage
          .removeClass("hide notDisplay")
          .addClass("show display")
          .slideDown(400);
        document.getElementById("submit-preregister").disabled = false;
        document.getElementById("submit-preregister").style.color = "white";
      }
    });
    // .error((error) => {
    //   console.log(error);
    // });
  }

  setTimeout(() => {
    alertmessage.removeClass("show display").addClass("hide notDisplay");
    errormessage.removeClass("show display").addClass("hide notDisplay");
  }, 10000);
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("Enter valid email address");
  return false;
}
