function verficarIdade()
{
    let ano = document.querySelector('input#id-ano')
    let anoNumber = Number(ano)
    let sexo = document.getElementsByName('sexo')

    if(anoNumber >= 1920 && anoNumber <= 2024)
    {
        if(sexo == M)
        {
            switch
        }
        else
        {

        }
    }
    else
    {   alert('Idade Inválida!')}
}