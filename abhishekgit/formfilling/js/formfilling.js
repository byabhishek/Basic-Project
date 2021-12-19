
var username = document.getElementById("ename");
var passwordText = document.getElementById("passw");
var cnfrmpasswordText = document.getElementById("cpass");
var emailid = document.getElementById("email");
function usernameSubmission() {
  if (username.value.length < 3) {
    username.style.borderColor = "red";
  } else {
    username.style.borderColor = "green";
  }
}
function emailValidation() {
  result = emailid.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  if (result != emailid.value) {
    emailid.style.borderColor = "red";
  } else {
    emailid.style.borderColor = "green";
  }
}
function passwordSubmission() {
  if (passwordText.value.length < 6) {
    passwordText.style.borderColor = "red";
  } else {
    passwordText.style.borderColor = "green";
  }
}
function showPassword() {
  if (passwordText.type === "password") {
    passwordText.type = "text";
  } else {
    passwordText.type = "password";
  }
}
function passwordValidation() {
  if (passwordText.value == cnfrmpasswordText.value) {
    cnfrmpasswordText.style.borderColor = "green";
  } else {
    cnfrmpasswordText.style.borderColor = "red";
  }
}