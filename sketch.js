var player;
var ghosts;
var wall;
var power;

function perload() {
  
}

function setup() {
  createCanvas(800,800);
  player=new Player();
  ghosts=new Ghosts();
  wall=new Block();
  power=new Power();

  // lifetime of the cages
  // cage 1
  wall.wall53.lifetime=50;
  wall.wall54.lifetime=50;
  wall.wall55.lifetime=50;
  wall.wall56.lifetime=50;
  //cage 2
  wall.wall57.lifetime=150;
  wall.wall58.lifetime=150;
  wall.wall59.lifetime=150;
  wall.wall60.lifetime=150;
  //cage 3
  wall.wall61.lifetime=250;
  wall.wall62.lifetime=250;
  wall.wall63.lifetime=250;
  wall.wall64.lifetime=250;
  // cage 4
  wall.wall65.lifetime=350;
  wall.wall66.lifetime=350;
  wall.wall67.lifetime=350;
  wall.wall68.lifetime=350;
}

function draw() {
  background("black");
  fill(rgb(0, 136, 255));
  text("x : "+mouseX+",y : "+mouseY,50,50);

  //player movement
  if (keyDown("left"))  
  {
    player.moveLeft();
  }
  if (keyDown("right")) 
  {    
    player.moveRight();
  }
  if (keyDown("up")) 
  {
    player.moveUp();
  }
  if (keyDown("down"))
  {
    player.moveDown();
  }
  if (keyDown("space"))
  {
    player.stop();
  }
  if (keyDown("a")) {
    player.moveLeft();
  }
  if (keyDown("d")) {
    player.moveRight();
  }
  if (keyDown("w")) {
    player.moveUp();
  }
  if (keyDown("s")) {
    player.moveDown();
  }

  //player colliding to wall
   player.spt.collide(wall.wall1);
   player.spt.collide(wall.wall2);
   player.spt.collide(wall.wall3);
   player.spt.collide(wall.wall4);
   player.spt.collide(wall.wall5);
   player.spt.collide(wall.wall6);
   player.spt.collide(wall.wall7);
   player.spt.collide(wall.wall8);
   player.spt.collide(wall.wall9);
   player.spt.collide(wall.wall10);
   player.spt.collide(wall.wall11);
   player.spt.collide(wall.wall12);
   player.spt.collide(wall.wall13);
   player.spt.collide(wall.wall14);
   player.spt.collide(wall.wall15);
   player.spt.collide(wall.wall16);
   player.spt.collide(wall.wall17);
   player.spt.collide(wall.wall18);
   player.spt.collide(wall.wall19);
   player.spt.collide(wall.wall20);
   player.spt.collide(wall.wall21);
   player.spt.collide(wall.wall22);
   player.spt.collide(wall.wall23);
   player.spt.collide(wall.wall24);
   player.spt.collide(wall.wall25);
   player.spt.collide(wall.wall26);
   player.spt.collide(wall.wall27);
   player.spt.collide(wall.wall28);
   player.spt.collide(wall.wall29);
   player.spt.collide(wall.wall30);
   player.spt.collide(wall.wall31);
   player.spt.collide(wall.wall32);
   player.spt.collide(wall.wall33);
   player.spt.collide(wall.wall34);
   player.spt.collide(wall.wall35);
   player.spt.collide(wall.wall36);
   player.spt.collide(wall.wall37);
   player.spt.collide(wall.wall38);
   player.spt.collide(wall.wall39);
   player.spt.collide(wall.wall40);
   player.spt.collide(wall.wall41);
   player.spt.collide(wall.wall42);
   player.spt.collide(wall.wall43);
   player.spt.collide(wall.wall44);
   player.spt.collide(wall.wall45);
   player.spt.collide(wall.wall46);
   player.spt.collide(wall.wall47);
   player.spt.collide(wall.wall48);
   player.spt.collide(wall.wall49);
   player.spt.collide(wall.wall50);
   player.spt.collide(wall.wall51);
   player.spt.collide(wall.wall52);
   player.spt.collide(wall.wall53);
   player.spt.collide(wall.wall54);
   player.spt.collide(wall.wall55);
   player.spt.collide(wall.wall56);
   player.spt.collide(wall.wall57);
   player.spt.collide(wall.wall58);
   player.spt.collide(wall.wall59);
   player.spt.collide(wall.wall60);
   player.spt.collide(wall.wall61);
   player.spt.collide(wall.wall62);
   player.spt.collide(wall.wall63);
   player.spt.collide(wall.wall64);
   player.spt.collide(wall.wall65);
   player.spt.collide(wall.wall66);
   player.spt.collide(wall.wall67);
   player.spt.collide(wall.wall68);

   //ghosts colliding wall
  ghosts.spt.collide(wall.wall1);
  ghosts.spt.collide(wall.wall2);
  ghosts.spt.collide(wall.wall3);
  ghosts.spt.collide(wall.wall4);
  ghosts.spt.collide(wall.wall5);
  ghosts.spt.collide(wall.wall6);
  ghosts.spt.collide(wall.wall7);
  ghosts.spt.collide(wall.wall8);
  ghosts.spt.collide(wall.wall9);
  ghosts.spt.collide(wall.wall10);
  ghosts.spt.collide(wall.wall11);
  ghosts.spt.collide(wall.wall12);
  ghosts.spt.collide(wall.wall13);
  ghosts.spt.collide(wall.wall14);
  ghosts.spt.collide(wall.wall15);
  ghosts.spt.collide(wall.wall16);
  ghosts.spt.collide(wall.wall17);
  ghosts.spt.collide(wall.wall18);
  ghosts.spt.collide(wall.wall19);
  ghosts.spt.collide(wall.wall20);
  ghosts.spt.collide(wall.wall21);
  ghosts.spt.collide(wall.wall22);
  ghosts.spt.collide(wall.wall23);
  ghosts.spt.collide(wall.wall24);
  ghosts.spt.collide(wall.wall25);
  ghosts.spt.collide(wall.wall26);
  ghosts.spt.collide(wall.wall27);
  ghosts.spt.collide(wall.wall28);
  ghosts.spt.collide(wall.wall29);
  ghosts.spt.collide(wall.wall30);
  ghosts.spt.collide(wall.wall31);
  ghosts.spt.collide(wall.wall32);
  ghosts.spt.collide(wall.wall33);
  ghosts.spt.collide(wall.wall34);
  ghosts.spt.collide(wall.wall35);
  ghosts.spt.collide(wall.wall36);
  ghosts.spt.collide(wall.wall37);
  ghosts.spt.collide(wall.wall38);
  ghosts.spt.collide(wall.wall39);
  ghosts.spt.collide(wall.wall40);
  ghosts.spt.collide(wall.wall41);
  ghosts.spt.collide(wall.wall42);
  ghosts.spt.collide(wall.wall43);
  ghosts.spt.collide(wall.wall44);
  ghosts.spt.collide(wall.wall45);
  ghosts.spt.collide(wall.wall46);
  ghosts.spt.collide(wall.wall47);
  ghosts.spt.collide(wall.wall48);
  ghosts.spt.collide(wall.wall49);
  ghosts.spt.collide(wall.wall50);
  ghosts.spt.collide(wall.wall51);
  ghosts.spt.collide(wall.wall52);
  ghosts.spt.collide(wall.wall53);
  ghosts.spt.collide(wall.wall54);
  ghosts.spt.collide(wall.wall55);
  ghosts.spt.collide(wall.wall56);
  ghosts.spt.collide(wall.wall57);
  ghosts.spt.collide(wall.wall58);
  ghosts.spt.collide(wall.wall59);
  ghosts.spt.collide(wall.wall60);
  ghosts.spt.collide(wall.wall61);
  ghosts.spt.collide(wall.wall62);
  ghosts.spt.collide(wall.wall63);
  ghosts.spt.collide(wall.wall64);
  ghosts.spt.collide(wall.wall65);
  ghosts.spt.collide(wall.wall66);
  ghosts.spt.collide(wall.wall67);
  ghosts.spt.collide(wall.wall68);

  //ghost2 collide
  ghosts.spt2.collide(wall.wall1);
  ghosts.spt2.collide(wall.wall2);
  ghosts.spt2.collide(wall.wall3);
  ghosts.spt2.collide(wall.wall4);
  ghosts.spt2.collide(wall.wall5);
  ghosts.spt2.collide(wall.wall6);
  ghosts.spt2.collide(wall.wall7);
  ghosts.spt2.collide(wall.wall8);
  ghosts.spt2.collide(wall.wall9);
  ghosts.spt2.collide(wall.wall10);
  ghosts.spt2.collide(wall.wall11);
  ghosts.spt2.collide(wall.wall12);
  ghosts.spt2.collide(wall.wall13);
  ghosts.spt2.collide(wall.wall14);
  ghosts.spt2.collide(wall.wall15);
  ghosts.spt2.collide(wall.wall16);
  ghosts.spt2.collide(wall.wall17);
  ghosts.spt2.collide(wall.wall18);
  ghosts.spt2.collide(wall.wall19);
  ghosts.spt2.collide(wall.wall20);
  ghosts.spt2.collide(wall.wall21);
  ghosts.spt2.collide(wall.wall22);
  ghosts.spt2.collide(wall.wall23);
  ghosts.spt2.collide(wall.wall24);
  ghosts.spt2.collide(wall.wall25);
  ghosts.spt2.collide(wall.wall26);
  ghosts.spt2.collide(wall.wall27);
  ghosts.spt2.collide(wall.wall28);
  ghosts.spt2.collide(wall.wall29);
  ghosts.spt2.collide(wall.wall30);
  ghosts.spt2.collide(wall.wall31);
  ghosts.spt2.collide(wall.wall32);
  ghosts.spt2.collide(wall.wall33);
  ghosts.spt2.collide(wall.wall34);
  ghosts.spt2.collide(wall.wall35);
  ghosts.spt2.collide(wall.wall36);
  ghosts.spt2.collide(wall.wall37);
  ghosts.spt2.collide(wall.wall38);
  ghosts.spt2.collide(wall.wall39);
  ghosts.spt2.collide(wall.wall40);
  ghosts.spt2.collide(wall.wall41);
  ghosts.spt2.collide(wall.wall42);
  ghosts.spt2.collide(wall.wall43);
  ghosts.spt2.collide(wall.wall44);
  ghosts.spt2.collide(wall.wall45);
  ghosts.spt2.collide(wall.wall46);
  ghosts.spt2.collide(wall.wall47);
  ghosts.spt2.collide(wall.wall48);
  ghosts.spt2.collide(wall.wall49);
  ghosts.spt2.collide(wall.wall50);
  ghosts.spt2.collide(wall.wall51);
  ghosts.spt2.collide(wall.wall52);
  ghosts.spt2.collide(wall.wall53);
  ghosts.spt2.collide(wall.wall54);
  ghosts.spt2.collide(wall.wall55);
  ghosts.spt2.collide(wall.wall56);
  ghosts.spt2.collide(wall.wall57);
  ghosts.spt2.collide(wall.wall58);
  ghosts.spt2.collide(wall.wall59);
  ghosts.spt2.collide(wall.wall60);
  ghosts.spt2.collide(wall.wall61);
  ghosts.spt2.collide(wall.wall62);
  ghosts.spt2.collide(wall.wall63);
  ghosts.spt2.collide(wall.wall64);
  ghosts.spt2.collide(wall.wall65);
  ghosts.spt2.collide(wall.wall66);
  ghosts.spt2.collide(wall.wall67);
  ghosts.spt2.collide(wall.wall68);

  //ghost3 collide
  ghosts.spt3.collide(wall.wall1);
  ghosts.spt3.collide(wall.wall2);
  ghosts.spt3.collide(wall.wall3);
  ghosts.spt3.collide(wall.wall4);
  ghosts.spt3.collide(wall.wall5);
  ghosts.spt3.collide(wall.wall6);
  ghosts.spt3.collide(wall.wall7);
  ghosts.spt3.collide(wall.wall8);
  ghosts.spt3.collide(wall.wall9);
  ghosts.spt3.collide(wall.wall10);
  ghosts.spt3.collide(wall.wall11);
  ghosts.spt3.collide(wall.wall12);
  ghosts.spt3.collide(wall.wall13);
  ghosts.spt3.collide(wall.wall14);
  ghosts.spt3.collide(wall.wall15);
  ghosts.spt3.collide(wall.wall16);
  ghosts.spt3.collide(wall.wall17);
  ghosts.spt3.collide(wall.wall18);
  ghosts.spt3.collide(wall.wall19);
  ghosts.spt3.collide(wall.wall20);
  ghosts.spt3.collide(wall.wall21);
  ghosts.spt3.collide(wall.wall22);
  ghosts.spt3.collide(wall.wall23);
  ghosts.spt3.collide(wall.wall24);
  ghosts.spt3.collide(wall.wall25);
  ghosts.spt3.collide(wall.wall26);
  ghosts.spt3.collide(wall.wall27);
  ghosts.spt3.collide(wall.wall28);
  ghosts.spt3.collide(wall.wall29);
  ghosts.spt3.collide(wall.wall30);
  ghosts.spt3.collide(wall.wall31);
  ghosts.spt3.collide(wall.wall32);
  ghosts.spt3.collide(wall.wall33);
  ghosts.spt3.collide(wall.wall34);
  ghosts.spt3.collide(wall.wall35);
  ghosts.spt3.collide(wall.wall36);
  ghosts.spt3.collide(wall.wall37);
  ghosts.spt3.collide(wall.wall38);
  ghosts.spt3.collide(wall.wall39);
  ghosts.spt3.collide(wall.wall40);
  ghosts.spt3.collide(wall.wall41);
  ghosts.spt3.collide(wall.wall42);
  ghosts.spt3.collide(wall.wall43);
  ghosts.spt3.collide(wall.wall44);
  ghosts.spt3.collide(wall.wall45);
  ghosts.spt3.collide(wall.wall46);
  ghosts.spt3.collide(wall.wall47);
  ghosts.spt3.collide(wall.wall48);
  ghosts.spt3.collide(wall.wall49);
  ghosts.spt3.collide(wall.wall50);
  ghosts.spt3.collide(wall.wall51);
  ghosts.spt3.collide(wall.wall52);
  ghosts.spt3.collide(wall.wall53);
  ghosts.spt3.collide(wall.wall54);
  ghosts.spt3.collide(wall.wall55);
  ghosts.spt3.collide(wall.wall56);
  ghosts.spt3.collide(wall.wall57);
  ghosts.spt3.collide(wall.wall58);
  ghosts.spt3.collide(wall.wall59);
  ghosts.spt3.collide(wall.wall60);
  ghosts.spt3.collide(wall.wall61);
  ghosts.spt3.collide(wall.wall62);
  ghosts.spt3.collide(wall.wall63);
  ghosts.spt3.collide(wall.wall64);
  ghosts.spt3.collide(wall.wall65);
  ghosts.spt3.collide(wall.wall66);
  ghosts.spt3.collide(wall.wall67);
  ghosts.spt3.collide(wall.wall68);

  //ghosts 4 collide
  ghosts.spt4.collide(wall.wall1);
  ghosts.spt4.collide(wall.wall2);
  ghosts.spt4.collide(wall.wall3);
  ghosts.spt4.collide(wall.wall4);
  ghosts.spt4.collide(wall.wall5);
  ghosts.spt4.collide(wall.wall6);
  ghosts.spt4.collide(wall.wall7);
  ghosts.spt4.collide(wall.wall8);
  ghosts.spt4.collide(wall.wall9);
  ghosts.spt4.collide(wall.wall10);
  ghosts.spt4.collide(wall.wall11);
  ghosts.spt4.collide(wall.wall12);
  ghosts.spt4.collide(wall.wall13);
  ghosts.spt4.collide(wall.wall14);
  ghosts.spt4.collide(wall.wall15);
  ghosts.spt4.collide(wall.wall16);
  ghosts.spt4.collide(wall.wall17);
  ghosts.spt4.collide(wall.wall18);
  ghosts.spt4.collide(wall.wall19);
  ghosts.spt4.collide(wall.wall20);
  ghosts.spt4.collide(wall.wall21);
  ghosts.spt4.collide(wall.wall22);
  ghosts.spt4.collide(wall.wall23);
  ghosts.spt4.collide(wall.wall24);
  ghosts.spt4.collide(wall.wall25);
  ghosts.spt4.collide(wall.wall26);
  ghosts.spt4.collide(wall.wall27);
  ghosts.spt4.collide(wall.wall28);
  ghosts.spt4.collide(wall.wall29);
  ghosts.spt4.collide(wall.wall30);
  ghosts.spt4.collide(wall.wall31);
  ghosts.spt4.collide(wall.wall32);
  ghosts.spt4.collide(wall.wall33);
  ghosts.spt4.collide(wall.wall34);
  ghosts.spt4.collide(wall.wall35);
  ghosts.spt4.collide(wall.wall36);
  ghosts.spt4.collide(wall.wall37);
  ghosts.spt4.collide(wall.wall38);
  ghosts.spt4.collide(wall.wall39);
  ghosts.spt4.collide(wall.wall40);
  ghosts.spt4.collide(wall.wall41);
  ghosts.spt4.collide(wall.wall42);
  ghosts.spt4.collide(wall.wall43);
  ghosts.spt4.collide(wall.wall44);
  ghosts.spt4.collide(wall.wall45);
  ghosts.spt4.collide(wall.wall46);
  ghosts.spt4.collide(wall.wall47);
  ghosts.spt4.collide(wall.wall48);
  ghosts.spt4.collide(wall.wall49);
  ghosts.spt4.collide(wall.wall50);
  ghosts.spt4.collide(wall.wall51);
  ghosts.spt4.collide(wall.wall52);
  ghosts.spt4.collide(wall.wall53);
  ghosts.spt4.collide(wall.wall54);
  ghosts.spt4.collide(wall.wall55);
  ghosts.spt4.collide(wall.wall56);
  ghosts.spt4.collide(wall.wall57);
  ghosts.spt4.collide(wall.wall58);
  ghosts.spt4.collide(wall.wall59);
  ghosts.spt4.collide(wall.wall60);
  ghosts.spt4.collide(wall.wall61);
  ghosts.spt4.collide(wall.wall62);
  ghosts.spt4.collide(wall.wall63);
  ghosts.spt4.collide(wall.wall64);
  ghosts.spt4.collide(wall.wall65);
  ghosts.spt4.collide(wall.wall66);
  ghosts.spt4.collide(wall.wall67);
  ghosts.spt4.collide(wall.wall68);

  // coming from other point for player
  if (player.spt.x>800) {
    player.spt.x=0;
  }
  if (player.spt.x<0) {
    player.spt.x=800;
  }
  
  // coming from other point for ghosts
  if (ghosts.spt.x>800){
      ghosts.spt.x=0;
  }
  if (ghosts.spt.x<0) {
    ghosts.spt.x=800;
  }
  if (ghosts.spt2.x>800) {
    ghosts.spt2.x=0;
  }
  if (ghosts.spt2.x<0) {
    ghosts.spt2.x=800;
  }
  if (ghosts.spt3.x>800) {
    ghosts.spt3.x=0;
  }
  if (ghosts.spt3.x<0) {
    ghosts.spt3.x=800;
  }
  if (ghosts.spt4.x>800) {
    ghosts.spt4.x=0;
  }
  if (ghosts.spt4.x<0) {
    ghosts.spt4.x=800;
  }

  //player destory
  if (ghosts.spt.isTouching(player.spt)) {
    player.spt.destroy();
  }
  if (ghosts.spt2.isTouching(player.spt)) {
    player.spt.destroy();
  }
  if (ghosts.spt3.isTouching(player.spt)) {
    player.spt.destroy();
  }
  if (ghosts.spt4.isTouching(player.spt)) {
    player.spt.destroy();
  }

  //ghost destroy
  if (player.spt.isTouching(power.spt1)) {
    ghosts.spt.destroy();
    power.spt1.destroy();
  }
  if (player.spt.isTouching(power.spt2)) {
    ghosts.spt2.destroy();
    power.spt2.destroy();
  }
  if (player.spt.isTouching(power.spt3)) {
    ghosts.spt3.destroy();
    power.spt3.destroy();
  }
  if (player.spt.isTouching(power.spt4)) {
    ghosts.spt4.destroy();
    power.spt4.destroy();
  }

  if (power.spt1.destroy()) {
    
  }

  

  ghostsMovement();

  drawSprites();
}

function ghostsMovement() {
    var rand = Math.round(random(1,16));
  switch (rand) {
    case 1: ghosts.spt.velocityX=-5; 
      break;
    case 2: ghosts.spt.velocityX=5;
      break;
    case 3: ghosts.spt.velocityY=-5;
      break;
    case 4: ghosts.spt.velocityY=5;
      break;
    case 5: ghosts.spt2.velocityX=-5;
      break;
    case 6: ghosts.spt2.velocityX=5;
      break;
    case 7: ghosts.spt2.velocityY=-5;
      break;
    case 8: ghosts.spt2.velocityY=5;
      break;
    case 9: ghosts.spt3.velocityX=-5;
      break;
    case 10: ghosts.spt3.velocityX=5;
      break;
    case 11: ghosts.spt3.velocityY=-5;
      break;
    case 12: ghosts.spt3.velocityY=5;
      break;
    case 13: ghosts.spt4.velocityX=-5;
      break;
    case 14: ghosts.spt4.velocityX=5;
      break;
    case 15: ghosts.spt4.velocityY=-5;
      break;
    case 16: ghosts.spt4.velocityY=5;
      break;
      }
  
}