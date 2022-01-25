`use strict`

var deferredPrompt;
var count = 0;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () {
    });
}

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  deferredPrompt = event;
  return false;
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const close = document.querySelector(".close-button");
const syllabus = document.querySelector(".syllabus");


close.addEventListener('click', () => {
  syllabus.style.display = "none";
})

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });


  if (deferredPrompt) {
    if (count == 0 || count % 2 == 0) {
      deferredPrompt.prompt();
    }
  }
  count++;

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})