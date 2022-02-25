var box1;
var box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100,200,20,20,2)
  box2 = new Box(300,100,30,10,1)
}

function draw() 
{
  background(220);
box1.show()
box1.move()
box2.show()
}

