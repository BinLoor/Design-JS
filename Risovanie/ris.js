function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')

ctx.beginPath(); // начало нового пути
ctx.lineWidth = 7; // толщина обводки
ctx.strokeStyle="green"; // цвет обводки
ctx.moveTo(75, 75); // координаты начальной точки
ctx.quadraticCurveTo(100, 150, 300, 50); // координаты точки искривления и конечной точки
ctx.stroke(); // команда обводки
}