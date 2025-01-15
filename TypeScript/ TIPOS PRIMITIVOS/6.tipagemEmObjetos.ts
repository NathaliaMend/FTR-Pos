
//Utiliza-se '?' quando atribuir um valor pode ser opcional
let user: {name: string, age: number, avatarUrl?: string} = {name: "Nathalia", age: 24}
//tipar nos dá a vantagem de ver o que tem dentro de uma variavel/constante.
user.age


/*
function signIn(email: string, password: string) {
    //logica de conectar o usuario na aplicacaco
}

signIn("nathalia@gmail.com", "123")
*/


// É possivel utilizar 'data:' no lugar de '{email, password}:', para a funcao ser do tipo "dados" e dentro dela ter o tipo email e tipo senha que sao do tipo string.
function signIn({email, password}:{email: string, password: string}) { //a cor da tipagem fica com menos brilho quando ela nao foi utilizada dentro da funcao ainda
    //logica de conectar o usuario na aplicacaco
    console.log("usuario" + email + "conectado!") // + data.email +
}
signIn({email: "nathalia@gmail.com", password: "123"});
