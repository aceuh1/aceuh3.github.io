function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // Outline
  noFill();
  stroke("#F2F4E7");
  strokeWeight(7);
  square(50, 50, 300);

  // Animation variables
  let offsetX = sin(frameCount * 0.1) * 5; // Smooth oscillation in x
  let offsetY = sin(frameCount * 0.1 + PI / 2) * 5; // Smooth oscillation in y
  let colorShift = (sin(frameCount * 0.05) + 1) / 2; // Normalize for lerp

  // Inside triangles

  // Top left corner
  noStroke();
  fill(rgbLerp("#BCC2C7", "#D2A200",  colorShift));
  triangle(
    55 - offsetX, 55 - offsetY,
    55 - offsetX, 160 - offsetY,
    160 + offsetX, 55 - offsetY
  );

  // Bottom left corner left
  fill(rgbLerp("#D2A200", "#AD2609", colorShift));
  triangle(
    55 - offsetX, 240 - offsetY,
    55 - offsetX, 345 - offsetY,
    115 - offsetX, 290 - offsetY
  );

  // Bottom right corner left
  fill(rgbLerp("#E8E4DB", "#D2A200", colorShift));
  triangle(
    55 + offsetX, 345 + offsetY,
    115 + offsetX, 290 - offsetY,
    185 - offsetX, 345 - offsetY
  );

  // Middle bottom triangle
  fill(rgbLerp("#C4C9D1", "#BCC2C7", colorShift));
  triangle(
    185 + offsetX, 230 - offsetY,
    185 - offsetY, 345 + offsetY,
    300 + offsetX, 345 - offsetY
  );

  // Right corner triangle (not red)
  fill(rgbLerp("#807E7F","#EAE4DA", colorShift));
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
