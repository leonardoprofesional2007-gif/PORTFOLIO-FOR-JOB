const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", () => {
   createPassword()
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const size = 12; 
    let password = ""
    for (let index = 0; index < size; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum +1);
    }
    inputEl.value = password; 
}

copyIconEl.addEventListener("click", () => {
    copypassword();

})
function copypassword(){
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
}