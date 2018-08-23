var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var success = new Audio('success.wav');
var decrementa = new Audio('togli.mp3');

function myfunc(id,i,ind) {
  tess[ind]+=i;
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  /*
  if (i = 1) {
    success.play();
    }
  else {
    decrementa.play();
    {
      */
  }
