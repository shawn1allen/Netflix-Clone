/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropList(id) {
  console.log(id);
  document.getElementById(id).classList.toggle("show");
}

function toggleBottom(el) {
  const bottomDiv = el.parentNode.querySelector(".bottom");
  const icon = el.querySelector(".symbol");
  if(bottomDiv.classList.contains("hide")) {
    bottomDiv.classList.remove("hide");
    bottomDiv.classList.add("show");
    icon.classList.add("rotate");
  } else {
    bottomDiv.classList.remove("show");
    bottomDiv.classList.add("hide");
    icon.classList.remove("rotate");
  }
}