function inicializarCalculadora() {
  const display = document.getElementById("display");
  const botoes = document.querySelectorAll(".numeros");
  const operacaoDisplay = document.getElementById("operacao");
  const botoesOperacao = document.querySelectorAll(".operadores");
  const display_passado = document.getElementById("passado");
  const clear = document.getElementById("clear");

  let valorAnterior = null;
  let operacaoAtual = null;

  // Adiciona números
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const numero = botao.textContent;
      if (display.textContent === "0") {
        display.textContent = numero;
      } else {
        display.textContent += numero;
      }
    });
  });

  // Adiciona operações
  botoesOperacao.forEach(botao => {
    botao.addEventListener("click", () => {
      const operacao = botao.textContent; // pega a operação correta no clique

      if (operacao === "=") {
        const valorAtual = parseFloat(display.textContent);

        if (valorAnterior !== null && operacaoAtual) {
          let resultado;

          switch (operacaoAtual) {
            case "+":
              resultado = valorAnterior + valorAtual;
              break;
            case "-":
              resultado = valorAnterior - valorAtual;
              break;
            case "x":
              resultado = valorAnterior * valorAtual;
              break;
            case "/":
              resultado = valorAnterior / valorAtual;
              break;
              case "%":
              resultado = valorAnterior % valorAtual;
          }

          display.textContent = resultado;
          display_passado.textContent = `${valorAnterior} ${operacaoAtual} ${valorAtual}`;
          operacaoDisplay.textContent = "=";

          // Reseta os valores
          valorAnterior = null;
          operacaoAtual = null;
        }

      } else {
        // Quando clica em +, -, x ou %
        valorAnterior = parseFloat(display.textContent);
        operacaoAtual = operacao;

        display_passado.textContent = display.textContent;
        operacaoDisplay.textContent = operacao;
        display.textContent = "0";
      }
    });
  });

  // Limpa tudo
  clear.addEventListener("click", () => {
    display.textContent = "";
    operacaoDisplay.textContent = "";
    display_passado.textContent = "";
    valorAnterior = null;
    operacaoAtual = null;
  });
}

// Chama a função quando a página terminar de carregar
window.addEventListener("DOMContentLoaded", inicializarCalculadora);
