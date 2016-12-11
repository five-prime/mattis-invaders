function Maddog(){
  this.x = width/2;
  this.y = height-100;
  this.xdir = 0;




  this.show = function(){

    image(img, this.x, this.y, 50, 50);
    this.x = constrain(this.x, 0,width - 55);

  };
  this.setDir = function(dir){
    this.xdir = dir;


  }
  this.move = function(dir){
    this.x += this.xdir*5;

  };

  this.stop = function(){
this.r = .000001;

  }


};
