import { StyleSheet, Text, TextInput, View } from "react-native";
import{Picker} from '@react-native-picker/picker'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";

export function AddFinanceiro({Navigation}) {

    const [selectedValue, setSelectedValue]= useState('')
    return(
        <View className='bg-fundo w-full h-full'>
            <View className='w-[320] h-[560] bg-card m-auto rounded-2xl '>
                <View className='flex-row'>
                    <Text className='text-gray-800'> Informe o parceiro: </Text>
                    <TextInput className=' rounded-full w-[50%] h-5 bg-slate-200' placeholder="Codigo ou Nome"></TextInput>
                </View>
                <View className='flex-row'>
                    <Text className='text-gray-800'> Informe o valor: </Text>
                    <TextInput className=' rounded-full w-[50%] h-5 bg-slate-200' placeholder="Codigo ou Nome"></TextInput>
                </View>
                <View className='flex-row'>
                    <Text className='text-gray-800'> Informe o vencimento: </Text>
                    <Picker 
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
                        mode="dialog"
                        style={styles.picker}
                    >
                        <Picker.Item label='Dinheiro' value='1'/>
                        <Picker.Item label='Boleto' value='2'/>
                        <Picker.Item label='Cheque' value='3'/>
                    </Picker>
                </View>
                <View className='flex-row'>
                    <Text className='text-gray-800'> Informe form pgto: </Text>
                    <TextInput className=' rounded-full w-[50%] h-5 bg-slate-200' placeholder="Codigo ou Nome"></TextInput>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      overflow: 'hidden',
    },
    picker: {
      height: 40,
      width: '100%',
    },
    selectedValueText: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });