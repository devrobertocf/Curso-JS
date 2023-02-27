var num = [1, 5, 3, 7, 9]
num [3] = 6 //Coloque o 6 na posição 3, lembrando que começa na posição 0.  
num.length //Saber o comprimento.
num.sort() //Ordena em ordem crescente
num.push(0) //Coloca o número 0 na última posição. (Colocar depois de sort, não entra não ordem.)
console.log(`Nosso vetor é o ${num}.`)
console.log(`O primeiro valor do vetor é o ${num[0]}.`)
console.log(`O vetor tem ${num.length} posições.`)

//Primeira Maneira
for(var pos=0; pos<num.length; pos++) { 
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
    //console.log(num[pos]) //Listar os valores do Vetor.
}

//Segunda maneira
for(var pos in num) {//Para cada posição dentro de num, mostra o num pos.
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

//Buscar valores dentro do Vetor. O 'O' de Of tem que ser maiúsculo.
var pos = num.indexOf(4) //4 não tem dá 'if', colocando um número que tenha, dará 'else'.
if (pos == -1) {
    console.log(`O número 6 não foi encontrado!`)
} else {
    console.log(`O número 6 está na posição ${pos}.`) 
}
console.log(`O número 5 está na posição ${num.indexOf(5)}.`)
console.log(`O número 4 está na posição ${num.indexOf(4)}.`) //Retorna o valor -1, significa que pesquisou dentro do vetor e não encontrou.