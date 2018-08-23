var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var success = new Audio('success.wav');

function myfunc(id,i,ind) {
  tess[ind]+=i;
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  success.play();
  }
