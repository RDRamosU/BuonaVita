// imc = peso / altura * altura

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    var imc = peso/(altura * altura);
    tdIMC.textContent = imc;

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
        console.log("peso incorrecto");
        tdIMC.textContent = "peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("dato-incorrecto");
    }

    if(!alturaEsValida){
        console.log("altura incorrecta");
        tdIMC.textContent = "altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("dato-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }
    
    function calcularIMC(peso, altura){
        var imc = peso/(altura * altura);
        return imc.toFixed(2);
    }
}

function validarPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validarAltura(altura){
    if (altura >= 0 && altura < 2.5){
        return true;
    } else{
        return false;
    }
}