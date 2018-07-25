//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "password"){
alert ("Login successful. Welcome admin!");
window.close("login.html");
window.open("index.html"); // Redirecting to other page.
return false;
}
else{
//attempt --;// Decrementing by one.
alert("ACCESS DENIED. You have entered an incorrect username &/ password.");
// Disabling fields after 3 attempts.
//if( attempt == 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;
return false;
}
}