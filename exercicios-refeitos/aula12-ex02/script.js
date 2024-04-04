function verificarIdade()
{
    let ano = document.querySelector('input#id-ano')
    let anoNumber = Number(ano)
    let anoAtual = new Date().getFullYear()
    let idade = anoNumber - anoAtual
    let texto = document.querySelector('p#id-texto')
    let img = document.querySelector('img#id-img')
    let sexo = document.getElementsByName('sexo')

    if(ano.value >= 1920 && ano.value <= 2024)
    {
        texto.innerHTML =`Encontramos um idoso com ${idade} anos`

        if(sexo[0])
        {
            if(anoNumber <= 1960)
            {
               document.body.querySelector('div').img.background = 'imagens/adulto-f.jpg'
            }
            else if(anoNumber <= 2006)
            {}
            else
            {}
        }
        else
        {
            if(anoNumber <= 1960)
            {}
            else if(anoNumber <= 2006)
            {}
            else
            {}
        }
    }
    else
    {   alert('Idade Inválida!')}
}