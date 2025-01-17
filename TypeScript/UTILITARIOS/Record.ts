// O Record é Muito utilizado para o mapeamento da estrutura do objeto, para que ele respeite a tipagem de acordo com o que voce definir

const scores: Record<string, number> = { //<chave e valor>
    "Nath": 10,   //a string pode ser com ou sem aspas
    "Miguel": 15
}

//Limitar valores.
type Profile = "admin" | "user" | "guest"

const user: Record<Profile, number> = {  //restringir chaves
    "admin": 1,
    "guest": 2,
    "user": 3
}
// Objetos Personalizados
interface User {
    name: string
    email: string
}
const users: Record<number, User> = {
    1: { name: "nathalia", email: "nath@email.com"},
    2: { name: "miguel", email: "miguel@email.com"}
}