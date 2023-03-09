function filterList(){
let user = [
    {nome: "luis", idade: 26},
    {nome: "norma", idade: 16},
    {nome: "daiana", idade: 26},
    {nome: "jorge", idade: 16},
    {nome: "kauan", idade: 16},
    {nome: "charles", idade: 26},
    {nome: "marco", idade: 16},
    {nome: "bruno", idade: 16}
    
]
let menores = user.filter(i => i.idade < 18)
console.log(menores)
let maiores = user.filter(i => i.idade >= 18) 
console.log(maiores)
}
filterList()