function calcularAceleracion(){//Obtiene los valores de fuerza y masa ingresados 
    //por el usuario desde elementos HTML con los IDs "fuerza" y "masa"
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var fuerza = document.getElementById("fuerza").value;
    var masa = document.getElementById("masa").value;
    var resultado = document.getElementById("lblResultado");
    var aceleracion;
//Realiza la operación de aceleración (fuerza / masa) y muestra el resultado en 
//un elemento con el ID "lblResultado" en formato "Aceleracion = valor newtons"
    if (fuerza != "" && masa != ""){
        aceleracion = fuerza / masa; //ya hizo los calculos
        resultado.innerHTML = "Aceleracion =" + aceleracion + "newtons";
        console.log("A = " + aceleracion + "newtons");
    } else {//mensaje de alerta si no se ingresan datos en los campos de entrada
        alert("Ingresar datos porfavor");
    }
}
function calcularFuerza(){//Obtiene los valores de masa y aceleración ingresados 
    //por el usuario desde elementos HTML con los IDs "masa" y "aceleracion"
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var masa = document.getElementById("masa").value;
    var aceleracion = document.getElementById("aceleracion").value;
    var resultado = document.getElementById("lblResultado");
    var fuerza;
//Realiza la operación de fuerza (masa * aceleración) y muestra el resultado en 
//un elemento con el ID "lblResultado" en formato "Fuerza = valor newtons"
    if (masa != "" && aceleracion != ""){
        fuerza = masa * aceleracion; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + fuerza + "newtons";
        console.log("F = " + fuerza + "newtons");
    } else {//mensaje de alerta si no se ingresan datos en los campos de entrada
        alert("Ingresar datos porfavor");
    }
}