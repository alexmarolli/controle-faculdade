import React from 'react';
import { Link } from 'react-router-dom';
import '../components/HomeParceiro.css';

const HomeParceiro = () => {
  const parceiro_id = 'id_do_parceiro_aqui';

  return (
    <div className="homeparceiro-container">
      <h1 className="homeparceiro-title">Parceiro</h1>
      <div className="homeparceiro-links">
        <Link to="/criar-parceiro" className="homeparceiro-link">Criar Parceiro</Link>
        <Link to="/ver-parceiro" className="homeparceiro-link">Ver Parceiro</Link>
        <Link to="/excluir-parceiro" className="homeparceiro-link">Excluir Parceiro</Link>
        <Link to={`/alterar-parceiro/${parceiro_id}`} className="homeproduto-link">Alterar Parceiro</Link>
      </div>
    </div>
  );
};

export default HomeParceiro;