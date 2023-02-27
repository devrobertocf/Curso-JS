var c = 1
while (c <= 5) { //while o teste lógico é feito no ínicio
    console.log(`Passo ${c}:`)
    c++ //é a mesma coisa que c = c + 1, ele repete até escrever 3x
}

//Uma outra forma de fazer é usando o While com o Do, como abaixo:

var c = 1
do { //do o teste lógico é feito no final
    console.log(`Fase ${c}:`)
    c++ 
} while (c <= 5) 

//E por fim ainda existe uma outra forma, a for:

for (var c=1; c<=5; c++) {
    console.log(`Etapa ${c}:`)
}

//Outro exemplo com for:

console.log('Vai começar...')
for (var c=1; c<=5; c++) {
    console.log(c)
}
console.log('Fim!')