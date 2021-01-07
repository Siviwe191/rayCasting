class Wall{
	constructor(canvas,ctx,...bounds){
		this.canvas = canvas;
		this.ctx = ctx;
		
		
		this.x_pos;
        this.y_pos
        this.x_posEnd;
        this.y_posEnd;
	}
	
	
		drawWall(){
			for(let b of bounds){
				this.x_pos = b[0];
                this.y_pos = b[1];
                this.x_posEnd = b[2];
                this.y_posEnd = b[3];
			this.ctx.beginPath();
			this.ctx.moveTo(this.x_pos, this.y_pos);
            this.ctx.lineTo(this.x_posEnd, this.y_posEnd);
			this.ctx.strokeStyle="rgba(255,255,255)";
			this.ctx.lineWidth=1;
			this.ctx.stroke();
			this.ctx.closePath();
		}
		}		
}