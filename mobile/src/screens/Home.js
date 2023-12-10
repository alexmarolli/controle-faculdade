import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from "../components/TabNavigator";
import { Header } from "../components/header";

export function Home() {
  const navigation = useNavigation(); // Use o hook de navegação

  const handleNavigateToCadastrarItens = () => {
    // Navegue para a tela de "Cadastrar Itens" ao pressionar o botão
    navigation.navigate('Produtos'); // Use o nome da tela definido na navegação
  };

  return (
    <View className='w-full h-full justify-between'>
      <Header />

      <View className='bg-slate-400 w-[80%] m-auto h-[200] rounded-lg items-center justify-center'>
        <Text className='text-white'> NS o que fazer ainda </Text>
        
        {/* Adicione um botão para navegar para "Cadastrar Itens" */}
        <TouchableOpacity onPress={handleNavigateToCadastrarItens}>
          <Text className='text-white'>Cadastrar Itens</Text>
        </TouchableOpacity>
      </View>

      <Navigation />
    </View>
  );
}
