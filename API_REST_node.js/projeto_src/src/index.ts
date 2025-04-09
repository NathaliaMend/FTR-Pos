
// com javasript:
/*function calculaidade(user) {
    return new Date().getFullYear() - user.birthYear
}
calculaidade('nathalia')
calculaidade()
*/

interface User {
    birthYear: number
}
function calculaidade(user: User) {
    return new Date().getFullYear() - user.birthYear
}
//calculaidade('nathalia')
calculaidade(    { birthYear: 2000
} )