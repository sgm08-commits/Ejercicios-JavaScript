function calcularEnvio() {
    
    let costo = Number(document.getElementById("compra").value);

    let costo_con_envio = costo + 12000

    if (costo >= 120000) {

    document.getElementById("subtotal").innerHTML = "<b> El subtotal es: $ "+ costo +"</b>"
    document.getElementById("envio").innerHTML = "<b> El costo de envío es de: $ 0 </b>"
    document.getElementById("total").innerHTML = "<b> El total a pagar es de: $ "+ costo +"</b>"
    }
    

    else {

    document.getElementById("subtotal").innerHTML = "<b> El subtotal es: $ "+ costo +"</b>"
    document.getElementById("envio").innerHTML = "<b> El costo de envío es de: $ 12000 </b>"
    document.getElementById("total").innerHTML = "<b> El total a pagar es de: $ "+ costo_con_envio +"</b>"
    }
}