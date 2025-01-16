// usando type 
// o type é outro resurso alem do interface para customizar tipagens
// O type serve para expecificar o que o valor de uma variavel precisa ter para ser aceito e atribuido


type Product = {
    id: number,
    name: string
}

function newProduct(product: Product){

}
newProduct({id: 1, name: "produto x"})


// é possivel fazer uniao de tipos 
type SelectResponse = Product[] | null

function selectProducts(): SelectResponse {
    return null
}