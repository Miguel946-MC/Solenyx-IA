async function gerarImagem() {
  const descricao = document.getElementById('descricao').value;

  if (!descricao) {
    alert("Por favor, insira uma descrição da imagem.");
    return;
  }

  const urlApi = 'https://api.deepai.org/api/text2img';

  const response = await fetch(urlApi, {
    method: 'POST',
    headers: {
      'Api-Key': '24b4862d-b0a7-4a0f-9a56-921f8326bef5', // Sua chave do DeepAI
    },
    body: new URLSearchParams({
      text: descricao,
    }),
  });

  const data = await response.json();

  if (data && data.output_url) {
    document.getElementById('imagemResultado').innerHTML =
      `<img src="${data.output_url}" alt="Imagem gerada">`;
  } else {
    alert("Erro ao gerar a imagem. Tente novamente.");
  }
}
