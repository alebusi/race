var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200","black"];
var ind_c = 0;
var animazioni = ["vuoto","orizzontale","verticale","rettangolo"];
var ind_anim = 0;

function verTastoPremuto(e) {
  if (e.keyCode == 32) {
      cambioCampione();
  }	
}

function cambioColore(div) {
  div.style.backgroundColor = colori[ind_c];
}

function cambioCampione() {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
     document.getElementById("campione").style.backgroundColor = colori[ind_c];
}

function cambioAnimazione() {
  ind_anim+=1;
  if (ind_anim > animazioni.length-1) ind_anim=0;
  document.getElementById("campione").className=animazioni[ind_anim];
}
