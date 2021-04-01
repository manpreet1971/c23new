class Ground{
constructor(x,y,width,height)
{
var ground_Options={isStatic:true};
this.body=Bodies.rectangle(x,y,width,height,ground_Options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
var ground_pos=this.body.position;
rectMode(CENTER);
rect(ground_pos.x,ground_pos.y,this.width,this.height);
fill("green");
}
}



//in physics engine rectangle(in line 5) x and y are center but when we draw
 //using rect command(line 13) since its p5 editor command rect x and y are left corner
 //so change the mode to center or u need to chk the width and adjust accoerdingly
 //so do any one either option 1 or option 2
 //1  disable 12 line and modify te ground as  ground = new Ground(10, 350, 800, 50);
 or
 //2 enable rectMde(CENTER) and ground as before
 //ground = new Ground(200, 350, 400, 50);