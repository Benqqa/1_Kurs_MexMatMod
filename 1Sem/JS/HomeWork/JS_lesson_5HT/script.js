window.addEventListener("load", main, false);

function Random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var k;
class Shar{
	constructor(x, y, r, v, angle, dt, h, w, ctx, isc,color,figure){
		this.x = x;
		this.y = y;
		this.r = r;
		this.v = v;
		this.angle = angle;
		this.dt = dt;
		this.h = h;
		this.figure=figure;
		this.w = w;
		this.color=color;
		this.ctx = ctx;
		this.isc = false;
	}

	
	move(){
		this.x = this.x + this.v * Math.cos(this.angle) * this.dt;
		this.y = this.y + this.v * Math.sin(this.angle) * this.dt;
		if(this.x > this.w || this.x < 0) this.angle -= Math.PI / 2;
		if(this.y > this.h || this.y < 0) this.angle -= Math.PI / 2;
		this.ctx.beginPath();
		
		
		this.ctx.fillStyle=this.color;
		
		
		switch(this.figure) 
		{
		case 1:
		this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
		break;
		case 2:
		this.ctx.rect(this.x, this.y, this.r/1.5,this.r/1.5);
		break;
		}
		
		this.ctx.stroke();
		this.ctx.fill();
		
	}
}

function main(){
	var ctx = field.getContext("2d");
	var h = field.height;
	var w = field.width;
	var a = [];
	var f;
	var fps = 60;
	var n;
	var r = 20;
	
	
		function getRandomCollor()// случайный цвет
	{
		// 3 значения цвета задающиеся случайно
		return "rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")";
	}
	
	
	
	b1.onclick = function(){
		for(var i=0;i<2;i++){
		console.log('Старт');
		init();
		f = setInterval(run, 1000/fps);
	}}
	
	function run(){
		ctx.clearRect(0, 0, w, h);
		for(var i = 0; i < n; i++){
			a[i].move();
		}
		for(var i = 0; i < n - 1; i++){
			for(var j = i + 1; j < n; j++){
				var l = Math.sqrt(Math.pow(a[i].x - a[j].x, 2) + Math.pow(a[i].y - a[j].y, 2));
				if(l < 2 * a[i].r- 0.1* a[i].r ){
					console.log(l);
					var v = a[i].v-1;
					a[i].v = a[j].v;
					a[j].v = v;
					a[i].color = getRandomCollor();
					a[j].color = getRandomCollor();
					if(v!=0){
					a[i].figure = Random(1,2 );
					a[j].figure = Random(1,2 );
					}a[i].angle += Math.PI;
					a[j].angle += Math.PI;
				}
			}
		}
	}
	
	function init(){
		n = num.value;
		for(var i = 0; i < n; i++){
			a[i] = new Shar(Random(0, w), Random(0, h), Random(10,30 ), Random(0, 50), Random(0, 2*Math.PI), 0.1, h, w, ctx, false,getRandomCollor(),Random(1,2 ));
		}
		console.log(n);
	}
}