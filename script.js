function data() {
  const hoje = new Date();
  const opcoes = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  return hoje.toLocaleDateString('pt-BR', opcoes);
}

function hora() {
  const hoje = new Date();
  const hora = hoje.getHours();
  const minutos = hoje.getMinutes();
  const horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  return horaFormatada;
}

function atualizarHora() {
  document.getElementById("hora").innerText = hora();
}

window.addEventListener('load', () => {
  document.getElementById("data").innerText = data();
  atualizarHora(); // Inicializa a hora
  setInterval(atualizarHora, 60000); // Atualiza a hora a cada minuto
});

console.log("data", data());
console.log("hora", hora());








