import { StatusBar } from 'expo-status-bar';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { TextInput } from 'react-native';
import { useState } from 'react';
import { Navigation } from './src/components/TabNavigator';
import { Login } from './src/screens/Login.js';
import { Header } from './src/components/header.js';
import { Home } from './src/screens/Home.js';
import { Parceiros } from './src/screens/Parceiros.js';
import { Produtos } from './src/screens/Produtos.js';



export default function App() {
  return (
    <View className=' items-center bg-fundo w-full h-full justify-between'>
    {/* <Login/> */}
    {/* <Header/>
      <StatusBar style="auto" />

      <Navigation/> 

      <Home/>
      <Parceiros/>*/}
      <Produtos/>
    </View>
  );
}


