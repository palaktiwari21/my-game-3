var doctor1, police1; 
 gameState="serve";
var start;
var play;
var gameState;
var doctor;
var drone ,drops;
var police;
var bg1,bg2,bg3;
var text1;
var people,people2;
var coronagrp;
var infected=0;
var over;
var end;
var people1grp;
var people2grp;
var msg;
var restart;



function preload(){

  doctor1img=loadImage("../image/doctor1.png");
  police1img=loadImage("../image/police1.png");
  person1=loadImage("../image/person1.png");
  person2=loadImage("../image/person2.png");
  doctorimg=loadImage("../image/doctor.png");
  coronavirus=loadImage("../image/coronavirus.png");
  policeimg=loadImage("../image/police2.png");
  msgimg=loadImage("../image/bg.jpg");
  bg1img=loadImage("../image/bg1.jpg");
  bg2img=loadImage("../image/bg2.png");
  bg3img=loadImage("../image/bg3.jpg");
  text1img=loadImage("../image/text1.png");
  droneimg=loadImage("../image/drone.png");
  dropsimg=loadImage("../image/drops.png");
  restartimg=loadImage("../image/restart.png");


}



function setup() {
  createCanvas(displayWidth-10,displayHeight-10);


coronagrp= new Group();
people1grp=new Group();
people2grp=new Group();


bg3=createSprite(600,300);
bg3.addImage("bg3",bg3img);
bg3.scale=3;
bg3.visible=false;

bg1=createSprite(750,420);
bg1.addImage("bg1",bg1img);
bg1.scale=1.3;
bg1.visible=false;


bg2=createSprite(750,425);
bg2.addImage("bg2",bg2img);
bg2.scale=2;
bg2.visible=false;


text1=createSprite(800,100);
text1.addImage("text1",text1img);


doctor1=createSprite(500,600,10,10);
doctor1.addImage("doctor1",doctor1img);
doctor1.scale=0.2;



doctor= createSprite(displayWidth-200,displayHeight-120,10,10);
doctor.addImage("doctor",doctorimg);
doctor.scale=0.5;
doctor.visible=false;

police1=createSprite(1000,600,20,20);
police1.addImage("police1",police1img);
police1.scale=0.8;

police=createSprite(1200,600,20,20);
police.addImage("police",policeimg);
police.visible=false;

drone=createSprite(0,100);
drone.addImage("drone",droneimg);
drone.scale=0.2;
drone.visible=false;

msg=createSprite(750,430);
msg.addImage("msg",msgimg);
msg.visible=false;
msg.scale=0.9;





fill("white");
textSize(40);
}

function draw() {
  background(0);
  if (gameState==="serve"){
   

    doctor1.display();
   
    bg3.visible=true;
   text1.display();
  }

  if (gameState==="start"){
    
    doctor1.visible=false;
    police1.destroy();

     bg3.visible=false;
  bg1.visible=true;
  text1.visible=false;
    doctor.visible=true;
    doctor.x=mouseX;
    doctor.y=mouseY;
    if (doctor.isTouching(coronagrp)){

      coronagrp.destroyEach();
     }


if (coronagrp.isTouching(people1grp)){
people1grp.destroyEach();
coronagrp.destroyEach();
infected+=1;
}

if (infected===5){
  gameState="over";
}
   

  People();
  Corona();

  
  }


if(gameState==="play"){


  
  doctor1.visible=false;
  text1.visible=false;
  police1.visible=false;
    bg3.visible=false;
    bg2.visible=true;
    police.visible=true;
    drone.visible=true;

   if (coronagrp.isTouching(people2grp)){

   people2grp.destroyEach();
   coronagrp.destroyEach()
   gameState="end";

   }

  


    
    People2();
    Corona();

    if (mousePressedOver(drone)){

      drops=createSprite(drone.x,drone.y);
      drops.addImage("drops",dropsimg);
      drops.velocityY=10;
      drops.scale=0.1;
      if (drops.isTouching(coronagrp)){

        coronagrp.destroyEach();
        drops.destroy();
       }
      }


}

drone.x=mouseX;


 

 




if (mousePressedOver(police1)){

  gameState="play";
  
}
if (mousePressedOver(doctor1)){

  gameState="start";
}

if (gameState==="over"){

  msg.visible=true;



}
if (gameState==="end"){
  msg.visible=true;
}








  edges=createEdgeSprites();






  drawSprites();
  text("INFECTED:"+infected,900,100);
}

function People(){

if (frameCount%50===0){

var people=createSprite(0,730,20,20);
people.velocityX=4;
people.scale=0.1;
people1grp.add(people);
var rand=Math.round(random(1,2));
 switch(rand){
   case 1:people.addImage("people1",person1);

   break ;

   case 2:people.addImage("people2",person2);

   break;

   default : break;
 }
 

}



}

function Corona(){

if (frameCount%70===0){

var  corona=createSprite(100,0,20,20);
corona.addImage("corona",coronavirus);
corona.x=random(30,800);
corona.velocityY=5;
corona.scale=0.2;
coronagrp.add(corona);

}




}

function People2(){

  if (frameCount%50===0){
  
  var people2=createSprite(0,630,20,20);
  people2.velocityX=4;
  people2.scale=0.5;
  people2grp.add(people2);
  people2.setLifetime=-20;
  var rand=Math.round(random(1,2));
   switch(rand){
     case 1:people2.addImage("people1",person1);
  
     break ;
  
     case 2:people2.addImage("people2",person2);
  
     break;
  
     default : break;
   }
   
  
  }
  
  
  
  }