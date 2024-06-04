function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(function(elemento){
    return elemento %2 ===0;
  })
}
console.log (filtrarNumerosPares ([3,2,6,9,11,15,23,44,67,88,100]))
module.exports = filtrarNumerosPares;
