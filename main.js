const botoes = document.querySelectorAll(".botao");
const abasConteudo = document.querySelectorAll(".aba-conteudo");

// Mostrar a primeira aba por padrão
abasConteudo[0].classList.add("ativo");
botoes[0].classList.add("ativo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    // Remove a classe ativo de todos os botões
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo ao botão clicado
    botoes[i].classList.add("ativo");

    // Remove a classe ativo de todas as abas
    for (let j = 0; j < abasConteudo.length; j++) {
      abasConteudo[j].classList.remove("ativo");
    }
    // Adiciona a classe ativo à aba correspondente
    abasConteudo[i].classList.add("ativo");
  };
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-08-05T00:00:00");
const tempoObjetivo2 = new Date("2025-01-05T00:00:00");
const tempoObjetivo3 = new Date("2025-09-05T00:00:00");
const tempoObjetivo4 = new Date("2025-10-05T00:00:00");

// Adiciona os tempos objetivos em um lista para facilitar o loop
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (tempoFinal > 0) {
    // Formata os valores para sempre ter dois dígitos com template literals
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0]; // Se o tempo já passou, retorna zero
  }
}

// Atualiza os contadores a cada segundo
function atualizaCronometro() {
  document.getElementById("dias0").textContent= calculaTempo(tempos[0])[0];
  document.getElementById("horas0").textContent= calculaTempo(tempos[0])[1];
  document.getElementById("min0").textContent= calculaTempo(tempos[0])[2];
  document.getElementById("seg0").textContent= calculaTempo(tempos[0])[3];
  document.getElementById("dias1").textContent= calculaTempo(tempos[1])[0];
  document.getElementById("horas1").textContent= calculaTempo(tempos[1])[1];
  document.getElementById("min1").textContent= calculaTempo(tempos[1])[2];
  document.getElementById("seg1").textContent= calculaTempo(tempos[1])[3];
  document.getElementById("dias2").textContent= calculaTempo(tempos[2])[0];
  document.getElementById("horas2").textContent= calculaTempo(tempos[2])[1];
  document.getElementById("min2").textContent= calculaTempo(tempos[2])[2];
  document.getElementById("seg2").textContent= calculaTempo(tempos[2])[3];
  document.getElementById("dias3").textContent= calculaTempo(tempos[3])[0];
  document.getElementById("horas3").textContent= calculaTempo(tempos[3])[1];
  document.getElementById("min3").textContent= calculaTempo(tempos[3])[2];
  document.getElementById("seg3").textContent= calculaTempo(tempos[3])[3];
  for (let i = 0; i < contadores.length; i++) {
    //contadores[i].textContent = calculaTempo(tempos[i]);
  }
}
function comecaCronometro() {
  atualizaCronometro(); // Atualiza imediatamente
  setInterval(atualizaCronometro, 1000); // Atualiza a cada segundo
}
comecaCronometro(); // Inicia o cronômetro