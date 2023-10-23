let btnDecrease = document.querySelector("#btnDecrease");
let btnReset = document.querySelector("#btnReset");
let btnIncrease = document.querySelector("#btnIncrease");
let currentCountDOM = document.querySelector("#currentCount");
let currentCount = 0;




btnDecrease.addEventListener("click", function() {
    currentCount -= 1;
    currentCountDOM.innerHTML = currentCount;
    if (currentCount == 0){
    currentCountDOM.style.color = "black";
    
}
if (currentCount > 0){
    currentCountDOM.style.color = "green";
}
if (currentCount < 0){
    currentCountDOM.style.color = "red";
}
})

btnReset.addEventListener("click", function() {
    currentCount = 0;
    currentCountDOM.innerHTML = 0;
    if (currentCount == 0){
    currentCountDOM.style.color = "black";
    
}
if (currentCount > 0){
    currentCountDOM.style.color = "green";
}
if (currentCount < 0){
    currentCountDOM.style.color = "red";
}
})

btnIncrease.addEventListener("click", function() {
    currentCount += 1;
    currentCountDOM.innerHTML = currentCount;
    if (currentCount == 0){
    currentCountDOM.style.color = "black";
    
}
if (currentCount > 0){
    currentCountDOM.style.color = "green";
}
if (currentCount < 0){
    currentCountDOM.style.color = "red";
}
})

