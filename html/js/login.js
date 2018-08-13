var attempts = 3;

function validateLogin() {
    var user = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;

    if (user == "admin" && password == "#h1dd3n!Pw") {
        window.location = "adminpanel.html";
        return false;
    } 
    else if (user == "alice" && password == "secret") {
        alert("Successfull");
        window.location = "success.html";
        return false;
    }
    else if (user == "user" && password == "password") {
        alert("Successfull");
        window.location = "success.html";
        return false;
    }
    //... more users
    else {
        attempts--;
        alert("You failed. Attempts left: " + attempts);

        if (attempts == 0) {
            document.getElementById("inputUsername").disabled = true;
            document.getElementById("inputPassword").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }

    }      
}