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

    
    return;
}