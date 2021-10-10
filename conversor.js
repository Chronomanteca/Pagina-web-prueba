let resul ="";
let constanteConversion = 1.8;
let constanteSuma = 32;

let CtoF = (grados) => (grados*constanteConversion)+constanteSuma;


document.getElementById('btnCelsToFah').get

function celsiusToFahrenheit(grados){
    document.getElementById('resulFahrenheitBox').style.visibility = "visible"
    document.getElementById('resulFahrenheit').innerHTML = CtoF(grados);
}

function FahrenheitToCelsius(grados){
    document.getElementById('resultCelsiusBox').style.visibility = "visible"
    document.getElementById('reulsCelsius').innerHTML = CtoF(grados);
}



 
