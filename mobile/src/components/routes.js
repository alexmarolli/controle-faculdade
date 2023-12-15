import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pedidos } from '../screens/Pedidos';
import { CadastrarPedidos } from '../screens/CadastrarPedido';
import { AddFinanceiro } from '../screens/FunctionFinanceiro';
import { Financeiro } from '../screens/Financeiro';
import { CadastrarItens } from '../screens/CadastrarItens';
const Stack = createStackNavigator();

const PedidosProvider = ()=> (
  <PedidosProvider>
    <CadastrarPedidos/>
  </PedidosProvider>
)

const StackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Pedidos" 
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="CadastrarPedidos" component={PedidosProvider} />
        <Stack.Screen name="CadastrarItens" component={CadastrarItens} />
      </Stack.Navigator>
  );
};

const FinStack=createStackNavigator()

export function StackFinanceiro(){
  return(
    <FinStack.Navigator screenOptions={{headerShown:false}}>
      <FinStack.Screen name='FinHome' component={Financeiro}/>
      <FinStack.Screen name='Add fin' component={AddFinanceiro}/>
    </FinStack.Navigator>

  )
}

export default StackNavigator;
