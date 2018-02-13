function farenheitToCelcius(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
}

function celciusToFarenheit(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum * 1.8) + 32;;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(clickEvent) {
    console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

