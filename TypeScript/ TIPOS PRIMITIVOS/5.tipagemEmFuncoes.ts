// como tipar suas funcoes

function sum(x: number, y: number): string{ //quando uma funcao nao retorna nada o tipo de retorno dela por padrao é void
    const result = (x + y).toString() //vira string
    console.log("Resultado = " + result)
    return result
}

const showMessage = (name: string): string => {
    const message = "Ola" + name
    return message
}
showMessage("Nathalia Mendonca") //chamando a funcao