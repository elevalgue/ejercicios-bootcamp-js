'use strict';

console.log('Maricarmen');
console.log('Descifrando a enigma');

const text = 'hello its me'; 

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const decryptedText = document.querySelector('#decrypted');
const encryptedText = document.querySelector('#encrypted');
const btnDecrypted = document.querySelector('#btn-decrypt');
const btnEncrypted = document.querySelector('#btn-encrypt');

function searchIndex(alphabet, character) {
    for (let index = 0; index < alphabet.length; index++) {
        if (alphabet[index] === character) {
            return index
        }
        console.log('itero', alphabet);
        return -1
    }
}

function transformCharacter(sourceAlphabet, resultAlphabet, character) {
    const characterIndex = searchIndex(sourceAlphabet, character);

    if (characterIndex === -1) {
        return character
    }
    return resultAlphabet[characterIndex]; 
}

function transformMessage(message, sourceAlphabet, resultAlphabet) {
    let result = '';
    const messageLowerCase = message.toLowerCase();
    for (const character of messageLowerCase) {
        result = result + transformCharacter(sourceAlphabet, resultAlphabet, character)
    }
    return result; 
}