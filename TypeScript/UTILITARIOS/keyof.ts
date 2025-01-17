// O keyof serve para extrair as chaves de um objeto e utilizar como tipagem

const icons = {
    "home" : "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg"
}

type Icon = typeof icons // extraia a tipagem do tipo icons e coloque no tipo Icon

const icon: keyof Icon = "add" //extraia a chave da tipagem do tipo Icon e atribua ela na constante icon
console.log(icon);