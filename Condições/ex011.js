//Condição Aninhada
var nota = 7
console.log (`Você tirou nota ${nota}.`)
if(nota >= 6) {
    console.log (`Você foi aprovada.`)
} else {
    if(nota < 6) {
        console.log (`Você foi reprovada.`)     
}
}

var idade = 12
console.log (`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log ('Não vota.')
} else if(idade >= 16 && idade < 18 || idade > 65 && idade <= 80) { //&& = e || = ou
        console.log (`Seu voto opcional.`)
        }   else if (idade > 80)
            console.log ('Melhor Morrer!')
                else
                    console.log ('Seu voto é obrigatório!') 
//Infinitas possibilidades!