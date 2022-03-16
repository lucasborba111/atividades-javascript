/*Desenvolva um programa que calcule o IMC (Indice de massa corpórea) e mostre o resultado para o usuario.
Tabela Resultados:
Menor que 18: AbaxO do pes
Menor que 25: Peso normal
Maior que 25: Acima do peso
*/
imc = function(peso,altura){
    calc = peso/(altura**2);
    if(calc<18){
        return 'Abaixo do peso';
    }
    else if(calc>18 && calc<=25){
        return 'Peso normal';
    }
    else{
        return 'Acima do peso';
    }
}

console.log(imc(80, 1.9)+' índice: '+calc);