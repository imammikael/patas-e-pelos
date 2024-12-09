// Importa as dependências
const express = require('express');  // Para criar o servidor web
const path = require('path');        // Para manipular caminhos de arquivos
const bodyParser = require('body-parser'); // Para ler dados do formulário
const app = express();  // Cria uma aplicação express
const port = 3000;      // Define a porta onde o servidor vai rodar

// Middleware para interpretar o body das requisições (POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Diretório público (onde estarão seus arquivos HTML, CSS e JS)
app.use(express.static('C:/xampp/htdocs/MEUS SITES/Projeto - Análise de Software'));

// Rota inicial que serve a página de login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de funcionários (apenas acessada por funcionários autenticados)
app.get('/funcionarios', (req, res) => {
  const usuarioLogado = req.query.usuario; // O nome de usuário enviado na URL (exemplo: ?usuario=admin)
  
  if (usuarioLogado === 'admin') {  // Verifica se o usuário é "admin"
    res.sendFile(path.join(__dirname, 'public', 'funcionarios.html'));
  } else {
    res.send('Acesso restrito!'); // Mensagem de erro se o usuário não for admin
  }
});

// Roda o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});