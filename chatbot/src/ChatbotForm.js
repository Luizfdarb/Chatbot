import React, { useState } from 'react';
import './ChatBotForm.css'; // Importe o arquivo de estilos

const ChatbotForm = () => {
  const [formData, setFormData] = useState({
    chatName: '',
    chatVersion: '',
    prompts: [''],
    documents: [''],
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
    <form className="chatbot-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Nome do chat:</label>
          <input
            type="text"
            name="chatName"
            value={formData.chatName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
  
        <div className="form-group col-md-6">
          <label>Versão do ChatBot:</label>
          <select
            name="chatVersion"
            value={formData.chatVersion}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Selecione a Versão</option>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
          </select>
        </div>
      </div>
  
      <div className="prompts-section">
        <h3>Prompts:</h3>
        {formData.prompts.map((prompt, index) => (
          <div key={index} className="form-group">
            <label>Prompt {index + 1}:</label>
            <textarea
              value={prompt}
              onChange={(e) => handlePromptChange(index, e.target.value)}
              className="form-control"
            />
          </div>
        ))}
        <button type="button" onClick={addPrompt} className="btn btn-secondary">
          Adicionar Prompt
        </button>
      </div>
  
      <div className="documents-section">
        <h3>Documentos:</h3>
        {/* Restante do código para documentos */}
      </div>
  
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
};

export default ChatbotForm;
