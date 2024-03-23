let num = [5, 8, 2, 9, 3]

console.log(`Nosso índicie 4 é o ${num[4]}.`)

num[5] = 6

console.log(`O vetor adicionado foi ${num[5]}.`)

num.push(1)

console.log(`O valor adicionado com push foi ${num[6]}.`)

console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}.`)

console.log(`O vetor em ordem crescente fica assim ${num.sort()}.`)
console.log('')

console.log('Nosso vetor está logo abaixo:')
for(var i = 0; i <= 6; i++)
{   console.log(` A posição ${i} tem o valor ${num[i]}`) }
console.log('')

console.log(`Nosso vetor com codigo simplificado está logo abaixo:`)
for(var ind in num)
{   console.log(`A posição ${ind} tem o valor ${num[ind]}`)}
console.log('')

console.log('Descobrindo o index do valor 5')
let descobreindex = num.indexOf(5)
console.log(`O valor 5 está na posição ${descobreindex}`)