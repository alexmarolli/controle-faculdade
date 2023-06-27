import React, { useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Login = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await api.get(`/login?nome=${nome}&senha=${senha}`);

      console.log(response.data);

      // Definir a mensagem de sucesso
      setMessage('Usuário logado com sucesso!');

      // Limpar os campos do formulário
      setNome('');
      setSenha('');
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 401) {
        setMessage('Usuário não encontrado. Por favor, verifique seus dados e tente novamente.');
      } else if (error.response && error.response.status === 403) {
        // Definir uma mensagem genérica para outros erros
        setMessage('Senha incorreta. Por favor, verifique seus dados e tente novamente.');
      } else {
        setMessage('Algo deu errado. Por favor, verifique seus dados e tente novamente.');
      }

    }
  };

  return (
    <div className="home-container">
      <h4>Acessar Sistema</h4>
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
        <button type="submit">Acessar</button>
        <Link to="/Register" className="home-nav-link">Registrar-se</Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
