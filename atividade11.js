var valor_total = 0;
var unidade = [];
var notas = function(x){
    var cedulas = [10,20,50,100];
    var i = 0;
    while(valor_total!=x){
                if(x>cedulas[i] && valor_total+cedulas[i]<=x && i<cedulas.length){
                    unidade.push(cedulas[i]);
                    valor_total +=cedulas[i];
                    i++;
            }
            else{
                i=0;
            }
        }
        unidade.sort();
        document.write('Valor total: '+x+'<br>')
        document.write(unidade);
    
}
notas(200);