var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

function Circle(x,y, rad, dx, dy)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.a = Math.random()*256;
    this.b = Math.random()*256;
    this.c = Math.random()*256;

    this.radius = rad;

    this.draw =  function()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, true);
        c.strokeStyle = "white";
        c.stroke();
        c.fillStyle = "rgba("+this.a+", "+this.b+", "+this.c+")";
        c.fill();
        
    }

    this.update = function()
    {
        if(this.x > innerWidth-this.radius || this.x < this.radius)
            this.dx = -this.dx;

        if(this.y > innerHeight - this.radius || this.y < this.radius)
            this.dy = -this.dy; 

    this.x+=this.dx;
    this.y+=this.dy;

    this.draw();
    }

}

var circleArray = [];

for(var i = 0; i< 50; i++)
{
    var rad = 35;
    var x = Math.random() * (innerWidth - rad*2) + rad;
    var y = Math.random() * (innerHeight - rad*2) + rad;
    var dx = (Math.random()-0.5)*20;
    var dy = (Math.random()-0.5)*20;
    circleArray.push(new Circle(x,y,rad,dx,dy));
}


var circle = new Circle(100, 200, 45, 5, 5);

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 20;
var dx = (Math.random() -0.5) * 20;
var radius = 100

animate();


function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i = 0; i< circleArray.length; i++)
    {
        circleArray[i].update();
    }
    
    


}

