function calcularTemperatura() {
    
    let Temperatura = Number(document.getElementById("temperatura").value);

    if (Temperatura <= 10) {

        document.getElementById("salida").innerHTML = "<b> La temperatura de "+ Temperatura +" grados celcius es muy fría </b>"
    }

    else if (Temperatura <= 19) {

    document.getElementById("salida").innerHTML = "<b> La temperatura de "+ Temperatura +" grados celcius es fría </b>"
    }

    else if (Temperatura <= 29) {

    document.getElementById("salida").innerHTML = "<b> La temperatura de "+ Temperatura +" grados celcius es templada </b>"
    }

    else {

    document.getElementById("salida").innerHTML = "<b> La temperatura de "+ Temperatura +" grados celcius es caliente </b>"
    }
}