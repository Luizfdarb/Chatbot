const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Conectar ao MongoDB
mongoose.connect('mongodb+srv://luizfelliped53:<password>@cluster0.qtmwhde.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Defina rotas e outras configurações do servidor

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
