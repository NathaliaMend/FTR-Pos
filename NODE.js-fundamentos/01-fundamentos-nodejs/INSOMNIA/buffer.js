/*

O Node utiliza o buffer na leitura e escrita para ter uma melhor performace; 
O buffer guarda na memoria um dado em numeros binarios;
O buffer é uma representacao de dados na memoria;
Maneira mais otimizada para ler dados.


*/

const buf = Buffer.from("ok")
console.log(buf) //hexadecimal
console.log(buf.toJSON()) //decimal
