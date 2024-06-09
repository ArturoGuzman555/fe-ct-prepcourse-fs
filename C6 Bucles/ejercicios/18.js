function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let menor = Math.min(a, b);
  let mayor = Math.max(a, b);
  let producto = 1;
  
  for (let i = menor; i <= mayor; i++) {
    producto *= i;
  }
  
  return producto;
}

console.log(productoEntreNúmeros(3, 5))
module.exports = productoEntreNúmeros;