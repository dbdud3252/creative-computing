var i;
function setup() {
  createCanvas(windowWidth,  windowHeight);
}
function draw() {
  background(200);
  var c = color(0);
  
  for(i=0; i<=windowHeight; i++){
   drawcircle(i);
  }
} 

function drawcircle(i){
  var xposition = random(0,windowWitdh);
  var size = random(10,20);
  ellipse(xposition, i, size, size);
}
