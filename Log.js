class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.visibility = 255;
    //this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display (){
    fill ("lightblue");
    if (this.body.speed < 5){
      super.display ();
    }
    else {
       World.remove(world, this.body);
       push ();
       this.visibilty = this.visiblity - 10;
       pop ();
    }
  }
}