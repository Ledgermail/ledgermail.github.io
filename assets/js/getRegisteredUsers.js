document.getElementById("download").addEventListener("click", DownloadJsonData);
document.getElementById("logout").addEventListener("click", logOut);
document.getElementById("submitPassword").addEventListener("click", verifyUser);

var xmlHttp = new XMLHttpRequest();

if (localStorage.getItem("key") === "pingalasoftwareAccess") {
   xmlHttp.open(
     "GET",
     "https://pl-reg.herokuapp.com/ledgermail-pre-registrations",
     false
   );
   xmlHttp.send(null);
   users = JSON.parse(xmlHttp.responseText);
   document.getElementById("count").innerHTML = users.total;
   let row = document.getElementById("dataTable");

   for (let i = 0; i < users.total; i++) {
     let tr = document.createElement("tr");

     tr.innerHTML = `
    <td> ${i + 1}</td>
    <td> ${users.data[i].name}</td>
    <td> ${users.data[i].email}</td>
    <td> ${users.data[i].age}</td>
    <td> ${formatDate(new Date(users.data[i].time))}</td>
   `;
     row.appendChild(tr);
   }
   row.innerHTML;
  toggleClasess();
}

function verifyUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "secretUser@pingala" && password === "Pingala@software.#") {
    localStorage.setItem("key", "pingalasoftwareAccess");
    toggleClasess();
  } else {
    document.getElementById("message").innerText =
      " wrong username or password";
  }
}

function logOut() {
  console.log(localStorage.getItem("key"));
  localStorage.removeItem("key");
  toggleClasess();

}

function toggleClasess() {
  var datable = document.getElementById("datatables");
  var datasection = document.getElementById("datasection");
  var logoutButton = document.getElementById("logoutButton");

  var auth = document.getElementById("auth");
  datable.classList.toggle("notDisplay");
  datable.classList.toggle("display");
  logoutButton.classList.toggle("display");
  logoutButton.classList.toggle("notDisplay");
  datasection.classList.toggle("notDisplay");
  datasection.classList.toggle("display");
  auth.classList.toggle("display");
  auth.classList.toggle("notDisplay");
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

function DownloadJsonData() {
  var name = document.getElementById("checkName").checked;
  var email = document.getElementById("checkEmail").checked;
  var age = document.getElementById("checkAge").checked;
  var date = document.getElementById("checkDate").checked;

  var JSONData = users.data,
    FileTitle = "registered_users",
    ShowLabel = true;
  var arrData = typeof JSONData != "object" ? JSON.parse(JSONData) : JSONData;
  var CSV = "";
  if (ShowLabel) {
    var row = "";
    for (var index in arrData[0]) {
      if (
        (index === "name" && !name) ||
        (index === "email" && !email) ||
        (index === "age" && !age) ||
        (index === "time" && !date)
      ) {
        continue;
      }

      row += index + ",";
    }
    row = row.slice(0, -1);
    CSV += row + "\r\n";
  }
  for (var i = 0; i < arrData.length; i++) {
    var row = "";
    for (var index in arrData[i]) {
      if (
        (index === "name" && !name) ||
        (index === "email" && !email) ||
        (index === "age" && !age) ||
        (index === "time" && !date)
      ) {
        continue;
      }
      if (String(index) === "time") {
        row += '"' + formatDate(new Date(arrData[i][index])) + '",';
      } else row += '"' + arrData[i][index] + '",';
    }
    row.slice(0, row.length - 1);
    CSV += row + "\r\n";
  }
  if (CSV == "") {
    alert("Invalid data");
    return;
  }
  var filename = FileTitle;
  var blob = new Blob([CSV], {
    type: "text/csv;charset=utf-8;",
  });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.style = "visibility:hidden";
      link.download = filename + ".csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
