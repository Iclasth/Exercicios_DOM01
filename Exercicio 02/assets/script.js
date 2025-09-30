// exercicio 01
// let botao = document.querySelector("#Botao");
// botao.addEventListener("click", function() {
//     alert("O botão é funcional!");
// });

// exercicio 02
// function calcularArea() {
// let base = document.querySelector("#base").value;
// let altura = document.querySelector("#altura").value;
// let area = (base * altura) / 2;
// let resultado = document.querySelector("#resultado");
// resultado.innerHTML = "A área do triângulo é: " + area;

// }
// let botaoCalcular = document.querySelector("#calcular");
// botaoCalcular.addEventListener("click", calcularArea);

// exercicio 03
// let botaoVerificar = document.querySelector("#verificar");
// let resultado = document.querySelector("#resposta");

// function verificarParImpar() {
//    let numero = parseFloat(document.querySelector("#numb").value);
//     if (numero % 2 === 0) {
//         // interpolação 
//         resultado.innerHTML = `O número ${numero}  é par.`;
//     } else {
//         // concatenação
//         resultado.innerHTML = "O número " + numero + " é ímpar.";
//     }

// }
// botaoVerificar.addEventListener("click", verificarParImpar);

// exercicio 04

// let botaoVerificar = document.querySelector("#verificar");
// let resultado = document.querySelector("#resposta");

// function verificarMaiorNumero() {
//     let n1 = parseFloat(document.querySelector("#numb1").value);
//     let n2 = parseFloat(document.querySelector("#numb2").value);
//     let n3 = parseFloat(document.querySelector("#numb3").value);

//     let retorno = Math.max(n1, n2, n3);
//     resultado.innerHTML = `O valor maior é: ${retorno}`;

// }
// botaoVerificar.addEventListener("click", verificarMaiorNumero);


// exercicio 05
// let botaoConverter = document.querySelector("#converter");
// let resultado = document.querySelector("#resposta");
// function converterTemperaturaFharenheit() {
//     let celsius = parseFloat(document.querySelector("#c").value);
//     let fahrenheit = (celsius * 9/5) + 32;
//     resultado.innerHTML = `A temperatura atual é: ${fahrenheit.toFixed(2)}°F`;
// }
// botaoConverter.addEventListener("click", converterTemperaturaFharenheit);


// exercicio 06
// let botaoCalcular = document.querySelector("#calcular");
// let resultado = document.querySelector("#resposta");
// function calcularMontante() {
//     let capital = parseFloat(document.querySelector("#capitalInicial").value);
//     let taxa = parseFloat(document.querySelector("#taxaJuros").value);
//     let tempo = parseFloat(document.querySelector("#tempoInvestimento").value);
//     let montante = capital * Math.pow((1 + (taxa / 100)), tempo);
//     resultado.innerHTML = `O montante após ${tempo} meses é: R$ ${montante.toFixed(2)}`;
// }
// botaoCalcular.addEventListener("click", calcularMontante);

// exercicio 07
// let botaoVerificar = document.querySelector("#verificar");
// let resultado = document.querySelector("#resposta");

// function verificarDivisaoPor3(numero){
//     numero = parseFloat(document.querySelector("#numb").value);
//     if(numero % 3 === 0){
//         resultado.innerHTML = true;
//     } else {
//         resultado.innerHTML = false;
//     }
// }
// botaoVerificar.addEventListener("click", verificarDivisaoPor3);

// exercicio 08
// let botaoVerificarMes = document.querySelector("#verificar");
// let resultado = document.querySelector("#resposta");
// function verificarMes() {
//     let numero = parseInt(document.querySelector("#numb").value);
//     switch (numero) {
//         case 1:
//             resultado.innerHTML = "Janeiro";
//             break;
//         case 2:
//             resultado.innerHTML = "Fevereiro";
//             break;
//         case 3:
//             resultado.innerHTML = "Março";
//             break;
//         case 4:
//             resultado.innerHTML = "Abril";
//             break;
//         case 5:
//             resultado.innerHTML = "Maio";
//             break;
//         case 6:
//             resultado.innerHTML = "Junho";
//             break;
//         case 7:
//             resultado.innerHTML = "Julho";
//             break;
//         case 8:
//             resultado.innerHTML = "Agosto";
//             break;
//         case 9:
//             resultado.innerHTML = "Setembro";
//             break;
//         case 10:
//             resultado.innerHTML = "Outubro";
//             break;
//         case 11:
//             resultado.innerHTML = "Novembro";
//             break;
//         case 12:
//             resultado.innerHTML = "Dezembro";
//             break;
//         default:
//             resultado.innerHTML = "Por favor, insira um número entre 1 e 12.";
//     }
// }
// botaoVerificarMes.addEventListener("click", verificarMes);

