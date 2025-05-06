const perguntas = [
  { pergunta: "Quanto é 2 + 3?", alternativas: ["4", "5", "6"], resposta: 1 },
  { pergunta: "Quanto é 9 - 4?", alternativas: ["5", "4", "6"], resposta: 0 },
  { pergunta: "Quanto é 5 x 3?", alternativas: ["15", "10", "8"], resposta: 0 },
  { pergunta: "Quanto é 12 ÷ 4?", alternativas: ["2", "4", "3"], resposta: 2 },
  { pergunta: "João tem 5 balas e ganha mais 7. Quantas balas ele tem?", alternativas: ["10", "11", "12"], resposta: 2 },
  { pergunta: "Quanto é 10 + 6 - 4?", alternativas: ["12", "14", "16"], resposta: 0 },
  { pergunta: "Qual o dobro de 8?", alternativas: ["14", "16", "18"], resposta: 1 },
  { pergunta: "Qual a metade de 20?", alternativas: ["10", "5", "15"], resposta: 0 },
  { pergunta: "Um lápis custa R$ 2. Quantos posso comprar com R$ 10?", alternativas: ["3", "5", "7"], resposta: 1 },
  { pergunta: "Qual número vem antes de 15?", alternativas: ["14", "16", "13"], resposta: 0 },
  { pergunta: "Qual número vem depois de 29?", alternativas: ["30", "28", "31"], resposta: 0 },
  { pergunta: "Quanto é 7 x 0?", alternativas: ["0", "7", "1"], resposta: 0 },
  { pergunta: "24 doces divididos entre 6 pessoas dá:", alternativas: ["3", "4", "5"], resposta: 1 },
  { pergunta: "Quanto é 3² (3 ao quadrado)?", alternativas: ["6", "9", "12"], resposta: 1 },
  { pergunta: "Quanto falta para 100 se já tenho 76?", alternativas: ["26", "24", "22"], resposta: 1 },
  { pergunta: "30 lugares - 18 ocupados = quantos livres?", alternativas: ["10", "12", "14"], resposta: 1 },
  { pergunta: "Quanto é 100 ÷ 10?", alternativas: ["10", "20", "5"], resposta: 0 },
  { pergunta: "4 cadernos a R$ 8 cada = ?", alternativas: ["R$28", "R$32", "R$36"], resposta: 1 },
  { pergunta: "Qual o menor número: 12, 5, 9, 20?", alternativas: ["12", "5", "9"], resposta: 1 },
  { pergunta: "Quantos segundos há em 2 minutos?", alternativas: ["120", "100", "60"], resposta: 0 }
];

let perguntaAtual = 0;

function mostrarPergunta() {
  if (perguntaAtual >= perguntas.length) {
    document.getElementById("questions").innerHTML = "<h2>🎉 Fim do quiz!</h2>";
    document.querySelector(".alternativas").innerHTML = "";
    document.getElementById("resposta").textContent = "";
    return;
}

const p = perguntas[perguntaAtual];
document.getElementById("questions").innerHTML = "<h2>" + p.pergunta + "</h2>";
document.getElementById("resposta").textContent = "";

const alternativasDiv = document.querySelector(".alternativas");
alternativasDiv.innerHTML = "";

p.alternativas.forEach((alt, i) => {
  const btn = document.createElement("button");
  btn.textContent = alt;
  btn.onclick = () => verificarResposta(i);
  alternativasDiv.appendChild(btn);
  });
}

function verificarResposta(escolhida) {
  const p = perguntas[perguntaAtual];
  const correta = p.resposta;

const respostaDiv = document.getElementById("resposta");
  if (escolhida === correta) {
    respostaDiv.textContent = "✅ Resposta correta!";
    respostaDiv.style.color = "green";
  } else {
    respostaDiv.textContent = `❌ Errado. A resposta certa é: ${p.alternativas[correta]}`;
    respostaDiv.style.color = "red";
  }

setTimeout(() => {
  perguntaAtual++;
  mostrarPergunta();
}, 1500);
}

document.getElementById("botao-iniciar").onclick = () => {
document.getElementById("botao-iniciar").style.display = "none";
document.querySelector(".perguntas").style.display = "block";
mostrarPergunta();
};

  