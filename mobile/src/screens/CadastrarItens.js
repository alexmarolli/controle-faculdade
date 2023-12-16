import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios'; // Importe o Axios
import { useItens } from '../context/ItensContext';

export function CadastrarItens({ Navigation }) {
  const { state, dispatch } = useItens();
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!id || !nome || !descricao || !preco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Cria um novo item
    const novoItem = { id, nome, descricao, preco };

    try {
      // Envia a requisição POST para o backend utilizando Axios
      const response = await axios.post('http://localhost:3333/cadastrarItem', novoItem);

      // Se o cadastro foi bem-sucedido, você pode lidar com a resposta conforme necessário
      console.log('Resposta do backend:', response.data);

      // Limpa os campos após o cadastro
      setId('');
      setNome('');
      setDescricao('');
      setPreco('');

      Alert.alert('Sucesso', 'Item cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar item:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o item. Por favor, tente novamente.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1C2B4C', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 32, marginTop: 100, marginLeft: 'auto', marginRight: 'auto' }}>
        Cadastrar Itens
      </Text>

      <View style={{ width: '80%', height: 400, borderRadius: 20, alignItems: 'center' }}>
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='ID do Item'
          value={id}
          onChangeText={setId}
          keyboardType='numeric'
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='Nome do Item'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='Descrição do Item'
          value={descricao}
          onChangeText={(Text) => setDescricao(Text)}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
          placeholder='Preço do Item'
          value={preco}
          onChangeText={setPreco}
          keyboardType='numeric'
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

        <TouchableOpacity
          onPress={handleCadastro}
          style={{ backgroundColor: 'green', borderRadius: 10, margin: 2, height: 40, width: 150, justifyContent: 'center', margin: 10 }}
        >
          <Text style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
