import React, { useState } from 'react';

const ChatbotForm = () => {
  const [formData, setFormData] = useState({
    chatName: '',
    chatVersion: '',
    prompts: [''], // Inicializado com um prompt vazio
    documents: [''], // Inicializado com um documento vazio
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePromptChange = (index, value) => {
    const newPrompts = [...formData.prompts];
    newPrompts[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      prompts: newPrompts,
    }));
  };

  const handleDocumentChange = (index, value) => {
    const newDocuments = [...formData.documents];
    newDocuments[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      documents: newDocuments,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para enviar os dados (formData) para o backend ou realizar outras ações
    console.log(formData);
  };

  const addPrompt = () => {
    setFormData((prevData) => ({
      ...prevData,
      prompts: [...prevData.prompts, ''],
    }));
  };

  const addDocument = () => {
    setFormData((prevData) => ({
      ...prevData,
      documents: [...prevData.documents, ''],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do chat:
        <input
          type="text"
          name="chatName"
          value={formData.chatName}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Versão do ChatBot:
        <select
          name="chatVersion"
          value={formData.chatVersion}
          onChange={handleChange}
        >
          <option value="">Selecione a Versão</option>
          {/* Adicione opções de versão conforme necessário */}
          <option value="1.0">1.0</option>
          <option value="2.0">2.0</option>
        </select>
      </label>

      <br />

      <h3>Prompts:</h3>
      {formData.prompts.map((prompt, index) => (
        <div key={index}>
          <label>
            Prompt {index + 1}:
            <input
              type="text"
              value={prompt}
              onChange={(e) => handlePromptChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addPrompt}>
        Adicionar Prompt
      </button>

      <br />

      <h3>Documentos:</h3>
      {formData.documents.map((document, index) => (
        <div key={index}>
          <label>
            Documento {index + 1}:
            <input
              type="text"
              value={document}
              onChange={(e) => handleDocumentChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addDocument}>
        Adicionar Documento
      </button>

      <br />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ChatbotForm;