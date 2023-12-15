import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { Header } from '../components/header';
import { usePedidos } from '../context/PedidosContext';

export function VerPedidos () {
    //const [ idPesquisa, setIdPesquisa ] = useState('');
    const {pedidos} = usePedidos();
    console.log(pedidos);
    
    /*const handlePesquisa = () => {
        if (!pedidos || pedidos.length === 0) {
            console.log('Nenhum pedido encontrado: ', pedidos);
            return;
        }
        console.log('Pedidos: ', pedidos);
        console.log('ID do Pedido: ', idPesquisa);

        const pedidosFiltrados = pedidos.filter(pedidos => pedidos.id === idPesquisa);

        console.log('Pedidos encontrados; ', pedidosFiltrados);
    };*/
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1C2B4C' }}>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
        Ver Itens
      </Text>

      <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center', marginLeft:'auto', marginRight:'auto', marginBottom:50 }}>
        {/* Barra de pesquisa */}
        {/*<TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', marginTop: 15, borderRadius: 10 }}
          placeholder='Pesquisar por ID'
          value={idPesquisa}
          onChangeText={(text) => setIdPesquisa(text)}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 5, borderRadius: 10 }} />

        {/* Botão para pesquisar o item pelo ID
        <TouchableOpacity onPress={handlePesquisa} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, margin: 10 }}>
          <Text style={{ color: 'white' }}>Pesquisar por ID</Text>
        </TouchableOpacity> */}


            <View style={{ backgroundColor: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
            {pedidos.map((pedido, index) => (
        <View key={index}>
          <Text>{pedido.nome}</Text>
          <Text>{pedido.descricao}</Text>
          <Text>{pedido.valor}</Text>
        </View>
      ))}
            </View>
            </View>
        </View>
    );
}



