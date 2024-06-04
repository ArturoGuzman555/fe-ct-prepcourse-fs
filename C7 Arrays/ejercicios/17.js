function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let resultado= 0;
  for(let i=0; i<arrayOfNums.length; i++){
    resultado += arrayOfNums[i]
  }
  return resultado;
}
console.log(agregarNumeros([2, 3,4,10,1]))

module.exports = agregarNumeros;
