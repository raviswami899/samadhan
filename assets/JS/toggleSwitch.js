const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("light-mode");
});
