window.addEventListener('load',main,false);
function main()
{
	
	  let ctx = graph.getContext('2d')
			ctx.strokeStyle='green';
            let w = graph.width;
            let h = graph.height;
			
            let cplot = plot.getContext('2d')
            let wp = plot.width;
            let hp = plot.height;
			var mouse=0;
			
			angle.onmousedown=function()
			{
				mouse=1;
			}
		function strelka()
		{
			some_span1.innerHTML=Math.PI*(angle.value/180);
				graph.width=graph.width;
				ctx.beginPath();
				ctx.moveTo(0,h);
				ctx.lineTo(100*Math.cos(Math.PI*(angle.value/180)),h-100*Math.sin(Math.PI*(angle.value/180)))
				
				
				ctx.moveTo(100*Math.cos(Math.PI*(angle.value/180)),h-100*Math.sin(Math.PI*(angle.value/180)))
				ctx.lineTo(10*Math.cos(Math.PI*(angle.value/180)+Math.PI/4),h-10*Math.sin(Math.PI*(angle.value/180)+Math.PI/4));
				
				
				ctx.stroke();
		}
	angle.onmousemove= function()
			{
				if(mouse==1){
				strelka();
			}}
			angle.onmouseup=function()
			{
				mouse=0;
				strelka();
			}
			
	speed.onchange= function()
			{
				some_span2.innerHTML=speed.value;
			}
	start.onclick = function(){
          
            var k=1;
            let cplot2 = plot2.getContext('2d');
            let cplot3 = plot3.getContext('2d');
             cplot2.strokeStyle='red';
			  cplot3.strokeStyle='red';
			   cplot.strokeStyle='red';
            let fps = 60;
            let r = 10;

            let x = 11;
            let y = h-11;
            let v = speed.value;
            var fi = Math.PI*(angle.value/180);
			
            let vx = v*Math.cos(fi);
            let vy = -v*Math.sin(fi);
            let dt = 0.1;
            let b = -0.1;
            


            var Vy = [];
            var Vx = [];
            var Rx = [];
            var Ry = [];
            var t_max = 0;

           

            function phys(){
            vx = vx + vx*b*dt;
            vy = vy + 9.8*dt + vy*b*dt;
            x = x + vx*dt;
            y = y + vy*dt;
            x1 = x + vx*dt-11;
            y1 = y + vy*dt+11;
            Vy.push(vy);
            Vx.push(vx);
            Rx.push(x1)
            Ry.push(y1);
                if((x+r>w) || (x-r<0)){
                    vx = 0;
                    x = w-r;
                }
                if((y+r>h)){
                    vy = 0;
                    y = h-r;
                }
                if(y-r<0){
                    vy=-vy;
                }
            
            
            }

            function draw_ball() {



                // particle
                ctx.clearRect(0,0,w,h);
                ctx.beginPath();            
                ctx.arc(x,y,r,0,Math.PI*2);
                ctx.fill();

            }
            function draw_graph(){

                cplot.clearRect(0,0,wp,hp);
                cplot.beginPath();
				
				if(k==1){
                var Vy_scale = hp/(Math.max.apply(null, Vy));
                var Ry_scale = wp/(Ry.length);
				}
                for (var i=0; i<Vy.length; i++){
					if(Vy[i]!=Vy[i+1])
					{
                    cplot.moveTo(i*Ry_scale, hp-Math.abs(Vy[i])*Vy_scale);
                    cplot.lineTo((i+1)*Ry_scale, hp-Math.abs(Vy[i+1])*Vy_scale);
					}
					else
					{
						k=0;
					}
                }
                cplot.stroke();

                cplot2.clearRect(0,0,wp,hp);
                cplot2.beginPath();
                var Vy_scale = hp/(Math.max.apply(null, Vy))/2;
                var Ry_scale = wp/(Ry.length);
                for (var i=0; i<Vy.length; i++){
					if(Vy[i]!=Vy[i+1])
					{
                    cplot2.moveTo(i*Ry_scale, hp/2+(Vy[i])*Vy_scale);
                    cplot2.lineTo((i+1)*Ry_scale, hp/2+(Vy[i+1])*Vy_scale);
					}
                }
                cplot2.stroke();

                cplot3.clearRect(0,0,wp,hp);
                cplot3.beginPath();
                var Vx_scale = hp/(Math.max.apply(null, Vx));
                var Rx_scale = wp/(Rx.length);
                for (var i=0; i<Rx.length; i++){
                    
					cplot3.moveTo(i*Rx_scale, hp-(Vx[i])*Vx_scale);
                    cplot3.lineTo((i+1)*Rx_scale, hp-(Vx[i+1])*Vx_scale);
					
                }
                cplot3.stroke();
            }
            function draw_cplot(){
                cplot.beginPath();
                cplot.moveTo(0, hp/2);
                cplot.lineTo(wp, hp/2);
                cplot.stroke();

            }
            function control(){
				if(k==1)
				{
                phys();
                draw_ball();
                draw_cplot();
                draw_graph();
				}
			}
            
            setInterval(control, 1000/fps)                                        // вызывает функцию с определенным интервалм (в мс.)
        }
}