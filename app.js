`use strict`

var deferredPrompt;
var count =0;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () {
    });
}

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  deferredPrompt = event;
  return false;
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  
    if (deferredPrompt) {
      if(count == 0 || count % 2 == 0){
      deferredPrompt.prompt();
    }
    }
    count++;
  


  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
