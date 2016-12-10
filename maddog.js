function Maddog(){
  this.x = width/2;
  this.xdir = 0;


  this.show = function(){

    // rect(this.x, height-20, 20, 20);
    image(img,this.x - 50,height-120,100,75);
  };
  this.setDir = function(dir){
    this.xdir = dir;


  }
  this.move = function(dir){
    this.x += this.xdir*5;

  };
};
