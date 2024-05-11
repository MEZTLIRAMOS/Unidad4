function verificarprimo() { //función que se ejecuta cuando se hace clic en el botón
    let numero = parseInt(document.getElementById("entrada").value);//Se obtiene el 
    //valor del campo de entrada con el id "entrada" y se convierte a un número entero utilizando parseInt
    let indicadorprimo = true;//variable booleana que indica si el número es primo (true) o no (false)
    let salida = "";//Una variable que almacenará el mensaje de salida
  
    //Se comprueba si el número es igual a 1 y se asigna el mensaje correspondiente a la variable salida
    //Si el número es mayor que 1, se realiza un bucle for que itera desde 2 hasta un número antes del 
    //número ingresado. Si el número es divisible por algún número en este rango, se establece indicadorprimo 
    //como false y se sale del bucle
    if (numero == 1) {
      salida = "1 no es un numero primo.";
    } else if (numero > 1) {
      for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
          indicadorprimo = false;
          break;
        }
      }
      //se asigna el mensaje apropiado a la variable salida
      if (indicadorprimo) {
        salida = " si es primo el numero: " + numero;
      } else {
        salida = "no es primo el numero: " + numero;
      }
    } else {
      salida = "no es primo el numero: " + numero;
    }
    //Se actualiza el contenido del elemento con el id "texto-salida" en el HTML con el valor de la variable salida,
    //lo que mostrará el resultado
    document.getElementById("texto-salida").innerHTML = salida;
  }
  