//The setup function only happens once
var rec= 6
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	background("#006655")
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  fill("#add8e6");
  stroke("ffff00");
  strokeWeight(5);
  ellipse(mouseX,mouseY,20,20); 
  fill("#ff0000"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height,),20,20); // center of canvas, 20px dia
    fill("fa8072")
    rect(random(width),random(height),rec,rec);
rec = rec+1
}
