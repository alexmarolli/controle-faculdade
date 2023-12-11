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
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
        Excluir Itens
      </Text>

      <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center' }}>
        {/* Barra de pesquisa para exclusão */}
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 5, borderRadius: 10, padding: 5 }}
          placeholder='Pesquisar por ID para Excluir'
          value={idPesquisa}
          onChangeText={setIdPesquisa}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 5, borderRadius: 10 }} />

        {/* Botão para excluir o item */}
        <TouchableOpacity onPress={handleExclusao} style={{ backgroundColor: 'red', padding: 10, borderRadius: 10, margin: 10 }}>
          <Text style={{ color: 'white' }}>Excluir Item</Text>
        </TouchableOpacity>

        {/* Lista de itens cadastrados */}
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
              <Text>{`ID: ${item.id}, Descrição: ${item.descricao}`}</Text>
            </View>
          )}
        />

      </View>
      <Navigation />
    </View>
  );
}
