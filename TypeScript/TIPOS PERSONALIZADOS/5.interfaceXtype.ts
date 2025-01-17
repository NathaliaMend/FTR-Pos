//Diferenca de interface e type
// O type não deixa subscrever uma tipagem 
// 2 interfaces com nomes iguais se uninem como se fossem uma só interface , coisa que com o type nao é possivel
//type pode renomear e extender tipagens primitivas, coisa que o interface não possibilita

interface IProduct {
     id: number,
     name: string
}

type Tproduct = {
    id: number,
    name: string
}

let product1: IProduct = {id: 1, name: "nath"}
let product2: Tproduct = {id: 2, name: "nathalia"}

//para fazer extensao . interface X type
interface IBaseProduct {
    price: number
}
interface IProductex extends IBaseProduct {
    id: number,
    name: string
}

type TBaseProduct = {
    price: number
}
type Tproductex = TBaseProduct & {
   id: number,
   name: string
}

type TypeString = string
type TypeNumber = number
//interface X extends string{}