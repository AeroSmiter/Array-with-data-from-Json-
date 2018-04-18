$.ajax({ 
    type: 'GET', 
    url: 'https://jsonplaceholder.typicode.com/users', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        $.each(data, function(index, element) {
            $('tbody').append($('<tr>', {
                text: element.id + "." 
            }));
			
			$('tbody').append($('<td>', {
                text: element.name
            }));
			
        });
    }
	
});

