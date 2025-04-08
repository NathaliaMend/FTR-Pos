// Nas novas versoes do node o duplex precisa estar explicito na chamada da funcao fetch - (half significa 'metade')
// https://github.com/nodejs/node/issues/46221#issuecomment-1383246036



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
fetch('http://localhost:3338', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
})