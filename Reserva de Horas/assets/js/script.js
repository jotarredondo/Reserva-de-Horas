//Click en botón

document.getElementById("botonin").addEventListener('click', reserva); 

// Validación
function reserva(){

    var rut = document.getElementById("rutin").value;
    var nombre = document.getElementById("nombrein").value;
    var apellido = document.getElementById("apellidoin").value;
    var edad = document.getElementById("edadin").value;
    var email = document.getElementById("emailin").value;
    var especialidad = document.getElementById("especialidadin").value;
    var hora = document.getElementById("horain").value;
    var fecha = document.getElementById("fechain").value;

    // Cambiar formato fecha a dd/mm/yyyy
    function formatofecha(fecha){
    var fechanueva = fecha.toString().split("-").reverse().join("-");
    return fechanueva;
    }
    var fechafinal = formatofecha(fecha);

    // Patrones Regex
    const patronrut =  /^([0-9]{1,2})+[.]+([0-9]{3})+[.]+([0-9]{3})+[-|‐]{1}[0-9kK]{1}$/;
    const patron_nom_ape = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const patronedad = /^[0-9]+$/;
    const patronemail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    const patronfecha = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    

    var dato = 1; 

    if(!patronrut.test(rut)){
        alert("Vuelva a ingresar Rut");
        var dato =2;   
    }

    if(!patron_nom_ape.test(nombre)){
        alert("Vuelva a ingresar Nombre");
        var dato =2;
    }

    if (!patron_nom_ape.test(apellido)){
        alert("Vuelva a ingresar Apellido");
        var dato =2;
    }

    if (!patronedad.test(edad)){
        alert("Vuelva a ingresar Edad");
        var dato =2;
    }

    if (!patronemail.test(email)){
        alert("Vuelva a ingresar Email");
        var dato =2;
    }

    if (!patronfecha.test(fechafinal)){
        alert("Vuelva a ingresar fecha");
        var dato =2;
    }

    if (dato === 1) {
        mensaje(nombre, apellido, especialidad, fechafinal, hora, email);
    }    
}

function mensaje (nombre, apellido, especialidad, fechafinal, hora, email){
    
    document.getElementById("mensajefinal").innerHTML = `<div class="alert alert-primary" role="alert" id="mensajecss"> 
    Estimado(a) ${nombre} ${apellido}, su hora para ${especialidad} ha sido reservada para el día ${fechafinal} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. <br>Gracias por preferirnos.</div>`
}




    

            



