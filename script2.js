let hovered = false;
let animationPaused = false; // Toggle animation state
let savedColorShift = 0; // Stores color state when paused

function setup() {

  createCanvas(800, 800);
}

function draw() {
  background(0);

  // Outline
  noFill();
  stroke("#E8E2CF");
  strokeWeight(14); 
  square(100, 100, 600); 

  // Check if the mouse is hovering over any shape
  hovered = checkHover();

  // Animation variables (stop movement if hovered or paused)
  let offsetX = hovered ? 0 : (animationPaused ? 0 : sin(frameCount * 0.1) * 10); 
  let offsetY = hovered ? 0 : (animationPaused ? 0 : sin(frameCount * 0.1 + PI / 2) * 10);

  // If paused, keep the last color state; otherwise, update
  let colorShift = animationPaused ? savedColorShift : (sin(frameCount * 0.05) + 1) / 2;

   // Inside triangles

  // Top left corner
  noStroke();
  fill(rgbLerp("#BCC2C7", "#D2A200", colorShift));
  triangle(
    105 , 105 ,
    105 - offsetX, 260 - offsetY,
    260 + offsetX, 105 - offsetY
  );

  // Bottom left corner left
  fill(rgbLerp("#D2A200", "#AD2609", colorShift));
  triangle(
    105 , 480,
    105 - offsetX, 690 - offsetY,
    230 - offsetX, 570 - offsetY
  );

  // Bottom right corner left
  fill(rgbLerp("#E8E4DB", "#D2A200", colorShift));
  triangle(
    105 + offsetX, 690 + offsetY,
    230 + offsetX, 570 - offsetY,
    370, 690 
  );

  // Middle bottom triangle
  fill(rgbLerp("#C4C9D1", "#BCC2C7", colorShift));
  triangle(
    370 + offsetX, 460 - offsetY,
    370 - offsetY, 690 + offsetY,
    600 + offsetX, 690 - offsetY
  );

  // Right corner triangle (not red)
  fill(rgbLerp("#807E7F","#EAE4DA", colorShift));
  triangle(
    690 + offsetX, 105 + offsetY,
    550 - offsetX, 300 + offsetY,
    430 , 105 
  );

  // Red triangle on right side
  fill(rgbLerp("#AD2609", "#0A0A0A", colorShift));
  quad(
    690 , 690 ,
    690 , 105 ,
    370 + offsetX, 460 + offsetY,
    600 - offsetX, 690 - offsetY
  );

  // Light-colored quad near the top
  fill(rgbLerp("#EAE4DA", "#AD2609", colorShift));
  quad(
    370 , 105 ,
    430 + offsetX, 105 - offsetY,
    550 - offsetX, 264 - offsetY,
    370 + offsetX, 460 - offsetY
  );
}


// Helper function to interpolate RGB colors smoothly
function rgbLerp(color1, color2, t) {
  let c1 = color(color1);
  let c2 = color(color2);
  
  let r = lerp(red(c1), red(c2), t);
  let g = lerp(green(c1), green(c2), t);
  let b = lerp(blue(c1), blue(c2), t);
  
  return color(r, g, b);
}

// Function to check if the mouse is over any of the shapes
function checkHover() {
  return (
    mouseX > 100 && mouseX < 700 && mouseY > 100 && mouseY < 700 
  );
}

// Mouse click function to toggle animation and freeze colors
function mousePressed() {
  animationPaused = !animationPaused;
  
  // Save current color state when pausing
  if (animationPaused) {
    savedColorShift = (sin(frameCount * 0.05) + 1) / 2;
  }
}
