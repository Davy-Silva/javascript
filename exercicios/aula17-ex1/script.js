var valores = []
var num = document.querySelector('input#num')
var lista = document.querySelector('table#lista')
var res = document.querySelector('div#valores')

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
    if(isNumero(num.value) && !inLista(num.value, valores))
    {
        valores.push(Number(num.value))
        var linha = document.createElement('tr')
        let item = document.createElement('td')
        item.textContent = `Valor ${valores} adicionado`
        tabuada.appendChild(linha)
        linha.appendChild(item)
    }
    else
    {   alert('Valor inválido ou já encontrado na lista.') }
}


var arrayFim = array.length - 1

function valores()
{
    res.innerHTML(`Ao todo, temos ${array.length} números cadastrados`)
    res.innerHTML(`O maior valor informado foi ${array[arrayFim]}`)
    res.innerHTML(`O menor valor infomado foi ${array[0]}`)
    res.innerHTML(`Somando todos os valores temos`)
}
