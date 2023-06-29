import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import '../components/CriarParceiro.css';

function CriarParceiro() {
  const [parceiro, setParceiro] = useState({
    parceiro_id: 0,
    cpfCnpj: '',
    email: '',
    nome: '',
    telefone: '',
    endereco: '',
    numero: 0
  });

  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/criar-parceiro', parceiro);
      const novoParceiro = response.data;
      setMensagem('Parceiro criado com sucesso!');
      setErro('');
      console.log(novoParceiro);
    } catch (error) {
      if (error.response) {
        setErro(error.response.data.message);
      } else {
        setErro('Erro ao criar parceiro. Por favor, tente novamente mais tarde.');
      }
      setMensagem('');
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'parceiro_id' || name === 'numero') {
      setParceiro((prevState) => ({
        ...prevState,
        [name]: parseInt(value)
      }));
    } else {
      setParceiro((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <div className="container">
      <h1>Criar Parceiro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Parceiro ID:
          <input
            type="number"
            name="parceiro_id"
            value={parceiro.parceiro_id}
            onChange={handleChange}
          />
        </label>
        <label>
          CPF/CNPJ:
          <input
            type="text"
            name="cpfCnpj"
            value={parceiro.cpfCnpj}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={parceiro.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={parceiro.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefone:
          <text
            name="telefone"
            value={parceiro.telefone}
            onChange={handleChange}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={parceiro.endereco}
            onChange={handleChange}
          />
        </label>
        <label>
          Número:
          <input
            type="number"
            name="numero"
            value={parceiro.numero}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Criar Parceiro</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
      {erro && <p>{erro}</p>}
      <Link to="/" className="link">Voltar</Link>
    </div>
  );
}

export default CriarParceiro;
