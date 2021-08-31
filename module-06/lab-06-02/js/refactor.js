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

/* COPY TRASNSFORM MESSAGE & RENDER MESSAGE */