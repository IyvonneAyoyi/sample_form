const button = document.querySelector(".submit");
const message = document.querySelector(".login-message");

// Show/hide password toggle
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

//Login validation
button.addEventListener('click', ()=>{
    const name = document.querySelector("#name").value.trim();
    const password = passwordInput.value.trim();

    if(!name || !password) {
        message.innerText = "Please enter both name and password.";
        message.style.color = "red";

    }

    else{
        message.innerText = `Welcome, ${name}! You've logged in successfuly.`;
        message.style.color = "lightgreen"
    }
    
});

