function draw() {
	 let canva = document.getElementById('canva');
let ctx = canva.getContext('2d');
let size = 75;

setInterval(function() {
    ctx.beginPath();
    ctx.clearRect(0,0,600,300); // очистка холста
    ctx.fillStyle = "pink"; // цвет заливки
    ctx.rect(75, 75, size, size); // x, y, width, height
    ctx.fill();
    size++; // увеличение размера
    if(size > 225) {
        size = 75;
    }
	},60); // запуск каждые 60 миллисекунд  
} 