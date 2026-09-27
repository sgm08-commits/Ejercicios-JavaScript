function intercambiar() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let auxiliar = a;
    a = b;
    b = auxiliar;

    document.getElementById("resultado").innerHTML =
        "<b>Después del intercambio:</b> a = " + a + ", b = " + b;
}