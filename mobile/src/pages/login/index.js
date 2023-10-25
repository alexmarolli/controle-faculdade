import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {UserService} from '../../services';

const Login = ({navigation}) => {
    const login = () => {
        UserService.login({email: 'teste', token: 'tokenteste'});
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [{name: 'BottomTabNavigator'}],
            })
        )
    };

return (
    <>
        <Text>Tela de Login</Text>
            <TouchableOpacity onPress={login}>
                <Text>Clique aqui para entrar</Text>
            </TouchableOpacity>
    </>
);
};

export default Login;