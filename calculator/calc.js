//constantes y variables
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var result = document.getElementById("result");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;



//boton numeros
botonNumeros.forEach(function (boton) {
    boton.addEventListener("click", function () {
        agregarNumero(boton.innerText);

    })
});



//boton division
botonOpera.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectOperacion(boton.innerText);
    })
})



//boton igual
botonIgual.addEventListener("click", function () {
    calcular();
    actualizarDisplay();
});



//boton borrar
botonDelete.addEventListener("click", function () {
    clear();
    actualizarDisplay();
});

function selectOperacion(op) {
    if (opeActual === "") return;
    if (opeAnterior !== "") {
        calcular()
    }

    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";

}


// operaciones suma, menos, multiplicacion y division
function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}



// orden de los numeros a resolver que se muestra en el display  pantalla de la calculadora
function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

clear();