var valor_total = 0;
var unidade = [];
var notas = function(x){
    var cedulas = [100,50,20,10];
    var i = 0;
    while(valor_total!=x){
        if(i<=cedulas.length){
                if(x>cedulas[i] && valor_total+cedulas[i]<=x){
                    unidade.push(cedulas[i]);
                    valor_total +=cedulas[i];
                    if(valor_total+cedulas[i]>x){
                        i++;
                    }
            }
        }
        else{
            i=0;
            console.log(i)
        }
            
        }
        unidade.sort();
        document.write('Valor total: '+x+'<br>')
        document.write(unidade);
    
}
notas(350);