/*
Faça um programa que identifique se em um determinado vetor, existem ou não valores repetidos.
*/
var arr = ['1','1','2','3','4','5','5'];
arr.sort();

var value = null;
var index = 0;

for(let i=0; i<=arr.length;i++){
    if(arr[i] != value){
        if(index>0){
            console.log(('O número '+ value+ ' aparece '+ index+ ' vezes '));
        }
        value = arr[i];
        index = 1;
    }
    else{
        index++;
    }
}

