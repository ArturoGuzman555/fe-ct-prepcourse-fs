function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  //let mayor = Math.max(...array);
  //let indice = array.indexOf(mayor);
  //return indice;

  // Inicializamos el índice del número más grande como el índice 0
  let indiceMayor = 0;

  // Recorremos el array a partir del segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Si encontramos un número más grande, actualizamos indiceMayor
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }

  // Devolvemos el índice del número más grande
  return indiceMayor;
}
console.log(encontrarIndiceMayor([22,33,55,109, 556]))
module.exports = encontrarIndiceMayor;
