var x, y;

function setup() {
	createCanvas(500, 400);

  x = 0;
  y = 200;
  velocity = 5
}

function draw() {
	background(0,100,0);
  
  ellipse(x,y,50,50);
  fill(0,0,100)
  x=x+velocity;

  if(x<=0 || x > 500){
    velocity = velocity * -1;
  }
}

