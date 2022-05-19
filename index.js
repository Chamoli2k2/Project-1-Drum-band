var length = document.querySelectorAll(".drum").length;

//  For detecting click we made 
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){ // we didn't add '()' to the handclicker funtion because if we did it .. the function will directly called ..
  var word = this.innerHTML;
  makesound(word);
  Animatebutton(word);
});
}

// For detecting button we pressed in document 
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  Animatebutton(event.key);
});

// function for making sound
function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Jai shree Ram");
      break;
  }
}

// for animating the button

function Animatebutton(key){
    // Adding class effect to the button
    document.querySelector("."+key).classList.add("pressed");

    // Removing class effect after 1 sec
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
