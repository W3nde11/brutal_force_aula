const axios = require("axios");

const url = "http://localhost:3005";

async function bruteForceSimples() {
  let tentativas = 0;

  while (tentativas < 1000) {
    try {
      const res = await axios.get(url);
      console.log(`Tentativa ${tentativas}:`, res.data);
    } catch (err) {
      console.log(`Erro na tentativa ${tentativas}`);
    }

    tentativas++;
  }
}

bruteForceSimples();