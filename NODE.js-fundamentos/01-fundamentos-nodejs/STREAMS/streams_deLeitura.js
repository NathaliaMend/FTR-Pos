// no node toda porta de entrada e saida é uma stream.
// exemplos de entrada e saida comum é o res e req (resposta e requisicao)
//stdin é tudo o que o usuario digita no terminal (leitura)
//stdout é uma string de saida (escrita)
//o pipe é uma forma de encaminhar

/*process.stdin.pipe(process.stdout)*/

//toda string Readatle tem o metodo obrigatorio READ.

// setTimeout(() => {}, 1000)  -  

import{Readable} from 'node:stream'
class OneToHundredStream extends Readable {
    index = 1
    _read(){
        const i = this.index++

        setTimeout(() => {
            if ( i > 100) {
                this.push(null)
            }else{
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundredStream().pipe(process.stdout)
