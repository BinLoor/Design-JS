function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')

let positionX = 75; // начальная позиция X координаты

setInterval(function() {
    ctx.beginPath();
    ctx.clearRect(0,0,600,300); // очистка холста
    ctx.fillStyle = "pink"; // цвет заливки
    ctx.rect(positionX, 75, 75, 75); // x, y, width, height
    ctx.fill();
    positionX++; // изменение позиции
    if(positionX > 600) {
        positionX = 75;
    }
},60); // запуск каждые 60 миллисекунд
}