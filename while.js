/*A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira.
A condição é avaliada antes da execução da rotina.*/

// primeiro valor de uma array é 0, logo - rodrigo é posicao 0, raquel é posicao 1 e suely é posicao 2
const nomeDeUsuarios = ['Rodrigo', 'Raquel', 'Suely', 'Renata', 'Fernanda']

// console.log(`Olá ${nomeDeUsuarios[0]}`)
// console.log(`Olá ${nomeDeUsuarios[1]}`)
// console.log(`Olá ${nomeDeUsuarios[2]}`)

let indiceDoUsuario = 0

// .length retorna o número de elementos ou caracteres de arrays e strings
const indiceAtual = nomeDeUsuarios.length
console.log({indiceAtual})

// enquanto
while ( indiceDoUsuario < indiceAtual) {
    console.log(`Olá ${nomeDeUsuarios[indiceDoUsuario]}`)
    // indiceDoUsuario = indiceDoUsuario + 1 
    indiceDoUsuario += 1
}