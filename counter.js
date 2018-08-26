var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*var success = new Audio('success.wav');*/

function myfunc(id,i,ind) {
  tess[ind]+=i;
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  if (i == 1) {
    if ( id == "pecora" ) {
       var aumenta = new Audio('pecora.mp3');
       }
    else if ( id == "cinghiale" ) {
       var aumenta = new Audio('cinghiale.mp3');
       }
    else if ( id == "bestiame" ) {
       var aumenta = new Audio('mucca.mp3');
       }
    else {
       var aumenta = new Audio('success.wav');
       }
    aumenta.play();
    }
  else {
    var decrementa = new Audio('togli.mp3');
    decrementa.play();
    }
  }
function myfunc2(div) {
  var className = div.getAttribute("class");
  if(className=="spazio") {
    div.className = "spazio_legno";
  }
  else{
    div.className = "spazio";
  }
}
