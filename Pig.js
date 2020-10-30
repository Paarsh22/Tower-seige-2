class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility = 255;
    //this.image = loadImage("sprites/enemy.png");
  }
display (){
  fill ("lightgreen");
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

};