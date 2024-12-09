
const idade = 15
const temCNH = true
const podeDirigir = idade > 18 && temCNH 

if(podeDirigir) {
    console.log('Pessoa está habilitada para conduzir veículo')
} else {
    console.log('Pessoa não está habilitada para conduzir veículo')
}
// posso dirigir ? caso TRUE passageiros = 4, caso FALSE passageiros = 0 
const numeroDePassageiro = podeDirigir ? 4 : 0

console.log({numeroDePassageiro})