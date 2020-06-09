$(document).ready(function() {
    $('button').click(function() {
        $.getJSON("https://jsonplaceholder.typicode.com/todos", function(output) {
            $.each(output, function(i, list) {

                $("#myTable").append(
                    `<tr><td>${list.id}</td><td>${list.userId}</td><td>${list.title}</td><td>${list.completed}</td><td>
                <div>
                <input type="checkbox" 
                 ${(list.completed)? "checked disabled": ""}>
                 </div>
                 </td>
                </tr> `)
            });

            var promise = new Promise(function(resolve, reject) {
                var check = 0;
                $('input[type="checkbox"]').on('change', function() {
                    if ($(this).prop('checked') == true) {
                        check++;
                        if (check == 5) {
                            resolve("Congrats!!!. 5 Tasks have been Successfully Completed");
                        }

                    } else {
                        reject("Pease select 5 Tasks you have completed")

                    }

                });

            });
            promise
                .then(function(s) {
                    alert(s);
                })
                .catch(function(e) {
                    alert(e);
                })

        });

    });

});