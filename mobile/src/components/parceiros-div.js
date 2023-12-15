import { View, Text, ActivityIndicator, FlatList} from 'react-native';
import Atualizar from '../../assets/Atualizar.svg'
import { useEffect, useState } from 'react';

export function DivParceiros(){

    const [parceiro , setParceiro ]= useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3333/ver-parceiro')
          .then((res) =>{
            return res.json()})

          .then(
            (parceiro) => {
                setParceiro(parceiro);
                console.log(parceiro)
            }
          )
          .catch(error => {
            setIsLoading(false);
            setError(error.message || 'teste aki');
          });
      }, []);

    const getParceiro = ()=>{
        if (isLoading) {
            return <ActivityIndicator size="small" />;
          }
      
          if (error) {
            return <Text>{error}</Text>;
          }
      
          return parceiro.map(parceiro => (
            <Text key={parceiro.id}>{parceiro.nome}</Text>
          ));

    }

    
    return(

        <View className='w-[290] h-8 bg-gray-300 rounded-full p-1 flex-row items-center justify-between mb-2'> 

            <View className='flex-row items-center'>
                <View className='w-6 h-6 rounded-full bg-slate-500'/>
            <FlatList 
                data={({parceiro})}
                renderItem={({item})=>(
                    <View className='w-[290] h-8 bg-gray-300 rounded-full p-1 flex-row items-center justify-between mb-2'>
                        <View className='flex-row items-center'>
                            <View/>
                        </View>
                    </View>
                )}
                ></FlatList>
            </View>
            
            <View className='h-6 mr-1 w-auto'>
                <Atualizar/>
            </View>
        </View>
    )
}