function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador++;
    }
  }
  
  return contador;
}
console.log(contarElementosMayoresA10([1,23,44,3,56,7,12,11]))
module.exports = contarElementosMayoresA10;
