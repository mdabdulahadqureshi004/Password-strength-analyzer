function checkPassword(){

    let password =
    document.getElementById("password").value;

    let strengthText =
    document.getElementById("strengthText");

    let strengthBar =
    document.getElementById("strengthBar");

    let strength = 0;

    if(password.length >= 8){
        strength++;
    }

    if(/[A-Z]/.test(password)){
        strength++;
    }

    if(/[0-9]/.test(password)){
        strength++;
    }

    if(/[!@#$%^&*]/.test(password)){
        strength++;
    }

    if(strength == 1){
        strengthText.innerHTML =
        "Weak Password";

        strengthText.style.color = "red";

        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
    }

    else if(strength == 2){

        strengthText.innerHTML =
        "Medium Password";

        strengthText.style.color = "orange";

        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
    }

    else if(strength == 3){

        strengthText.innerHTML =
        "Good Password";

        strengthText.style.color = "blue";

        strengthBar.style.width = "75%";
        strengthBar.style.background = "blue";
    }

    else if(strength == 4){

        strengthText.innerHTML =
        "Strong Password";

        strengthText.style.color = "green";

        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }

    else{

        strengthText.innerHTML =
        "Enter Password";

        strengthBar.style.width = "0%";
    }
}

function togglePassword(){

    let password =
    document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    }

    else{
        password.type = "password";
    }
}
