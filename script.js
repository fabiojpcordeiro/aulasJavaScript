
//EXERCÍCIO 01
let idade = prompt("Olá, digite sua idade.");
let maiorDeIdade = 18;
if (idade >= maiorDeIdade){
    console.log("Você é maior de idade.");
}
else{
    console.log("Você é menor de idade.")
}
//EXERCÍCIO 02
function verificaParOuImpar(verificar){
if (verificar % 2 == 0){
    return "par";
}
else{
    return "impar";
}
}
numeroParaVerificar = prompt("Digite um numero para verificar se é par ou impar.");
let valorDeretorno = verificaParOuImpar(numeroParaVerificar);
console.log("o numero " , numeroParaVerificar , " é " , valorDeretorno);

//EXERCÍCIO 03
let testarNumero = prompt("Digite um numero para testarmos se é positivo ou negativo.")
if(testarNumero > 0){
    console.log("O número " , testarNumero, " é maior que zero!");
}
else
if(testarNumero < 0){
    console.log("O número " , testarNumero, " é menor que zero!");
}
else{
    console.log("O numero é Zero!");
}

//EXERCÍCIO 04
function tabuada(numeroDoUsuario){
    for(x=1; x<=10;x++){
        let resultado = numeroDoUsuario*x;
        console.log(numeroDoUsuario,"X",x, " é igual a: ", resultado);
    }
}
let numeroTabuada = prompt("Digite um numero e te daremos a tabuada até o 10");
tabuada(numeroTabuada);
