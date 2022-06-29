var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;



document.getElementById("adicionar").addEventListener("mouseover", increment);
document.getElementById("subtrair").addEventListener("mouseover", decrement);


function increment() {
    currentNumber = currentNumber + 1;
    if(currentNumber > 10 ){
        currentNumber = 0
    }
    else if(currentNumber <- 10){

    }

    else{
        
    }
    
    
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color="red"; 
    }
    else{
        document.getElementById("currentNumber").style.color="black";
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    if(currentNumber > 10 || currentNumber < -10 ){
        currentNumber = 0
    }
    else{
        
    }
    
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color="red"; 
    }
    else{
        document.getElementById("currentNumber").style.color="black";
    }
    currentNumberWrapper.innerHTML = currentNumber;
}