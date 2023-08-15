function somaPar (inicio, fim){
    let soma = 0
    for (let i = inicio; i <= fim; i++){
        if(i % 2 == 0){
            soma += i
        }
    }
    return soma;
}

console.log(somaPar(1, 10))