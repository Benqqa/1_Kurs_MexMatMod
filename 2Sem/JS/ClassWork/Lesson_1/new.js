window.addEventListener('load', main, false)
function main() {
	var ctx = canv.getContext("2d");
	var w = canv.width;
	var h = canv.height;

/*
//арифметическая прогрессия
var N=10;
var a=0;
var d=3;
var tr=0;
var tnr=0;
for(var j=0; j<1000;j++){
var t=performance.now();

for(var i=0; i<N;i++)
{
	a=a+d;
	
}
t=performance.now();
tnr+=(performance.now()-t);
function ap(n)
{
	if(n==0){
	return 0}
	return ap(n-1)+d
	
}
for(var i=0;i<=N;i++)
{
	ap(i);
}
tr+=(performance.now()-t);
}
console.log(tr/1000, tnr/1000)*/

//фракталы

var deep=5;
var r= 100;
function draw(n,x,y)
{
	
	if(n==0){
	return 0;}
	else{
		draw(n+1,x+r*Math.pow(0.5, n),y);
		draw(n+1,x-r*Math.pow(0.5, n),y);//сдвиг и уменьшение радуса
		draw(n+1,x,y+r*Math.pow(0.5, n));
		draw(n+1,x,y-r*Math.pow(0.5, n));
	}
	console.log(x,y);
	ctx.fillStyle="white";
	ctx.beginPath();
	//ctx.arc(x, y,r*Math.pow(0.5,n),0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(x, y,r*Math.pow(0.5,n),0,2*Math.PI);//круг
	ctx.stroke();
}
draw(deep,w/2,h/2);



}