function carregar ()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0)
    { img.src = 'imagens/manha.jpg' }
    else if (hora >= 12)
    { img.src = 'imagens/tarde.jpg' }
    else
    { img.src = 'imagens/noite.jpg' }
}