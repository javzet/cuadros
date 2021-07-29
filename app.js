var cuadricula = document.querySelector(".cuadricula");
// genera un numero aleatorio entre 0 y 15
function generarNumero() {
    return Math.floor(Math.random() * 15);
}
var Tablero = /** @class */ (function () {
    function Tablero() {
    }
    Tablero.prototype.crear = function (size) {
        var lista = Array.from(Array(size), function (x, i) { return i + 1; });
        for (var i = lista.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            var k = lista[i - 1];
            lista[i - 1] = lista[j];
            lista[j] = k;
        }
        this._tablero = lista;
    };
    Object.defineProperty(Tablero.prototype, "tablero", {
        get: function () {
            return this._tablero;
        },
        enumerable: false,
        configurable: true
    });
    return Tablero;
}());
function crearTablero(cantidad) {
    var tablero = new Tablero();
    tablero.crear(cantidad);
    return tablero;
}
function generarTablero(tablero) {
    tablero.tablero.forEach(function (numero, indice) {
        cuadricula.innerHTML += "<div class=\"cuadricula-elemento\" data-numero=\"" + numero + "\">" + numero + "</div>";
    });
}
function limpiarTablero() {
    cuadricula.innerHTML = "";
}
var tablero = {
    crear: function (cantidad) { return crearTablero(cantidad); },
    generar: function (tablero) { return generarTablero(tablero); },
    limpiar: function () { return limpiarTablero(); }
};
window.onload = function () {
    tablero.generar(tablero.crear(15));
};
var generarBoton = document.querySelector(".generarTablero").addEventListener("click", function () {
    tablero.limpiar();
    tablero.generar(tablero.crear(15));
});
var imprimirBoton = document.querySelector(".imprimirTablero").addEventListener("click", function () {
    window.print();
});
