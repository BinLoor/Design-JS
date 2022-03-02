let students = []
let max_id = -1

function LoadFromSite() {
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data) ['response']
		show_table()
	});
}
function show_table() {
	let table = $('#tbl_all')
	for (let i=0; i < students.length; i++) {
		if (i > max_id) {
			max_id = i
		let tr = $('<tr></tr>')
		
		let td1 = $('<td>' + students[i].id + '</td>')
		let td2 = $('<td>' + students[i].surname + '</td>')
		let td3 = $('<td>' + students[i].name + '</td>')
		
		tr.append(td1).append(td2).append(td3)
		
		table.append(tr)
		}
	}
}