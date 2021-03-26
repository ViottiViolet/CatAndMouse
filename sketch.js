var cat, mouse
var garden
var c1img, c2img, c3img, c4img
var gardenimg
var m1img, m2img, m3img, m4img;

function preload() {
    //load the images here
    c1img = loadImage("images/cat1.png");
    c2img = loadImage("images/cat2.png");
    c3img = loadImage("images/cat3.png");
    c4img = loadImage("images/cat4.png");
    gardenimg = loadImage("images/garden.png");
    m1img = loadImage("images/mouse1.png");
    m2img = loadImage("images/mouse2.png");
    m3img = loadImage("images/mouse3.png");
    m4img = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500, 100, 20, 20);
    garden.addImage(gardenimg);
    garden.scale = 1.5;

    cat = createSprite(800, 500, 20, 20);
    cat.addAnimation("normal", c1img);
    cat.scale = 0.2;

    mouse = createSprite(100, 500, 20, 20);
    mouse.addAnimation("normal", m2img);
    mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.isTouching(cat)) {
        mouse.addAnimation("happym", m1img);
        mouse.changeAnimation("happym");

        cat.addAnimation("happyc", c3img);
        cat.changeAnimation("happyc");
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode == RIGHT_ARROW) {
    mouse.addAnimation("teasing", m3img);
    mouse.changeAnimation("teasing");
    mouse.frameDelay = 25;
}

    if(keyCode == LEFT_ARROW) {
        cat.addAnimation("walking", c2img);
        cat.changeAnimation("walking");
        cat.frameDelay = 25;

        cat.velocityX = -10;
        cat.scale = 0.3;
    }

}
