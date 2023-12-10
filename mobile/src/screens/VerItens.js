import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header } from '../components/header';
import { Navigation } from '../components/TabNavigator';

export function VerItens() {
  const [idPesquisa, setIdPesquisa] = useState('');
  const [itens, setItens] = useState([]);

  const handleVisualizacao = () => {
    // Aqui você pode adicionar a lógica para buscar os dados do item na API, banco de dados, etc.
    console.log('ID do Item para Visualizar:', idPesquisa);

    // Simulando o recebimento de itens da fonte de dados
    const novoItem = { id: idPesquisa };
    setItens(prevItens => [...prevItens, novoItem]);

    // Limpar os campos após a visualização
    setIdPesquisa('');
  };

  // Função para realizar a pesquisa com base no ID
  const handlePesquisa = () => {
    // Aqui você deve implementar a lógica para buscar os itens com o ID especificado
    const itensFiltrados = itens.filter(item => item.id === idPesquisa);
    console.log('Itens encontrados:', itensFiltrados);
  };

  return (
    <View className='w-full h-full justify-between'>
      <Header />

      <Text className='text-white text-[32px] mt-3 mx-auto'>Ver Itens</Text>

      <View className='bg-card w-[80%] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
        {/* Barra de pesquisa */}
        <TextInput
          className='w-[80%] h-30 bg-white m-2 rounded-md p-2'
          placeholder='Pesquisar por ID'
          value={idPesquisa}
          onChangeText={setIdPesquisa}
        />

        <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full' />

        {/* Botão para visualizar o item */}
        <TouchableOpacity onPress={handleVisualizacao} className='bg-blue-500 p-2 rounded-md mb-2'>
          <Text className='text-white'>Visualizar Item</Text>
        </TouchableOpacity>

        {/* Botão para pesquisar o item pelo ID */}
        <TouchableOpacity onPress={handlePesquisa} className='bg-yellow-500 p-2 rounded-md mb-2'>
          <Text className='text-white'>Pesquisar por ID</Text>
        </TouchableOpacity>

        {/* Lista de itens cadastrados */}
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className='bg-white p-2 m-2 rounded-md'>
              <Text>{`ID: ${item.id}`}</Text>
            </View>
          )}
        />

      </View>
      <Navigation />
    </View>
  );
}
