function generatePDF(){
    //creacion de instancia de jsPDF
    var doc = new jsPDF();
}
//obtener datos del formulario
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var rfc = document.getElementById("rfc").value;

//agregar datos al docuemto pdf
doc.text("Datos de Registrados Correctamente:", 55,20);
doc.text("Nombre= " + fname, 15,30);
doc.text("Apellido:" + lname, 15,45);
doc.text("Direccion de correo electronico:" + email, 15,55);
doc.text("Numero de registro federal de" + "Contribuyyentes" + rfc, 15,65);
//guardar en pdf
doc.save("Formulario.pdf");