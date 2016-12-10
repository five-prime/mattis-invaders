var maddog;
var iraq = [];
var ega = [];
var score = 0;
function setup(){
  img = loadImage("maddog.png");
  imgTwo = loadImage("iraq.png");
  imgThree = loadImage("ega.jpg");
  createCanvas(600,400);
  maddog = new Maddog();
    // ega = new Ega(width/2, height/2);
  for (var i = 0; i < 5; i++){
    iraq[i] = new Iraq(i*80+80, 60);
  };


}
function draw(){
  background(51);
  maddog.show();
  maddog.move();

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
    score += 1;
    console.log(score);
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
