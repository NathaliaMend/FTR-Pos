export class Database {
    #database = {}
    
    select(table) {
        const data = this.#database[table] ?? []
        return data
    }
    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push
        } else {
            this.#database[table] = data
        }
    }
}