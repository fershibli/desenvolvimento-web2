"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const prompt = promptSync();
const numeroUsuario = prompt('Digite um número inteiro >>> ');
const numeroParseado = parseInt(numeroUsuario);
console.log(`- Antecessores: \n\t${numeroParseado - 1} e ${numeroParseado - 2}`);
console.log(`- Sucessores: \n\t${numeroParseado + 1} e ${numeroParseado + 2}`);
