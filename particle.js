class Particle{
	constructor(canvas,ctx,x_pos,y_pos){
		this.canvas = canvas;
		this.ctx = ctx;
		this.x_pos = x_pos;
		this.y_pos = y_pos;
		this.radius = 250;
		
	}
	
	drawParticle(endX,endY){
    this.ctx.beginPath();
    this.ctx.moveTo(this.x_pos, this.y_pos);
	this.ctx.lineTo(endX,endY);
	this.ctx.strokeStyle="rgba(255,204,51,0.5)";
    this.ctx.stroke();
    this.ctx.closePath();
	}
	  
	

distance(x1,x2,y1,y2){
let d;
let calOne,calTwo;
let calTotal;
let f_distance;
calOne = Math.pow((x2-x1),2)
calTwo = Math.pow((y2-y1),2);
calTotal = calOne+calTwo;
f_distance = Math.sqrt(calTotal);

return f_distance;
}
castParticle(wall,radian){
	
const x_posWall = wall[0];
const y_posWall = wall[1];
const x_posEndWall = wall[2];
const y_posEndWall = wall[3];

const x_posR = this.x_pos;
const y_posR = this.y_pos;
const x_posEndr = this.x_pos+this.radius * Math.cos(radian);
const y_posEndr = this.y_pos+this.radius * Math.sin(radian);

const denominator = (x_posWall-x_posEndWall)*(y_posR-y_posEndr)-(y_posWall-y_posEndWall)*(x_posR-x_posEndr);

const t = ((x_posWall-x_posR)*(y_posR-y_posEndr)-(y_posWall-y_posR)*(x_posR-x_posEndr))/denominator;

const u = -((x_posWall-x_posEndWall)*(y_posWall-y_posR)-(y_posWall-y_posEndWall)*(x_posWall-x_posR))/denominator;
	let point;

	if(t > 0 && t < 1 && u > 0){
		let x = x_posWall + t * (x_posEndWall - x_posWall);
		let y = y_posWall + t *(y_posEndWall - y_posWall);
		point = {x,y};
	
		return point;
	}
	
	}

}	

