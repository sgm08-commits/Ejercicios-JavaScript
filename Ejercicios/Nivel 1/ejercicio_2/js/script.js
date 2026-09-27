let distancia = parseFloat(prompt("Ingrese la distancia recorrida"))

let litros_consumidos = parseFloat(prompt("Ingrese los litros consumidos"))

if (litros_consumidos <= 0){
    alert("Los litros consumidos no pueden ser iguales o menores a cero")
}

if (!isNaN(distancia) && !isNaN(litros_consumidos)){

let rendimiento =  distancia / litros_consumidos;


alert("El rendimiento es de: " + rendimiento + " kilómetros por cada "+ litros_consumidos +" litros consumidos");

}

else {
alert("Los valores deben de ser numéricos.");
}