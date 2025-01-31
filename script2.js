let hovered = false;
let animationPaused = false; // Toggle animation state
let savedColorShift = 0; // Stores color state when paused

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // Outline
  noFill();
  stroke("#E8E2CF");
  strokeWeight(7);
  square(50, 50, 300);

  // Check if the mouse is hovering over any shape
  hovered = checkHover();

  // Animation variables (stop movement if hovered or paused)
  let offsetX = hovered ? 0 : (animationPaused ? 0 : sin(frameCount * 0.1) * 5);
  let offsetY = hovered ? 0 : (animationPaused ? 0 : sin(frameCount * 0.1 + PI / 2) * 5);

  // If paused, keep the last color state; otherwise, update
  let colorShift = animationPaused ? savedColorShift : (sin(frameCount * 0.05) + 1) / 2;

  // Inside triangles

  // Top left corner
  noStroke();
  fill(rgbLerp("#BCC2C7", "#D2A200", colorShift));
  triangle(
    55 - offsetX, 55 - offsetY,
    55 - offsetX, 160 - offsetY,
    160 + offsetX, 55 - offsetY
  );

  // Bottom left corner
  fill(rgbLerp("#D2A200", "#AD2609", colorShift));
  triangle(
    55 - offsetX, 240 - offsetY,
    55 - offsetX, 345 - offsetY,
    115 - offsetX, 290 - offsetY
  );

  // Bottom right corner
  fill(rgbLerp("#E8E4DB", "#D2A200", colorShift));
  triangle(
    55 + offsetX, 345 + offsetY,
    115 + offsetX, 290 - offsetY,
    185 - offsetX, 345 - offsetY
  );

  // Middle bottom triangle
  fill(rgbLerp("#C4C9D1", "#BCC2C7", colorShift));
  triangle(
    185 - offsetX, 230 - offsetY,
    185 - offsetY, 345 + offsetY,
    300 + offsetX, 345 - offsetY
  );

  // Right corner triangle (not red)
  fill(rgbLerp("#807E7F","#E8E2CF", colorShift));
  triangle(
    345 - offsetX, 55 + offsetY,
    275 - offsetX, 150 + offsetY,
    215 - offsetX, 55 - offsetY
  );

  // Red triangle on right side
  fill(rgbLerp("#AD2609", "#0A0A0A", colorShift));
  quad(
    345 + offsetX, 345 - offsetY,
    345 - offsetX, 55 - offsetY,
    185 + offsetX, 230 + offsetY,
    300 - offsetX, 345 - offsetY
  );

  // Light-colored quad near the top
  fill(rgbLerp("#EAE4DA", "#AD2609", colorShift));
  quad(
    185 + offsetX, 55 - offsetY,
    215 + offsetX, 55 + offsetY,
    275 - offsetX, 132 - offsetY,
    185 + offsetX, 230 - offsetY
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
    mouseX > 50 && mouseX < 350 && mouseY > 50 && mouseY < 350 // Bounding box for all shapes
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
