function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let indice = array.indexOf(num);
   return indice;
}
console.log(encontrarElemento((44), [1,33,44]))

module.exports = encontrarElemento;
