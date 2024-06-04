function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayora10 = array.filter(function(elemento){
    return elemento > 10;
  })
  let cantidad = mayora10.length
  return {
    cantidad: cantidad,
    elementos: mayora10
};
}
console.log(contarElementosMayoresA10([1,23,44,3,56,7,12,11]))
module.exports = contarElementosMayoresA10;
