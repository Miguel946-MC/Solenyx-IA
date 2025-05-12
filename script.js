async function gerarImagem() {
  const descricao = document.getElementById('descricao').value;
  
  if (!descricao) {
    alert("Por favor, insira uma descrição da imagem.");
    return;
  }

  const urlApi = 'https://api.deepai.org/api/text2img';  // DeepAI endpoint

  const response = await fetch(urlApi, {
    method: 'POST',
    headers: {
      'Api-Key': '24b4862d-b0a7-4a0f-9a56-921f8326bef5',  // Sua chave de API
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: descricao,
    }),
  });

  const data = await response.json();
  
  if (data && data.output_url) {
    // Exibe a imagem gerada no site
    document.getElementById('imagemResultado').innerHTML = `<img src="${data.output_url}" alt="Imagem gerada">`;
  } else {
    alert("Erro ao gerar a imagem. Tente novamente.");
  }
}
