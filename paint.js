var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200","black"];
var ind_c = 0;

function cambioColore(div) {
  div.style.backgroundColor = colori[ind_c];
}

function cambioCampione(div) {
  ind_c+=1;
  if (ind_c > colori.length-1) ind_c=0;
     div.style.backgroundColor = colori[ind_c];
}
