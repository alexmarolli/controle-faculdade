import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from "../components/TabNavigator";
import { Header } from "../components/header";

export function Home (){
    return(
        <View className='bg-fundo w-full h-full justify-between'>
            <Header/>
 
            <View className='bg-slate-400 w-[80%] m-auto h-[200] rounded-lg items-center justify-center     '>
                <Text className='text-white'> NS o que fazer ainda </Text>
            </View>

            <Navigation/>
        </View>
    )
}