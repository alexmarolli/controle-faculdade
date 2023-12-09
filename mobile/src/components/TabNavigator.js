import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, useNavigation} from 'react-native'
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
        <View className='w-full bg-transparent mb-0'>
        <Tab.Navigator>
                
                <Tab.Screen name='Produtos' component={Produtos}
                    options={{tabBarIcon: ({size})=>(<IProdutos name='Produtos' size={size}/>)}}
                   
                />
                <Tab.Screen name='Parceiros' component={Parceiros}
                    options={{tabBarIcon: ({size})=>(<IParceiros name='Parceiros' size={size}/>)}}
                />
                <Tab.Screen name='Home' component={Home} 
                    options={{tabBarIcon: ({size})=>(<IHome name='Home' size={size}/>)}}
                />
                <Tab.Screen name='Financeiro' component={Financeiro}
                    options={{tabBarIcon: ({size})=>(<IFinanceiro name='Financeiro' size={size}/>)}}
                />
                <Tab.Screen name='Pedidos' component={Pedidos}
                    options={{tabBarIcon: ({size})=>(<IPedidos name='Pedidos' size={size}/>)}}
                />

        </Tab.Navigator>
        </View>
    )
}