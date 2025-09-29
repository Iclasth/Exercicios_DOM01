// // Exercício 01 
let botãoAlert = document.getElementById("BotãoAlert");

let alerta = () => {
    alert("Este botão está funcionando!");
}
// Chama uma função ao clicar no botão
botãoAlert.addEventListener("click", alerta);

// Exercício 02
let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));
let area = CalcularArea(base, altura);

function CalcularArea() {   
    return (base * altura) /2;
}
console.log("A área do triângulo é: " + area);

// Exercício 03

let number = parseInt(prompt("Digite um número:"));
let resultado = VerificarParImpar(number);

function VerificarParImpar() {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(resultado);

// Exercício 04 

let frase = prompt("Digite uma frase:");
let fraseInvertida = "";
let fraseInvertidaa = InverterFrase(frase);

function InverterFrase() {
    for (let i = frase.length - 1; i >= 0; i--)   {           
         fraseInvertida += frase[i];
        
    }
    return fraseInvertida;
}
console.log(fraseInvertida);

// Exercício 05
let botãoEnviar = document.getElementById("BotãoEnviar");

botãoEnviar.addEventListener("click", CriarFrasePessoa);


function CriarFrasePessoa() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    return console.log("Olá, meu nome é ${nome} e tenho ${idade} anos.");
}