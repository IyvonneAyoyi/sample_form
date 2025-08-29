const button = document.querySelector(".submit");
const message = document.querySelector(".login-message");
const form = document.querySelector("#login-form");

// Show/hide password toggle
const passwordInput = document.querySelector("#password");
const toggle = document.querySelector(".toggle-password");

toggle.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
});


//Login validation
button.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const password = passwordInput.value.trim();

    if(!name || !password) {
        message.innerText = "Please enter both name and password.";
        message.style.color = "red";

    }

    else{
        message.innerText = `Welcome, ${name}! You've logged in successfuly.`;
        message.style.color = "lightgreen";

//  Reset the form after successful validation    
    form.reset();
    }
    
});


