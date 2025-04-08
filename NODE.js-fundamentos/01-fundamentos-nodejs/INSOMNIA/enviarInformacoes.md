* Existem 3 formas do frontend enviar informacoes para a api 
`Sao elas:`
 -> Query Parameters; 
Parametros nomeados enviados no proprio endereço da requisição
EX.: http://localhost:3339/users?userId=1&name=nathalia
URL Stateful => Sao muito utilizados para Filtros, Paginação, Busca, para coisas que modificam a resposta mas que nao sao informacoes obrigatorias
* Nao pode ser usado para informacao sensivel como senhas.

 -> Routes Parameters;
 Parametros não nomeados mas que tambem ficam na rota
 EX.: GET http://localhost:3339/users/1
É usando para identificação de recurso.
Combinacao de metodo (GET), recurso (users)e route parameter para entender o que essa rota quer dizer.
* Nao pode ser usado para informacao sensivel como senhas.

 -> Request Body;
 Utilizado para envio de informacoes de um formulario; (HTTPs)
 EX.: POST http://localhost:3339/users 
 A URL não terá nenhuma informaçao;

 // Edicao e remocao do user

