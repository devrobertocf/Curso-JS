//Clica f8 para testar o código.
var vel = 60
console.log(`A velocidade do seu carro é ${vel} km/h`)
//console.log(`Você ultrapassou a velocidade permitida. Multado!`) Com esse comando, mesmo que a velocidade seja baixa, vai dizer que ultrapassou.
if(vel>60){ //Condição Simples
    console.log(`Você ultrapassou a velocidade permitida. Multado!`)
}
if(vel == 60){ //Condição Composta
    console.log(`Você está a 60 km/h!`)
} else {
    console.log(`Você não está a 60 km/h!`)
}
//Com a condicional a mensagem só aparece se a velocidade for maior que 60.
console.log(`Dirija sempre usando o cinto de segurança.`)