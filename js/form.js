var botonAdicionar = document.querySelector("#adicionar-paciente");

// se crea un evento "eventListener" con el botón adicionar del formulario 
botonAdicionar.addEventListener("click",function(event){
    
    event.preventDefault();

    // captura los datos del formulario HTML
    var form = document.querySelector("#formulario-adicionar"); 
    var paciente = capturarDatosPaciente(form);

    var errores = validarPaciente(paciente);
        
    if (errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }

    // agrega nuestro <tr> dentro de la tabla
    adicionarPacientesEnLaTabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

// crea la clase paciente
function capturarDatosPaciente(form) {
    
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){

    var pacienteTr = document.createElement("tr");     
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr; 
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacía");
    }
    if(paciente.gordura.length == 0){
        errores.push("El %gordura no puede estar vacío");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores; 
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}