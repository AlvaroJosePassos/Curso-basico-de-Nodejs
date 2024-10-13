const fs = require('fs')
const path = require('path')

//Mkdir / criar uma pasta
// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if (error) {
//         return console.log('Erro: ', error)
//     }
//
//     return console.log('Pasta criada com sucesso')
// })

//Writefile / criar um arquivo
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Node', (error) => {
//     if (error) {
//         return console.log('Erro: ', error)
//     }
//
//     return console.log('Arquivo criado com sucesso')
// })

//Appendfile / adicionar a um arquivo
// fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' Hello World', (error) => {
//     if (error) {
//         return console.log('Erro: ', error)
//     }
// 
//     return console.log('Arquivo alterado com sucesso')
// })

//Readfile / ler um arquivo
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
    if (error) {
        return console.log('Erro: ', error)
    }
    return console.log(data)
})