document.getElementById("download").addEventListener("click", DownloadJsonData);

document.getElementById("submitPassword").addEventListener("click", verifyUser);

var xmlHttp = new XMLHttpRequest();

function verifyUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "secretUser@pingala" && password === "Pingala@software.#") {
    var datable = document.getElementById("datatables");
    var datasection = document.getElementById("datasection");
    var auth = document.getElementById("auth");
    datable.classList.toggle("notDisplay");
    datable.classList.toggle("display");
    datasection.classList.toggle("notDisplay");
    datasection.classList.toggle("display");
    auth.classList.toggle("display");
    auth.classList.toggle("notDisplay");
  } else {
    document.getElementById("message").innerText =
      " wrong username or password";
  }
}
xmlHttp.open(
  "GET",
  "https://pingala-test-server.herokuapp.com/ledgermail-pre-registrations",
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

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

function DownloadJsonData() {
  var JSONData = users.data,
    FileTitle = "registered_users",
    ShowLabel = true;
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != "object" ? JSON.parse(JSONData) : JSONData;
  var CSV = "";
  //This condition will generate the Label/Header
  if (ShowLabel) {
    var row = "";
    //This loop will extract the label from 1st index of on array
    for (var index in arrData[0]) {
      //Now convert each value to string and comma-seprated
      row += index + ",";
    }
    row = row.slice(0, -1);
    //append Label row with line break
    CSV += row + "\r\n";
  }
  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
    var row = "";
    //2nd loop will extract each column and convert it in string comma-seprated
    for (var index in arrData[i]) {
      if (String(index) === "time") {
        row += '"' + formatDate(new Date(arrData[i][index])) + '",';
      } else row += '"' + arrData[i][index] + '",';
    }
    row.slice(0, row.length - 1);
    //add a line break after each row
    CSV += row + "\r\n";
  }
  if (CSV == "") {
    alert("Invalid data");
    return;
  }
  //Generate a file name
  var filename = FileTitle;
  var blob = new Blob([CSV], {
    type: "text/csv;charset=utf-8;",
  });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
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
