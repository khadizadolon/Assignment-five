// Random Bg colors

function changeBgColors() {
  const hexCode = "0123456789ABCDEF";
  let bgColor = "#";
  for (let i = 0; i < 6; i++) {
    bgColor = bgColor + hexCode[Math.floor(Math.random() * 16)];
  }
  return bgColor;
}
document
  .getElementById("multi-color-btn")
  .addEventListener("click", function () {
    const bgColor = changeBgColors();
    document.body.style.backgroundColor = bgColor;
  });

// card 1
document.getElementById("button-1").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-1", "history");
});
// card 2
document.getElementById("button-2").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-2", "history");
});
// card 3
document.getElementById("button-3").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-3", "history");
});
// card 4
document.getElementById("button-4").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-4", "history");
});
// card 5
document.getElementById("button-5").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-5", "history");
});
// card 6
document.getElementById("button-6").addEventListener("click", function () {
  alert("Board updated successfully");
  btnDisable(this);
  newTaskAssignedNumber("task-number");
  navButtonNumber("nav-value");
  history("heading-6", "history");
});

// delete history
document.getElementById("history-btn").addEventListener("click", () => {
  document.getElementById("history").remove("p");
});
