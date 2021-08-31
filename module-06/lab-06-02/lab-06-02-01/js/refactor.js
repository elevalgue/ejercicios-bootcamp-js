'use strict';

console.log('Maricarmen');

/* REFACTOR EXERCISE WITH IndexOf */
const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const decryptedText = document.querySelector('#decrypted');
const encryptedText = document.querySelector('#encrypted');
const btnDecrypted = document.querySelector('#btn-decrypt');
const btnEncrypted = document.querySelector('#btn-encrypt');

function transformCharacter(sourceAlphabet, resultAlphabet, character) {
    const characterIndex = sourceAlphabet.indexOf(character);

    if (characterIndex === -1) {
        return character; 
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
    const triggerId = ev.target.id;
    
   if (triggerId === 'btn-decrypt') {
    encryptedText.value = transformMessage(decryptedText.value, encryptedAlphabet, plainAlphabet);
   } else if (triggerId === 'btn-encrypt') {
    decryptedText.value = transformMessage(encryptedText.value, plainAlphabet, encryptedAlphabet); 
   } 
}

btnDecrypted.addEventListener('click', renderMessage);
btnEncrypted.addEventListener('click', renderMessage);