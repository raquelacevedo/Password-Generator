function generate( len ) {
    var length = 10;

       //string of values that make a strong password
       var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

       var password = "";
   
       //create for loop to choose password characters
       for(var i = 0; i <= length; i++){
           password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
       } 

        //add password to textbox/display area
        document.getElementById("display").value = password;

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