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
		let td4 = $('<td><button onclick="show_info('+ i +')">Подробно</button></td>')
		
		tr.append(td1).append(td2).append(td3).append(td4) 
		
		table.append(tr)
		}
	}
}

function show_info(id) {
	let div = $('#info')
	let header = $('<h1>Информация о студенте №' + id + '</h1>')
	let name = $('<h3>' + students[id].name + ' ' + students[id].surname + '</h3>')
	let img = $('<img src="http:/http://217.71.129.139:4035/' + students[id].logo + '">')
	
	div.html('')
	div.append(header).append(name).append(img)
}