let students = [
{'id':1, 'name':'Danila','surname':'Alferov'},
{'id':2, 'name':'Tihon','surname':'Balaganski'},
{'id':3, 'name':'Konstantin','surname':'Bobrovski'},
{'id':4, 'name':'Vladimir','surname':'Burikin'},
{'id':5, 'name':'Semen','surname':'Veligjanin'}
]
let current = 0

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

