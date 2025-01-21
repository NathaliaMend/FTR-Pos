/*o protocolo HTTP (Hypertext Transfer Protocol) é amplamente utilizado para listar, buscar, enviar, atualizar e 
deletar dados em APIs. Ele é a base da comunicação entre clientes (como navegadores ou aplicativos) e servidores que 
hospedam APIs. Os métodos HTTP (ou verbos HTTP) desempenham um papel central nessa comunicação.*/

// http 200 - OK
//http 201 - cread
// http 404 - (rota)/pagina nao encontrada/(nao existe)

import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(req.headers)
    if (method == 'GET' && url == '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }
    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})
server.listen(3337)