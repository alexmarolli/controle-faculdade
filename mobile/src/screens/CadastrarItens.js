import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useItens } from '../context/ItensContext';

export function CadastrarItens({Navigation}) {
  const { state, dispatch } = useItens();
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    // Verifica se o ID já existe na lista
    const idExiste = state.itens.some(item => item.id === id);

    if (idExiste) {
      Alert.alert('Erro', 'Este ID já está em uso. Por favor, escolha outro ID.');
      return;
    }

    // Verifica se todos os campos estão preenchidos
    if (!id || !nome || !descricao || !preco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Cria um novo item
    const novoItem = { id, nome, descricao, preco };

    // Despacha a ação para cadastrar o item
    dispatch({ type: 'CADASTRAR_ITEM', payload: novoItem });

    // Limpa os campos após o cadastro
    setId('');
    setNome('');
    setDescricao('');
    setPreco('');

    Alert.alert('Sucesso', 'Item cadastrado com sucesso!');
    console.log('Cadastrado agora', novoItem);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1C2B4C', alignItems: 'center', }}>
      <Text style={{ color: 'white', fontSize: 32, marginTop: 100, marginLeft: 'auto', marginRight: 'auto' }}>
        Cadastrar Itens
      </Text>

      <View style={{  width: '80%', height: 400, borderRadius: 20, alignItems: 'center' }}>
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='ID do Item'
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='Nome do Item'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10,paddingLeft: 10 }}
          placeholder='Descrição do Item'
          value={descricao}
          onChangeText={(Text)=>setDescricao(Text)}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='Preço do Item'
          value={preco}
          onChangeText={setPreco}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

        <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', borderRadius: 10, margin: 2,height:40, width: 150, justifyContent:'center', margin:10 }}>
          <Text style={{ color: 'white', marginLeft:'auto', marginRight:'auto' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
