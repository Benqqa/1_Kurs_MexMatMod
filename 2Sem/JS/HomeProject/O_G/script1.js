window.addEventListener("load", main, false);
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }
    return arr;
}
function main() {
    var ctx1 = document.getElementById("field1").getContext("2d");
    var h1 = field1.height;
    var w1 = field1.width;
    var ctx2 = document.getElementById("field2").getContext("2d");
    var h2 = field2.height;
    var w2 = field2.width;
    var c1 = createArray(14, 14);
    var c2 = createArray(12, 12);
    var c3 = createArray(12, 12);
    var c4 = createArray(12, 12);
    var c5 = createArray(14, 14);
    var c6 = createArray(12, 12);
    var panel1 = new Pole(ctx1, w1, h1);
    var panel2 = new Pole(ctx2, w2, h2);
    var m, m0, m2, x, y, rxS, ryS, ob;
    var flag_d = false;
    var flag_v = false;
    var flag = false;
    var flag_m = false;
    var flag2 = 0;
    var size1 = 0;
    var napr1 = 'null';
    var save_x = [];
    var save_y = [];
    var mass_k_x = [];
    var mass_k_y = [];
    var Hod_human = 0;
    var Hod_bot = 0;
    claer(c1);
    claer(c2);
    claer(c3);
    claer(c4);
    claer(c5);
    claer(c6);
    function claer(c) {
        for (var i = 0; i < 12; i++) { //Обнуление массива
            for (var j = 0; j < 12; j++) {
                c[i][j] = 0;
            }
        }
    }
	var timer1;
		function onTimerStart(){
		  console.log("timer started");
		}
		function endTimer(){
		  console.log("timer ended");
		}
		function tick(){
		  id("output").innerHTML = timer1.get("dig");
		  id("slider1").style.width = timer1.get()/time *100 + "%";
		  id("slider2").style.width = timer1.get()/time *100 + "%";
		  if(timer1.get("dig")==0)
		{
                Brain(c1, c4, 1, panel2);     
		}
		}
		function id(id){
		  return document.getElementById(id);
		}	
	var rm=1;
    GanerateK(w1, h1, c1);
    GanerateK(w2, h2, c2);
    for (var o = 1; o < 11; o++) { //вывод
        for (var p = 1; p < 11; p++) {
        }
    }
    btnAdd.onclick = function() {
        location.reload();
        flag = false;
    }
	 mus.onclick = function() {	 
		 soundClick(false);
	 }
    btnPlay.onclick = function() {
        flag = true;
        soundClick(true)
		var s1=0,s2=0,s3=0,s4=0,s5=0,s6=0,s7=0,s8=0,s9=0,s10=0;
		 for (var i = 1; i < 11; i++) { //Обнуление массива
            for (var j = 1; j < 11; j++) {
				if(c1[i][j]==1.1)s1++;
				if(c1[i][j]==1.2)s2++;
				if(c1[i][j]==1.3)s3++;
				if(c1[i][j]==1.4)s4++;
				if(c1[i][j]==2.1)s5++;
				if(c1[i][j]==2.2)s6++;
				if(c1[i][j]==2.3)s7++;
				if(c1[i][j]==3.1)s8++;
				if(c1[i][j]==3.2)s9++;
				if(c1[i][j]==4.1)s10++;
			}
		 }
		 if(s1!=1){location.reload();alert("BOOM");}
	if(s2!=1){location.reload();alert("BOOM");}
if(s3!=1){location.reload();alert("BOOM");}
		 if(s4!=1){location.reload();alert("BOOM");}
		 if(s5!=2){location.reload();alert("BOOM");}
		 if(s6!=2){location.reload();alert("BOOM");}
		 if(s7!=2){location.reload();alert("BOOM");}
		 if(s8!=3){location.reload();alert("BOOM");}
		 if(s9!=3){location.reload();alert("BOOM");}
		 if(s10!=4){location.reload();alert("BOOM");}
    }
    var diff = 3;
	var time= 2;
    var fps = 60;
	rb1.onclick = function() {
        diff = 1;
		console.log(diff, "diff")
	if(diff==3){time=2;}
	if(diff==2){time=3;}
	if(diff==1){time=5;}
    }
    rb2.onclick = function() {
        diff = 2;
		console.log(diff, "diff")
	if(diff==3){time=2;}
	if(diff==2){time=3;}
	if(diff==1){time=5;}
    }
    rb3.onclick = function() {
        diff = 3;
		console.log(diff, "diff")
	if(diff==3){time=2;}
	if(diff==2){time=3;}
	if(diff==1){time=5;}
    }
		var audio = new Audio(); // Создаём новый элемент Audio
    function soundClick(a) {
        audio.src = 'music1.mp3';
        audio.autoplay = a; // Автоматически запускаем
    }
    function GanerateK(w, h, c1) {
        var n = 10;
        var l = 10;
        for (var i = 4; i >= 1; i--) //типы кораблей
        {
            for (var j = 0; j < 5 - i; j++) //количество короблей данного типа
            {
                var x1 = getRandomInt(1, 10);
                var y1 = getRandomInt(1, 10);
                var vector = getRandomInt(0, 2);
                var build = false;
                var nu = true;
                for (var t = 0; nu; t++) {
                    if ((c1[x1][y1] + c1[x1][y1 + 1] + c1[x1][y1 - 1] + c1[x1 + 1][y1] + c1[x1 - 1][y1] + c1[x1 + 1][y1 + 1] + c1[x1 - 1][y1 + 1] + c1[x1 + 1][y1 - 1] + c1[x1 - 1][y1 - 1]) != 0) {
                        nu = true;
                        x1 = getRandomInt(1, 10);
                        y1 = getRandomInt(1, 10);
                    } else {
                        nu = false;
                    }
                }
                var kol = 0;
                for (var k = 0; k < i; k++) //размер
                {
                    kol++;
                    if (kol > 5000) {
                        break;
                        break;
                        break;
                        break;
                        location.reload();
                    }
                    switch (vector) {
                        case 0: //down
                            var a = 0;
                            if (i == 1) { build = true; }
                            if (build == false) {
                                if (y1 + g < 10) {
                                    for (var g = 0; g < i + 2; g++) //проверка можно ли разместить здесь корабль
                                    {
                                        a += c1[x1 + 1][y1 + g - 1] + c1[x1 - 1][y1 + g - 1];
                                    }
                                    if (a == 0) {
                                        build = true;
                                        k--;
                                    } else {
                                        if (kol > 100 && i != 1) {
                                            x1 = getRandomInt(1, 10);
                                            y1 = getRandomInt(1, 10);
                                            nu = true;
                                            for (var t = 0; nu; t++) {
                                                if ((c1[x1][y1] + c1[x1][y1 + 1] + c1[x1][y1 - 1] + c1[x1 + 1][y1] + c1[x1 - 1][y1] + c1[x1 + 1][y1 + 1] + c1[x1 - 1][y1 + 1] + c1[x1 + 1][y1 - 1] + c1[x1 - 1][y1 - 1]) != 0) {
                                                    nu = true;
                                                    x1 = getRandomInt(1, 10);
                                                    y1 = getRandomInt(1, 10);
                                                } else {
                                                    nu = false;
                                                }
                                            }
                                        }
                                        vector++;
                                        k--;
                                        build = false;
                                        break;
                                    }
                                } else {
                                    vector++;
                                    k--;
                                    build = false;
                                    break;
                                }
                            } else {
                                if (c1[x1][y1 + k] == 0) {

                                    c1[x1][y1 + k] = i + (j + 1) / 10;
                                } else {
                                    for (var r = 0; r < k; r++) {
                                        c1[x1][y1 + r] = 0;
                                    }
                                    vector++;
                                    k--;
                                    build = false;
                                    break;
                                }
                            }
                            break;
                        case 1: //left
                            var a = 0;
                            if (i == 1) { build = true; }
                            if (build == false) {
                                for (var g = 0; g < i + 2; g++) //проверка можно ли разместить здесь корабль
                                {
                                    if (x1 - g > 0) {
                                        a += c1[x1 - g + 1][y1] + c1[x1 - g + 1][y1 + 1] + c1[x1 - g + 1][y1 - 1];
                                        if (a == 0) {
                                            build = true;
                                        } else {
                                            if (kol > 100 && i != 1) {
                                                x1 = getRandomInt(1, 10);
                                                y1 = getRandomInt(1, 10);
                                                nu = true;
                                                for (var t = 0; nu; t++) {
                                                    if ((c1[x1][y1] + c1[x1][y1 + 1] + c1[x1][y1 - 1] + c1[x1 + 1][y1] + c1[x1 - 1][y1] + c1[x1 + 1][y1 + 1] + c1[x1 - 1][y1 + 1] + c1[x1 + 1][y1 - 1] + c1[x1 - 1][y1 - 1]) != 0) {
                                                        nu = true;
                                                        x1 = getRandomInt(1, 10);
                                                        y1 = getRandomInt(1, 10);
                                                    } else {
                                                        nu = false;
                                                    }
                                                }
                                            }
                                            vector++;
                                            k--;
                                            build = false;
                                            break;
                                        }
                                    } else {
                                        vector++;
                                        k--;
                                        build = false;
                                        break;
                                    }
                                }
                            }
                            if (build) {
                                if (c1[x1 - k][y1] == 0) {
                                    c1[x1 - k][y1] = i + (j + 1) / 10;
                                } else {
                                    for (var r = 0; r < k; r++) {
                                        c1[x1 - r][y1] = 0;
                                    }
                                    vector++;
                                    k--;
                                    build = false;
                                    break;
                                }
                            }
                            break;
                        case 2: //right
                            var a = 0;
                            if (i == 1) { build = true; }
                            if (build == false) {
                                for (var g = 0; g < i + 2; g++) //проверка можно ли разместить здесь корабль
                                {
                                    if (x1 + g < 10) {
                                        a += c1[x1 + g - 1][y1] + c1[x1 + g - 1][y1 + 1] + c1[x1 + g - 1][y1 - 1];
                                        if (a == 0) { build = true; } else {
                                            if (kol > 100 && i != 1) {
                                                x1 = getRandomInt(1, 10);
                                                y1 = getRandomInt(1, 10);
                                                nu = true;
                                                for (var t = 0; nu; t++) {
                                                    if ((c1[x1][y1] + c1[x1][y1 + 1] + c1[x1][y1 - 1] + c1[x1 + 1][y1] + c1[x1 - 1][y1] + c1[x1 + 1][y1 + 1] + c1[x1 - 1][y1 + 1] + c1[x1 + 1][y1 - 1] + c1[x1 - 1][y1 - 1]) != 0) {
                                                        nu = true;
                                                        x1 = getRandomInt(1, 10);
                                                        y1 = getRandomInt(1, 10);
                                                    } else {
                                                        nu = false;
                                                    }
                                                }
                                            }
                                            vector = 0;
                                            k--;
                                            build = false;
                                            break;
                                        }
                                    } else {
                                        vector = 0;
                                        k--;
                                        build = false;
                                        break;
                                    }
                                }
                            }
                            if (build) {
                                if (c1[x1 + k][y1] == 0) {
                                    c1[x1 + k][y1] = i + (j + 1) / 10;
                                } else {
                                    for (var r = 0; r < k; r++) {
                                        c1[x1 + r][y1] = 0;
                                    }
                                    vector = 0;
                                    k--;
                                    build = false;
                                    break;
                                }
                            }
                            break;
                    }
                }
            }
        }
        var gg = 0;
        var kk = 0;
        for (var i = 0; i < 12; i++) { //Обнуление массива
            for (var j = 0; j < 12; j++) {
                gg += c1[i][j];
                kk += c2[i][j];
            }
        }
    }
    function draw(size, napr, x, y) {
        var n = w1 / 10;
        var l = h1 / 10;
        var rx = Math.trunc(x / n);
        var ry = Math.trunc(y / l);
        for (var i = 0; i < size; i++) {
            if (napr == 'null') {
                if (flag2 == 1) { c1[rxS][ryS] = 0; }
                c1[rx][ry] = 1;
                rxS = rx;
                ryS = ry;
            }
            if (napr == 'left') {
                if (flag2 == 1) { c1[rxS - i][ryS] = 0; }
                c1[rx - i][ry] = 1;
                rxS = rx;
                ryS = ry;
            }
            if (napr == 'right') {
                if (flag2 == 1) { c1[rxS + i][ryS] = 0; }
                c1[rx + i][ry] = 1;
                rxS = rx;
                ryS = ry;
            }
            if (napr == 'up') {
                if (flag2 == 1) { c1[rxS][ryS - i] = 0; }
                c1[rx][ry - i] = 1;
                rxS = rx;
                ryS = ry;
            }
            if (napr == 'down') {
                if (flag2 == 1) { c1[rxS][ryS + i] = 0; }
                c1[rx][ry + i] = 1;
                rxS = rx;
                ryS = ry;
            }
        }
        flag2 = 1;
    }
    function get_mouse_coords2(e) { //Получение координат мыши
        var m2 = {};
        var rect = field2.getBoundingClientRect();
        if ((e.clientX - rect.left < 1) || (e.clientX - rect.left > w2 - 1)) {
            flag_m = false;
        }
        m2.x = e.clientX - rect.left;
        m2.y = e.clientY - rect.top;
        console.log(m2.x, m2.y)
        return m2;
    }
    var id_k = 0;
    var sdvig_x = 0;
    var sdvig_y = 0;
    field2.onmousedown = function(e) { //Нажатие ЛКМ
		if(flag==false){
	   var n = w1 / 10;
        var l = h1 / 10;
        flag2 = 0;
        size1 = 0;
        napr1 = 'null';
        var rx = Math.trunc(m2.x / 30) + 1;
        var ry = Math.trunc(m2.y / 30) + 1;
        id_k = c1[rx][ry];
        save_x = [];
        save_y = [];
        mass_k_x = [];
        mass_k_y = [];
        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 12; j++) {
                if (c1[i][j] == id_k) {
                    mass_k_x.push(i);
                    mass_k_y.push(j);
                    save_x.push(i);
                    save_y.push(j);
                }
            }
        }
        rxS = rx;
        ryS = ry;
        if (id_k > 1) {
            flag_m = true;
        }
		}
    }
    field2.onmouseup = function(e) { //Отпускание ЛКМ
        flag_m = false;
        var chist_s1 = 0;
        var chist_s2 = 0;
        for (var i = 0; i < 12; i++) {
            for (var j = 0; j < 12; j++) {
                if ((c5[i][j] > 0) && (c1[i][j] == 0)) {
                    chist_s1++;
                }
                if (c5[i][j] > 0) {
                    chist_s2++;
                }
            }
        }
        if (chist_s1 == chist_s2) {
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 12; j++) {
                    if (c5[i][j] > 1) {
                        c1[i][j] = c5[i][j];
                    }
                }
            }
        } else {
            for (var i = 0; i < save_x.length; i++) {
                c1[save_x[i]][save_y[i]] = id_k;
            }
        }
        flag2 = 0;
        mass_k_x = [];
        mass_k_y = [];
        rxS = 0;
        ryS = 0;
        claer(c5);
        panel2.draw(c1, c5, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 2);
    }
    field2.onmousemove = function(e) {
        m2 = get_mouse_coords2(e);
        if (flag_m) {
            x = Math.trunc(m2.x / 30) + 1;
            y = Math.trunc(m2.y / 30) + 1;
            var x_l = x - rxS;
            var y_l = y - ryS;
            for (var i = 0; i < 12; i++) {
                for (var j = 0; j < 12; j++) {
                    if (c1[i][j] == id_k) {
                        c1[i][j] = 0;
                    }
                }
            }
            c5[rxS][ryS] = 0;
            for (var i = 0; i < mass_k_x.length; i++) {
                c5[mass_k_x[i]][mass_k_y[i]] = 0;
                if (mass_k_x.length == 1) {
                    for (var j = 0; j < 3; j++) {
                        c5[mass_k_x[0] + 1][mass_k_y[0] + j - 1] = 0;
                        c5[mass_k_x[0] - 1][mass_k_y[0] + j - 1] = 0;
                        c5[mass_k_x[0]][mass_k_y[0] - 1] = 0;
                        c5[mass_k_x[0]][mass_k_y[0] + 1] = 0;
                    }
                } else {
                    if (mass_k_x[0] == mass_k_x[1]) {
                        c5[mass_k_x[i] + 1][mass_k_y[i]] = 0;
                        c5[mass_k_x[i] - 1][mass_k_y[i]] = 0;
                        for (var j = 0; j < 5; j++) {
                            c5[mass_k_x[0] + j - 1][mass_k_y[0] - 1] = 0;
                            if (mass_k_x[(mass_k_x.length) - 1] + j - 1 > 0) {
                                c5[mass_k_x[(mass_k_x.length) - 1] + j - 1][(mass_k_y[(mass_k_x.length) - 1]) + 2] = 0;
                                c5[mass_k_x[(mass_k_x.length) - 1] + j - 2][(mass_k_y[(mass_k_x.length) - 1]) + 1] = 0;
                            }
                        }
                    }
                    if (mass_k_y[0] == mass_k_y[1]) {
                        c5[mass_k_x[i]][mass_k_y[i] - 1] = 0;
                        c5[mass_k_x[i]][mass_k_y[i] + 1] = 0;
                        for (var j = 0; j < 5; j++) {
                            c5[mass_k_x[0] - 1][mass_k_y[0] + j - 1] = 0;
                            if ((mass_k_y[(mass_k_x.length) - 1]) + j - 1) {
                                c5[mass_k_x[(mass_k_x.length) - 1] + 2][(mass_k_y[(mass_k_x.length) - 1]) + j - 1] = 0;
                                c5[mass_k_x[(mass_k_x.length) - 1] + 1][(mass_k_y[(mass_k_x.length) - 1]) + j - 2] = 0;
                            }
                        }
                    }
                }
            }
            c5[x][y] = id_k;
            for (var i = 0; i < mass_k_x.length; i++) {
                mass_k_x[i] += x_l;
                mass_k_y[i] += y_l;
                c5[mass_k_x[i]][mass_k_y[i]] = id_k;
                if (mass_k_x.length == 1) {
                    for (var j = 0; j < 3; j++) {
                        c5[mass_k_x[0] + 1][mass_k_y[0] + j - 1] = id_k - mass_k_x.length;
                        c5[mass_k_x[0] - 1][mass_k_y[0] + j - 1] = id_k - mass_k_x.length;
                        c5[mass_k_x[0]][mass_k_y[0] - 1] = id_k - mass_k_x.length;
                        c5[mass_k_x[0]][mass_k_y[0] + 1] = id_k - mass_k_x.length;
                    }
                } else {
                    if (mass_k_x[0] == mass_k_x[1]) {
                        c5[mass_k_x[i] + 1][mass_k_y[i]] = id_k - mass_k_x.length;
                        c5[mass_k_x[i] - 1][mass_k_y[i]] = id_k - mass_k_x.length;
                        for (var j = 0; j < 3; j++) {
                            c5[mass_k_x[0] + j - 1][mass_k_y[0] - 1] = id_k - mass_k_x.length;
                            c5[mass_k_x[mass_k_x.length - 1] + j - 1][mass_k_y[mass_k_x.length - 1] + 1] = id_k - mass_k_x.length;
                        }
                    }
                    if (mass_k_y[0] == mass_k_y[1]) {
                        c5[mass_k_x[i]][mass_k_y[i] - 1] = id_k - mass_k_y.length;
                        c5[mass_k_x[i]][mass_k_y[i] + 1] = id_k - mass_k_y.length;
                        for (var j = 0; j < 3; j++) {
                            c5[mass_k_x[0] - 1][mass_k_y[0] + j - 1] = id_k - mass_k_x.length;
                            c5[mass_k_x[mass_k_x.length - 1] + 1][mass_k_y[mass_k_x.length - 1] + j - 1] = id_k - mass_k_x.length;
                        }
                    }
                }
            }
            rxS = x;
            ryS = y;
            panel2.draw(c1, c5, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 2);
            flag2 = 1;
        }
    }
    function get_mouse_coords(e) { //Получение координат мыши
        var m = {};
        var rect = field1.getBoundingClientRect();
        m.x = e.clientX - rect.left;
        m.y = e.clientY - rect.top;
        return m;
    }
    field1.onmousedown = function(e) {
		requestAnimationFrame(tick);
		slider1.style.opacity=" 100";
		slider2.style.opacity=" 100";
		var tim=0;
		if(rm==0){
			timer1.stop();
			 tim=1;
			timer1 = new Timer({
		  time: time,
		  fps: fps,
		  onTick: tick,
		  onEnd: endTimer,
		  onStart: onTimerStart
			});
			  timer1.start();
		rm=1;
		}else{
			timer1= new Timer({
		  time: time,
		  fps: fps,
		  onTick: tick,
		  onEnd: endTimer,
		  onStart: onTimerStart
			});
			 timer1.start();
			 rm=0;
		}
        var n = w1 / 10;
        var l = h1 / 10;
        m = get_mouse_coords(e);
        x = m.x;
        y = m.y;
        var rx = Math.trunc(m.x / 30) + 1;
        var ry = Math.trunc(m.y / 30) + 1;
        flag_m = true;
        if (flag) { /// процесс игры
            o1p.style.display = "flex";
            o1g.style.display = "none";
            o2g2.style.display = "none";
            o2p.style.display = "flex";
            o2g.style.display = "none";
            o1g2.style.display = "none";
            vistrel(c2, c3, rx, ry, panel1, false);
            Hod_human++;
            if (flag_d || flag_v) {
                flag_d = false;
                flag_v = false;
            } else {
                Brain(c1, c4, 1, panel2);
                var b_a = true
                for (var i = 0; b_a; i++) {
                    if (flag_d || flag_v) {
                        flag_d = false;
                        flag_v = false;
                        Brain(c1, c4, 1, panel2);
                    } else { b_a = false; }
                }
            }
            if (end_game(c4) == 20) {
                panel2.draw(c4, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 2);
                panel1.draw(c3, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
                alert("Горилла-сапер победила!"); //////////////// проаерка на конйц игры
                flag = false;
            }
            if (end_game(c3) == 20) {
                panel2.draw(c4, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 2);
                panel1.draw(c3, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
                alert("Вы победили!");
                flag = false;
            }
        }
    }
    field1.onmouseup = function(e) { //Отпускание ЛКМ

        flag_m = false;
    }
    function end_game(c) {
        var summ = 0;
        for (var i = 0; i < 12; i++) { //Обнуление массива
            for (var j = 0; j < 12; j++) {
                if (c[i][j] < -1) { summ++; }
            }
        }
        return summ;
    }
    var kor_x_b = [];
    var kor_y_b = [];
    var kor_napr_b = [];
    var kor_size_b = [];
    var kor_x_h = [];
    var kor_y_h = [];
    var kor_napr_h = [];
    var kor_size_h = [];
    var d1 = new Image();
    d1.src = "d1.png";
    function drow_png(x, y, napr, size) {
        var d1 = new Image();
        d1.src = "d1.png";
        var d2h = new Image();
        d2h.src = "d2h.png";
        var d3h = new Image();
        d3h.src = "d3h.png";
        var d4h = new Image();
        d4h.src = "d4h.png";
    }
    function vistrel(c_f, c_o, rx, ry, panel1, bot) // обработчик выстрела
    {
        if (c_f[rx][ry] > 1 && c_o[rx][ry] >= 0) {
            c_o[rx][ry] = c_f[rx][ry];

            if (deth(c_f, c_o, rx, ry)) // если убил
            {
                var m_b_x = [];
                var m_b_y = [];
                flag_d = true;
                for (var o = 0; o < 12; o++) {
                    for (var p = 0; p < 12; p++) {
                        if (c_o[o][p] == c_f[rx][ry]) {
                            c_o[o][p] = (-1) * (c_f[rx][ry]);
                            m_b_x.push(o);
                            m_b_y.push(p);
                        }
                    }
                }
					if(diff<3){
						for (var i = 0; i < m_b_x.length; i++) {
							if (m_b_x.length == 1) {
								for (var j = 0; j < 3; j++) {
									c_o[m_b_x[0] + 1][m_b_y[0] + j - 1] = 1;
									c_o[m_b_x[0] - 1][m_b_y[0] + j - 1] = 1;
									c_o[m_b_x[0]][m_b_y[0] - 1] = 1;
									c_o[m_b_x[0]][m_b_y[0] + 1] = 1;
								}
							} else {
								if (m_b_x[0] == m_b_x[1]) {
									c_o[m_b_x[i] + 1][m_b_y[i]] = 1;
									c_o[m_b_x[i] - 1][m_b_y[i]] = 1;

									for (var j = 0; j < 3; j++) {
										c_o[m_b_x[0] + j - 1][m_b_y[0] - 1] = 1;
										c_o[m_b_x[m_b_x.length - 1] + j - 1][m_b_y[m_b_x.length - 1] + 1] = 1;
									}
								}
								if (m_b_y[0] == m_b_y[1]) {
									c_o[m_b_x[i]][m_b_y[i] - 1] = 1;
									c_o[m_b_x[i]][m_b_y[i] + 1] = 1;

									for (var j = 0; j < 3; j++) {
										c_o[m_b_x[0] - 1][m_b_y[0] + j - 1] = 1;
										c_o[m_b_x[m_b_x.length - 1] + 1][m_b_y[m_b_x.length - 1] + j - 1] = 1;

									}
								}
							}
						}
					}
                if (bot) {
                    kor_x_b.push(m_b_x[0]);
                    kor_y_b.push(m_b_y[0]);
                    kor_size_b.push(m_b_x.length);
                    if (m_b_x.length > 1) {
                        if (m_b_x[0] == m_b_x[1]) {
                            kor_napr_b.push("hor");
                        }
                        if (m_b_y[0] == m_b_y[1]) {
                            kor_napr_b.push("ver");
                        }
                    } else {
                        kor_napr_b.push("o");
                    }
                    o2p.style.display = "none";
					o2g2.style.display = "flex";
                    o2g.style.display = "none";
                    o1g2.style.display = "none";
                    o1p.style.display = "none";
					o1g.style.display = "flex";
                    for (var i = 0; i < m_b_x.length; i++) {
                        if (m_b_x.length == 1) {
                            for (var j = 0; j < 3; j++) {
                                c_o[m_b_x[0] + 1][m_b_y[0] + j - 1] = 1;
                                c_o[m_b_x[0] - 1][m_b_y[0] + j - 1] = 1;
                                c_o[m_b_x[0]][m_b_y[0] - 1] = 1;
                                c_o[m_b_x[0]][m_b_y[0] + 1] = 1;
                            }
                        } else {
                            if (m_b_x[0] == m_b_x[1]) {
                                c_o[m_b_x[i] + 1][m_b_y[i]] = 1;
                                c_o[m_b_x[i] - 1][m_b_y[i]] = 1;
                                for (var j = 0; j < 3; j++) {
                                    c_o[m_b_x[0] + j - 1][m_b_y[0] - 1] = 1;
                                    c_o[m_b_x[m_b_x.length - 1] + j - 1][m_b_y[m_b_x.length - 1] + 1] = 1;
                                }
                            }
                            if (m_b_y[0] == m_b_y[1]) {
                                c_o[m_b_x[i]][m_b_y[i] - 1] = 1;
                                c_o[m_b_x[i]][m_b_y[i] + 1] = 1;

                                for (var j = 0; j < 3; j++) {
                                    c_o[m_b_x[0] - 1][m_b_y[0] + j - 1] = 1;
                                    c_o[m_b_x[m_b_x.length - 1] + 1][m_b_y[m_b_x.length - 1] + j - 1] = 1;
                                }
                            }
                        }
                    }
                } else {
                    // выстрел человека
                    o1p.style.display = "none";
					o1g2.style.display = "flex";
                    o1g.style.display = "none";
                    o2g2.style.display = "none";
                    o2p.style.display = "none";
					o2g.style.display = "flex";
                    kor_x_h.push(m_b_x[0]);
                    kor_y_h.push(m_b_y[0]);
                    kor_size_h.push(m_b_x.length);
                    if (m_b_x.length > 1) {
                        if (m_b_x[0] == m_b_x[1]) {
                            kor_napr_h.push("hor");
                        }
                        if (m_b_y[0] == m_b_y[1]) {
                            kor_napr_h.push("ver");
                        }
                    } else {
                        kor_napr_h.push("o");
                    }
                }
                panel1.draw(c_o, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
            } else {
                flag_d = false;
            }
            panel1.draw(c_o, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
            flag_v = true;
        } else {
            if (c_o[rx][ry] == 0) {
                c_o[rx][ry] = 1;
                panel1.draw(c_o, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
            }
            flag_v = false;
        }
    }
    function deth(с_f, c_o, x, y) // проверка на смерть кораблика
    {
        var d;
        var index = с_f[x][y];
        var с_f_count = 0;
        var c_o_count = 0;
        for (var o = 0; o < 12; o++) { //Обнуление массива
            for (var p = 0; p < 12; p++) {
                if (c_o[o][p] == с_f[x][y]) {
                    c_o_count++;
                }
                if (с_f[o][p] == с_f[x][y]) {
                    с_f_count++;
                }
            }
        }
        if (с_f_count == c_o_count) { d = true; } else { d = false; }
        return d
    }
    function proverka(x, y) // проверка на перетаскивание кораблика
    {
        var n = w1 / 10;
        var l = h1 / 10;
        var rx = Math.trunc(x / n);
        var ry = Math.trunc(y / l);
        if (c1[rx + 1][ry] == 1) {
            if (napr1 !== 'left') {
                napr1 = 'right;'
                size1++;
                draw(size1, napr1, x + n, y);
                proverka(x + n, y);
            }
        } else {
            if (c1[rx - 1][ry] == 1) {
                if (napr1 !== 'right') {
                    napr1 = 'left';
                    size1++;
                    draw(size1, napr1, x - n, y);
                    proverka(x - n, y);
                }
            } else {
                if (c1[rx][ry + 1] == 1) {
                    if (napr1 !== 'up') {
                        napr1 = 'down';
                        size1++;
                        draw(size1, napr1, x, y + l);
                        proverka(x, y + l);
                    }
                } else {
                    if (c1[rx][ry - 1] == 1) {
                        if (napr1 !== 'down') {
                            napr1 = 'up';
                            size1++;
                            draw(size1, napr1, x, y - l);
                            proverka(x, y - l);
                        }
                    } else {
                        draw(1, 'null', x, y);
                    }
                }
            }
        }

    }
    var popad = 0;
    var napr_p;
    var x1, y1;
    var napr_last = [0, 0, 0, 0];
    function sleep(ms, f) {
        return (
            setTimeout(f, ms)
        )
    }
    function Brain(cf, co, dif, _panel2) // бот
    {
        Hod_bot++;
        var algoritm = 1;
        var p_b;
        if (dif == 1) {
            p_b = true;
        } else {
            if (dif == 0) {
                p_b = false;
            }
        }
        if (popad == 0) {
            if (algoritm == 1) {
                if (diff == 3) { var luck = getRandomInt(0, getRandomInt(2, 4)); }
                if (diff == 2) { var luck = getRandomInt(0, getRandomInt(4, 6)); }
                if (diff == 1) { var luck = 1; }
                if (luck == 0) {
                    for (var i = 1; i < 11; i++) {
                        for (var j = 1; j < 11; j++) {
                            if ((cf[i][j] > 1) && (co[i][j] == 0)) {
                                x1 = i;
                                y1 = j;
                                i = 12;
                                j = 12;
                            }
                        }
                    }
                } else {
                    x1 = getRandomInt(1, 10);
                    y1 = getRandomInt(1, 10);
                    var br = true // генерация координаты для выстрела
                    for (var i = 0; br; i++) {
                        if (co[x1][y1] != 0) {
                            x1 = getRandomInt(1, 10);
                            y1 = getRandomInt(1, 10);
                        } else {
                            br = false;
                        }
                    }
                }
                vistrel(cf, co, x1, y1, _panel2, p_b);
                if (flag_v) {
                    popad = 1;
                    if (flag_d) { popad = 0; }
                }
            }
            if (algoritm == 2) {
                for (var i = 1; i < 11; i++) { //Обнуление массива
                    for (var j = 1; j < 11; j++) {
                        if (co[i][j] == 0) {
                            x1 = i;
                            y1 = j;
                            vistrel(cf, co, i, j, _panel2, p_b);
                            if (flag_v) {
                                popad = 1;
                                if (flag_d) { popad = 0; }
                            }
                            i = 12;
                            j = 12;
                        }
                    }
                }
            }
        } else {
            if (popad == 1) {
                napr_last[napr_p] = napr_p;
                napr_p = getRandomInt(0, 3); // 0=top // 1=down // 2=right // 3=left
                var n = true

                if (algoritm == 2) {
                    napr_p = 2;
                    if (co[x1 + 1][y1] != 0) {
                        napr_p = 1;
                    }
                }
                if (algoritm == 1) {
                    for (var i = 0; n; i++) {
                        if (napr_p == 0) {
                            if (co[x1][y1 - 1] != 0) {
                                napr_p = getRandomInt(0, 3);
                            } else {
                                n = false
                            }
                        }
                        if (napr_p == 1) {
                            if (co[x1][y1 + 1] != 0) {
                                napr_p = getRandomInt(0, 3);
                            } else {
                                n = false
                            }
                        }
                        if (napr_p == 2) {
                            if (co[x1 + 1][y1] != 0) {
                                napr_p = getRandomInt(0, 3);
                            } else {
                                n = false
                            }
                        }
                        if (napr_p == 3) {
                            if (co[x1 - 1][y1] != 0) {
                                napr_p = getRandomInt(0, 3);
                            } else {
                                n = false
                            }
                        }
                    }
                }
                if (napr_p == 0) {
                    vistrel(cf, co, x1, y1 - 1, _panel2, p_b);
                    if (flag_v) {
                        popad = 2;
                        if (flag_d) { popad = 0; }

                    }
                }
                if (napr_p == 1) {
                    vistrel(cf, co, x1, y1 + 1, _panel2, p_b);
                    if (flag_v) {
                        popad = 2;
                        if (flag_d) { popad = 0; }
                    }
                }
                if (napr_p == 2) {
                    vistrel(cf, co, x1 + 1, y1, _panel2, p_b);
                    if (flag_v) {
                        popad = 2;
                        if (flag_d) { popad = 0; }
                    }
                }
                if (napr_p == 3) {
                    vistrel(cf, co, x1 - 1, y1, _panel2, p_b);
                    if (flag_v) {
                        popad = 2;
                        if (flag_d) { popad = 0; }
                    }
                }
            } else {
                if (popad > 1) {

                    if (napr_p == 0) {
                        vistrel(cf, co, x1, y1 - popad, _panel2, p_b);
                        if (flag_v) {
                            popad++;
                            if (flag_d) { popad = 0; }

                        } else {
                            popad = 1;
                            napr_p = 1;
                        }
                    }
                    if (napr_p == 1) {
                        vistrel(cf, co, x1, y1 + popad, _panel2, p_b);
                        if (flag_v) {
                            popad++;
                            if (flag_d) { popad = 0; }

                        } else {
                            popad = 1;
                            napr_p = 0;
                        }
                    }
                    if (napr_p == 2) {
                        vistrel(cf, co, x1 + popad, y1, _panel2, p_b);
                        if (flag_v) {
                            popad++;
                            if (flag_d) { popad = 0; }

                        } else {
                            popad = 1;
                            napr_p = 3;
                        }
                    }
                    if (napr_p == 3) {
                        vistrel(cf, co, x1 - popad, y1, _panel2, p_b);
                        if (flag_v) {
                            popad++;
                            if (flag_d) { popad = 0; }

                        } else {
                            popad = 1;
                            napr_p = 2;
                        }
                    }
                }
            }
        }
    }
    panel1.draw(c3, c6, w1, h1, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 1);
    panel2.draw(c1, c6, w2, h2, kor_x_b, kor_y_b, kor_size_b, kor_napr_b, kor_x_h, kor_y_h, kor_size_h, kor_napr_h, 2);
}