import React from 'react';
import { Link } from 'react-router-dom';
import './Homes.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Página Inicial</h1>
      <div className="home-links">
        <Link to="/cadastrar-itens" className="home-link">Criar Item</Link>
        <Link to="/informacoes-itens" className="home-link">Ver Item</Link>
        <Link to="/excluir" className="home-link">Excluir Item</Link>
        <Link to="/alterar" className="home-link">Alterar Item</Link>
      </div>
    </div>
  );
};

export default Home;
