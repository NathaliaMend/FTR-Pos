import fs from 'node:fs/promises'

const databasePath = new URL('db.json', import.meta.url)
console.log(URL)
console.log(databasePath)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasePath, 'UTF-8')
            .then(data => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table) {
        const data = this.#database[table] ?? []
        return data
    }
    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#persist();
        return data;
    }
    update(table, id, data) {
        const rowIndex = this.#database[table].findIndex(row => row.id == id)
        if (rowIndex > -1) {
            console.log('entrou if')
            this.#database[table][rowIndex] = {id, ...data }
            this.#persist()
        }
    }
    delete(table, id) {
        const rowIndex = this.#database[table].findIndex(row => row.id == id) //vê se existe na tabela //procura na db.json um id igual ao que quero deletar, se existir ele retorna o indice(posicao) dessa informacao
        if (rowIndex > -1) {
            console.log('entrou if')
            this.#database[table].splice(rowIndex, 1) //splice remove
            this.#persist() // vai persistir(salvar informacao) somente se encontrado
        }
    }
}