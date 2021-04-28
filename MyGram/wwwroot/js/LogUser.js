var form = document.getElementById("MainForm");
var loginButton = document.getElementById("LogIn");

form.onsubmit = function (event) {
    event.preventDefault();
}

loginButton.onclick = function () {
    var userName = document.getElementById("User");
    var password = document.getElementById("Password");
    var user = {
        UserName: userName.value,
        Password: password.value
    };


    fetch('/Home/LogIn', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    }).then(response => response.text())
        .then(data => alert(data));
}