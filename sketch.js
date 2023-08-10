const motor01 = Matter.Engine;
const windos02 =Matter.World;
const pausa03 =Matter.Bodies;
let motor04; 
let mundo05;
let caja06
let caja07
let piso08
let casa001
let NPC001
let NPC002
let jugador001


function setup(){ 
createCanvas(1240,520)
motor04 = motor01.create()
mundo05 = motor04.world
caja06 = new cajas(180,400,155,150)
caja07 = new cajas (500,400,155,150)
piso08 = new Ground(620,530,1240,10)
casa001 = new casa(340,380,460,PI/2)
caja08 = new cajas(180,250,155,150)
caja09 = new cajas (500,250,155,150)
casa002 = new casa(340,150,460,PI/2)
caja10 = new cajas (340,100,105,120)
casa003 = new casa(340,100,200,PI/7)
casa004 = new casa(370,100,200,-PI/7)
NPC001 = new npc (350,400)
NPC002 = new npc (350,280)
jugador001 = new jugador (500,345)
}

function draw(){
background("green")
motor01.update(motor04)
caja06.mas()
caja07.mas()
caja08.mas()
caja09.mas()
piso08.display()
casa001.mas()
casa002.mas()
caja10.mas()
casa003.mas()
casa004.mas()
NPC001.mas()
NPC002.mas()
jugador001.mas()
}