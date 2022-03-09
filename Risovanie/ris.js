function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
	ctx.moveTo(200,100);
// команда рисования линии с координатами конца линии
ctx.lineTo(500,200);
ctx.strokeStyle = "pink"; //цвет линии
ctx.lineWidth = "10"; //толщина линии
ctx.stroke(); // обводка линии

// координаты начала второй линии X,Y
ctx.moveTo(300,100);
ctx.lineTo(500,50);
ctx.stroke();    
}