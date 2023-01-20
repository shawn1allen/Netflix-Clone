/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropList(id) {
  console.log(id);
  document.getElementById(id).classList.toggle("show");
}

//Q&A opens the answer when the question is clicked
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

window.onload = function() {
  // Get all video elements on the page
  var videos = document.getElementsByTagName("video");
  var videoArray = Array.from(videos);
  
  // Play all videos in the array
  videoArray.forEach(function(video) {
    video.play();
  });
}