// Stateful -> Salva na memoria local
// Stateless -> Salva em memoria externa (ex.:banco de dados)

//JSON -> JavaScript Object Notation - estrtura de dados.

// Cabeçalhos (requisicao/resposta) => Metadados



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
        return res.end('Criacao de usuario')
    }

    return res.end('Hello Word')
})
server.listen(3336)