function generate( len ) {
//    var length = "";
    //set password length/complexity
       var pwdlen = document.getElementById("userlength").value;
       //string of values that make a strong password
       var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

       var password = "";
   
       //create for loop to choose password characters based on the length received from user
       for(var i = 0; i <= pwdlen; i++){
           password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
       } 

        //add password to textbox/display area
        document.getElementById("display").value = password;

}

//set default length display of 10
document.getElementById("length").innerHTML = "Length: 10";

//Use length to return password string
document.getElementById("userlength").oninput = function(){

    if(document.getElementById("userlength").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("userlength").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

var output = document.getElementById('output');

function generator() {
    output.innerHTML = generate();
}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Your Strong Password has been copied to the clipboard!");

}

//buttons...not working as designed :-(
function manage(display) {
    var bt = document.getElementById('num');
    if (display.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
}  