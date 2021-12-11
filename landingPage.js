const audio = document.getElementById("backgroundMusic");

var hasInit = false;
function playMusic() {

   if(!hasInit) {
       hasInit = true;
       audio.play();
       }
   }

   const audioQuery = document.querySelector("audio");
   window.addEventListener("DOMContentLoaded", event => {
       
       audioQuery.volume = 1;
       audioQuery.play();
   });

   function audioController() {
      if (!audio.paused) {
           audio.pause();
       }
      else {
          audio.play();
      }
   }

   imageTracker = "i"
   function imageChange() {
       var image = document.getElementById("audioController");
       

       if (imageTracker == "i"){
           image.src = "resources/audioControllerOff.png"
           imageTracker = "I"
       }
       else {
           image.src = "resources/audioControllerOn.png"
           imageTracker = "i"
       }
   }

   /*
   var x = 0;
   $("#backgroundMusic").bind("ended", function(){
   x = x + 1;
   audio.src = x%2 + ".mp3";
   audio.load();
   audio.play();       
   }); 
   */

   const menuBtn = document.querySelector('.menuHamburger')
   let menuOpen = false;
   menuBtn.addEventListener('click', () => {
       if(!menuOpen) {
           menuBtn.classList.add('open');
           menuOpen = true;
       } else {
           menuBtn.classList.remove('open');
           menuOpen = false;
       }
   });