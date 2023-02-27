function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')  
    } else {
        var n = Number(num.value) // Faz com que use o número escrito na caixa.
        var c = 1 // É o multiplicador.
        tab.innerHTML = '' // Necessário para zerar quando for gerar outra tabuada.
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Saber qual item foi selecionado.
            tab.appendChild(item) // Precisa para fazer aparecer o elem. filho.
            c++ // Possibilita a sequência (1;2;3;4...) até 10.
        }
    }
}