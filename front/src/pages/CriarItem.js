import React, { useState } from 'react';
import api from '../api/api';
import '../components/CriarItem.css';

const CriarItem = () => {
  const [formValues, setFormValues] = useState({
    id_produto: '', // Adicionado o campo "id_produto"
    cod_barras: '',
    descricao: '',
    valor_v: '',
    valor_c: '',
    estoque: '',
    docItens: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formValues);
      await api.post('/cadastrar-itens', formValues);
      setMessage('Item criado com sucesso!');
      setFormValues({
        id_produto: '', // Adicionado o campo "id_produto" na reinicialização do formulário
        cod_barras: '',
        descricao: '',
        valor_v: '',
        valor_c: '',
        estoque: '',
        docItens: '',
      });
    } catch (error) {
      console.error(error);
      setMessage('Falha ao criar o item. Por favor, tente novamente.');
    }
  };

  return (
    <div className="criar-item-container">
      <h1>Criar Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id_produto">ID:</label>
          <input type="text" id="id_produto" name="id_produto" value={formValues.id_produto} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cod_barras">Código de Barras:</label>
          <input type="text" id="cod_barras" name="cod_barras" value={formValues.cod_barras} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input type="text" id="descricao" name="descricao" value={formValues.descricao} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="valor_v">Valor de Venda:</label>
          <input type="number" id="valor_v" name="valor_v" value={formValues.valor_v} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="valor_c">Valor de Compra:</label>
          <input type="number" id="valor_c" name="valor_c" value={formValues.valor_c} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="estoque">Estoque:</label>
          <input type="number" id="estoque" name="estoque" value={formValues.estoque} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="docItens">Documentos do Item:</label>
          <input type="text" id="docItens" name="docItens" value={formValues.docItens} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CriarItem;
