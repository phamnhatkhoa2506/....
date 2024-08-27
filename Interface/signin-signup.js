let signupBtn = document.getElementById("signup-btn");
let signinBtn = document.getElementById("signin-btn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let emailField = document.getElementById("emailField");
let genderField = document.getElementById("genderField");
let forgetPassword = document.getElementById("Forget-password");
let cinemaName = document.getElementById("cinema-name");
let filmArea = document.getElementById("film-area");
let loginBox = document.getElementById("login-box");
let loginForm = document.getElementById("login-form");

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    emailField.style.maxHeight = "0";
    genderField.style.maxHeight = "0";
    forgetPassword.style.maxHeight = "0";
    title.innerHTML = "Đăng nhập";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    emailField.style.maxHeight = "60px";
    genderField.style.maxHeight = "60px";
    forgetPassword.style.maxHeight = "60px";
    title.innerHTML = "Đăng ký";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

function closeLoginBox() {
    loginBox.style.display = "none";
    cinemaName.style.filter = "brightness(100%)";
    filmArea.style.filter = "brightness(100%)";
}

function openSignup() {
    cinemaName.style.filter = "brightness(50%)";
    filmArea.style.filter = "brightness(50%)";
    loginBox.style.display = "block";
    forgetPassword.style.display = "none";
    loginForm.reset();
}

function openSignin() {
    loginBox.style.display = "block";
    cinemaName.style.filter = "brightness(50%)";
    filmArea.style.filter = "brightness(50%)";
    loginForm.reset();
    nameField.style.maxHeight = "0";
    emailField.style.maxHeight = "0";
    genderField.style.maxHeight = "0";
    forgetPassword.style.display = "block";
    title.innerHTML = "Đăng nhập";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}