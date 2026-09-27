function contarPares() {

    let contador = 0;
    let resultado = "";

    for (let i = 1; i <= 50; i++) {

        if (i % 2 == 0) {
            resultado += i + "<br>";
            contador++;
        }
    }

    resultado += "<br>Se encontraron " + contador + " números pares.";

    document.getElementById("resultado").innerHTML = resultado;
}