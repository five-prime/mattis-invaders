function Ega(x, y){
  this.x = x;
  this.y = y;
  this.r = 15;
  this.toDelete = false;

  this.show = function(){
    image(imgThree, this.x, this.y, this.r*2, this.r*2);
  };
this.gone = function(){
this.toDelete = true;


};
  this.hits = function(iraq){


    var d = dist(this.x, this.y, iraq.x, iraq.y);
    if (d < this.r + iraq.r){
      return true;

    }
    else{

      return false;
    };


  };
  this.move = function(){
    this.y = this.y-5;


  };

};
