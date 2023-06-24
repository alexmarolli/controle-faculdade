import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

const AlterarItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [formValues, setFormValues] = useState({
    // Defina os campos do formulário e seus valores iniciais aqui
    // Exemplo: campo1: '', campo2: '', ...
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/obter-item/${id}`);
        setItem(response.data);
        setFormValues(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/atualizar-item/${id}`, formValues);
      // Redirecionar para a página de sucesso ou realizar alguma ação adicional
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Alterar Item</h1>
      <form onSubmit={handleSubmit}>
        {/* Renderize os campos do formulário aqui */}
        {/* Exemplo: */}
        {/* <input type="text" name="campo1" value={formValues.campo1} onChange={handleChange} /> */}
        {/* <input type="text" name="campo2" value={formValues.campo2} onChange={handleChange} /> */}
        {/* ... */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AlterarItem;
