//separando a lista com números pares e ímpares com while
const listaDeNumeros = [25, 38, 71, 192, 333, 222, 10, 11, 62];
const listaDeNumerosPares = [];
const listaDeNumerosImpares = [];

let indiceDoNumero = 0;
//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
while (indiceDoNumero < listaDeNumeros.length) {
  if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
    listaDeNumerosPares.push(listaDeNumeros[indiceDoNumero]);
  } else {
    listaDeNumerosImpares.push(listaDeNumeros[indiceDoNumero]);
  }
  indiceDoNumero += 1;
}

console.log(listaDeNumerosPares);
console.log(listaDeNumerosImpares);
