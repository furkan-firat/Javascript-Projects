const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let myButton = document.querySelector("#myButton");
let myText = document.querySelector("#myText");

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


myButton.addEventListener("click", function(){
    
    let newColor = "#";
    for(let i = 0; i < 6; i++){
        let randomNumber = getRandomNumber();
        newColor += hex[randomNumber];
    }
    document.body.style.backgroundColor = newColor;
    myText.innerHTML = newColor;
    

})