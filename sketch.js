
let img; // Declare a variable to hold the image

function preload() {
  // Load the image during preload (before setup)
  img = loadImage('gametoy.jpg');
}
function setup() {
    createCanvas(1500, 900);
    background(0);
    image(img, 0, 0, 450, 740);
 
  //ellipse(295,515,90,90)

  //ellipse(373,434,90,90)
  
  //triangle(30, 481, 75, 444, 70, 513)
 
  //triangle(102, 445, 148, 485, 99, 512)
  
  //ellipse(209,693,110,30)
}

function draw() {
 
  
  console.log(mouseX,mouseY)
}




