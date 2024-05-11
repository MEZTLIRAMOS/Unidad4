// funcion para capturar las teclas presionadas y mostrar
function captureKeys(event) {
    // obtener el campo de entrada y el elemento de muestra
    var pressedKeysInput = document.getElementById("pressedKeys");
    var muestra = document.getElementById("lblPressedKeys");

    var pressedKeys = [];
    var key = event.key;

    muestra.innerHTML += key;
    pressedKeys.push(key);
    pressedKeysInput.value = pressedKeys;
}

document.getElementById("keyForm").addEventListener("submit", function (event) {
event.preventDefault();

var pressedKeysInput = document.getElementById("pressedKeys");
alert("teclas presionadas:" + pressedKeysInput.value);
});