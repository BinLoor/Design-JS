let arr = []
function generate() {
	let n = parseInt(document.getElementById('age').value)
for (let i=0; i<n; i++) {
	arr[i]=Math.floor(Math.random()*10)
}
let div = document.getElementById('mes')
for (let i=0;i<n; i++) {
	div.innerHTML += arr[i] + ' '
	}
}