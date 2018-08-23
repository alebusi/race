var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function myfunc(id,i,ind) {
  tess[ind]+=i;
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  }
