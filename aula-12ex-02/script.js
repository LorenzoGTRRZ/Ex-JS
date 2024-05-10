function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique seus dados e digite sua idade novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './imagens/Bebe-m.jpg' )
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/Jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/Adulto-m.jpg')
            }else {
                img.setAttribute('src', './imagens/Idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './imagens/Bebe-f.jpg')
            } else if (idade < 21){
                img.setAttribute('src', './imagens/Jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/Adulto-f.jpg')
            } else {
                img.setAttribute('src', './imagens/Idoso-f.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 


}