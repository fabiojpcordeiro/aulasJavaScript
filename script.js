function calculadora(a, b, operacao){
    if (operacao=='soma' || operacao=='+'){
        return a+b;
    }
    if (operacao== 'subtracao' || operacao=='-'){
        return a-b;
    }
    if (operacao== 'multiplicacao' || operacao=='*'){
        return a*b;
    }
    if (operacao== 'divisao' || operacao=='/'){
        return a/b;
    }
    else{
        return 'operação inválida';
    }
}

let valorA = Number(prompt("Digite o primeiro valor: "));
let valorB = Number(prompt("Digite o segundo valor: "));
let tipoOperacao = prompt("Digite o tipo de operação: ");

let resultado = calculadora(valorA, valorB, tipoOperacao);
console.log("O resultado é: ", resultado);