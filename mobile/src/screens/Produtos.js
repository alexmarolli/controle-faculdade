import { Text, View } from "react-native";
import { Header } from "../components/header";
import Pesquisar from '../../assets/Pesquisar.svg'
import Add from '../../assets/ADD.svg'
import { TextInput } from "react-native";
import { DivProdutos } from "../components/itens";

export function Produtos (){


    return(
        <View className='w-full h-full justify-between'>
            <Header/>

            <Text className='text-white text-[32px] mt-3 mx-auto'>Produtos</Text>

            <View className='bg-card w-[80%] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
                <View className='w-[300px] h-10 items-center rounded-3xl bg-slate-300 mt-2 flex-row p-2 justify-between' >
                    <Pesquisar/>
                    <TextInput className='ml-2 w-[200px] h-8 m-2' 
                        onChange={Text}/>
                    <View className='w-8 '>    
                        <Add/>
                    </View>
                </View>
                <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full'/>

                {Array.from({length:12}, (_,index)=> (
                    <DivProdutos Key={index}/>
                ))}
                
            
            </View>
        </View>
    )
}