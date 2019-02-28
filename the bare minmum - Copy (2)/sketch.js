let can;
let sl;
function setup(){
	can=createCanvas(600,400);
	can.position(100,100);can.class("bdd");
	sl=createSlider(20,200,30);sl.position(100,50);
	sl.mousePressed(chgwidth);
	
}
function draw(){
	background(202,220,100);
ellipse(100,200,chgwidth(),60);
	}
	function chgwidth(){
		return sl.value();
		
	}