//true
// truthy: [], número diferente de 0, {}, string não vazia

// false
// falsy: null, undefined, 0, "", NaN

/*Operador de negação ( ! ) - serve para inverter o valor lógico de uma condição.
Por exemplo, se uma condição for verdadeira, ao aplicar o operador de negação, ela se torna falsa, e vice-versa.*/

/* Operador de dupla negação ( !! ) - converte uma expressão em um valor booleano. A dupla negação funciona negando duas vezes o valor de uma expressão. 
A dupla negação é uma boa técnica para garantir que determinadas funções só devolvam valores booleanos. */

console.log(!![], !!{}, !!1, !!'teste')

console.log(!!null, !!undefined, !!0, !!'', !!NaN)

console.log(!true)//vai dar false
 