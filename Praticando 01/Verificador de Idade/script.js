function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //Ano atual menos a idade.
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemjovem.png')
            } else {
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher' 
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulhercriança.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulherjovem.png')
            } else {
                img.setAttribute('src', 'mulhervelho.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} ano(s) de idade.`
        res.appendChild(img) //Aqui faz aparecer a imagem.
    }
}
