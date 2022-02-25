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
if (current < students.length) {
	load_student(current)
	current++
}
else{
	document.getElementById('btnnext').disabled = true
}
}
