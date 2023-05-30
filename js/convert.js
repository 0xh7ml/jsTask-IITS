// get the value
let f = document.getElementById('farenheit-data');
let k = document.getElementById('kelvin-data');


function convert(){
    let inputdata = document.getElementById('inputValue').value;
    let convertFloat = parseFloat(inputdata);

    // convert celcious to farenheit and kelvin
    if(!isNaN(convertFloat)){
        f.textContent = ((convertFloat*9/5)+32).toFixed(2);
        k.textContent = (convertFloat+273.15).toFixed(2);
    }
    else{
        f.textContent = 0;
        k.textContent = 0;
    }
}