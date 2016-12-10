function Sadam(){
  this.y = 0;
  this.x = random(600);
  this.r = 25;
  var botedge = height;


  this.show = function(){

    // rect(this.x, height-20, 20, 20);
    image(imgFour,this.x,this.y,this.r*2,this.r*2);
  };


this.missed = function(){

 if (this.y == botedge){

return true;
 }

};

this.hit = function(){

  var e = dist(this.x, this.y-25, maddog.x, maddog.y);
  if (e < this.r + maddog.r){
    return true;

  }
  else{

    return false;
  };


};

this.move = function(speed){
  this.y += speed;

};
};