// exercicio 10
// let botaoVerificar = document.querySelector("#verificar");
// let litros = document.querySelector("#litrosCombustivel");
// let km = document.querySelector("#quilometros");

// function calcularConsumo() {
//     let capital = parseFloat(document.querySelector("#capital").value);
//     let comprarLitro = 5;
//     let totalLitros = capital / comprarLitro;
//     let kmPorLitro = 20;
//     let totalKm = totalLitros * kmPorLitro;
//     litros.innerHTML = `Com ${capital.toFixed(2)} reais, você pode comprar ${totalLitros.toFixed(2)} litros de combustível.`;
//     km.innerHTML = `E com essa quantidade de combustível, você pode percorrer até ${totalKm.toFixed(2)} km.`;

// }
// botaoVerificar.addEventListener("click", calcularConsumo);

// exercicio 11
// let botaoConverter = document.querySelector("#converter");
// let convHoras = document.querySelector("#convHoras");
// let convDias = document.querySelector("#convDias");

// function converterHorasDias() {
//     let minutos = parseFloat(document.querySelector("#minutos").value);
//     let horas = minutos / 60;
//     let dias = horas / 24;
//     convHoras.innerHTML = `A quantidade de minutos convertidos em horas é: ${horas.toFixed(2)} horas.`;
//     convDias.innerHTML = `A quantidade de minutos convertidos em dias é: ${dias.toFixed(2)} dias.`;
// }
// botaoConverter.addEventListener("click", converterHorasDias);

// exercicio 12
// let botaoCalcular = document.querySelector("#calcular");
// let valorGorjeta = document.querySelector("#valorGorjeta");
// let valorTotal = document.querySelector("#valorTotal");

// function calcularGorjeta() {
//     let conta = parseFloat(document.querySelector("#refeicao").value);
//     let porcentagem = conta * 0.10;
//     let total = conta + porcentagem;
//     valorGorjeta.innerHTML = `O valor da gorjeta (10%) é: R$ ${porcentagem.toFixed(2)}.`;
//     valorTotal.innerHTML = `O valor total da refeição com a gorjeta é: R$ ${total.toFixed(2)}.`;
// }
// botaoCalcular.addEventListener("click", calcularGorjeta);

// exercicio 13
// let botaoVerificar = document.querySelector("#verificar");
// let imprestimo = document.querySelector("#imprestimo");

// function verificarEmprestimo() {
//     let salario = parseFloat(document.querySelector("#salario").value);
//     let valorPrestacao = parseFloat(document.querySelector("#valorPrestacao").value);
//     let limite = salario * 0.20;
//     if (valorPrestacao <= limite) {
//         imprestimo.innerHTML = "Seu Empréstimo foi: concedido.";
//     } else {
//         imprestimo.innerHTML = "Seu Empréstimo foi: negado.";
//     }
// }
// botaoVerificar.addEventListener("click", verificarEmprestimo);

// exercicio 14
// let botaoVerificar = document.querySelector("#verificar");
// let descontoProporcional = document.querySelector("#descontoProporcional");

// function calcularDesconto() {
//     let salario = parseFloat(document.querySelector("#salario").value);
//     let desconto = salario * 0.11;
//     let descontoMaximo = 334.29;
//     if (desconto > descontoMaximo) {
//         descontoProporcional.innerHTML = `O valor do desconto máximo é: R$ ${descontoMaximo.toFixed(2)}. Você exedeu o valor máximo de desconto.`;
//     } else {
//         descontoProporcional.innerHTML = `O valor do desconto proporcional ao seu salario é: R$ ${desconto.toFixed(2)}.`;
//     }
// }
// botaoVerificar.addEventListener("click", calcularDesconto);

// exercicio 15
let botaoCalcular = document.querySelector("#calcular");
let valorFinal = document.querySelector("#valorFinal");

function calcularRendimento() {
    let valorDepositado = parseFloat(document.querySelector("#valorDepositado").value);
    let juro = 0.70 / 100;
    let meses = 1;
    let rendimento = valorDepositado * Math.pow((1 + juro), meses) - valorDepositado;
    let total = valorDepositado + rendimento;
    valorFinal.innerHTML = `O valor do rendimento após ${meses} mês é: R$ ${rendimento.toFixed(2)}. O valor total após o rendimento é: R$ ${total.toFixed(2)}.`;
}
botaoCalcular.addEventListener("click", calcularRendimento);