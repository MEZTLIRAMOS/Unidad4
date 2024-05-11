function calcularVacio(){//Obtiene los valores del constante dieléctrica, carga 1, 
    //carga 2 y distancia ingresados por el usuario desde elementos HTML con los IDs 
    //"consPro", "carga1", "carga2" y "distancia"
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;
//Realiza la operación de fuerza electrostática en el vacío (constante dieléctrica 
//* carga 1 * carga 2 / distancia) y muestra el resultado en un elemento con el ID 
//"lblResultado" en formato "Fuerza = valor coulombs"
    if (consPro != "" && carga1 != "" && carga2 != "" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {//mensaje de alerta si no se ingresan todos los datos requeridos.
        alert("Ingresar datos porfavor");
    }
}
function calcularMedio(){//Obtiene los valores del constante dieléctrica, carga 1, 
    //carga 2, distancia relativa y distancia ingresados por el usuario desde elementos 
    //HTML con los IDs "consPro", "carga1", "carga2", "relativa" y "distancia".
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var consPro = document.getElementById("consPro").value;
    var carga1 = document.getElementById("carga1").value;
    var carga2 = document.getElementById("carga2").value;
    var distancia = document.getElementById("distancia").value;
    var relativa = document.getElementById("relativa").value;
    var resultado = document.getElementById("lblResultado");
    var Fuerza;
//Realiza la operación de fuerza electrostática en el medio (constante dieléctrica * 
//carga 1 * carga 2 / (distancia relativa * distancia)) y muestra el resultado en un 
//elemento con el ID "lblResultado" en formato "Fuerza = valor coulombs"
    if (consPro != "" && carga1 != "" && carga2 != "" && relativa !="" && distancia !=""){
        Fuerza = consPro * carga1 + carga2 / relativa * distancia; //ya hizo los calculos
        resultado.innerHTML = "Fuerza =" + Fuerza + "coulombs";
        console.log("F = " + Fuerza + "coulombs");
    } else {//mensaje de alerta si no se ingresan todos los datos requeridos.
        alert("Ingresar datos porfavor");
    }
}
function calcularFuerzaElectrostatica(){//Obtiene los valores de voltaje, distancia, 
    //constante dieléctrica, y carga 2 ingresados por el usuario desde elementos HTML 
    //con los IDs "va", "distancia", "consPro", y "carga2"
    /*buscar elemento con el id y se le asigne y este ingresado a la variable */
    var va = document.getElementById("va").value;
    var distancia = document.getElementById("distancia").value;
    var consPro = document.getElementById("consPro").value;
    var carga2 = document.getElementById("carga2").value;
    var resultado = document.getElementById("lblResultado");
    var carga1;
//Realiza la operación de carga 1 (voltaje * distancia / (constante dieléctrica * carga 2)) 
//y muestra el resultado en un elemento con el ID "lblResultado" en formato "Carga1 = valor coulombs"
    if (va != "" && distancia != "" && consPro != "" && carga2 !=""){
        carga1 = va * distancia / consPro * carga2; //ya hizo los calculos
        resultado.innerHTML = "Carga1 =" + carga1 + "coulombs";
        console.log("C = " + carga1 + "coulombs");
    } else {//v
        alert("Ingresar datos porfavor");
    }
}