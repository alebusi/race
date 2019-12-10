var colori = ["orange","#ff3300","#00FFFF","#FF00FF","#00C200","white"];
var ind_c = 0;
/*var success = new Audio('success.wav');*/

function cambioColore() {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
     this.style.backgroundColor = colori[ind_c];
}
