import * as measure from './measurements.mjs';

let tempFrom;

document.querySelector('#from-temp-celsius').addEventListener('click', function(){
    document.querySelector('#temp-symbol').textContent = '°C';
    tempFrom = 'celsius';
});
document.querySelector('#from-temp-fahrenheit').addEventListener('click', function(){
    document.querySelector('#temp-symbol').textContent = '°F';
    tempFrom = 'fahrenheit';
});
document.querySelector('#from-temp-kelvin').addEventListener('click', function(){
    document.querySelector('#temp-symbol').textContent = 'K';
    tempFrom = 'kelvin';
});

// convert to Celsius
document.querySelector('#to-temp-celsius').addEventListener('click', function(){
    const celNum = Number(document.querySelector('#temp-from-input').value);
    switch(tempFrom) {
        case 'fahrenheit':
            document.querySelector('#temp-output').textContent = measure.fahrenheitToCelsius(celNum);
            break;
        case 'kelvin':
            document.querySelector('#temp-output').textContent = measure.kelvinToCelsius(celNum);
            break;
        case 'celsius':
            document.querySelector('#temp-output').textContent = 'Cannot use same measurements. Please choose another!';
            break;
        default:
            document.querySelector('#temp-output').textContent = 'Something went wrong, please try again.';
            break;
    }
});

// convert to Fahrenheit
document.querySelector('#to-temp-fahrenheit').addEventListener('click', function(){
    const fahNum = Number(document.querySelector('#temp-from-input').value);
    switch(tempFrom) {
        case 'celsius':
            document.querySelector('#temp-output').textContent = measure.celsiusToFahrenheit(fahNum);
            break;
        case 'kelvin':
            document.querySelector('#temp-output').textContent = measure.kelvinToFahrenheit(fahNum);
            break;
        case 'fahrenheit':
            document.querySelector('#temp-output').textContent = 'Cannot use same measurements. Please choose another!';
            break;
        default:
            document.querySelector('#temp-output').textContent = 'Something went wrong, please try again.';
            break;
    }
});

// convert to Kelvin
document.querySelector('#to-temp-kelvin').addEventListener('click', function(){
    const kelNum = Number(document.querySelector('#temp-from-input').value);
    switch(tempFrom) {
        case 'celsius':
            document.querySelector('#temp-output').textContent = measure.celsiusToKelvin(kelNum);
            break;
        case 'fahrenheit':
            document.querySelector('#temp-output').textContent = measure.fahrenheitToKelvin(kelNum);
            break;
        case 'kelvin':
            document.querySelector('#temp-output').textContent = 'Cannot use same measurements. Please choose another!';
            break;
        default:
            document.querySelector('#temp-output').textContent = 'Something went wrong, please try again.';
            break;
    }
});

window.addEventListener("load", (event) => {
    console.log("Page loaded!");
});
