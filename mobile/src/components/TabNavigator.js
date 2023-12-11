import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, useNavigation, Button, Touchable, Alert} from 'react-native'
import {Home} from '../screens/Home.js';
import {Produtos} from '../screens/Produtos.js'
import {Financeiro} from '../screens/Financeiro.js'
import {Parceiros} from '../screens/Parceiros.js';
import {Pedidos} from '../screens/Pedidos.js'
import IProdutos from '../../assets/produtos.svg'
import IParceiros from '../../assets/parceiro.svg'
import IHome from '../../assets/Home.svg'
import IFinanceiro from '../../assets/Financeiro.svg'
import IPedidos from '../../assets/Pedidos.svg'

const Tab = createBottomTabNavigator();

export function Navigation(){
    
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: '#1C2B4C',
                borderTopWidth: 0,
                shadowColor:''
            }
        }}>
            <Tab.Screen name='teste' component={Produtos} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size})=>(<IProdutos name='Produtos' size={size}/>)}}
            />
            <Tab.Screen name='teste 1' component={Parceiros} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size})=>(<IParceiros name='Parceiros' size={size}/>)}}
            />
            <Tab.Screen name='teste2' component={Home} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size})=>(<IHome name='Home' size={size}/>)}}
            />
            <Tab.Screen name='teste3' component={Financeiro} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size})=>(<IFinanceiro name='Financeiro' size={size}/>)}}
            />
            <Tab.Screen name='teste4' component={Pedidos} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({size})=>(<IPedidos name='Pedidos' size={size}/>)}}
            />
        </Tab.Navigator>
    )
}