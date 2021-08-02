var x = setInterval(function () {
  var now = new Date().getTime();
  var deadline = new Date("Aug 04, 2021 18:30:00").getTime();
  var t = deadline - now;

  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor(t / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);
   document.getElementById("timer2").innerHTML =
     ("0" + hours).slice(-2) +
     ":" +
     ("0" + minutes).slice(-2) +
     ":" +
     ("0" + seconds).slice(-2);
  if (t < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "";
    document.getElementById("timer2").innerHTML = "";

    // document.getElementById("topic").innerHTML = "Coming Soon! Stay Tuned!";
  }
}, 1000);
