

function Sadam() {
  this.y = 0;
  this.x = random(600);


  this.gravity = .5;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    // ellipse(this.x, this.y, 32, 32);
    image(imgFour, this.x, this.y, 50, 50);
  }



  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = 0;
      this.x = random(600);
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    };


if (sadam.x < maddog.x + 50 && sadam.x + 50 > maddog.x && sadam.y < maddog.y + 50 && 50 + sadam.y > maddog.y){

return false;
}
    // var ef = dist(this.x, this.y, maddog.x, maddog.y);
    //
    // if (ef < 50){
    //   return false;
    // }
//update
  };
// this.hits = function(maddog){
// var xdist = dist(this.x, maddog.x);
// console.log(this.x);
// console.log(xdist);
// // console.log(ydist);
// // // if (){
// //         return true;
// //       }
// //       else{
// //
// //         return false;
//       // };
//
//
//
// };

this.stop = function(){


  this.y =10000;
  this.gravity = 0;
  this.velocity = 0;
};

};
