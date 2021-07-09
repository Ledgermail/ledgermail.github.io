function sendEmail() {
  //
  fetch(
    "https://7q4us37nyd.execute-api.us-east-2.amazonaws.com/default/preregister-form",
    {
      method: "POST",
      body: {
        name: "naganath",
        email: "naganath@pingalasoftware.com",
      }, // The data
      headers: {
        "Content-type": "application/json",
        // The type of data you're sending
      },
    }
  ).then(function (response) {
    alert(response);
  });
}
