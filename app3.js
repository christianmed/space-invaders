'use strict';

// VARIABLES
let tablero;

// CLASSES
class Entity {
  constructor(color, x, y, width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class allyEntity extends Entity {
  constructor(color, x, y, width = 50, height = 30) {
    super(color, x, y, width, height);
  }
}

class alienEntity extends Entity {
  constructor(color, x, y, width, height) {
    super(color, x, y, width, height);
  }
}

class Game {
  constructor(id, width, height, color, context = '2d') {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext(context);
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.backgroundColor = '#292D3E';
    this.entitiesList = [];
    this.aliensCounter = 0;
    this.ally;
  }

  startEntities() {
    this.ally = new allyEntity('#292D3E');
    this.ally.x = this.canvas.width / 2 - this.ally.width / 2;
    this.ally.y = (this.canvas.height - (this.ally.height * 1.5));
    this.entitiesList.push(this.ally);
  }
  
}

// FUNCTIONS
function init() {
  console.log('Corriendo...')
}

// EVENTS

window.addEventListener('load', init);
