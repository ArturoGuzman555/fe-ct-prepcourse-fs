function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDuplicado = [];
  for (var i = 0; i < array.length; i++) {
    arrayDuplicado.push(array[i] * 2);
  }
  return arrayDuplicado;
}
console.log(duplicarElementos([1,2,3,4]))

module.exports = duplicarElementos;
