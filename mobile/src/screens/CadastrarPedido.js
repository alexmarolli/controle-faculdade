import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Alert, Button } from 'react-native';
import { PedidosContext } from '../context/PedidosContext';
import { useItens } from '../context/ItensContext';

export function CadastrarPedidos({ navigation }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const {pedidos, setPedidos} = useContext(PedidosContext);


    const handleCadastro = () => {
        setPedidos((currentPedidos) => [
            ...currentPedidos,
            {nome, descricao, preco },   
        ]);
        Alert.alert('Sucesso', 'Pedido cadastrado com sucesso!');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#1C2B4C', alignItems: 'center', }}>
            <Text style={{ color: 'white', fontSize: 32, marginTop: 100, marginLeft: 'auto', marginRight: 'auto' }}>
                Pedidos
            </Text>

            <View style={{  width: '80%', height: 400, borderRadius: 20, alignItems: 'center' }}>

            <TextInput style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }} placeholder="Nome" onChangeText={setNome} />
            <TextInput style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }} placeholder="Descrição" onChangeText={setDescricao} />
            <TextInput keyboardType='numeric' style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }} placeholder="Valor" onChangeText={setPreco} />
            <Button title="Adicionar Pedido" onPress={handleCadastro} />



                {/*<TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
                    placeholder='Nome do Pedido'
                    onChangeText={setNome}
                />
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
                    placeholder='Descrição do Pedido'
                    onChangeText={setDescricao}
                />
                <TextInput
                    style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 10, borderRadius: 10, paddingLeft: 10 }}
                    placeholder='Preço do Pedido'
                    onChangeText={setPreco}
    />*/}

                <View style={{ width: '90%', height: 2, marginTop: 100 ,backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

                {/*<TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', borderRadius: 10, margin: 2,height:40, width: 150, justifyContent:'center', margin:10 }}>
                    <Text style={{ color: 'white', marginLeft:'auto', marginRight:'auto' }}>Cadastrar Pedido</Text>
</TouchableOpacity>*/}
            <View className='bg-card w-[320] h-[280px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
                <Text className='font-bold, text-lg'>Pedidos Cadastrados</Text>
            {pedidos.map((pedido, index) => (
        <View key={index}>
          <Text>Nome: {pedido.nome}</Text>
          <Text>Descrição: {pedido.descricao}</Text>
          <Text>Preco: {pedido.preco}</Text>
        </View>
      ))}
            </View>
            </View>
        </View>
    )
}