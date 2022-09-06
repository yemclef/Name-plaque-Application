const buyNow = document.getElementsByClassName("buy-submit")[0];
const userInput = document.querySelector('.inputfield');


buyNow.addEventListener("click", () =>{

    if (userInput.value.length == ""){
        alert("Please input letters.");
    }

    else if (userInput.value === "YOUR NAME"){

        alert("Enter a new text.");
        
    }

    else if (userInput.value.length > 15) {
        alert("You have exceeded the number of available letters.");
    
    }

    else if (userInput.value == "UNIQUE LETTERS"){

        alert("Congratulation!!!");
    }


    
     
})





   