'use strict';

console.log('Descifrando a enigma');

// problema 

/**
 * b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua
 * ( t'usqfuq ,:apu(:)m z q,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)
 */

// pasos

/**
 * El usuario escribe un mensaje en el text area
 * Debo recoger su valor
 * Encriptarlo 
 * Mostrar el mensaje encriptado en el segundo text area
 * Hacer los mismo en el otro sentido
 * 
 * Debería aplicar el método split a cada uno de las variables para crear un array de elementos
 * Podría aplicar un indexOf para jugar con los índices
 */

// entrada

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
// console.log(plainAlphabet,'-----------',  'alfabeto normal');
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
// console.log(encryptedAlphabet, '-----------', 'alfabeto encriptado');

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

function transformText(text) {
    let result = '';
    text = decryptedText.value;
    console.log('text', text);
    for (let index = 0; index < text.length; index++) {
        const position = searchIndex(plainAlphabet, text[index]);
        if (position > -1) {
            result = result + encryptedAlphabet[position];
        } else {
            result = result + text[index];
        }
    }
    decryptedText.value = result;
    return result;
}

btnDecrypted.addEventListener('click', transformText);
