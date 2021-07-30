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
      if (
        document.getElementById(feature + "Icon").classList.contains("rotate")
      ) {
        document.getElementById(feature + "Icon").classList.add("revert");
        document.getElementById(feature + "Icon").classList.remove("rotate");
      } else {
        document.getElementById(feature + "Icon").classList.add("rotate");
        document.getElementById(feature + "Icon").classList.remove("revert");
      }

      continue;
    } else {
      document.getElementById(id[i]).classList.remove("show");
      if (
        document.getElementById(id[i] + "Icon").classList.contains("rotate")
      ) {
        document.getElementById(id[i] + "Icon").classList.remove("rotate");
        document.getElementById(id[i] + "Icon").classList.add("revert");
      }
    }
  }
}
