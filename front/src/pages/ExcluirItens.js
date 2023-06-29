import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../components/ExcluirItem.css';

const ExcluirItens = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/excluir-itens');
        setProdutos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProdutos();
  }, []);

  const handleExcluir = async (id) => {
    try {
      await api.delete(`/excluir-item/${id}`);
      setProdutos(produtos.filter((produto) => produto.id_produto !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="excluir-itens-container">
      <h1 className="excluir-itens-title">Excluir Itens</h1>
      <ul className="excluir-itens-list">
        {produtos.map((produto) => (
          <li key={produto.id_produto} className="excluir-itens-item">
            <span>{produto.descricao}</span>
            <span className="excluir-itens-item-price">R$ {produto.valor_v}</span>
            <button className="excluir-itens-item-button" onClick={() => handleExcluir(produto.id_produto)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExcluirItens;
