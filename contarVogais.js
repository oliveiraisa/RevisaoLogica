function contarVogais(palavra){
    palavra = palavra.toLowerCase()
    let contar = 0
    for(const letra of palavra){
        if (letra == 'a' || letra == 'e' ||letra == 'i' ||letra == 'o' ||letra == 'u'){
            contar++
        }
      }
    return contar
}

console.log(contarVogais("pera"))
console.log(contarVogais("Banana"))