

function load()
{
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users',
		data: {get_param: 'value'},
		dataType: "json",
			cache: false,
			success: succesResult
		}
	);	
};

function showTable(){
	load();
}

$("#buttonShow").click(showTable);


function drawTable(i,val) {
		var tr = "<tr>"+
			"<td>" + val.id + "</td>" +
			"<td>" + val.name + "</td>" +
			"<td>" + val.username + "</td>" +
			"</tr>";
		$(tr).appendTo("tbody");
	}

function succesResult(data){
	$.each(data, drawTable);
}