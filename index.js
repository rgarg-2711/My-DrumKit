var drums=document.querySelectorAll(".drum");
var n=drums.length;
for(var i=0;i<n;i++)
{
  drums[i].addEventListener("click",function(){
    var val1=this.innerHTML;
    perform(val1);
    showninja(val1);
  });
}
document.addEventListener("keydown",function(e){
  var val2=e.key;
  perform(val2);
  showninja(val2);
});

function perform(rash)
{
  switch (rash) {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
     tom1.play();
      break;
      case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
        break;
        case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
          break;
          case "d":
          var tom4=new Audio("sounds/tom-4.mp3");
           tom4.play();
            break;
            case "j":
            var crash=new Audio("sounds/crash.mp3");
             crash.play();
              break;
              case "k":
              var snare=new Audio("sounds/snare.mp3");
               snare.play();
                break;
                case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                 kick.play();
                  break;

    default:console.log("get clicked");

  }
}
function showninja(rash)
{
  var nowactive=document.querySelector("."+rash);
  nowactive.classList.add("pressed");
  setTimeout(function(){
    nowactive.classList.remove("pressed");
  },100);
}
