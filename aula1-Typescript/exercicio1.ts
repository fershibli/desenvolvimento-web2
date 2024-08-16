import promptSync = require('prompt-sync')

const prompt =  promptSync()

const numeroUsuario : string = prompt('Digite um número inteiro >>> ')

const numeroParseado : number = parseInt(numeroUsuario)

console.log(`- Antecessores: \n\t${numeroParseado - 1} e ${numeroParseado - 2}`)
console.log(`- Sucessores: \n\t${numeroParseado + 1} e ${numeroParseado + 2}`)