let personas = [
    {"nombre": "Laura", "edad": 30, "profesion": "Antropóloga", "hobbies": ["Leer", "Cocina"]},
    {"nombre": "Roberto", "edad": 25, "profesion": "Diseñador", "hobbies": ["Videojuegos", "Fotografía"]},
    {"nombre": "Carlos", "edad": 35, "profesion": "Gerente", "hobbies": ["Ciclismo", "Ver series"]}
];

/*for(let persona of personas) {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Profesión: ${persona.profesion}`);
    for(let hobby of persona.hobbies) {
        console.log(`Hobby: ${hobby}`);
    }
}*/

let tabla = document.getElementById("tablaPersonas");

for(let persona of personas) {

    let hobbies = "";

    for(let hobby of persona.hobbies) {
        hobbies += `<li>${hobby}</li>`;
    }

    let fila = `
        <tr>
            <td>${persona.nombre}</td>
            <td>${persona.nombre}</td>
            <td>${persona.nombre}</td>
            <td>
                <ul>
                    ${hobbies}
                </ul>
            </td>
        </tr>
    `;

    tabla.innerHTML += fila;
}
