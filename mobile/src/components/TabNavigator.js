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
        <View className='w-full flex-row h-12 items-center justify-evenly '>
            <View>
                <IProdutos/>
            </View>

            <View>
                <IParceiros/>
            </View>

            <View>
                <IHome/>
            </View>

            <View>
                <IFinanceiro/>
            </View>

            <View>
                <IPedidos/>
            </View>
        </View>
    )
}