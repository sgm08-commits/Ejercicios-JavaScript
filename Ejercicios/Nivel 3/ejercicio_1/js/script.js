function cuentaWhile() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = "";

    while (numero >= 0) {
        resultado += numero + "<br>";
        numero--;
    }

    document.getElementById("resultado").innerHTML = resultado;
}


function cuentaFor() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = "";

    for (let i = numero; i >= 0; i--) {
        resultado += i + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}