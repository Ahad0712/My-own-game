class Power {
    constructor(){
        this.spt1=createSprite(40,40,10,10);
        this.spt1.x=random([60,40]);
        this.spt1.y=random([40,90]);
        this.spt1.shapeColor=rgb(100,50,120);

        this.spt2=createSprite(760,40,10,10);
        this.spt2.x=random([760,750]);
        this.spt2.y=random([40,90])
        this.spt2.shapeColor=rgb(100,50,120);

        this.spt3=createSprite(40,760,10,10);
        this.spt3.x=random([30,40,50,70]);
        this.spt3.y=random([760,730,720,750])
        this.spt3.shapeColor=rgb(100,50,120);

        this.spt4=createSprite(760,760,10,10);
        this.spt4.x=random([760,740,720,780]);
        this.spt4.y=random([760,730,720,750])
        this.spt4.shapeColor=rgb(100,50,120);
    }
}