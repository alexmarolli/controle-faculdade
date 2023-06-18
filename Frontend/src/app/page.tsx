"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const handleProductMenuEnter = () => {
    setIsProductMenuOpen(true);
  };

  const handleProductMenuLeave = () => {
    setIsProductMenuOpen(false);
  };

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('/Produto/');
      const data = await response.json();
      setProdutos(data);
    }

    fetchProdutos();
  }, []);

  const handleExcluirProduto = async (id: number) => {
    await fetch(`/Produto/${id}`, {
      method: 'DELETE',
    });
    // Atualizar a lista de produtos após a exclusão
    fetchProdutos();
  };

  return (
    <div style={{ background: '#f2f8ff' }}>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="#" style={{ color: '#333', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', background: '#ebebeb' }}>
              Item 1
            </a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px', position: 'relative' }}>
            <a
              href="#"
              style={{ color: '#333', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', background: '#ebebeb' }}
              onMouseEnter={handleProductMenuEnter}
              onMouseLeave={handleProductMenuLeave}
            >
              Produto
            </a>
            {isProductMenuOpen && (
              <ul style={{ position: 'absolute', top: '100%', left: '0', background: '#ffffff', borderRadius: '5px', padding: '10px', display: 'block', borderBottom: '1px solid #ccc' }} onMouseEnter={handleProductMenuEnter} onMouseLeave={handleProductMenuLeave}>
                <li>
                  <Link href="/cadastrar-itens" passHref>
                    <a>Cadastrar Produto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/excluir-itens" passHref>
                    <a>Excluir Produto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ver-produtos" passHref>
                    <a>Ver Produtos</a>
                  </Link>
                </li>
                <li style={{ borderBottom: 'none' }}>
                  <Link href="/alterar-itens" passHref>
                    <a>Alterar Produto</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li style={{ display: 'inline-block', margin: '0 10px' }}>
            <a href="#" style={{ color: '#333', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', background: '#ebebeb' }}>
              Item 3
            </a>
          </li>
        </ul>
      </nav>

      <h1 style={{ marginTop: '50px', border: '1px solid #d3d3d3', borderRadius: '10px', padding: '10px', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
        Conteúdo da página
      </h1>

      <div>
        <h2>Produtos</h2>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id_produto}>
              {produto.descricao}
              <button onClick={() => handleExcluirProduto(produto.id_produto)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
