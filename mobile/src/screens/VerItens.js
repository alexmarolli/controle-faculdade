import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header } from '../components/header';
import { Navigation } from '../components/TabNavigator';
import { useItens } from '../context/ItensContext';

export function VerItens() {
  const [idPesquisa, setIdPesquisa] = useState('');
  const { itens } = useItens(); // Obtemos os itens do contexto

  // Função para realizar a pesquisa com base no ID
  const handlePesquisa = () => {
    // Verifica se há itens antes de filtrar
    if (!itens || itens.length === 0) {
      console.log('Nenhum item encontrado. Itens:', itens);
      return;
    }
  
    // Imprime informações sobre os itens e o ID de pesquisa
    console.log('Itens disponíveis:', itens);
    console.log('ID de Pesquisa:', idPesquisa);
  
    // Filtra os itens com base no ID especificado
    const itensFiltrados = itens.filter(item => item.id === idPesquisa);

    console.log('Itens encontrados:', itensFiltrados);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#121212' }}>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
        Ver Itens
      </Text>

      <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center' }}>
        {/* Barra de pesquisa */}
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 5, borderRadius: 10, padding: 5 }}
          placeholder='Pesquisar por ID'
          value={idPesquisa}
          onChangeText={setIdPesquisa}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 5, borderRadius: 10 }} />

        {/* Botão para pesquisar o item pelo ID */}
        <TouchableOpacity onPress={handlePesquisa} style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 10, margin: 10 }}>
          <Text style={{ color: 'white' }}>Pesquisar por ID</Text>
        </TouchableOpacity>

        {/* Lista de itens cadastrados */}
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
              <Text>{`ID: ${item.id}, Nome: ${item.nome}, Descrição: ${item.descricao}, Preço: ${item.preco}`}</Text>
            </View>
          )}
        />

      </View>
      <Navigation />
    </View>
  );
}
