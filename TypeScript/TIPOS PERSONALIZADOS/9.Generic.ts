// como utilizar o generic
//serve para deixar a tipagem flexivel
//define a tipagem em execucao
// aceita a tipagem mais recente // definir o tipo no momento em que declaro a variavel

/*
    S => state
    T => type
    K => key
    V => value
    E => element // (voce escolhe a letra)
 */

function useState<T extends number | string = string >() { //Tipagem -> Se a tipagem T ou number ou string nao for escolhida, o padrao sera = string
    let state: T;

    function get(){
        return state;
    }
    function set(newValue: T){
        state = newValue;
    }
    return {get, set};
}

let newState = useState<string>();
newState.get();
//newState.set(123); erro
newState.set('nath')