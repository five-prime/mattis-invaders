function Ega(x, y){
  this.x = x;
  this.y = y;
  this.toDelete = false;

  this.show = function(){
    image(imgThree, this.x, this.y, 20,20);
  };
this.gone = function(){
this.toDelete = true;


};
  this.hits = function(iraq){


    if (this.x < iraq.x + 50 && this.x + 50 > iraq.x && this.y < iraq.y + 50 && 50 + this.y > iraq.y){

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
