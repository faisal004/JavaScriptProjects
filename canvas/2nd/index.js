const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];



addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

function Ball(x, y, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  
  this.update = function () {
    if (this.y + this.radius > canvas.height ) {
      this.dy = -this.dy * 0.99;
    }else{
      this.dy+=1
    }
    this.y += this.dy;
  };

  
  this.draw();
}

let ball;

function init() {
  ball = new Ball(canvas.width / 2, canvas.height / 2, 7, 30, "red");
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  ball.update();
  ball.draw(); 
}

init();
animate();
