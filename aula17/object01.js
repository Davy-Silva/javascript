let amigo =
{
    nome: 'José',
    sexo: 'M',
    engordar(p = 0)
    {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(typeof amigo)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)