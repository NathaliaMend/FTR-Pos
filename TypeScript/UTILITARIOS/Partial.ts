// O Partial serve para deixar uma variavel opcional a partir de uma atualizacao

interface User {
    id: number,
    name: string,
    email: string // ? para deixar opcional -> email?: string
}

const newUser: User = { id: 1, name: "nathalia", email: "nathalia@gmail.com"}

const updatedUser: Partial<User> = { name: "Nathalia Mendonca"}