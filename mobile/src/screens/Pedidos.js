import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header } from "../components/header";
import Pesquisar from '../../assets/Pesquisar.svg';
import Add from '../../assets/ADD.svg';
import { useNavigation } from '@react-navigation/native';

export function Pedidos() {
  const navigation = useNavigation();

  return (
    <View className='w-full h-full justify-between bg-fundo'>
      <Header />

      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, alignSelf: 'center' }}>Pedidos</Text>

      <View className='bg-card w-[320] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
        <View className='w-[300px] h-10 items-center rounded-3xl bg-[rgba(255, 255, 255, 0.1)] mt-2 flex-row p-2 justify-between'>
          <Pesquisar />
          <TextInput
            className='ml-2 w-[200px] h-8 m-2'
            onChangeText={(text) => console.log(text)}
            placeholder='Pesquisar'
          />

          <View className='w-8 '>
            <Add />
          </View>

        </View>
        <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full'/>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 4 }}>

          <TouchableOpacity className='bg-blue-500 p-2 rounded-md mb-2 w-[150] justify-center items-center'>
            <Text style={{ color: 'white' }}
            onPress={() => navigation.navigate('Ver Pedidos')}
            >Ver Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-green-500 p-2 rounded-md mb-2 w-[150] justify-center items-center'>
            <Text style={{ color: 'white' }}
            onPress={() => navigation.navigate('Cadastrar Pedidos')}
            >Cadastrar Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-yellow-500 p-2 rounded-md mb-2 w-[150] justify-center items-center'>
            <Text style={{ color: 'white' }}>Editar Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-red-500 p-2 rounded-md mb-2 w-[150] justify-center items-center'>
            <Text style={{ color: 'white' }}>Excluir Pedidos</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};