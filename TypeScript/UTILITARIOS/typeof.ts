// O Typeof serve para definir uma tipagem a partir de algo, um conteudo de uma variavel

interface Product {
    id: number,
    name: string,
    quantity: number
}

const product1: Product = { id: 1, name: "Produto 1", quantity: 3}
const product2: typeof product1 = { id: 1, name: "Produto 2", quantity: 5} // quero que a essa constante tenha a mesma tipagem/seja do tipo da constante da linha de cima.