function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')

ctx.beginPath();// начало нового пути
ctx.lineWidth = 7; // толщина обводки
ctx.strokeStyle="green"; // цвет обводки
ctx.moveTo(100, 150); // координаты начальной точки
ctx.bezierCurveTo(150, 50, 340, 10, 400, 200); // координаты точки искривления и конечной точки
ctx.stroke(); 
}