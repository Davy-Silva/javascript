function verificar()
{
    var ano = new Date().getFullYear()
    var fano = document.querySelector('input#iano')
    var res = document.querySelector('div#res')

    if(fano.value == 0 || fano.value > ano)
    { alert('ERRO! Verifique os dados e tente novamente.') }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

        if(fsex[0].checked)
        {
            gênero = 'Homem'

            if(idade >= 0 && idade < 10)
            {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            }
            else if(idade < 21)
            {
                // JOVEM
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }
            else if(idade < 50)
            {
                // ADULTO
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }
            else if(idade < 120)
            {
                // IDOSO
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
            else
            {
                // VAMPIRO
                res.innerHTML = `${idade} ANOS?? VOCÊ É UM VAMPIRO?!?!?!!?!`
            }
        }
        else if(fsex[1].checked)
        {
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10)
            {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            }
            else if(idade < 21)
            {
                // JOVEM
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            }
            else if(idade < 50)
            {
                // ADULTO
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            }
            else if(idade < 120)
            {
                // IDOSO
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
            else
            {
                // VAMPIRO
                res.innerHTML = `${idade} ANOS?? VOCÊ É UM VAMPIRO?!?!?!!?!`
            }
        }
        else
        { res.innerHTML = 'Escolha o gênero!' }
    }
}