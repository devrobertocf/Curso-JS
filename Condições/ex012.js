var agora = new Date()
//var hora2 = 12
var hora = agora.getHours()
var min = agora.getMinutes()
//console.log (`Agora são exatamente ${hora} horas.`)
console.log (`Agora são exatamente ${hora} horas e ${min} minutos.`)
    if (hora < 12) {
        console.log (`Bom dia!`)
    } else if (hora >= 12 && hora <= 18) { // ou apenas hora <= 18
        console.log ('Boa tarde!') 
        }     else 
        console.log ('Boa noite!')