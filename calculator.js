const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {

    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C"){
            clearresult();
        } else if (buttonValue === "="){
            calculateresult();
        } else{
            appendValue(buttonValue);
        }
    });
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue
}
function clearresult(buttonValue){
    inputFieldEl.value="";
}
function calculateresult(buttonValue){
    inputFieldEl.value = eval(inputFieldEl.value)
}