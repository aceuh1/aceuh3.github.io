function setup() {
  createCanvas(800, 800); // Set canvas size to 800x800 pixels
}

function draw() {
  background(0);

  // Outline
  noFill();
  stroke("#F2F4E7");
  strokeWeight(14); // Adjust stroke weight for larger canvas
  square(100, 100, 600); // Adjust square size and position

  // Animation variables
  let offsetX = sin(frameCount * 0.1) * 10; // Smooth oscillation in x (doubled)
  let offsetY = sin(frameCount * 0.1 + PI / 2) * 10; // Smooth oscillation in y (doubled)
  let colorShift = (sin(frameCount * 0.05) + 1) / 2; // Normalize for lerp

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
