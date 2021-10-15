class Block {
    constructor(){
        //the boders
        this.wall1=createSprite(400,10,800,10);
        this.wall2=createSprite(10,150,10,355);
        this.wall3=createSprite(10,600,10,400);
        this.wall4=createSprite(400,790,800,10);
        this.wall5=createSprite(790,150,10,355);
        this.wall6=createSprite(790,600,10,400);
        
        //blocks
        this.wall7=createSprite(120,100,110,70);
        this.wall8=createSprite(280,100,115,70);
        this.wall9=createSprite(680,100,110,70);
        this.wall10=createSprite(520,100,110,70);
        this.wall11=createSprite(83,287,145,80);
        this.wall12=createSprite(83,440,145,80);
        this.wall13=createSprite(723,290,145,80);
        this.wall14=createSprite(723,440,145,80);
        
        //walls
        this.wall15=createSprite(400,76,10,140);
        this.wall16=createSprite(120,185,100,10);
        this.wall17=createSprite(680,185,100,10);
        this.wall18=createSprite(217,260,10,130);
        this.wall19=createSprite(252,260,60,10);
        this.wall20=createSprite(400,240,10,50);
        this.wall21=createSprite(400,210,250,10);
        this.wall22=createSprite(548,260,60,10);
        this.wall23=createSprite(583,260,10,130);
        this.wall24=createSprite(217,440,10,80);
        this.wall25=createSprite(583,440,10,80);
        this.wall26=createSprite(400,480,250,10);
        this.wall27=createSprite(400,510,10,50);
        this.wall28=createSprite(240,545,150,10);
        this.wall29=createSprite(560,545,150,10);
        this.wall30=createSprite(85,545,50,10);
        this.wall31=createSprite(115,590,10,100);
        this.wall32=createSprite(38,655,60,10);
        this.wall33=createSprite(762,655,60,10);
        this.wall34=createSprite(690,590,10,100);
        this.wall35=createSprite(720,545,50,10);
        this.wall36=createSprite(400,630,250,10);
        this.wall37=createSprite(400,660,10,50);
        this.wall38=createSprite(585,690,10,100);
        this.wall39=createSprite(585,690,200,10);
        this.wall40=createSprite(216,690,10,100);
        this.wall41=createSprite(216,690,200,10);
        this.wall42=createSprite(160,630,10,10);
        this.wall43=createSprite(640,630,10,10);
        this.wall44=createSprite(43,740,60,10);
        this.wall45=createSprite(140,765,10,60);
        this.wall46=createSprite(300,765,10,60);
        this.wall47=createSprite(400,765,10,60);
        this.wall48=createSprite(500,765,10,60);
        this.wall49=createSprite(660,765,10,60);
        this.wall50=createSprite(757,740,60,10);
        this.wall51=createSprite(620,365,5,5);
        this.wall52=createSprite(180,365,5,5);

        //cage of ghosts
        //ghosts 1 / red ghost
        this.wall53=createSprite(340,300,3,35);
        this.wall54=createSprite(300,300,3,35);
        this.wall55=createSprite(320,280,40,3);
        this.wall56=createSprite(320,320,40,3);
        //ghosts 2 / blue ghost
        this.wall57=createSprite(460,300,3,35);
        this.wall58=createSprite(500,300,3,35);
        this.wall59=createSprite(480,280,40,3);
        this.wall60=createSprite(480,320,40,3);
        //ghosts 3 / green ghost
        this.wall61=createSprite(340,425,3,35);
        this.wall62=createSprite(300,425,3,35);
        this.wall63=createSprite(320,405,40,3);
        this.wall64=createSprite(320,445,40,3);
        //ghosts 4 / pink ghost
        this.wall65=createSprite(460,425,3,35);
        this.wall66=createSprite(500,425,3,35);
        this.wall67=createSprite(480,405,40,3);
        this.wall68=createSprite(480,445,40,3);
    }
}