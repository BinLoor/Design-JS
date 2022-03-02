let students = []
let current = 0

function LoadFromSite(){
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data) ['response'];
	})
}

function load_student(id) {
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}

function next() {
	document.getElementById('btnprev').disabled = false
	current++
	load_student(current)
	
	if (current == 4) {
		document.getElementById('btnnext').disabled = true
	}
}

function prev() {
	document.getElementById('btnnext').disabled = false
	current--
	load_student(current)
	
	if (current == 0) {
		document.getElementById('btnprev').disabled = true
	}
}

