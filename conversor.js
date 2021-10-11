let resul ="";
let constanteConversion = 1.8;
let constanteSuma = 32;

let CtoF = (grados) => (grados*constanteConversion)+constanteSuma;
let FtoC = (grados) => (grados-constanteSuma)*(1/constanteConversion);



function celsiusToFahrenheit(grados){
    document.getElementById('resulFahrenheitBox').style.visibility = "visible"
    document.getElementById('resulFahrenheit').innerHTML = CtoF(grados);
}

function fahrenheitToCelsius(grados){
    document.getElementById('resulCelsiusBox').style.visibility = "visible"
    document.getElementById('resulCelsius').innerHTML = FtoC(grados);
}



exports.CtoF = CtoF;
exports.FtoC = FtoC;

