const express = require('express');
const spdy = require('spdy');
const path = require('path');
const fs = require('fs');

const app = express();

// Certificados SSL (necessários para HTTP/2)
const options = {
  key: fs.readFileSync(path.join(__dirname, 'server-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'server-cert.pem'))
};

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor HTTP/2
spdy.createServer(options, app).listen(3000, () => {
  console.log('Servidor rodando em https://localhost:3000');
});
