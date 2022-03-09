function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
	 ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "30";
ctx.moveTo(100,75);
ctx.lineTo(300,75);
ctx.lineTo(300,200);
ctx.lineCap = "round";
ctx.stroke(); 
}