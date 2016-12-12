//objects
//displays remaining health
var healthbar;
//displays score
var scorebox;
//sprite
var maddog;
//falling obstacle
var sadam;
//arrays
var iraq = [];
var ega = [];
//metrics
var score = 0;
var health = 519;
var vilescum = 7;
var afghan = [];
var afghaniscum = 5;

function preload(){
  //loads all images and assigns them variables
  img = loadImage("maddog.png");
  imgTwo = loadImage("iraq.png");
  imgThree = loadImage("ega.png");
  imgFour = loadImage("sadam.png");
  imgFive = loadImage('afghan.png');

}

function setup(){

  createCanvas(700,600);
  //creates new sprite
  maddog = new Maddog();
  //creates new falling object
  sadam = new Sadam();
  //displays targets
  for (var i = 0; i < vilescum; i++){
    iraq[i] = new Iraq(i*75+50, 50);
  };
  for (var i=0; i < afghaniscum; i++){
    afghan[i] = new Afghan();



  };
  //healthbar display
  healthbar = new Healthbar();
  //score display
  scorebox = new Scorebox();
//setup
};

function draw(){
  background(51);
  //shows sprite and calls move
  maddog.show();
  maddog.move();
  //shows falling object (at random point on X axis) and calls update (to make it fall)
  sadam.show();
  sadam.update();
  //shows stats.js
  healthbar.show(300);
  scorebox.show();



if (sadam.update() == false){
//while fallings object is intersecting with sprite, deduct health points.
//12 gives the right ratio of healthbar indicated and actual remaining health
health = health-12;

};
//once the health runs out, end game
if (health <= 0){
noLoop();
};

//creates array of projectiles, their coordinates are set in the keypress function
for (var i=0; i < ega.length; i++){
    ega[i].show();
    ega[i].move();
    //hit detection
    for (var j=0; j<iraq.length; j++){
      if (ega[i].hits(iraq[j])){
        iraq[j].shrink();
        ega[i].gone();


      };


    };


  };
//displays remaining targets
  for (var i=0; i < iraq.length; i++){
    iraq[i].show();

  };
  for (var i=ega.length-1; i>=0; i--){
    if (ega[i].toDelete){

      ega.splice(i,1);
    }
};
for (var i=iraq.length-1; i>=0; i--){
  if (iraq[i].toDelete){

    iraq.splice(i,1);
    score += 100;
    console.log(score);
  };

};


//new level setup
if (score === (vilescum * 100)){
for (m=0; m<afghan.length;m++){
 
  
  afghan[m].show(m*75+50, 50);
  for (var o=0; o < afghan.length; o++){
    afghan[0].show();

  };
  for (var p=ega.length-1; p>=0; p--){
    if (ega[p].toDelete){

      ega.splice(i,1);
    }
};
for (var q=afghan.length-1; q>=0; q--){
  if (afghan[q].toDelete){

    afghan.splice(q,1);
    score += 100;
    console.log(score);
  };

};

};
};







//draw
};


function keyReleased(){
  if (key != ' '){
  maddog.setDir(0);
};
};

function keyPressed(){
  if (key === ' '){
    var egas = new Ega(maddog.x, height-130);
    ega.push(egas);

  }
  if (keyCode === RIGHT_ARROW){
    maddog.setDir(1);

  } else if (keyCode === LEFT_ARROW){
    maddog.setDir(-1);


  }


}
