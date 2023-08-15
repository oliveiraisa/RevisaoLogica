function fatorial(numero){
    aux = 1
    for (var i = 1; i <= numero; i++){
         aux *= i
    }
    return aux
}
var numero1 = 5
var numero2 = 0

console.log(`O fatorial de ${numero1} é ` + fatorial(numero1))
console.log(`O fatorial de ${numero2} é ` + fatorial(numero2))
;