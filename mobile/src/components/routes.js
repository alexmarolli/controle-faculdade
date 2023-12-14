import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pedidos } from '../screens/Pedidos';
import { CadastrarPedidos } from '../screens/CadastrarPedido';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Pedidos">
        <Stack.Screen name="Pedidos" component={Pedidos} />
        <Stack.Screen name="CadastrarPedidos" component={CadastrarPedidos} />
      </Stack.Navigator>
  );
};

export default StackNavigator;
