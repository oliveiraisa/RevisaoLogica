function fibonacci (numero){
    let numeros = [0, 1];
    for (let i = 0; i <= numero - 3; i++){
        numeros.push(numeros[i] + numeros[i + 1]);
    }
    console.log(numeros)
}

fibonacci(10);


