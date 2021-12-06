function multiplicaçao(){
    return nm1 * nm2
}

function potencia(){
    return (Math.pow(nm1, nm2))
}

function banco(){
    return saldo - valorcompra
    }
 function menos(){
     return num1 - num2
 }
 function mais(){
     return num1 + num2
 }
 function dividido(){
     return num1 / num2
 }
 function multi(){
     return num1 * num2
 }
function age(){
  return ano - nas
}
function soma2(n1, n2, n3, n4){
    return n1 + n2 + n3 + n4
}
function media(n1, n2, n3, n4, quatro){
return (n1 + n2 + n3 + n4) / (quatro)
}

alert("essa função ira realizar somente multiplicações")
nm1 = parseInt(prompt("digite o seu primeiro numero inteiro"))
nm2 = parseInt(prompt("digite o seu segundo numero inteiro"))
alert(`o resultado da multiplicação e ${multiplicaçao(nm1, nm1)}`)


alert("essa função agora ira realizar somente potenciações, portanto digite novos algarismos. Obs: somente numeros inteiros")
nm1 = parseInt(prompt("digite a sua base"))
nm2 = parseInt(prompt("digite o seu expoente"))
alert(`o resultado da potenciação e ${potencia(nm1, nm2)}`)


alert("essa e uma função de conta bancaria portanto digite seu saldo e o valor de sua compra nos espaços a seguir. Obs: lembre-se, seu saldo pode ser negativo ou positivo!  ")
saldo = parseInt(prompt("digite o seu saldo"))
valorcompra = parseInt(prompt("digite o valor da compra"))
alert(`o seu saldo apos a compra e de ${banco(saldo, valorcompra)} reais` )


alert("a função a seguir sera de uma calculadora com os seguintes operadores / * - +")
num1 = parseInt(prompt("digite o seu primeiro numero inteiro"))
sinal =  prompt("digite o sinal que sera utilizado")
num2 =  parseInt(prompt("digite o seu segundo numero inteiro"))

if(sinal === "*"){
    num1 * num2
    alert(`seu resultado e ${multi(num1, num2)}`)
}
if(sinal === "-"){
    num1 - num2
    alert(`seu resultado e ${menos(num1, num2)}`)
}
if(sinal === "+"){
    num1 + num2
    alert(`seu resultado e ${mais(num1, num2)}`)
}
if(sinal === "/"){
    num1 / num2
    alert(`seu resultado e ${dividido(num1, num2)}`)
}

alert("essa função ira informar sua idade atravez da sua data de nascimento!")
nome = prompt("digite o seu nome")
nas = parseInt(prompt("digite seu ano de nascimento"))
ano = 2021
alert(`Ola ${nome}, você tem ${age(nas, ano )} anos!`)

alert("essa função ira realizar a soma e a media de 4 numeros, digite-os nos espaços a seguir")
n1 = parseInt(prompt("digite o seu primeiro algarismo"))
n2 = parseInt(prompt("digite o seu segundo algarismo"))
n3 = parseInt(prompt("digite o seu terceiro algarismo"))
n4 = parseInt(prompt("digite o seu quarto algarismo"))
quatro = 4
alert(`a soma desses numeros e ${soma2(n1, n2, n3, n4 )}`)
alert(`a media desses numeros e ${media(n1, n2,  n3,  n4, quatro)}`)

    


