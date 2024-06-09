function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numerosUnicos = new Set();

  for (var i = 0; i < numeros.length; i++) {
    var num = numeros[i];
    if (numerosUnicos.has(num)) {
      return num;
    } else {
      numerosUnicos.add(num);
    }
  }
}

module.exports = encontrarElementoRepetido;