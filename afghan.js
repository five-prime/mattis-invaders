function Afghan(){

this.r = 25;
    this.show = function(x,y){
         image(imgFive, x, y, this.r*2, this.r*2);


    };


  this.shrink = function(){
    if (this.r == 5){this.toDelete = true;}else{
    this.r -= 2.5;
};
  };

    //Afghan
};