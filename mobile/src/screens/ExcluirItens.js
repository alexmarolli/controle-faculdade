import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header } from '../components/header';
import { Navigation } from '../components/TabNavigator';

export function ExcluirItens() {
  const [idPesquisa, setIdPesquisa] = useState('');
  const [itens, setItens] = useState([
    { id: '1', descricao: 'Item 1' },
    { id: '2', descricao: 'Item 2' },
    // Adicione mais itens conforme necessário
  ]);

  const handleExclusao = () => {
    // Aqui você pode adicionar a lógica para excluir os dados do item na API, banco de dados, etc.
    console.log('ID do Item para Excluir:', idPesquisa);

    // Simulando a exclusão do item da fonte de dados
    const itensRestantes = itens.filter(item => item.id !== idPesquisa);
    setItens(itensRestantes);

    // Limpar os campos após a exclusão
    setIdPesquisa('');
  };

  return (
    <View className='w-full h-full justify-between'>
      <Header />

      <Text className='text-white text-[32px] mt-3 mx-auto'>Excluir Itens</Text>

      <View className='bg-card w-[80%] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
        {/* Barra de pesquisa para exclusão */}
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='Pesquisar por ID para Excluir'
          value={idPesquisa}
          onChangeText={setIdPesquisa}
        />

        <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full' />

        {/* Botão para excluir o item */}
        <TouchableOpacity onPress={handleExclusao} className='bg-red-500 p-2 rounded-md mb-2'>
          <Text className='text-white'>Excluir Item</Text>
        </TouchableOpacity>

        {/* Lista de itens cadastrados */}
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className='bg-white p-2 m-2 rounded-md'>
              <Text>{`ID: ${item.id}, Descrição: ${item.descricao}`}</Text>
            </View>
          )}
        />

      </View>
      <Navigation />
    </View>
  );
}
