function contar() {
    //let e var é a mesma coisa. 
    let inicio = document.getElementById('txti') //Coloca os id dentro dos parênteses.
    let fim = document.getElementById('txtf')
    let pulo = document.getElementById('txtp')
    let res = document.getElementById('res')
   
    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
    if (p <= 0) {
            window.alert('Pulo inválido! Resultado considerando o passo 1!')
            p = 1
    }
    if (i < f) { //Contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` //coloca \u{código do emoji}
        }
    } else { // Para que funcione na contagem decrescente
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F448}`
        }
    }
    res.innerHTML += `\u{1F3C1}` //Emoji da bandeirinha, fora fica para os dois
}
}