// Teste simples para verificar se o Worker está funcionando
// Execute com: node test-upload.js

const testWorker = async () => {
  const workerUrl = 'http://localhost:8787'; // URL do wrangler dev

  try {
    console.log('Testando Worker...');

    // Teste 1: Verificar se responde
    const response = await fetch(`${workerUrl}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer test-secret'
      },
      body: new FormData()
    });

    console.log(`Status: ${response.status}`);
    const text = await response.text();
    console.log(`Response: ${text}`);

  } catch (error) {
    console.error('Erro no teste:', error.message);
  }
};

// Executar teste se for chamado diretamente
if (require.main === module) {
  testWorker();
}

module.exports = { testWorker };