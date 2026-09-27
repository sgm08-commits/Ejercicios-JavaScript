//Declarar variables 
let celcius = parseFloat(prompt("Ingresa los grados celsius"));

let fahrenheit = parseFloat(prompt("Ingresa los grados fahrenheit"));

//Indica que el valor debe de ser numerico
if (!isNaN(celcius) && !isNaN(fahrenheit)){

let resultado_celcius_fahrenheit =  (celcius * 9/5) + 32;

let resultado_fahrenheit_celcius =  (fahrenheit - 32) * 5/9;

alert("El resultado de Celcius a Fahrenheit es: " + resultado_celcius_fahrenheit.toFixed(2) + "\nEl resultado de Fahrenheit a Celcius es: " + resultado_fahrenheit_celcius.toFixed(2));

}

else {
alert("Los valores deben de ser numéricos.");
}
