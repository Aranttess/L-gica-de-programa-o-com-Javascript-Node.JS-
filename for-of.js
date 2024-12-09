/* • O loop for-of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante),
 chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.*/

 const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56]
 const listaDeUsuarios = ['Rodrigo', 'Raquel']

 //código imperativo
 for (let indice = 0; indice < listaDeNumeros.length; indice++) {
    console.log(listaDeNumeros[indice])
 }

 // código declarativo
 for (const usuario of listaDeUsuarios) {
    console.log(usuario)
 }