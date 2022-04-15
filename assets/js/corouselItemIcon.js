function updateProblem(id) {
  let button = id.split(/(?=[A-Z])/);
  let expandId = ".expand" + button[1];
  let collapseId = ".collapse" + button[1];
  let expand = document.querySelector(expandId);
  let collapse = document.querySelector(collapseId);
  if (document.getElementById(id).getAttribute("aria-expanded") !== "true") {
    collapse.style.display = "none";
    expand.style.display = "block";
  } else {
    collapse.style.display = "block";
    expand.style.display = "none";
  }
}
