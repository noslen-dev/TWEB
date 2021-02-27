var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
     /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/*Script para meter o menu com o tamaho correto */
document.getElementById("who_are_we").addEventListener('click',show);
const mediaQuery = window.matchMedia('(max-width:800px)')
 function show() {
  if(mediaQuery.matches){
  var y = document.getElementById("drop_menu");
  if (y.style.display === "none") {
   y.style.display = "block";
   document.getElementById("nav_hei").style.height = "750px";
  } else {
    y.style.display = "none";
    document.getElementById("nav_hei").style.height = "525px";
   }
 }
} 

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

