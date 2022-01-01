import React from 'react';
import { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SignOutScreen = ( {navigation} ) => {
    const {state, signout} =  useContext(AuthContext);
        return (
            <View>
                <Text style={{fontSize:30}}> SignOutScreen </Text>
                <Button title="Wyloguj się" onPress={() => signout()} />
            </View>
        );
};

export default SignOutScreen;