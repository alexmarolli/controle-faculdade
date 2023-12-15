import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../components/header";
import Buscar from '../../assets/Pesquisar.svg'
import Add from '../../assets/ADD.svg'
import { useNavigation } from '@react-navigation/native';


export function Financeiro (){
    const Navigation= useNavigation();
    return(
        <View className='w-full h-full justify-between bg-fundo '>
            <Header/>

            <View className='bg-card w-[300] h-[560] m-auto rounded-2xl'>
                <View className='flex-row justify-between mt-2 items-center'>

                    <View className='ml-2'>
                        <Buscar/>
                    </View>

                    <TextInput className='bg-gray-300 w-[70%] h-8 rounded-full p-1 ' placeholder="Financeiro">
                    </TextInput>
                    <TouchableOpacity onPress={() => Navigation.navigate('Add fin')}>
                        <View className='mr-2' >
                            <Add/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className='w-[85%] bg-slate-400 h-[2] m-auto mt-[6] rounded-full'/>

                <View className='flex-row justify-between p-2  border-10 border-solid border-red-500 w-full h-[200]'>
                    <Text className=''> Saldo em contas</Text>
                    <Text> Lançamentos Futuros</Text>
                </View>

            </View>

        </View>
    )
}