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

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
console.log(plainAlphabet,'-----------',  'alfabeto normal');
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
console.log(encryptedAlphabet, '-----------', 'alfabeto encriptado');
