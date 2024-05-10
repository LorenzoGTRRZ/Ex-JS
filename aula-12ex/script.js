function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')

var data = new Date()

var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = './images/Manha.jpg'
    document.body.style.background = '#5694cf'
} else if (hora >= 12 && hora < 18) {
    img.src = './images/Tarde.jpg'
    document.body.style.background = '#5a5b3b'
} else {
    img.src = './images/Noite.jpg'
    document.body.style.background = '#00214e'
}

}
