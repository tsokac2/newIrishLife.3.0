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