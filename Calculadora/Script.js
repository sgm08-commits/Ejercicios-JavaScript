function calcularSUMA(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let suma = n1 + n2;

    document.getElementById("resultado").innerHTML = "<b>"+suma.toFixed(2)+"</b>";
}

function calcularRESTA(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let resta = n1 - n2;

    if (n1 < 0 && n2 < 0) {
        resta = n1 + n2;

    } 
    else {
        resta = n1 - n2;
    }

    document.getElementById("resultado").innerHTML = "<b>"+resta.toFixed(2)+"</b>";
}

function calcularMULT(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let mult = n1 * n2;

    document.getElementById("resultado").innerHTML = "<b>"+mult.toFixed(2)+"</b>";
}

function calcularDIV(){

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (n2 == 0) {
        document.getElementById("resultado").innerHTML =
        "<b>No se puede dividir entre cero</b>";
    } else {
        let div = n1 / n2;

        document.getElementById("resultado").innerHTML =
        "<b>" + div.toFixed(2) + "</b>";
    }
}

function calcularMayorMenor(){

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (n1 > n2) {
        
        document.getElementById("resultadoL").innerHTML =
        "<b>El número 1 es mayor que el número 2</b>";

    } if (n2 > n1) {

        document.getElementById("resultadoL").innerHTML =
        "<b>El número 2 es mayor que el número 1</b>";

    } if (n1 == n2) {

        document.getElementById("resultadoL").innerHTML =
        "<b>El número 1 y el número 2 son iguales</b>";

    }
}

function calcularParImpar() {

    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    if (n1 % 2 == 0 && n2 % 2 == 0) {

        document.getElementById("resultadoL").innerHTML =
        "<b>Los dos números son pares</b>";

    } else if (n1 % 2 != 0 && n2 % 2 != 0) {

        document.getElementById("resultadoL").innerHTML =
        "<b>Los dos números son impares</b>";

    } else if (n1 % 2 == 0 && n2 % 2 != 0) {

        document.getElementById("resultadoL").innerHTML =
        "<b>El primer número es par y el segundo es impar</b>";

    } else {

        document.getElementById("resultadoL").innerHTML =
        "<b>El primer número es impar y el segundo es par</b>";
    }
}


