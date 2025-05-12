document.getElementById("generateButton").addEventListener("click", () => {
  const prompt = document.getElementById("promptInput").value.trim();
  const imageArea = document.getElementById("imageArea");

  if (prompt === "") {
    alert("Digite um pedido de imagem!");
    return;
  }

  // Simula geração de imagem com imagem aleatória
  imageArea.innerHTML = `
    <p>Imagem gerada para: <strong>${prompt}</strong></p>
    <img src="https://picsum.photos/512?random=${Math.floor(Math.random() * 1000)}" alt="Imagem gerada">
  `;
});
