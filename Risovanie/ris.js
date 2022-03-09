function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')

ctx.beginPath(); // начало нового пути
ctx.lineWidth = 7; // толщина обводки
ctx.strokeStyle="green"; // цвет обводки
ctx.moveTo(75, 150); // координаты начальной точки
ctx.quadraticCurveTo(150, 0, 300, 150); // координаты точки искривления и конечной точки
ctx.stroke(); // команда обводки
}