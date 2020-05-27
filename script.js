var colori = ["white","orange","#ff3300","#00FFFF","#FF00FF","#00C200","transparent"];
var ind_c = 0;
var animazioni = ["vuoto","orizzontale","verticale","rettangolo"];
var ind_anim = 0;

x = 200;
y = 200;
speed = 10;
max_speed = 10;
accelero=false;
angle = 0;
mod = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
car = new Image();
car.src = "ferrari2.png";

window.addEventListener("keydown", keypress_handler, false);
window.addEventListener("keyup", keyup_handler, false);

var moveInterval = setInterval(function () {
    draw();
}, 40);

/*
function verTastoPremuto(event) {
  if (event.keyCode == 32) {
      cambioCampione();
  }	
}
*/

function draw() {
    context = canvas.getContext("2d");
    context.clearRect(0, 0, 1200, 800);
    /*
    context.fillStyle = "rgb(200, 100, 220)";
    context.fillRect(50, 50, 100, 100);
    */
    
    if (accelero === false && speed > 0 && speed < max_speed) {
  	  speed-=1;
    }
    
    x += (speed * mod) * Math.cos(Math.PI / 180 * angle);
    y += (speed * mod) * Math.sin(Math.PI / 180 * angle);

    context.save();
    context.translate(x, y);
    context.rotate(Math.PI / 180 * angle);
    context.drawImage(car, -(car.width / 2), -(car.height / 2));
    context.restore();
}

function keyup_handler(event) {
  if (event.keyCode == 83 || event.keyCode == 87) {
    //mod = 0;
    speed-=1;
    accelero=false;
  }
}

function keypress_handler(event) {
  if (event.keyCode == 87) {
    mod = 1;
    accelero=true;
    if (speed < max_speed) {
  	  speed+=1;
    }
  }
  if (event.keyCode == 83) {
    mod = -1;
    accelero=true;
    if (speed < max_speed) {
  	  speed+=1;
    }
  }
  if (event.keyCode == 190) {
    angle -= 6;
  }
  if (event.keyCode == 189) {
    angle += 6;
  }
  if (event.keyCode == 32) {
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
