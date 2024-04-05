function verificarIdade()
{
    let ano = document.querySelector('input#id-ano')
    let anoNumber = Number(ano.value)
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNumber
    let res = document.querySelector('div#res')
    let texto = document.querySelector('p#id-texto')
    let img = new Image()
    let sexo = document.getElementsByName('sexo')

    if(anoNumber>= 1920 && anoNumber <= 2024)
    {
        if(sexo[0].checked)
        {
            sexo = 'Homem'

            if(anoNumber <= 1960)
            {
               img.src = 'imagens/idoso-m.jpg'
            }
            else if(anoNumber <= 2006)
            {}
            else
            {}

            res.appendChild(img)

            texto.innerHTML = `Encontramos um ${sexo} com ${idade} anos.`
        }
        else if(sexo[1].checked)
        {
            sexo = 'Mulher'

            if(anoNumber <= 1960)
            {}
            else if(anoNumber <= 2006)
            {}
            else
            {}

            texto.innerHTML = `Encontramos um ${sexo} com ${idade} anos.`
        }
        else
        {   alert('Escolha seu sexo!') }

    }
    else
    {   alert('Idade Inválida!')}
}