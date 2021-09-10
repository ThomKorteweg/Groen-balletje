var x, y,vx,vy;

function setup() {
	createCanvas(400, 400);
  x = 250;
  y = 50;
  a = 190;
  b = 40;
  c = 260;
  d = 50;
  e = 260;
  f = 50;
  vx = 7;
  vy = 5;
  va = 3;
  vb = 4;
  vc = 6;
  vd = 12;
  ve = 3;
  vf = 5;
}

function draw() {
	background(400,100,0);  
  fill(0,0,100);
  ellipse(x,y,50,50);
  fill(0,200,100);
  ellipse(a,b,30,30);
  fill(0,40,10)
  ellipse(c,d,40,40);
  fill(250,40,12)
  ellipse(e,f,80,80)

  a=a + va;
  b=b + vb;
  x=x + vx;
  y=y + vy;
  c=c + vc;
  d=d + vd;
  e=e + ve
  f=f + vf

  if(x<=0 || x> 400){
    vx = vx * -1;
  }
  if(y<=0 || y> 400){
    vy = vy * -1;
  }
  if(a<=0 || a> 400){
    va = va * -1;
  }
  if(b<=0 || b> 400){
    vb = vb * -1;
    }
  if(c<=0 || c> 400){
    vc = vc * -1;
  }
if(d<=0 || d> 400){
    vd = vd * -1;
  }
if(e<=0 || e> 400){
    ve = vx * -1;
  }
if(f<=0 || f> 400){
    vf = vf * -1;
 }
}
