import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import { NavigationContainer } from '@react-navigation/native';
import { Header } from "../components/header";

export function Home (){
    return(
        <View className='w-full h-full justify-between bg-fundo'>
            <Header/>
 
            <View className='bg-slate-400 w-[80%] m-auto h-[200] rounded-lg items-center justify-center     '>
                <Text className='text-white'> NS o que fazer ainda </Text>
            </View>

        </View>
    )
}
