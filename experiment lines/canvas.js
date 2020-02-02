var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var colors = ['#BF6BB1', '#AD96B8', '#602961', '#FBD1EB','#F2F2F2'];

function Rectangle(x,y, w, col)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = canvas.height - this.y;
    this.color = col;
    
    this.dy = randomIntFromRange(-10,10);
    if (this.dy==0)
    this.dy = randomIntFromRange(2,10);
    
    this.draw =  function()
    {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.w,this.h);
        c.stroke();
        c.closePath();
       
    }

    this.update = function()
    {
        if(this.y<1 || this.y > canvas.height - 1 )
         this.dy = - this.dy;

    
    this.y += this.dy;
    this.h -= this.dy;

    this.draw();
    }

}

var rectArray = [];
var num = 20;
for(var i = 0; i< num; i++)
{
    var wid = canvas.width/num;
    var x = wid*i;
    var y = Math.random() * (canvas.height - 50);
    
    rectArray.push(new Rectangle(x,y,wid,randomColor(colors)));
}


function animate()
{
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(30, 8, 56, 0.05)";
    c.fillRect(0,0,innerWidth,innerHeight);
    for(var i=0; i<rectArray.length; i++)
    {rectArray[i].update();}
   
}


animate();



function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }