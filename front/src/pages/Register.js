import React, { useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Register = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/new-user', {
        nome,
        senha,
      });

      console.log(response.data);

      // Definir a mensagem de sucesso
      setMessage('Usuário cadastrado com sucesso!');

      // Limpar os campos do formulário
      setNome('');
      setSenha('');
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 430) {
        // Definir uma mensagem personalizada para o código de erro 430
        setMessage('Usuário já existe. Por favor, verifique seus dados e tente novamente.');
      } else {
        // Definir uma mensagem genérica para outros erros
        setMessage('Erro ao cadastrar usuário. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="home-container">
      <h4>Cadastrar Usuário</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <button type="submit">Registrar</button>
        <Link to="/Login" className="home-nav-link">Acessar</Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
