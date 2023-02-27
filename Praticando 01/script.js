function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 18
    //var minuto = 30
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} min.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    var saudar = document.getElementById('saudar')
    var dia = 'Bom dia!'
    var tar = 'Boa tarde!'
    var noi = 'Boa noite!'
    if (hora >= 0 && hora < 12) {
        saudar.innerHTML = `${dia}`
    } else if (hora >= 12 && hora < 18) {
        saudar.innerHTML = `${tar}`
    } else {
        saudar.innerHTML = `${noi}`
}
}
