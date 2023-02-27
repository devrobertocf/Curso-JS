var agora = new Date()
var diaSem = agora.getDay()
// dom = 0; seg = 1; ter = 2; qua = 3; qui = 4; sex = 5; sáb = 6
// console.log(diaSem)
switch (diaSem) {
    case 0:
    console.log ('Hoje é Domingo!')
    break
    case 1:
    console.log ('Hoje é Segunda!')
    break
    case 2:
    console.log ('Hoje é Terça!')
    break
    case 3:
    console.log ('Hoje é Quarta!')
    break
    case 4:
    console.log ('Hoje é Quinta!')
    break
    case 5:
    console.log ('Hoje é Sexta!')
    break
    case 6:
    console.log ('Hoje é Sábado!')
    break
    default:
    console.log ('Dia INVÁLIDO!')
    break
}