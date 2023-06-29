import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import '../components/VerParceiro.css';

function VerParceiro() {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchParceiros() {
      try {
        const response = await api.get('/ver-parceiro');
        setParceiros(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchParceiros();
  }, []);

  return (
    <div>
      <h1>Lista de Parceiros</h1>
      <ul>
        {parceiros.map(parceiro => (
          <li key={parceiro.parceiro_id}>
            <strong>ID: </strong> {parceiro.parceiro_id}<br/>
            <strong>CPF/CNPJ: </strong> {parceiro.cpfCnpj}<br/>
            <strong>Email: </strong> {parceiro.email}<br/>
            <strong>Nome: </strong> {parceiro.nome}<br/>
            <strong>Telefone: </strong> {parceiro.telefone}<br/>
            <strong>Endereço: </strong> {parceiro.endereco}<br/>
            <strong>Número: </strong> {parceiro.numero}<br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerParceiro;