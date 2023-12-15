import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, useNavigation, Button, Touchable, Alert, KeyboardAvoidingView} from 'react-native';
import {Home} from '../screens/Home.js';
import {Produtos} from '../screens/Produtos.js'
import {Financeiro} from '../screens/Financeiro.js'
import {Parceiros} from '../screens/Parceiros.js';
import IProdutos from '../../assets/produtos.svg'
import IParceiros from '../../assets/parceiro.svg'
import IHome from '../../assets/Home.svg'
import IFinanceiro from '../../assets/Financeiro.svg'
import IPedidos from '../../assets/Pedidos.svg'
import { CadastrarItens } from '../screens/CadastrarItens.js';
import { ItensProvider } from '../context/ItensContext.js';
import { VerItens } from '../screens/VerItens.js';
import { EditarItens } from '../screens/EditarItens.js';
import {ExcluirItens} from '../screens/ExcluirItens.js';
import StackNavigator, { StackFinanceiro } from './routes.js';

const Tab = createBottomTabNavigator();

const ProdStack = createNativeStackNavigator()

    const CadastrarItensWithProvider = () => (
    <ItensProvider>
      <CadastrarItens />
    </ItensProvider>
    );
    const VerItensProvider=() =>(
        <ItensProvider>
            <VerItens/>
        </ItensProvider>
    );

    const EditarItensProvider = () => (
        <ItensProvider>
            <EditarItens/>
        </ItensProvider>
    );

    const ExcluirItensProvider = () =>(
        <ItensProvider>
            <ExcluirItens/>
        </ItensProvider>
    );
    

function StackProduto(){
    return(
        <ProdStack.Navigator screenOptions={{headerShown:false}}>
            <ProdStack.Screen name='Home' component={Produtos}/>
            <ProdStack.Screen name='criar itens' component={CadastrarItensWithProvider}/>
            <ProdStack.Screen name='Ver itens' component={VerItensProvider}/>
            <ProdStack.Screen name='Editar' component={EditarItensProvider}/>
            <ProdStack.Screen name='Excluir' component={ExcluirItensProvider}/>
        </ProdStack.Navigator>
    )
}


export function Navigation(){
    
    return(
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: '#1C2B4C',
                    borderTopWidth: 0,
                }
            }}
            initialRouteName='Home'>
    <Tab.Screen
  name='Produto'
  component={StackProduto}
  options={{
    headerShown: false,
    tabBarIcon: ({ size }) => (<IProdutos name='Produtos' size={size} />)
  }}
/>
                <Tab.Screen name='Parceiros' component={Parceiros} 
                    options={{
                        headerShown:false,
                        tabBarIcon: ({size})=>(<IParceiros name='Parceiros' size={size}/>)}}
                />
                <Tab.Screen name='Home' component={Home} 
                    options={{
                        headerShown:false,
                        tabBarIcon: ({size})=>(<IHome name='Home' size={size}/>)}}
                />
                <Tab.Screen name='Financeiro' component={StackFinanceiro} 
                    options={{
                        headerShown:false,
                        tabBarIcon: ({size})=>(<IFinanceiro name='Financeiro' size={size}/>)}}
                />
                <Tab.Screen name='teste4' component={StackNavigator} //Aqui muda para a minha stack navigation que está no routes.js
                    options={{
                        headerShown:false,
                        tabBarIcon: ({size})=>(<IPedidos name='Pedidos' size={size}/>)}}
                />
            </Tab.Navigator>
        </KeyboardAvoidingView>
    )
}