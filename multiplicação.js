function multiplicação (num1, num2){
    let numero = 0
    for (let i = 1; i <= num2; i++){
        numero += num1
    }
    return numero
}

console.log(multiplicação(5, 5))