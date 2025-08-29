const button =document.querySelector(".submit");
const message = document.querySelector(".signup-message");

button.addEventListener('click',()=>{
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = document.querySelector("#password").value.trim();
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&_]).{8,}$/;
    const confirmPassword = document.querySelector("#confirm-password").value.trim();

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