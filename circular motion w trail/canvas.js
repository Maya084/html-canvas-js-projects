var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

var colors = ['#855CFF', '#5457E8', '#6894FF', '#54A5E8', '5CE0FF'];

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

addEventListener("click", function () {
  init();

})

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  var random = randomIntFromRange(55, 125);

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  this.update = function () {
    this.x = x + Math.cos(this.radians) * random;
    this.y = y + Math.sin(this.radians) * random;
    this.radians += this.velocity;
    this.draw();
  }
}

let particles;

function init() {
  particles = [];

  for (var i = 0; i < 50; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, 5, randomColor(colors)));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(255,255,255,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
  });
}

init();
animate();

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}