function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
	ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "20";
ctx.moveTo(100,150);
ctx.lineTo(150,75);
ctx.lineCap = "round";
ctx.stroke();   
}