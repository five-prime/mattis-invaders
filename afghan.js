function Afghan(){


    this.show = function(x,y){
         image(imgFive, x, y, 50, 50);


    };


  this.shrink = function(){
    if (this.r == 5){this.toDelete = true;}else{
    this.r -= 5;
};
  };

    //Afghan
};