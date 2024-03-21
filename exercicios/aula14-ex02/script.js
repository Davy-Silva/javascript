function contar()
{
    var numero = document.querySelector('input#id-numero')
    var tabuada = document.querySelector('table#tabuada')

    // VERIFICANDO SE TEM NÚMERO

    if(numero.value.length == 0)
    {   alert('Por favor, digite um número') }
    else
    {
        // PASSANDO PARA INT E LIMPANDO
        var numberNum = Number(numero.value)
        tabuada.innerHTML = ''

        // CRIANDO OS ELEMENTOS

        for(var c = 1; c <= 10; c++)
        {
            var linha = document.createElement('tr')
            let item = document.createElement('td')
            item.textContent = `${numberNum} X ${c} = ${numberNum*c}`
            tabuada.appendChild(linha)
            linha.appendChild(item)
        }
    }

}