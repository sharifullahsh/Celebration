var celebCanvas = document.getElementById("confetti");
celebCanvas.hidden=true;
function StartCelebration()
{
  celebCanvas.hidden=false;
  var messgBox= document.getElementsByClassName("welcomePageBox")[0];
  messgBox.hidden = true;
  //Add css class after celebration
  var element, name, arr;
  element = document.body;
  name = "celebBody";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
//Stay on celebration for specific time
  setTimeout(function(){ 
    //window.location.replace("https://www.google.com/")
  }, 3000);
  
}
