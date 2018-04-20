

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

$("#buttonShow").click(function(drawTable){
	load();
});

function succesResult(data) {
	$.each(data, function (i,val) {
		var tr = "<tr>"+
			"<td>" + val.id + "</td>" +
			"<td>" + val.name + "</td>" +
			"<td>" + val.username + "</td>" +
			"</tr>";
		$(tr).appendTo("tbody");
	});
}