const duplicarElementos = require("./11");

function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(function(elemento) {
    return elemento.toUpperCase();
  });
}
console.log (convertirStringAMayusculas(["a", "b", "c"]))
module.exports = convertirStringAMayusculas;
