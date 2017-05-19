// VARIABLES
let temporizador;
let juego;


// CLASES
class Entidad {
  constructor(anchoIni, altoIni, colorIni, xIni, yIni) {
    this.ancho = anchoIni;
    this.alto = altoIni;
    this.color = colorIni;
    this.x = xIni;
    this.y = yIni;
  }

  dibujar(contexto) {
    contexto.fillStyle = this.color;
    contexto.fillRect = this.x, this.y, this.ancho, this.alto;
  }
}

class EntidadAlien extends Entidad{
  constructor(xIni, yIni, anchoIni = 40, altoIni = 25, colorIni = 'blue') {
    super(xIni, yIni, anchoIni, altoIni, colorIni);
  }
}

class EntidadNave extends Entidad{
  constructor(xIni, yIni, anchoIni = 40, altoIni = 25, colorIni = 'green') {
    super(xIni, yIni, anchoIni, altoIni, colorIni);
  }
}

class Juego {
  constructor(idCanvas) {
    this.canvas = document.getElementById(idCanvas);
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.canvas.style.backgroundColor = '#292d3e';
    this.contexto = this.canvas.getContext('2d');
    this.listaEntidades = [];
    this.nave;
    this.contadorAliens = 0;
  }

  iniciarEntidades() {
    this.nave = new EntidadNave(370, 550);
    this.listaEntidades.push(this.nave);

    this.contadorAliens = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 12; j++) {
        let alien = new EntidadAlien(100 + j * 50, 50 + i * 30);
        this.listaEntidades.push(alien);
        this.contadorAliens = 0;
      }
    }
  }

  controlLoop() {
    this.contexto.clearRect(0, 0, this.canvas.width, this.canvas.height)

    let n = this.listaEntidades.length;
    for (let i = 0; i < n; i++) {
      this.listaEntidades[i].dibujar(this.contexto);
    }
  }
}

// FUNCIONES
function init() {
  juego = new Juego('gameContainer');
  let nave2 = new EntidadNave(375, 300);
  let nave3 = new EntidadAlien(375, 300);
  console.log(nave2);
  console.log(nave3);
  nave2.dibujar(juego.contexto);
  nave3.dibujar(juego.contexto);

  // temporizador = setInterval('juego.controlLoop();', 25);
}


// EVENTOS
window.addEventListener('load', init);
