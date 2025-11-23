function getInfo() {
    console.log("Getting Function Called");
    var nameInput = document.getElementById('username');
    var name = nameInput.value;
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var passwordInput = document.getElementById('password');
    var pass = passwordInput.value;
    console.log(name, email, pass);
}
