class Box{
  constructor(x,y,width,height){

    //var option = {
      //  restituion: 1
   //}
      this.body = Bodies.rectangle(x,y,width,height);
      World.add(world,this.body);
  }
  
  display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,this.width,this.height);
  }
}
