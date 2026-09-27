function sumar() {
    let n = Number(document.getElementById("numero").value);

    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma = suma + i;
    }

    document.getElementById("resultado").innerHTML =
        "La suma de 1 hasta " + n + " es: " + suma;
}