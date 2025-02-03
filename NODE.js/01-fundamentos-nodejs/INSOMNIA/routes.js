import { Database } from "./database.js"
import { randomUUID } from 'node:crypto' //UUID => Unique Universal ID

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (res, req) => {
            const users = database.select('users')

            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: '/users',
        handler: (res, req) => {
            const { name, email } = req.body
            const user = {
                id: randomUUID(),
                name,
                email,
            }
            database.insert('users', user)

            return res.writeHead(201).end()
        }
    }
]