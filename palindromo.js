function palindromo(string) {

    if(!string) return 'string inexistente';

    return string.split('').reverse( ).join('') === string;

}

console.log(palindromo('ovo'))
console.log(palindromo('uva'))
;
