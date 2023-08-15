function primo(numero){
    let divisores = 0
    for (let i = 1; i <= numero; i++){
        if (numero % i == 0){
            divisores++
        }
    }
    if (divisores <= 2){
        return "True"
    }
    return "False"
}

var numero1 = 7
var numero2 = 10

console.log(`O numero ${numero1} é ` + primo(numero1))
console.log(`O numero ${numero2} é ` + primo(numero2))
;