// string de escrita vai apenas processar o dado
//chunk - é o buffer/buf que esta sendo lido
// encoding -
//callback - encerra
//Transform para transformar o dado lido
// String duplex é uma uniao dos readable e writable (leitura e escrita)

import{Readable, Writable, Transform} from 'node:stream'
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
class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
      const transformed = Number(chunk.toString() * -1)
      callback(null, Buffer.from(String(transformed)))
    }
}
class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}
new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())