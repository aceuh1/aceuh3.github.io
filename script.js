function setup() {
  // Create canvas 800x800 pixels wide/high
  createCanvas(800, 800);
}

function draw() {
  background(0);

  // Outline
  noFill();
  stroke("#F2F4E7");
  strokeWeight(14); 
  square(100, 100, 600); 

  // Inside triangles 

  // Top left corner
  noStroke();
  fill("#BCC2C7");
  triangle(110, 110, 110, 320, 320, 110); 
  
  // Bottom left corner left
  fill("#D2A200");
  triangle(110, 460, 110, 690, 232, 570); 

  // Bottom left corner right
  fill("#E8E4DB");
  triangle(110, 690, 232, 570, 374, 690); 

  // Middle bottom triangle 
  fill("#C4C9D1");
  triangle(370, 460, 370, 690, 600, 690); 

  // Right corner triangle (not red) 
  fill("#807E7F");
  triangle(690, 110, 550, 300, 430, 110);

  // Red triangle on right side
  fill("#AD2609");
  quad(690, 690, 690, 110, 370, 460, 600, 690); 

  // Light-colored quad near the top
  fill("#EAE4DA"); 
  quad(370, 110, 430, 110, 550, 264, 370, 460); 
}
