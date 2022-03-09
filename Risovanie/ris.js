function draw() {
	let canva = document.getElementById('canva')
	let ctx = canva.getContext('2d')
	ctx.lineWidth = 5; // толщина линии
  // x,y,radius,startAngle,endAngle,anticlockwise
   ctx.arc(200,200,75,0, 2*Math.PI,true);
   ctx.stroke();
}