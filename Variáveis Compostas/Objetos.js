var amigo = {nome:'José', //Colocando entre conchetes, pode adicionar inúmeras características que estará no objeto 'amigo'.
sexo: 'masculino', 
peso: 73.4,
altura: 1.78,
engordar(p=0){
    console.log('Engordou.')
    this.peso += p //Faz com que seja somado ou subtraído no 'amigo.engordar'.
}
/*crescer(a=0){
    console.log('Cresceu.')
    this.altura += a
}*/
}

amigo.engordar(-2)
//amigo.crescer(0.2)
console.log(`${amigo.nome} é do sexo ${amigo.sexo}, mede ${amigo.altura} e pesa ${amigo.peso}kg.`)