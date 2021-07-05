function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
var min = data.getMinutes()
if (min < 10) {
    msg.innerHTML = `Agora são ${hora}:0${min}.`
} else {
msg.innerHTML = `Agora são ${hora}:${min}.`}
if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = 'manha.png'
    document.body.style.background = '#919cc3'
} else if (hora > 13 && hora < 18) {
    // Boa tarde!
    img.src = 'tarde.png'
    document.body.style.background = '#ac3d06'
} else {
    // Boa noite!
    img.src = 'noite.png'
    document.body.style.background = '#010410'
}
}