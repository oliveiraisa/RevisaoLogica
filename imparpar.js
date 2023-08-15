function imparPar(numero){
  if (numero % 2 == 0) {
      return "Par"
  }
  else{
      return "Ímpar"
  }
}

var numero1 = 3
var numero2 = 8
console.log(`O numero ${numero1} é ` + imparPar(numero1))
console.log(`O numero ${numero2} é ` + imparPar(numero2))
;