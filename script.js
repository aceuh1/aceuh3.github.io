function setup() {
  //create canvas 400x400 pixels wide/high
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  
  //outline
  noFill();
  
  stroke("#F2F4E7");
  strokeWeight(7);
  square(50,50,300);

  
  //inside triangles 
  
  //top left corner
 noStroke();
  fill("#BCC2C7")
  triangle(55,55, 55, 160,160 ,55);
  
  //bottom left, corner left
  fill("#D2A200");
  triangle(55,230, 55, 345,116 ,285);
  
  
  //bottom left,  corner right
fill("#E8E4DB");
  triangle(55,345, 116, 285,187 ,345);
  
  
  
  //middle bottom triangle 
  fill("#C4C9D1");
  triangle(185 ,230, 185, 345,300 ,345);
  
  //right corner triangle (not red) 
  fill("#807E7F");
  triangle( 345, 55, 275 , 150 , 215 , 55 );
  
  //red triangle on right side
  fill("#AD2609");
  quad(345, 345 , 345, 55, 185, 230 , 300, 345);
  
  //
  fill("#EAE4DA"); 
  quad( 185,55 , 215,55, 275, 132 ,  185 ,230  );
  
}





