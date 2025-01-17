//  Asserçao de tipos

type UserResponse = {
    ui: number,
    name: string,
    avatar: string
}

let userResponse = {} as UserResponse; //(as / assercao) o tipo esperado no valor da variavel corresponde a tipagem customizada UserResponse. Como se estivesse convertendo o tipo {} para o tipo UserResponse.

//userResponse.