var newsletter = function(){
    document.getElementById("newsSent").addEventListener("click", send);
};

var validateName = function() {
    var valid;
    var name = document.getElementById("newsName");
    var nameValue = name.value.trim();

    if(nameValue === ""){
        pushErrorFor(name, "Enter Your name!");
        valid = false;
    } else if (nameValue.length < 2){
        pushErrorFor(name, "Enter Your full name!");
        valid = false;
    } else {
        pushSuccessFor(name);
        valid = true;
    }

    return valid;
};

var validateEmail = function() {
    var valid;
    var email = document.getElementById("newsEmail");
    var emailValue = email.value.trim();

    if(emailValue === "") {
        pushErrorFor(email, "Enter Your email address!");
        valid = false;
    } else if (!testEmail(emailValue)){
        pushErrorFor(email, "Enter valid email address!");
        valid = false;
    } else {
        pushSuccessFor(email);
        valid = true;
    }

    return valid;
};
/* START - CODE SOURCE: https://www.w3resource.com/javascript/form/email-validation.php*/
function testEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
/* END - CODE SOURCE: https://www.w3resource.com/javascript/form/email-validation.php*/
