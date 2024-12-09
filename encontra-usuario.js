const listaDeContatos = ['Paulo', 'Ricardo', 'Joao', 'Maria', 'Zeca', 'Nathalia', 'Bianca', 'Armando', 'Carla'];


//• SOLUCAO 1
// let encontrouUsuario = false;
// let atingiuFimDaLista = false
// let indiceDoUsuario = 0;

//startsWith - função que verifica se uma string começa com um valor específico, retornando um valor booleano que indica se a comparação é verdadeira ou falsa
//
//enquanto nao encontrar usuario e nao atingir o fim da lista faça
// while (!encontrouUsuario && !atingiuFimDaLista) {
//     const usuarioAtual = listaDeContatos[indiceDoUsuario]
//     if (usuarioAtual.startsWith('Z')) {
//         encontrouUsuario = true
//         console.log(`Usúario econtrado: ${usuarioAtual}`)
//     }
//     indiceDoUsuario += 1

//     if (indiceDoUsuario === listaDeContatos.length) {
//         atingiuFimDaLista = true
//         console.log('Usúario não encontrado')
//     }
// }

//• SOLUCAO 2
let encontrouUsuarioOuPercorreuLista = false;
let indiceDoUsuario = 0;

while (!encontrouUsuarioOuPercorreuLista) {
    const usuarioAtual = listaDeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreuLista = true
        console.log(`Usúario econtrado: ${usuarioAtual}`)
    }
    indiceDoUsuario += 1

    if (indiceDoUsuario === listaDeContatos.length) {
        atingiuFimDaLista = true
        console.log('Usúario não encontrado')
    }
}

//• SOLUCAO 3
// let indiceDoUsuario = 0;

// while (true) {
//     const usuarioAtual = listaDeContatos[indiceDoUsuario]
//     if (usuarioAtual.startsWith('Z')) {
//         encontrouUsuarioOuPercorreuLista = true
//         console.log(`Usúario econtrado: ${usuarioAtual}`)
//         break
//     }
//     indiceDoUsuario += 1

//     if (indiceDoUsuario === listaDeContatos.length) {
//         atingiuFimDaLista = true
//         console.log('Usúario não encontrado')
//         break
//     }
// }

