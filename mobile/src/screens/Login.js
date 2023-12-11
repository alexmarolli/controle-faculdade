import Logo from '../../assets/logo-Login.svg';
import User from '../../assets/User.svg';
import { Alert, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { useState } from 'react';


  
  export function Login (){

    const [Username, SetUsername]= useState('')
    const [password, SetPassword]= useState('')

    function handleLogin () {
      if( Username ==='' || password === ''){
        alert('Usuario invalido')
      }
    } 
      

    return(
      <View className=' bg-gray-300 w-4/5 h-[560px] rounded-2xl items-center justify-center shadow-2xl shadow-gray-300 block'>
      
        <Logo></Logo>
      
        <User className='mt-8'></User>

        <TextInput className='w-3/5 text-center rounded-2xl mt-[42px] bg-slate-50'
          placeholder='Usuario'
          onChangeText={(Text)=> SetUsername(Text)}
        />

        <TextInput className='w-3/5 text-center rounded-2xl mt-6 bg-slate-50'
          placeholder='Senha'
          onChangeText={(Text)=> SetPassword(Text)}
          secureTextEntry={true}
        />
        <TouchableOpacity className='w-4/5 bg-[#E69B1B] items-center justify-center h-[42px] rounded-3xl mt-9'
          onPress={handleLogin}
        >
          <Text className='text-black font-bold text-base '>
              Login
          </Text>
        </TouchableOpacity>
       
      </View>
    )
  }