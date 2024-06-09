function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var numerosPares = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}
console.log (filtrarNumerosPares ([3,2,6,9,11,15,23,44,67,88,100]))
module.exports = filtrarNumerosPares;
