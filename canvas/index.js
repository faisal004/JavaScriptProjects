var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = getRandomColor(); 

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;// 
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
  };

  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

// Just bouncing cicles
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// var circleArray = [];

// for (var i = 0; i < 100; i++) {
//   var radius = Math.floor(Math.random() * 25) + 1;
//   var x = Math.random() * (canvas.width - radius * 2) + radius;
//   var y = Math.random() * (canvas.height - radius * 2) + radius;
//   var dx = (Math.random() - 0.5);
//   var dy = (Math.random() - 0.5);
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);

//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }

// animate();



// Todo: Size increasing on hover
