
//Operadpres Aritiméticos

let x=10;
let y=5;
let soma=x+y;
let subtracao= x-y;
let multiplicacao= x*y;
let divisao= x/y;
let resto= x%y; //resto da divisão

//Operadores de Atribuição

let a = 10; //atribui valor (=)
a += 5; //é equivalente à a = a +5

//Operadores de Comparação

let idade = 20;
let maiorDeIdade = idade >=18; //retorna true caso idade seja maior que 18
let idade10 = idade == 10; //retorna true caso idade seja 10

//Estruturas Condicionais

const kilo = 10;
if(kilo>=10){
     console.log("kilo 10");
}
else{
    console.log("kilo -10");
}

//Estruturas de repetição

//loop for

for (let i=0; i<5; i++){
    console.log("Iteração ",i);
}

//loop while

let contador = 0;
while (contador< 5){
    console.log("o contador é",contador);
    contador++;
}