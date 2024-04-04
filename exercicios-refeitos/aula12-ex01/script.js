function testarHora()
{
    let texto = document.querySelector('p#id-hora')
    let img = document.querySelector('img#id-img')
    //let horaAtual = new Date().getHours()
    let minutoAtual = new Date().getMinutes()
    horaAtual = 11

    if(horaAtual >= 0 && horaAtual <= 24)
    {
        texto.innerHTML = `Agora são ${horaAtual}:${minutoAtual} horas`

        if(horaAtual <= 12)
        {
            img.src = 'imagens/manha.jpg'
            document.body.querySelector('main').style.background = '#016AA1'
        }
        else if(horaAtual <= 17)
        {
            img.src = 'imagens/tarde.jpg'
            document.body.querySelector('main').style.background = '#CA7B33'
        }
        else
        {
            img.src = 'imagens/noite.jpg'
            document.body.querySelector('main').style.background = '#002144'
            document.body.querySelector('main').style.color = '#FFFFFF'
        }
    } 
    else
    {   alert('Seu Horário é inválido!') }
}
