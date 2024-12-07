const numero1 = 100
const numero2 = 20
const numeroCorreto = 30
const stringDeNumero = '30'


// maior que
if (numero1 > 1) {
    console.log(`${numero1} é maior que 1`)
}

if (numero1 > 200) {
    console.log('Este número é maior que 200')
} else {
    console.log(`${numero1} é menor ou igual a 200`)
}

//menor ou igual
if (numero2 <= numero1) {
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}

// 
if (numeroCorreto == stringDeNumero) {
    console.log('Os números são iguais em valor apenas (podem ter ocorrido coerções implícitas)')
}

//igualdade
if (numeroCorreto === stringDeNumero) {
    console.log('Os números são igauis  em valor e tipo')
}

