$(document).ready(function() {
    $(".button2").click(function() {
      var characterSet = "";
      if (document.getElementById("cbox1").checked)
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (document.getElementById("cbox2").checked)
        characterSet += "abcdefghijklmnopqrstuvwxyz";
      if (document.getElementById("cbox3").checked) characterSet += "0123456789";
      if (document.getElementById('cbox4').checked)
        characterSet += '-=~!@#$%^&*()_+[]\\{}|;\':",./<>?';
      else if (document.getElementById('cbox4').checked)
        characterSet += '!@#$%^&*(){}[]?';
  
      // handling of special characters
      var extraChars = document.getElementById('cbox4')
                               .value;
      for (const character of extraChars) {
        if (character !== ' ' && characterSet.indexOf(character) == -1) {
          characterSet += character;
        }
      }
  
      // Generate the password based on input.
      var passwordLength = Number(document.getElementById('passwordLength')
                                          .value);
      var randomNums = new Uint8Array(passwordLength);
      window.crypto.getRandomValues(randomNums);
      var password = '';
      for (var i = 0; i < passwordLength; ++i) {
        password += characterSet.charAt(randomNums[i] % characterSet.length);
      }
  
      // Show the password.
      document.getElementById("result")
              .value = password;
    });
  });
  
  
  
  function copyPassword(){
  
      document.getElementById("result").select();
  
      document.execCommand("Copy");
  
      alert("Your Strong Password has been copied to the clipboard!");
  
  }
  
  
  