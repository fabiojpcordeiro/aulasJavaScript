// Função Simples (declarativa)
function saudacao(){
    return console.log("Olá mundo");
}

//Função com parâmetros
function soma(valorA, valorB){
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

//Função Anônima
const multiplicar = function(valorA, valorB){
    const total= valorA * valorB;
    return console.log(total);
}

//Arrow Function
const dividir = (a,b) => a/b;

//Função com valor padrão de parâmetros
function exponencial(base,expoente = 2){
    const exp=base ** expoente;
    return console.log(exp);
}

//Função de Callback
function inicializarAplicacao(){
    //Invocar as funções
    saudacao();
    soma(10,5);
    multiplicar(3,6);
    exponencial(2);
    exponencial(2,6);
    console.log(dividir(10,5));
}

inicializarAplicacao();
