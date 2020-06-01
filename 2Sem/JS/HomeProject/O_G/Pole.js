class Pole {
    constructor(ctx, x, y) { //Конструктор поле, размеры поля
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }
    draw(c, c5, w, h, b_x, b_y, b_size, b_napr, h_x, h_y, h_size, h_napr, pan) {
        var d1 = new Image();
        d1.src = "d1.png";
        var d2h = new Image();
        d2h.src = "d2h.png";
        var d3h = new Image();
        d3h.src = "d3h.png";
        var d4h = new Image();
        d4h.src = "d4h.png";
        var d2v = new Image();
        d2v.src = "d2v.png";
        var d3v = new Image();
        d3v.src = "d3v.png";
        var d4v = new Image();
        d4v.src = "d4v.png";
        var ctx1 = document.getElementById("field1").getContext("2d");
        var ctx2 = document.getElementById("field2").getContext("2d");
        console.log(b_x, "<-b", "h->", h_x)
        this.ctx.clearRect(0, 0, 1400, 1000);
        var n = this.x / 10;
        var l = this.y / 10;
        for (var i = 1; i < 12; i++) {
            for (var j = 1; j < 12; j++) { //на кораблики прикрепить пнг динамиты		
                if (c[i][j] > 1) {
                    this.ctx.fillStyle = "#ff0000"; // попал
                    this.ctx.fillRect((i - 1) * n, (j - 1) * l, n, l);
                    this.ctx.stroke();
                } else {
                    if (c[i][j] == 1) {
                        this.ctx.fillStyle = "#f2b614"; // мимо
                        this.ctx.fillRect((i - 1) * n, (j - 1) * l, n, l);
                        this.ctx.stroke();
                    } else {
                    }
                }
                if ((c5[i][j] < 1) && (c5[i][j] > 0)) {
                    this.ctx.strokeStyle = "#f2b614";
                    this.ctx.strokeRect((i - 1) * n, (j - 1) * l, n, l);
                    this.ctx.stroke();
                }
                if (c5[i][j] > 1) {
                    this.ctx.fillStyle = "#ff0000";
                    this.ctx.fillRect((i - 1) * n, (j - 1) * l, n, l);


                } else {
                    if (c5[i][j] == 1) {
                        this.ctx.fillStyle = "#42648f";
                        this.ctx.fillRect((i - 1) * n, (j - 1) * l, n, l);
                    } else {
                        if (c5[i][j] < -1) {
                            this.ctx.fillStyle = "#1e1e1e";
                            this.ctx.fillRect((i - 1) * n, (j - 1) * l, n, l);
                        }
                    }
                }
                if (this.ctx == ctx2) {
                    for (var k = 0; k < b_x.length; k++) {

                        if ((b_x[k] == i) && (b_y[k] == j)) {

                            if (b_napr[k] == "o") {
                                ctx2.drawImage(d1, (i - 1) * n, (j - 1) * l, n, l);
                            }
                            if (b_napr[k] == "ver") {
                                if (b_size[k] == 2) {
                                    ctx2.drawImage(d2h, (i - 1) * n, (j - 1) * l, n * b_size[k], l);
                                } else {
                                    if (b_size[k] == 3) {
                                        ctx2.drawImage(d3h, (i - 1) * n, (j - 1) * l, n * b_size[k], l);
                                    } else {
                                        if (b_size[k] == 4) {
                                            ctx2.drawImage(d4h, (i - 1) * n, (j - 1) * l, n * b_size[k], l);
                                        }
                                    }
                                }
                            }
                            if (b_napr[k] == "hor") {
                                if (b_size[k] == 2) {
                                    ctx2.drawImage(d2v, (i - 1) * n, (j - 1) * l, n, l * b_size[k]);
                                } else {
                                    if (b_size[k] == 3) {
                                        ctx2.drawImage(d3v, (i - 1) * n, (j - 1) * l, n, l * b_size[k]);
                                    } else {
                                        if (b_size[k] == 4) {
                                            ctx2.drawImage(d4v, (i - 1) * n, (j - 1) * l, n, l * b_size[k]);
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
                if (this.ctx == ctx1) {
                    for (var k = 0; k < h_x.length; k++) {
                        if ((h_x[k] == i) && (h_y[k] == j)) {
                            if (h_napr[k] == "o") {
                                ctx1.drawImage(d1, (i - 1) * n, (j - 1) * l, n, l);
                            }
                            if (h_napr[k] == "ver") {
                                if (h_size[k] == 2) {
                                    ctx1.drawImage(d2h, (i - 1) * n, (j - 1) * l, n * h_size[k], l);
                                } else {
                                    if (h_size[k] == 3) {
                                        ctx1.drawImage(d3h, (i - 1) * n, (j - 1) * l, n * h_size[k], l);
                                    } else {
                                        if (h_size[k] == 4) {
                                            ctx1.drawImage(d4h, (i - 1) * n, (j - 1) * l, n * h_size[k], l);
                                        }
                                    }
                                }
                            }
                            if (h_napr[k] == "hor") {
                                if (h_size[k] == 2) {
                                    ctx1.drawImage(d2v, (i - 1) * n, (j - 1) * l, n, l * h_size[k]);
                                } else {
                                    if (h_size[k] == 3) {
                                        ctx1.drawImage(d3v, (i - 1) * n, (j - 1) * l, n, l * h_size[k]);
                                    } else {
                                        if (h_size[k] == 4) {
                                            ctx1.drawImage(d4v, (i - 1) * n, (j - 1) * l, n, l * h_size[k]);
                                        }
                                    }
                                }
                            }

                        }
                    }
                }

            }
        }
    }
}