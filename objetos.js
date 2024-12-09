

const animal = {
    especie: 'Canis Lupus',
    habitatComum: 'Florestas dos EUA',
    espectativaDeVida: 20,
    ehTerreste: true
}
console.log(animal)
console.log(animal.ehTerreste)
console.log(animal.especie)
//separador para facilitar a leitura de numeros grandes
animal.populacao = 100_000_000

console.log(animal.populacao)