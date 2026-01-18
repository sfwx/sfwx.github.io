function fwxSidebarButton() {
  if (document.getElementById("fwxSidebarGrid").style.opacity === "1") {
    document.getElementById("fwxSidebarGrid").style.opacity = "0";
  }
  else {
    document.getElementById("fwxSidebarGrid").style.opacity = "1";
  }
  document.getElementById("fwxSidebar").classList.toggle("fwxClose");
  document.getElementById("fwxSidebar").classList.toggle("fwxOpen");
  document.getElementById("fwxSidebarButton").classList.toggle("fwxClose");
  document.getElementById("fwxSidebarButton").classList.toggle("fwxOpen");
}
function fwxClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  document.getElementById("fwxClock").textContent = hours + ':' + minutes;
}
function fwxBubble() {
  const bubble = document.createElement("div");
  bubble.className = "fwxBubble";
  bubble.style.animationDuration = (Math.random() * 8.5 + 7.5) + 's';
  bubble.style.top = (Math.random() * 100) + '%';
  bubble.style.left = (Math.random() * 100) + '%';
  const background = document.querySelector("div.fwxBackground");
  background.insertBefore(bubble, background.firstChild);
}
function fwxCoralFilter(filter) {
  document.querySelectorAll("div.fwxBackground img").forEach(function(coral) {
    coral.style.filter = filter;
  });
}
document.addEventListener("DOMContentLoaded", function() {
  var cursor = document.getElementById("fwxMouse");
  var pet = document.getElementById("fwxPet");
  document.addEventListener("mouseenter", function() {
    cursor.style.display = "block";
  });
  document.addEventListener("mouseleave", function() {
    cursor.style.display = "none";
    pet.removeAttribute("style");
  });
  document.addEventListener("mousemove", function(event) {
    cursor.style.left = (event.pageX - 7.5) + 'px';
    cursor.style.top = (event.pageY - 7.5) + 'px';
    pet.style.transform = 'rotate(' + (event.pageX + Math.floor(Math.random() * 360)) + 'deg)';
    pet.style.left = (event.pageX + Math.floor(Math.random() * (-50 - 50 + 1)) + 15) + 'px';
    pet.style.top = (event.pageY + Math.floor(Math.random() * (-50 - 50 + 1)) + 15) + 'px';
  });
  setInterval(fwxClock, 1000);
  for (let i = 0; i < 20; i++) {
    fwxBubble();
  }
  // fwxSidebarButton();
});