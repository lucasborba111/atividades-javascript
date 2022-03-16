/*
Dada duas variáveis A e B, sendo A = 3 e B=5, escreva um código, SEM utilizar uma terceira variável, capaz de trocar o valor
entre elas. Ao fim deste exemplo, as variáveis deverão ser iguais a: A =5e B = 3
*/
let a = 5;
let b = 3;

[a,b] = [b,a];
console.log(a,b);