function invertString (str){
    var invertida = ""
    for (var i = str.length - 1; i >= 0; i--){
        invertida += str[i]
    }
    return invertida
}
var inver = invertString("Javascript")
console.log(inver);