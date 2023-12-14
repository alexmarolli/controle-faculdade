import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from '../components/header';
import Add from '../../assets/ADD.svg';

export function EditarItens({Navigation}) {
  // Estados para armazenar os dados do item
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  // Simulando dados de um item para edição (substitua isso pela lógica real)
  const itemParaEdicao = {
    id: 1,
    nome: 'Nome do Item',
    descricao: 'Descrição do Item',
    preco: 'Preço do Item',
  };

  // Carregar dados do item para os estados ao iniciar a tela
  React.useEffect(() => {
    setNome(itemParaEdicao.nome);
    setDescricao(itemParaEdicao.descricao);
    setPreco(itemParaEdicao.preco);
  }, []);

  // Função para lidar com o envio do formulário (edição do item)
  const handleEdicao = () => {
    // Aqui você pode adicionar a lógica para enviar os dados editados para a API, atualizar no banco de dados, etc.
    console.log('ID do Item:', itemParaEdicao.id);
    console.log('Novo Nome:', nome);
    console.log('Nova Descrição:', descricao);
    console.log('Novo Preço:', preco);
  };

  return (
    <View className='w-full h-full justify-between bg-fundo'>
      <Header />

      <Text className='text-white text-[32px] mt-3 mx-auto'>Editar Itens</Text>

      <View className='bg-card w-[80%] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
        {/* Campos de entrada para a edição do item */}
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-full p-2 mt-3'
          placeholder='Nome do Item'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-full p-2'
          placeholder='Descrição do Item'
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-full p-2'
          placeholder='Preço do Item'
          value={preco}
          onChangeText={setPreco}
        />

        <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full' />

        {/* Botão para editar o item */}
        <TouchableOpacity onPress={handleEdicao} className='bg-green-600 p-2 rounded-full mt-2 w-[150] justify-center items-center'>
          <Text className='text-white'>Editar Item</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
