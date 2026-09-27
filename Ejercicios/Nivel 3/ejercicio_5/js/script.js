function serie() {

    let numero = 3;
    let resultado = "";
    let iteraciones = 0;

    while (numero <= 200) {

        resultado += numero + "<br>";

        numero = numero * 2;

        iteraciones++;
    }

    resultado += "<br>Iteraciones: " + iteraciones;

    document.getElementById("resultado").innerHTML = resultado;
}