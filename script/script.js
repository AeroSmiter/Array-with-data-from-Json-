$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    data: {get_param: 'value'},
    dataType: "json",
        cache: false,
        success: function (data) {
        $.each(data, function (i, val) {
            var tr = "<tr>" +
                "<td>"+ (i + 1) + "</td>" +
                "<td>"+ val.name + "</td>" +
                "</tr>";
            $(tr).appendTo("tbody");
        });
    }
});