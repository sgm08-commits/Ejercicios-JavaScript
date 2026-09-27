function validarValor() {
    
    let valor = Number(document.getElementById("valor").value);

    if (valor >= 0 && valor <= 100) {
        document.getElementById("validar").innerHTML = "<b> Valor válido </b>";

    }
    else {
        document.getElementById("validar").innerHTML = "<b> El valor "+ valor +" es inválido </b>";

}
}