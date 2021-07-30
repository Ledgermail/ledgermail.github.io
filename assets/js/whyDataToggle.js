// document
//   .getElementById("securityHeader")
//   .addEventListener("click", updateSecurity);

function updateSecurity(feature) {
  console.log(
    "🚀 ~ file: whyDataToggle.js ~ line 7 ~ updateSecurity ~ feature",
    feature
  );
  var id = ["security", "privacy", "encryption", "centralized"];
  for (var i = 0; i < id.length; i++) {
      if (id[i] === feature) {
         document.getElementById(feature+"Icon").classList.toggle("rotate");
      continue;
    } else {
          document.getElementById(id[i]).classList.remove("show");
         document.getElementById(id[i] + "Icon").classList.remove("rotate");
          
    }
  }
}
