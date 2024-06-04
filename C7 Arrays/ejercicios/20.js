function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true;
  }

  // Guardamos el primer elemento del arreglo en una variable
  const primerElemento = array[0];

  // Recorremos el arreglo desde el segundo elemento hasta el final
  for (let i = 1; i < array.length; i++) {
    // Si encontramos un elemento que es diferente al primero, retornamos false
    if (array[i] !== primerElemento) {
      return false;
    }
}
}

module.exports = todosIguales;
