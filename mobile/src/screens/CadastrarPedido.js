import React, { useContext, useState } from 'react';
import { Text, View, TextInput, Alert, Button } from 'react-native';
import { PedidosContext } from '../context/PedidosContext';

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
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#1C2B4C', alignItems: 'center', }}>
            <Text style={{ color: 'white', fontSize: 32, marginTop: 100, marginLeft: 'auto', marginRight: 'auto' }}>
                Cadastrar Pedidos
            </Text>

            <View style={{  width: '80%', height: 400, borderRadius: 20, alignItems: 'center' }}>

            <TextInput placeholder="Nome" onChangeText={setNome} />
            <TextInput placeholder="Descrição" onChangeText={setDescricao} />
            <TextInput placeholder="Valor" onChangeText={setPreco} />
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

                <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

                {/*<TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', borderRadius: 10, margin: 2,height:40, width: 150, justifyContent:'center', margin:10 }}>
                    <Text style={{ color: 'white', marginLeft:'auto', marginRight:'auto' }}>Cadastrar Pedido</Text>
</TouchableOpacity>*/}
            </View>
        </View>
    )
}