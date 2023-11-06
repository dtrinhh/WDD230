const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');
const message = document.querySelector("#nomatch");

confirmpassword.addEventListener("focusout", matchpassword);

function matchpassword() {
    if (password.value !== confirmpassword.value) {
        message.textContent = "Passwords did not match. Please try again.";
        message.style.visibility = "show";
        confirmpassword.style.backgroundColor = "#fff0f3";
        confirmpassword.value = "";
        password.value = "";
        password.focus();
        
    } else {
        message.style.display = "none";
        confirmpassword.style.backgroundColor = "#fff";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

range.addEventListener("change", showrating);
range.addEventListener("input", showrating);

function showrating() {
    rangevalue.innerHTML = range.value;
}

