//  Rotas http
// rotas sao caminhos de entrada dentro da aplicacao api
/* Sao varias rotas (meios de entrada)/ ( uma rota para cada um da lista):
    - Criar usuarios; -rota
    - Listagem de usuarios; -rota
    - Edicao de usuarios; - rota
    - Remocao de usuarios; -rota
    - etc..

    * Como funciona uma REQUISICAO HTTP?
    composta por 2 principais recursos:
     -metodo http;
        GET / POST / PUT / PATCH / DELETE
     -url; (atraves do _req_ temos essas informacoes)

     *significados*

     GET => Buscar um recurso do back-end
     POST => Criar recursos no back-end
     PUT => Atualizar um recurso no backend
     PATCH => Atualizar uma informacao unica ou especifica de um recurso backend
     (a diferenca de put e patch é que o put vou usar para alterar um recurso quase que por completo enquanto que o patch altera uma parte)
     DELETE => Deleta um recurso do backend

     exemplos:
    GET /users => Buscando usuarios do backend
    POST /users => Criando usuarios no backend
     ou seja : 
    O conjunto de metodo http + recurso ou url é o que dá a rota e o resultado final do que sera executado dentro do backend

*/
import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req
  if (method == 'GET' && url == '/users') {
    return res.end('Listagem de usuarios')
  }
  if (method == 'POST' && url == '/users') {
    return res.end('Criacao de usuario')
  }

  return res.end('Hello Word')
})
server.listen(3335)
