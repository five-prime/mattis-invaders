var maddog;
var iraq = [];
var ega = [];
var score = 0;
var sadam;
var health = 100;
var vilescum = 7;

function preload(){
  //loads all images and assigns them variables
  img = loadImage("maddog.png");
  imgTwo = loadImage("iraq.png");
  imgThree = loadImage("ega.jpg");
  imgFour = loadImage("sadam.png");

}

function setup(){

  createCanvas(600,400);
  //creates new 'ship'
  maddog = new Maddog();
  //creates new falling object
  sadam = new Sadam();
  //displays targets
  for (var i = 0; i < vilescum; i++){
    iraq[i] = new Iraq(i*75+50, 50);
  };

//setup
};

function draw(){
  background(51);
  maddog.show();
  maddog.move();
  sadam.show();
  sadam.update();
if (sadam.update() == false){

health = health -1;
console.log(health);
};
if (health === 0){
noLoop();
}
  for (var i=0; i < ega.length; i++){
    ega[i].show();
    ega[i].move();
    for (var j=0; j<iraq.length; j++){
      if (ega[i].hits(iraq[j])){
        iraq[j].shrink();
        ega[i].gone();


      };


    };

  };

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



if (score == vilescum * 100){


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
