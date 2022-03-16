/*
8. Faça uma função que calcule a media simples (aritmetica) de 3 valores quaisquer. Além dessa, faça uma outra função que
receba nenhum ou vários valores e calcule a média aritmética simples desses valores.
*/
var total = 0;

var media = function(x){
    var quantidade = x.length;
    for(let i = 0; i<quantidade; i++){
        total =total+x[i];
    }
    return total/quantidade;
}
var arr = [10,8,7];
console.log(media(arr));