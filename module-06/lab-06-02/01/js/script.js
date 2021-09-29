'use strict';

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
    }
    return -1; 
}

function transformCharacter(sourceAlphabet, resultAlphabet, character) {
    const characterIndex = searchIndex(sourceAlphabet, character);

    if (characterIndex === -1) {
        return character
    }
    return resultAlphabet[characterIndex]; 
}

function transformMessage(message, sourceAlphabet, resultAlphabet) {
    const messageLowerCase = message.toLowerCase();
    let result = '';

    for (const character of messageLowerCase) {
        result = result + transformCharacter(sourceAlphabet, resultAlphabet, character)
    }
    return result; 
}

function renderMessage(ev) {
    console.log(ev.target, 'hello');
    const triggerId = ev.target.id; 
   if (triggerId === 'btn-decrypt') {
    encryptedText.value = transformMessage(decryptedText.value, encryptedAlphabet, plainAlphabet);
   } else if (triggerId === 'btn-encrypt') {
    decryptedText.value = transformMessage(encryptedText.value, plainAlphabet, encryptedAlphabet); 
   } 
}

btnDecrypted.addEventListener('click', renderMessage);
btnEncrypted.addEventListener('click', renderMessage);
