class Player {
    constructor (){
        this.x=400;
        this.y=360;
        this.spt=createSprite(this.x,this.y,30,30);
        this.spt.shapeColor="yellow";
    }

    moveLeft()
	{ 
        this.spt.setVelocity(-4,0);
	}

	moveRight()
	{ 
		this.spt.setVelocity(4,0);
	}

	moveUp()
	{ 
        this.spt.setVelocity(0,-4);
    }
    moveDown(){
        this.spt.setVelocity(0,4);
    }
    stop()
    {
        this.spt.setVelocity(0,0);
    }
}