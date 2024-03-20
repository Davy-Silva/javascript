function contar()
{
    var inicio = document.querySelector('input#id-inicio')
    var fim = document.querySelector('input#id-fim')
    var passo = document.querySelector('input#id-passo')

    var inicioNumber = Number(inicio.value)
    var fimNumber = Number(fim.value)
    var passoNumber = Number(passo.value)

    var res = document.querySelector('div#res')

    if(inicio.value == 0 || fim.value == 0)
    {   window.alert('Faltam dados!')}
    else
    {
        res.innerHTML = 'Contando: <br>'

        // PASSO MENOR QUE 1

        if(passoNumber <= 0)
        {
            alert('Passo inváldo! Considerando 1:')
            passoNumber = 1
        }

        // CONTAGEM CRESCENTE

        if(inicioNumber < fimNumber)
        {
            for(let c = inicioNumber; c <= fimNumber; c += passoNumber)
            {
                res.innerHTML += (` ${c} &rarr; `)
            }
        }

        // CONTAGEM REGRESSIVA

        else
        {
            for(let c = inicioNumber; c >= fimNumber; c -= passoNumber)
            {
                res.innerHTML += (` ${c} &rarr; `)
            }
        }
        res.innerHTML += ('&#127822;')
    }
}