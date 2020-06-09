$(document).ready(function() {
    $('#login').click(function(display) {

        var username = $('#name').val();
        var password = $('#psw').val();
        var uname = "admin";
        var passw = 12345;

        if (username == "") {
            alert('Please fill the field!!');

        } else if (password == "") {
            alert('Please fill the field!!');

        } else if (username.match(uname) && password.match(passw)) {
            return true;
        } else {
            alert('Please enter valid username & password!!');
        }
        display();
    });
    $('#login').click(function(display) {
        window.location.replace("main.html");
    });
});