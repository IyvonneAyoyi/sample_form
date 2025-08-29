const button =document.querySelector(".submit");
const message = document.querySelector(".signup-message");


// Show/hide password toggle
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm-password");
const togglePassword = document.querySelector("#toggle-password");
const toggleConfirm = document.querySelector("#toggle-confirm");

togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
toggleConfirm.addEventListener("click", () => {
    confirmInput.type = confirmInput.type === "password" ? "text" : "password";
});

//Signup Validation

button.addEventListener('click',()=>{
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&_]).{8,}$/;
    const confirmPassword = confirmInput.value.trim();

    if(!name || !email || !password || !confirmPassword){
        message.innerText = "All fields required!";
        message.style.color = "red";
    }

    else if (!emailRegex.test(email)) {
    message.innerText = "Please enter a valid email (example: user@example.com).";
    message.style.color = "red";
   } 

    else if (!passwordRegex.test(password)) {
    message.innerText = "Password must be at least 8 characters long and include alphabet, number, and special character.";
    message.style.color = "red";
   }

    else if(password !== confirmPassword){
        message.innerText = "Passwords do not match";
        message.style.color = "red";
    }

    else{
        message.innerText = `Account for ${name} created successfully!`;
        message.style.color = "lightgreen";
    }

});