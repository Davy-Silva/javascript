var valores = []
var numeros = document.querySelector('input#button')
var tabela = document.querySelector('table#numeros')
var res = document.querySelector('div#valores')
var num = Number(numeros.value)

function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {   return true }
    else
    {   return false }
}

function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {   return true }
    else
    {   return false }
}

function adicionar()
{
    if(isNumero(num) && !inLista(num, valores))
    {
        valores.push(Number(num.valores))
        var linha = document.createElement('tr')
        let item = document.createElement('td')
        item.textContent = `${numberNum} X ${c} = ${numberNum*c}`
        tabuada.appendChild(linha)
        linha.appendChild(item)
    }
    else
    {   alert('Valor inválido ou já encontrado na lista.')}
}


var arrayFim = array.length - 1

function valores()
{
    res.innerHTML(`Ao todo, temos ${array.length} números cadastrados`)
    res.innerHTML(`O maior valor informado foi ${array[arrayFim]}`)
    res.innerHTML(`O menor valor infomado foi ${array[0]}`)
    res.innerHTML(`Somando todos os valores temos`)
}
