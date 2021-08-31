'use strict';

console.log('Maricarmen');
console.log('Descifrando a enigma');

// const text = 'hello its me'; 

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

// var textoMayusculas="ALFABETO"
// document.write(textoMayusculas.toLowerCase())



function transformMessage(message, sourceAlphabet, resultAlphabet) {
    const messageLowerCase = message.toLowerCase();
    let result = '';
    console.log(typeof messageLowerCase);
    console.log(typeof message);
    for (const character of messageLowerCase) {
        result = result + transformCharacter(sourceAlphabet, resultAlphabet, character)
    }
    console.log(result);
    return result; 
}
console.log(transformMessage(), 'hellos');


function renderMessage(ev) {
    const triggerId = ev.currenTarget.id
   if (triggerId === 'encrypted') {
    encryptedText.value = transformMessage(decryptedText.value, encryptedAlphabet, plainAlphabet);
   } else if (triggerId === 'decrypted') {
    decryptedText.value = transformMessage(decryptedText.value, plainAlphabet, plainAlphabet); 
   } 
}

btnDecrypted.addEventListener('click', renderMessage);
btnEncrypted.addEventListener('click', renderMessage);