import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Header } from '../components/header';
import { useItens } from '../context/ItensContext';

export function VerItens({Navigation}) {
  const [idPesquisa, setIdPesquisa] = useState('');
  const { itens } = useItens(); // Obtemos os itens do contexto

  // Função para realizar a pesquisa com base no ID
  const handlePesquisa = () => {
    // Verifica se há itens antes de filtrar
    if (!itens || itens.length === 0) {
      console.log(itens);
      console.log('Nenhum item encontrado. Itens:', itens);
      return;
    }
  
    // Imprime informações sobre os itens e o ID de pesquisa
    console.log('Itens disponíveis:', itens);
    console.log('ID de Pesquisa:', idPesquisa);
  
    // Filtra os itens com base no ID especificado
    const itemEncontrado = itens.find(item => item.id === idPesquisa);
    console.log('itens total:', item)
    console.log('Itens encontrados:', itemEncontrado);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1C2B4C' }}>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
        Ver Itens
      </Text>

      <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center', marginLeft:'auto', marginRight:'auto', marginBottom:50 }}>
        {/* Barra de pesquisa */}
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', marginTop: 15, borderRadius: 10 }}
          placeholder='Pesquisar por ID'
          value={idPesquisa}
          onChangeText={(text) => setIdPesquisa(text)}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 5, borderRadius: 10 }} />

        {/* Botão para pesquisar o item pelo ID */}
        <TouchableOpacity onPress={handlePesquisa} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, margin: 10 }}>
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
    </View>
  );
}
