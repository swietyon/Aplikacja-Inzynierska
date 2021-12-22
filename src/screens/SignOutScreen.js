import React from 'react';
import { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../context/context';
import SignUpScreen from './SignUpScreen';

const SignOutScreen = ( {navigation} ) => {
        return (
            <View>
                <Text style={{fontSize:30}}> SignOutScreen </Text>
                <Button title="Wyloguj się" onPress={() => navigation.navigate(SignUpScreen)} />
            </View>
        );
};

export default SignOutScreen;