import React from 'react';
import './App.css';
import ChatbotForm from './ChatbotForm'; // Importe o componente ChatbotForm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-content">
          <h1>Bem-vindo as configurações de chatbot WhatsApp</h1>
          <h2>Aqui Você pode criar e editar o seu chatbot</h2>
        </div>
      </header>
       <ChatbotForm /> 
    </div>
  );
}

export default App;
