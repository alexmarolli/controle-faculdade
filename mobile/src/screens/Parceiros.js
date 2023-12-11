import { Text, View } from "react-native";
import { Header } from "../components/header";
import Pesquisar from '../../assets/Pesquisar.svg'
import Add from '../../assets/ADD.svg'
import { TextInput } from "react-native";
import { DivParceiros } from "../components/parceiros-div";

export function Parceiros (){


    return(
        <View className='w-full h-full justify-between bg-fundo'>
            <Header/>
            <View className='bg-card w-[320] h-[560px] m-auto rounded-2xl shadow-lg shadow-slate-200 items-center '>
                <View className='w-[300px] h-10 items-center rounded-3xl bg-[rgba(255, 255, 255, 0.1)] mt-2 flex-row p-2 justify-between' >
                    <Pesquisar/>
                    <TextInput className='ml-2 w-[200px] h-8 m-2' 
                        onChange={Text}/>
                    <View className='w-8 '>    
                        <Add/>
                    </View>
                </View>
                <View className='w-[90%] h-[2px] bg-gray-500 m-2 rounded-full'/>

                {Array.from({length:12}, (_,index)=> (
                    <DivParceiros Key={index}/>
                ))}
                
            
            </View>
        </View>
    )
}