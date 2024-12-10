/*O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.
 O laço pode ser executado para cada propriedade distinta do objeto*/
 //Quando devo usar for...in? Quando for manipular Objetos
   //Quando devo usar for...of? Quando for manipular Arrays


const users = {
    //'nome' é uma KEY(chave) e 'joSé mAria' é value(valor)
    name: 'joSé mAria SOUZA LEao',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'Rua jose Armando machado',
}

for (const key in users) {
    if (key === 'name') {
        //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
        const names = users[key].split(' ')
        users[key]= ''
        for (const name of names) {
            const normalizedName = name.toLocaleLowerCase();
            const [primeiraLetra,...restoDoNome] = normalizedName

            //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
            users[key] = users[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('')
            users[key] = users[key].trim()

        }
        
    }
    if (key === 'email') {
        users[key] = users[key].toLocaleLowerCase()
    }
}

console.log(users)