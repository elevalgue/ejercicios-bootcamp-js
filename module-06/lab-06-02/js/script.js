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

function transformText(input, sourceAlphabet, value) {
    let output = '';
    // input = decryptedText.value;
    console.log('input', input);
    for (let index = 0; index < input.length; index++) {
        const letterPosition = searchIndex(sourceAlphabet, input[index]);
        console.log(letterPosition, 'letter Position');
        
        if (letterPosition === -1) {
            output += input[index];
            // output = output + encryptedAlphabet[letterPosition];
        } else {
            const convertedLetter = value[letterPosition];
            output = output + input[index];
            // const output = 
        }
    }
    // decryptedText.value = output;
    console.log( 'ouptut');
    return output;

}

function transformCharacter(sourceAlphabet, resultAlphabet, character) {
    const characterPosition = searchIndex(sourceAlphabet, character);
    console.log(characterPosition, 'characterPosition');
    if (characterPosition === -1) {
        console.log(character);
        return character; 
    }
    return resultAlphabet[characterPosition]; 
}

function transformMessage(message, sourceAlphabet, resultAlphabet) {
    let finalMessage = '';
    // messageLowerCase = message.toLowerCase();
    console.log(messageLowerCase, 'messageLowerCase');
    for (const character of messageLowerCase) {
        console.log(character, 'character');
        console.log(messageLowerCase, 'messageLowerCase');
        finalMessage = finalMessage + transformCharacter(sourceAlphabet, resultAlphabet, character);
    }
    return finalMessage;
}

function renderMessage(ev) {
    const triggerId = ev.currentTarget.id;
    if (triggerId === 'encrypted') {
        encryptedText.value = transformMessage(decryptedText.value, encryptedAlphabet, plainAlphabet);
        console.log((encryptedText.value), 'encryptedText.value');
        console.log(transformMessage(), 'parameters');
    }
    else if (triggerId === 'decrypted') {
        decryptedText.value = transformCharacter(encryptedText.value, plainAlphabet, encryptedAlphabet);
        console.log(decryptedText.value, 'decryptedText.value');
    }
}

btnDecrypted.addEventListener('click', renderMessage);
btnEncrypted.addEventListener('click', renderMessage);

btnDecrypted.addEventListener('click', transformMessage);
btnEncrypted.addEventListener('click', transformMessage);