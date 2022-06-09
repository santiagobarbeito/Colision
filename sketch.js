let diametro=30;
let t=0;
let delta_t=0.2;

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  background(0);  
}

function draw() {
  fill(255,125,125,100);
  stroke(0, 0, 0, 255);
  ellipse(t%(width+diametro), (t*t)%(height+diametro),diametro, diametro);  
  fill(125,125,250,100);
  stroke(0, 0, 0, 255);
  ellipse(width-t%(width+diametro), height-(t*t)%(height+diametro),diametro, diametro);  
  t=t+delta_t;
}