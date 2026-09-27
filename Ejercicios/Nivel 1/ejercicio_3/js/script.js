function impuestoPrecio() {

    let precio_base = Number(document.getElementById("n1").value);

    let impuesto = precio_base * 0.10;
    
    let precio_final = precio_base + impuesto;

    document.getElementById("impuesto").innerHTML = "<b> El precio final es de $ "+ precio_final +" aplicando un impuesto del 10% al precio base que aumenta en "+ impuesto +" el precio base<b>";
}