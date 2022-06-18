var password1 = document.getElementById("password1");
var password1 = document.getElementById("password2");
var password1 = document.getElementById("password3");
var password1 = document.getElementById("password4");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 15;
    var password1 = "";
    var password2 = "";
    var password3 = "";
    var password4 = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber1 = Math.floor(Math.random() * chars.length);
   var randomNumber2 = Math.floor(Math.random() * chars.length);
   var randomNumber3 = Math.floor(Math.random() * chars.length);
   var randomNumber4 = Math.floor(Math.random() * chars.length);
   password1 += chars.substring(randomNumber1, randomNumber1 +1);
   password2 += chars.substring(randomNumber2, randomNumber2 +1)
   password3 += chars.substring(randomNumber3, randomNumber3 +1)
   password4 += chars.substring(randomNumber4, randomNumber4 +1)
  }
        document.getElementById("password1").value = password1;
        document.getElementById("password2").value = password2;
        document.getElementById("password3").value = password3;
        document.getElementById("password4").value = password4;
 }

 function myFunction1() {
    /* Get the text field */
    var copyText = document.getElementById("password1");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!    ' + copyText.value,
        showConfirmButton: false,
        timer: 1500
      })
  }
  function myFunction2() {
    /* Get the text field */
    var copyText = document.getElementById("password2");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!    ' + copyText.value,
        showConfirmButton: false,
        timer: 1500
      })
  }
  function myFunction3() {
    /* Get the text field */
    var copyText = document.getElementById("password3");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!    ' + copyText.value,
        showConfirmButton: false,
        timer: 1500
      })
  }
  function myFunction4() {
    /* Get the text field */
    var copyText = document.getElementById("password4");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!    ' + copyText.value,
        showConfirmButton: false,
        timer: 1500
      })
  }