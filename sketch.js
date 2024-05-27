function setup() {
  createCanvas(300, 300);
  background("black")
}

function draw() {
  stroke("brown");
  fill("black");
  

if(mouseIsPressed){
  rect(mouseX, mouseY, 10, 10);
}
}