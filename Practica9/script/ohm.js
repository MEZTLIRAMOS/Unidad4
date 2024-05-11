function calcularResistencia(){//función se ejecuta cuando se hace clic en el 
    //botón "Calcular" para calcular la resistencia eléctrica
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    //valores de voltaje y corriente ingresados por el usuario desde elementos HTML con los IDs
    var voltaje = document.getElementById("voltaje").value;
    var corriente = document.getElementById("corriente").value;
    var resultado = document.getElementById("lblResultado");
    var resistencia;
//Realiza la operación de resistencia (voltaje / corriente) y muestra el resultado en un 
//elemento con el ID "lblResultado" en formato "Resistencia = valor ohms"
    if (voltaje != "" && corriente != ""){
        resistencia = voltaje / corriente; //ya hizo los calculos
        resultado.innerHTML = "Resistencia =" + resistencia + "ohms";
        console.log("R = " + resistencia + "ohms");
    } else {//de alerta si no se ingresan datos en los campos de entrada
        alert("Ingresar datos porfavor");
    }
}
//se ejecuta para calcular la corriente eléctrica.
function calcularCorriente(){////Obtiene los valores de voltaje y resistencia 
    //ingresados por el usuario desde elementos HTML con los IDs "voltajeCurr" y "resistenciaCurr".
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var voltajeCurr = document.getElementById("voltajeCurr").value;
    var resistenciaCurr = document.getElementById("resistenciaCurr").value;
    var Resultado = document.getElementById("lblCurrResultado");
    var current;
//Realiza la operación de corriente (voltaje * resistencia) y muestra el resultado 
//en un elemento con el ID "lblCurrResultado" en formato "Corriente = valor ohms".
    if (voltajeCurr != "" && resistenciaCurr != ""){
        current = voltajeCurr * resistenciaCurr; //ya hizo los calculos
        Resultado.innerHTML = "Corriente =" + current + "ohms";
        console.log("C = " + current + "ohms");
    } else {//mensaje de alerta si no se ingresan datos en los campos de entrada
        alert("Ingresar datos porfavor");
    }
}
//Obtiene los valores de corriente y resistencia ingresados por el usuario desde 
//elementos HTML con los IDs "corrienteVolt" y "resistenciaVolt"
function calcularVoltaje(){
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var corrienteVolt = document.getElementById("corrienteVolt").value;
    var resistenciaVolt = document.getElementById("resistenciaVolt").value;
    var resultado = document.getElementById("lblVoltResultado");
    var voltaje;
//Realiza la operación de voltaje (corriente * resistencia) y muestra el resultado 
//en un elemento con el ID "lblVoltResultado" en formato "Voltaje = valor ohms"
    if (corrienteVolt != "" && resistenciaVolt != ""){
        voltaje = corrienteVolt * resistenciaVolt; //ya hizo los calculos
        resultado.innerHTML = "Voltaje =" + voltaje + "ohms";
        console.log("V = " + voltaje + "ohms");
    } else {//mensaje de alerta si no se ingresan datos en los campos de entrada
        alert("Ingresar datos porfavor");
    }
}

// switch(op)