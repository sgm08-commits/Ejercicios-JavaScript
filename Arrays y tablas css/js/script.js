let personas = [
    ["Juan Pablo", "Vasco Floyd", 33],
    ["Marcela", "Moreno Muñoz", 28],
    ["Alison", "Vasco Medina", 12],
    ["Tomas", "Vasco Moreno", 1],
    ["Victoria", "Vasco Floyd", 53]
];

let contenido_tabla = document.getElementById("contenido_tabla");

//obtengo el id del elemento donde voy a mostrar la tabla
for (let i = 0; i < personas.length; i++) {
    //creo un elemento tr para cada fila de la tabla
    let fila = document.createElement("tr");
    
    for (let j = 0; j < personas[i].length; j++) {

        let columna = document.createElement("td");
        columna.textContent = personas[i][j];
        fila.appendChild(columna);
    
    }
    contenido_tabla.appendChild(fila);
}

