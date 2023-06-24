import axios from 'axios';

export async function getInformacoesItens() {
  try {
    const response = await axios.get('/informacoes-itens');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao obter informações dos itens');
  }
}

export async function excluirItem(id) {
  try {
    const response = await axios.delete(`/Excluir-itens/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao excluir o item');
  }
}

export async function alterarItem(id, data) {
  try {
    const response = await axios.put(`/alterar-itens/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao atualizar o item');
  }
}

export async function cadastrarItem(data) {
  try {
    const response = await axios.post('/cadastrar-itens', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao cadastrar o item');
  }
}
