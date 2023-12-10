import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from '../components/header';
import { Navigation } from '../components/TabNavigator';
import Add from '../../assets/ADD.svg';

export function CadastrarItens() {
  // Estados para armazenar os dados do item
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  // Função para lidar com o envio do formulário (cadastro do item)
  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica para enviar os dados para a API, armazenar no banco de dados, etc.
    console.log('ID:', id);
    console.log('Nome:', nome);
    console.log('Descrição:', descricao);
    console.log('Preço:', preco);

    // Limpar os campos após o cadastro
    setId('');
    setNome('');
    setDescricao('');
    setPreco('');
  };

  return (
    <View className='w-full h-full justify-between'>
      <Header />

      <Text className='text-white text-[32px] mt-3 mx-auto'>Cadastrar Itens</Text>

      <View className='bg-card w-[80%] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
        {/* Campo de entrada para o ID do item */}
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='ID do Item'
          value={id}
          onChangeText={setId}
        />

        {/* Campos de entrada para o cadastro do item */}
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='Nome do Item'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='Descrição do Item'
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='Preço do Item'
          value={preco}
          onChangeText={setPreco}
        />

        <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full' />

        {/* Botão para cadastrar o item */}
        <TouchableOpacity onPress={handleCadastro} className='bg-green-500 p-2 rounded-md mb-2'>
          <Text className='text-white'>Cadastrar Item</Text>
        </TouchableOpacity>

      </View>
      <Navigation />
    </View>
  );
}
