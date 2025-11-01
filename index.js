const display = document.getElementById("display");
const botoes = document.querySelectorAll(".numeros");

let valorAtual = "";
let operacaoAtual = null;
let valorAnterior = "";

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const numero = botao.textContent;

        if(display.textContent === "0") {
            display.textContent = numero;

        } else {
            display.textContent += numero;
            valorAtual = numero;
        }
    });
}); 

const operacaoDisplay = document.getElementById("operacao");
const botoesOperacao = document.querySelectorAll(".operadores");

botoesOperacao.forEach(botao => {
    botao.addEventListener("click", () => {
        const operacao = botao.textContent;
        
        if(operacao === "=") {
          
            display.textContent = "0";
            operacaoDisplay.textContent = "+";
        } else {
            operacaoDisplay.textContent = operacao;
        }   
    });
});