var xmlHttp = new XMLHttpRequest();
document.getElementById("refresh").addEventListener("click", getData);

async function getData() {
  xmlHttp.open("GET", "http://pl-reg.herokuapp.com/user-count", false);
  xmlHttp.send(null);

  //   data = await fetch("http://pl-reg.herokuapp.com/user-count", {
  //     method: "GET",

  //     mode: "no-cors",
  //   });
  //   console.log(
  //     "🚀 ~ file: dashboard.js ~ line 6 ~ getData ~ xmlHttp.responseText",
  //     data
  //   );
  // count = await JSON.parse(xmlHttp.responseText);
  let x = 0;
  console.log("test", (x = await JSON.parse(xmlHttp.responseText)));
  document.getElementById("totalSignups").innerHTML = x.totalRegistrations;
}

getData();
