import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {CommonActions} from "react-navigation/native";
import {UserService} from "../../services";

const login = ({navigation})=>{
    const login = () =>{
        UserService.login({email: 'teste', token:'tokensteste'})
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes:[{name:'bottomTabNavigator'}],
            })
        );
    }
};

return(
    <>
        <Text>Tela de Login</Text>
            <TouchableOpacity onPress={login}>
                <text>Clique aqui para entrar</text>
            </TouchableOpacity>
    </>
)

export default login;
