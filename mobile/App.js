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
import { EditarItens} from './src/screens/EditarItens.js';
import { VerItens } from './src/screens/VerItens.js';
import { ExcluirItens } from './src/screens/ExcluirItens.js';
import { CadastrarItens } from './src/screens/CadastrarItens.js';
import { ItensProvider } from './src/context/ItensContext';




export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
}