
function Healthbar(){
  this.x = 80;
  this.y = height-51;


  this.show = function(){
    noStroke();
    fill('red');
    rect(this.x, this.y, width-81, 50);
    fill('green');
    rect(this.x, this.y, health, 50);

  };




};
function Scorebox(){
  this.x = 80;
  this.y = height-51;
this.show = function(){
fill('white');
  textSize(25);
  text(score, 10, this.y+25);
};

}
