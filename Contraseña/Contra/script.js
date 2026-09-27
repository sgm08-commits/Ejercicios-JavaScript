 let intentos = 1;

function validarInicio() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    let mensaje = document.getElementById("mensaje");
    let boton = document.getElementById("validar");
   
    


    if (usuario == "Samuel" && clave == "1234") {
       location.href= "bienvenido.html";



    }
    else{
        mensaje.textContent = "Usuario o conraseña incorrectos intento "+ intentos +" de 3";
    }

    console.log(intentos);
    intentos++;


     if(intentos > 3){

        mensaje.textContent = "Has superado el límite de intentos";

        boton.disabled = true;
     }





}