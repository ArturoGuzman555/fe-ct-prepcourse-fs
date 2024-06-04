function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumas = 0;
  for(let i= 0; i< resultadosTest.length; i++){
    sumas += resultadosTest[i]
  }
  let resultado = sumas / resultadosTest.length;
  return resultado
}
console.log(promedioResultadosTest([10, 8, 9, 8, 10]))
module.exports = promedioResultadosTest;
