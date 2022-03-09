function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
	ctx.beginPath();
	ctx.fillStyle = "pink";
	ctx.moveTo(225,150);
	ctx.lineTo(75,100);
	ctx.lineTo(200,50);
	ctx.fill();   
}