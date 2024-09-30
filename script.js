//Declaração de variáveis
var nome= "Fabio";          //Tipo obsoleto de variavel
let idade= 5                //Tipo atual de variavel 
const cidade= "Guarapuava"  //Tipo de constante

console.log("o nome é: ",nome);
console.log("a idade é: ",idade);
console.log("A cidade é: ", cidade);


//Exemplo de objeto
const pessoa={
    nome: "fabio",
    idade: "27",
    sexo: "M",
    telefone: "9999-9999"
}
//Modificando um objeto
let cachorro= {
    nome: "Rex",
    idade: 5,
    vacinado: false
}
console.log(cachorro);
cachorro.nome= "Banzé";
cachorro.vacinado= true;
console.log(cachorro);

//Concatenação de Strings
let nome2= "Fabio";
let message="Bem vindo, " + nome + " ao sistema";
console.log(message);

//Operações em javascript
let a=25;
let b=30;
let total = a+b;
console.log("O total é: ",total);

//Conversão de tipos
//para string
let turma = 1;
let turmaFormatado = String(turma);
console.log(turmaFormatado);

//para numero
let telefone="4299999999";
let telefoneFormatado= Number(telefone);
console.log("O telefone é: ", telefoneFormatado);
