import Logo from '../../assets/Logo-small.svg';
import Suporte from '../../assets/suporte.svg';
import User from '../../assets/usuario.svg';
import { View } from 'react-native'

export function Header () {
    return(
        <View className='w-[100%] flex-row items-center justify-between h-12 mt-10'>
            <View className='w-auto ml-4'>
                <Logo />
            </View>
            <View className='flex-row w-[50%] justify-end mr-4' >
                <View className='mr-3 '>
                    <Suporte/>
                </View>
                <View>
                    <User/>
                </View>
            </View>
        </View>
    )
}