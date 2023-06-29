import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api/api';
import '../components/ExcluirParceiro.css';

function ExcluirParceiro() {
  const history = useHistory();
  const [parceiros, setParceiros] = useState([]);
  const [parceiroExcluido, setParceiroExcluido] = useState(null);

  useEffect(() => {
    fetchParceiros();
  }, []);

  const fetchParceiros = async () => {
    try {
      const response = await api.get('/ver-parceiro');
      setParceiros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExcluir = async (id) => {
    try {
      const response = await api.delete(`/exluir-parceiro/${id}`);
      const deletedParceiro = response.data;
      const updatedParceiros = parceiros.filter((parceiro) => parceiro.parceiro_id !== id);
      setParceiros(updatedParceiros);
      setParceiroExcluido(deletedParceiro);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReverterExclusao = async () => {
    try {
      await api.post('/criar-parceiro', parceiroExcluido);
      setParceiroExcluido(null);
      fetchParceiros();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Excluir Parceiro</h1>
      {parceiroExcluido && (
        <div className="mensagem">
          <p>O parceiro com ID {parceiroExcluido.parceiro_id} foi excluído.</p>
          <button onClick={handleReverterExclusao}>Reverter</button>
        </div>
      )}
      <ul>
        {parceiros.map((parceiro) => (
          <li key={parceiro.parceiro_id}>
            <strong>ID: </strong> {parceiro.parceiro_id}<br />
            <strong>CPF/CNPJ: </strong> {parceiro.cpfCnpj}<br />
            <strong>Email: </strong> {parceiro.email}<br />
            <strong>Nome: </strong> {parceiro.nome}<br />
            <strong>Telefone: </strong> {parceiro.telefone}<br />
            <strong>Endereço: </strong> {parceiro.endereco}<br />
            <strong>Número: </strong> {parceiro.numero}<br />
            <button onClick={() => handleExcluir(parceiro.parceiro_id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExcluirParceiro;
