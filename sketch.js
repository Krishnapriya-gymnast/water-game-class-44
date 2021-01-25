function setup() {
  createCanvas(800,400);

  loadImage("../game/person.png");
  loadImage("../game/tap.png");
  loadImage("../game/waterdrop.png");

}

function draw() {
  background(255,255,255);  

  tap = createSprite(150,200,30,30);
  person = createSprite(200,200,50,50);
  waterdrop = createSprite(250,200,20,20);

  addImage("tap", tap.img);
  addImage("waterdrop", waterdrop.img);
  addImage("person", person.img);

  drawSprites();
}