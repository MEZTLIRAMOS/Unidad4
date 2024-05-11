  function mostrarTabla() { //define una función llamada mostrarTabla
    var tabla = document.getElementById("tablaMultiplicar");//obtener un elemento HTML 
    //con el id "tablaMultiplicar" y se asigna a la variable tabla
    tabla.innerHTML = ""; // Limpiar la tabla si ya existe
  
    // Generar la tabla de multiplicar del 1 al 10
    for (var i = 1; i <= 10; i++) { //Este bucle comienza en 1, 
      //se ejecuta mientras i sea menor o igual a 10, y se incrementa i en cada iteración
      var fila = tabla.insertRow();//Dentro del bucle exterior, se usa tabla.insertRow 
      //para insertar una nueva fila en la tabla y se asigna esta fila a la variable fila 
      for (var j = 1; j <= 10; j++) { //se inicia un nuevo bucle que itera de 1 a 10 
        //(inclusive) para generar las celdas de cada fila en la tabla de multiplicar
        var celda = fila.insertCell();//se utiliza fila.insertCell() para insertar una 
        //nueva celda en la fila actual y se asigna esta celda a la variable celda
        celda.textContent = i + " x " + j + " = " + (i * j);//se asigna el resultado de 
        //la multiplicación entre i y j, junto con un formato que indica la operación de multiplicación
      }
    }
    tabla.style.display = "block"; // Mostrar la tabla
  }

  function generateFibonacci() {
    const numInput = document.getElementById('num');
    const output = document.getElementById('output');

    const n = parseInt(numInput.value);
    if (isNaN(n) || n <= 0) {
        output.textContent = 'Please enter a valid positive number.';
        return;
    }

    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }

    output.textContent = `Fibonacci Sequence (${n} numbers): ${fibo.join(', ')}`;
}