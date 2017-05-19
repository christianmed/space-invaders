'use strict';

// VARIABLES
let tablero;

// CLASES
class Entidad {
  constructor(color, x, y, ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  dibujar(contexto) {
    contexto.fillStyle = this.color;
    contexto.fillRect(this.x, this.y, this.ancho, this.alto);
  }
}

class EntidadAlien extends Entidad {
  constructor(color, x, y, ancho = 50, alto = 30) {
    super(color, x, y, ancho, alto);
  }
}

class EntidadAliado extends Entidad {
  constructor(color, x, y, ancho = 50, alto = 30) {
    super(color, x, y, ancho, alto);
  }
}

class Tablero {
  constructor(id, width, height, color, ctx = '2d') {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext(ctx);
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.backgroundColor = color;
    this.listaEntidades = [];
    this.contadorAliens = 0;
    this.aliado;
  }

  iniciarEntidades() {
    this.aliado = new EntidadAliado('#292d3e');
    this.aliado.x = ((this.canvas.width / 2) - (this.aliado.ancho / 2));
    this.aliado.y = (this.canvas.height - (this.aliado.alto * 1.5));
    this.listaEntidades.push(this.aliado);
    
    this.contadorAliens++;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        let alien = new EntidadAlien('#00000045');
        alien.x = (((this.canvas.width / 6) - alien.ancho) / 2) + j * (alien.ancho + (((this.canvas.width / 6) - alien.ancho) / 2) * 2);
        alien.y = i * 40 + 10;
        console.log(alien.x);
        this.listaEntidades.push(alien);
        this.contadorAliens++;
      }
    }
  }

  controlLoop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    let n = this.listaEntidades.length;
    for (let i = 0; i < n; i++) {
      this.listaEntidades[i].dibujar(this.ctx);
    }
  }
}

function init() {
  tablero = new Tablero('canvas', 480, 300, 'teal');
  tablero.iniciarEntidades();
  tablero.controlLoop();
}

window.addEventListener('load', init);

// let naveAliado1 = new EntidadAliado('#292d3e', 180, 250);
// let naveAlien1 = new EntidadAlien('#00000045', 10, 10);

// naveAliado1.dibujar(tablero.ctx);
// naveAlien1.dibujar(tablero.ctx);
