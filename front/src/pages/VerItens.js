import React, { useState, useEffect } from 'react';
import api from '../api/api';

const VerItens = () => {
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
    <div>
      <h1>Ver Itens</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id_produto}>
            {produto.descricao} - R$ {produto.valor_v}
            <button onClick={() => handleExcluir(produto.id_produto)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerItens;
