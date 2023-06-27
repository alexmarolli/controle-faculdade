import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../components/VerItens.css';

const ExcluirItens = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/informacoes-itens');
        setProdutos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProdutos();
  }, []);

  const handleExcluir = async (id) => {
    try {
      await api.delete(`/Excluir-itens/${id}`);
      setProdutos(produtos.filter((produto) => produto.id_produto !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ver-itens-container">
      <h1 className="ver-itens-title">Ver Itens</h1>
      <ul className="ver-itens-list">
        {produtos.map((produto) => (
          <li key={produto.id_produto} className="ver-itens-item">
            <span>{produto.descricao}</span>
            <span className="ver-itens-item-price">R$ {produto.valor_v}</span>
            <button className="ver-itens-item-button" onClick={() => handleExcluir(produto.id_produto)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExcluirItens;
