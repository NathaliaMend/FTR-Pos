// UNDERFINED -> Quando um valor nao foi definido/nao foi atribuido a determinada variavel 
let value: number
value = 12
console.log(value)

let user = {
    name: "nathalia"
}
//console.log(user.email) // --> ou quando uma propriedade nao existe

// NULL -> Quando voce quer definir *intencionalmente* a ausencia de valor
let email = null
console.log(email)
if(!email){
    console.log("Informe o email")
}