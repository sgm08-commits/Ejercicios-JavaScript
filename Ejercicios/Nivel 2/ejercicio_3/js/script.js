function verificarAnio() {

    let anio = Number(document.getElementById("anio").value);
    let resultado = document.getElementById("resultado");

    if (anio % 400 === 0 || (anio % 4 === 0 && anio % 100 !== 0)) {
        resultado.textContent = "El año " + anio + " es bisiesto.";
    } else {
        resultado.textContent = "El año " + anio + " no es bisiesto.";
    }
}