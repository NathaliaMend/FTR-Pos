// Intersecção de tipos
type Pessoa = {
    id:number
    name:string
}
type Professor = Pessoa & {
    disciplinas: string[]
}

type Aluno =  Pessoa & { //O aluno é igual a Pessoa e {} .
    idade: number
}