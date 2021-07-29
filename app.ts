const cuadricula = document.querySelector(".cuadricula");

// genera un numero aleatorio entre 0 y 15
function generarNumero() {
  return Math.floor(Math.random() * 15);
}

class Tablero {

  private _tablero: number[];

  public crear(size: number) {
    const lista = Array.from(Array(size), (x, i) => i + 1);

    for(let i = lista.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      let k = lista[i - 1];
      lista[i - 1] = lista[j];
      lista[j] = k;
    }

    this._tablero = lista;
  }

  get tablero() {
    return this._tablero;
  }
}

function crearTablero(cantidad: number) {
  const tablero = new Tablero();
  tablero.crear(cantidad);

  return tablero;
}

function generarTablero(tablero: Tablero) {
  tablero.tablero.forEach((numero, indice) => {
    cuadricula.innerHTML += `<div class="cuadricula-elemento" data-numero="${numero}">${numero}</div>`;
  })
}

function limpiarTablero() {
  cuadricula.innerHTML = "";
}

const tablero = {
  crear: (cantidad: number) => crearTablero(cantidad),
  generar: (tablero: Tablero) => generarTablero(tablero),
  limpiar: () => limpiarTablero()
};

window.onload = () => {
  tablero.generar(tablero.crear(15));
}

const generarBoton = document.querySelector(".generarTablero").addEventListener("click", () => {
  tablero.limpiar();
  tablero.generar(tablero.crear(15));
})

const imprimirBoton = document.querySelector(".imprimirTablero").addEventListener("click", () => {
  window.print();
}