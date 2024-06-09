function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const processedString = string.toLowerCase().replace(/\s/g, '');
  const length = processedString.length;

  for (let i = 0; i < length / 2; i++) {
   
    if (processedString[i] !== processedString[length - 1 - i]) {
      return false; 
    }
  }

  return true;
}

module.exports = esPalindromo;