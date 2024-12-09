const users = {
    //'nome' é uma KEY(chave) e 'joSé mAria' é value(valor)
    name: 'joSé mAria',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'Rua jose Armando machado',
}

for (const key in users) {
    if (key === 'name' || key === 'email') {
        users[key] = users[key].toLocaleLowerCase()
    }
}

console.log(users)