function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  const mesesRequeridos= ["Enero", "Marzo", "Noviembre"]
  let neuvoarray = [];
  for(let i = 0; i < array.length; i++){
    if(mesesRequeridos.includes(array[i])) {
      neuvoarray.push(array[i])
    }
  }
  if(neuvoarray.length === mesesRequeridos.length){
    return neuvoarray
  }
  else{
    return "No se encontraron los meses pedidos"
  }
}
console.log(mesesDelAño(["Febrero", "Marzo", "Abril", "Enero", "Diciembre", "Noviembre"]))

module.exports = mesesDelAño;
