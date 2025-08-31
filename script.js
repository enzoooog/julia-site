function mostrarSurpresa() {
  document.getElementById("inicio").classList.remove("active");
  document.getElementById("surpresa").classList.add("active");
}

function voltarInicio() {
  document.getElementById("surpresa").classList.remove("active");
  document.getElementById("inicio").classList.add("active");
}

/* Animação de corações ao clicar em "Eu te amo" */
function soltarCoracoes() {
  const container = document.getElementById("inicio");
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

// Corações passando constantemente no fundo
function criarCoracoesContinuos() {
    const container = document.getElementById("hearts-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 300);
}

// Inicia ao carregar a página
window.onload = () => {
    criarCoracoesContinuos();
};

