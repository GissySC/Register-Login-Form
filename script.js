let signUp = document.getElementById('signUp');
let signIn = document.getElementById('signIn');
let nameInput = document.getElementById('nameInput');
let title = document.getElementById('title');
let passwordRecover = document.getElementById('passwordRecover');

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Log In"
    document.getElementById("passwordRecover").style.display = 'block';
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Register"
    document.getElementById("passwordRecover").style.display = 'none';
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}