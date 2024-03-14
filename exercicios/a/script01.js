function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 

    var data = new Date()
    //var hora = data.getHours()
    var hora = 1
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12)
    {
        img.src = 'imagens/manha.jpg'
        document.body.querySelector('main').style.background = '#CA7B33'
    }
    else if (hora >= 12 && hora < 18)
    {
        img.src = 'imagens/tarde.jpg'
        document.body.querySelector('main').style.background = '#C32F06'
    }
    else
    {
        img.src = 'imagens/noite.jpg'
        document.body.querySelector('main').style.background = '#0082BE'
    }
}