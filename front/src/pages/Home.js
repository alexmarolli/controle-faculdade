import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css';

const Home = () => {
  return (
    <div className="home-background">
      <header className="home-header">
        <div className="home-logo"></div>
        <nav className="home-nav">
          <ul className="home-nav-list">
            <li className="home-nav-item">
              <Link to="/Produto" className="home-nav-link">Produtos</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Financeiro" className="home-nav-link">Financeiro</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Documento" className="home-nav-link">Documento</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Parceiro" className="home-nav-link">Parceiro</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Usuario" className="home-nav-link">Usuário</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Register" className="home-nav-link">Registrar</Link>
            </li>
            <li className="home-nav-item">
              <Link to="/Login" className="home-nav-link">Logar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="home-container">
        <h1 className="home-title">Empresarial</h1>
        <h2 className="home-subtitle">O melhor sistema desenvolvido pela primeira vez, em menos de um mês</h2>
      </div>
    </div>
  );
};

export default Home;
