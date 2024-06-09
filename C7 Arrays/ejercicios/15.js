function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  //let mayor = Math.max(...array);
  //let indice = array.indexOf(mayor);
  //return indice;
  let indiceMayor = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }
  return indiceMayor;
}
console.log(encontrarIndiceMayor([22,33,55,109, 556]))
module.exports = encontrarIndiceMayor;
