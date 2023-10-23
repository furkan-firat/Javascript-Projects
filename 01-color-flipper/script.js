let colors = ["red", "blue", "yellow", "green"];

function getRandomNumber() {
    let number = Math.floor(Math.random() * colors.length);
    return number;
}

let myButton = document.querySelector("#myButton");
let myText = document.querySelector("#myText");

myButton.addEventListener("click", function() {
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    myText.textContent = colors[randomNumber];
});


