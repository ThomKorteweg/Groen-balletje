var x, y;

function setup() {
	createCanvas(400, 400);

  x = 0;
  y = 50;
  vx = 5
  vy = 5
}

function draw() {
	background(400,100,0);
  
  ellipse(x,y,50,50);
  fill(0,0,100)
  x=x + vx;
  y=y + vy;
  if(x<=0 || x> 400){
    vx = vx * -1;
  }
    if(y<=0 || y> 400){
    vy = vy * -1;
  }
 
 

}

