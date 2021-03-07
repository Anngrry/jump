const astronaut = document.getElementById("astronaut");
const mountain = document.getElementById("mountain");

document.addEventListener("click", function(event) {
   jump()
});

function jump () {
   if(astronaut.classList !="jump") {
      astronaut.classList.add("jump")
   }
   setTimeout( function() {
      astronaut.classList.remove("jump")
   }, 300)
}

let isAlive = setInterval(function() {
   let astronautTop = parseInt(window.getComputedStyle(astronaut).getPropertyValue("top"))
   let mountainLeft = parseInt(window.getComputedStyle(mountain).getPropertyValue("left"))

   if(mountainLeft < 50 && mountainLeft > 0 && astronautTop >= 140) {
      alert("GAME OVER!!")
   }
}, 10)
