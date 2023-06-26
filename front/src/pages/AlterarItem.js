import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import '../components/Alteraritem.css';


const AlterarItem = () => {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [formValues, setFormValues] = useState({
    cod_barras: '',
    descricao: '',
    valor_v: '',
    valor_c: '',
    estoque: '',
    docItens: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get('/informacoes-itens');
      setProdutos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProdutoSelect = (produto) => {
    setSelectedProduto(produto);
    setFormValues({
      cod_barras: produto.cod_barras,
      descricao: produto.descricao,
      valor_v: produto.valor_v,
      valor_c: produto.valor_c,
      estoque: produto.estoque,
      docItens: produto.docItens,
    });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      await api.put(`/alterar-itens/${selectedProduto.id_produto.toString()}`, formValues);
      setIsSuccess(true);
      setSelectedProduto(null);
      setFormValues({
        cod_barras: '',
        descricao: '',
        valor_v: '',
        valor_c: '',
        estoque: '',
        docItens: '',
      });
      fetchProdutos();
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <div className="alterar-item-container">
      <h1 className="alterar-item-title">Alterar Item</h1>
      {isSuccess && <p className="success-message">Item alterado com sucesso!</p>}
      {isError && <p className="error-message">Falha ao alterar o item. Por favor, tente novamente.</p>}
      <div className="produtos-cadastrados">
        <h3>Produtos Cadastrados:</h3>
        <ul className="produto-list">
          {produtos.map((produto) => (
            <li key={produto.id_produto}>
              <button
                className={`produto-button ${selectedProduto === produto ? 'selected' : ''}`}
                onClick={() => handleProdutoSelect(produto)}
              >
                {produto.descricao}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedProduto && (
        <div className="produtos-buscados">
          <h3>Produtos Buscados:</h3>
          <form onSubmit={handleSubmit} className="alterar-item-form">
            <div className="form-group">
              <label htmlFor="cod_barras" className="form-label">
                Código de Barras:
              </label>
              <input
                type="string"
                id="cod_barras"
                name="cod_barras"
                value={formValues.cod_barras}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao" className="form-label">
                Descrição:
              </label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={formValues.descricao}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="valor_v" className="form-label">
                Valor de Venda:
              </label>
              <input
                type="number"
                id="valor_v"
                name="valor_v"
                value={formValues.valor_v}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="valor_c" className="form-label">
                Valor de Compra:
              </label>
              <input
                type="number"
                id="valor_c"
                name="valor_c"
                value={formValues.valor_c}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="estoque" className="form-label">
                Estoque:
              </label>
              <input
                type="number"
                id="estoque"
                name="estoque"
                value={formValues.estoque}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="docItens" className="form-label">
                Documentos do Item:
              </label>
              <input
                type="text"
                id="docItens"
                name="docItens"
                value={formValues.docItens}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Salvar Alterações
            </button>
          </form>
        </div>
      )}
      <div className="links-container">
        <Link to="/cadastrar-itens" className="page-link">
          Criar Item
        </Link>
        <Link to="/excluir" className="page-link">
          Excluir Item
        </Link>
      </div>
    </div>
  );
};

export default AlterarItem;
