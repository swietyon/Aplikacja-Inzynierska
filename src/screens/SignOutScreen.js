import React from 'react';
import { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { AuthContext } from '../context/context';

const SignOutScreen = ( {navigation} ) => {
    const { signOut } =  useContext(AuthContext);
        return (
            <View>
                <Text style={{fontSize:30}}> SignOutScreen </Text>
                <Button title="Wyloguj się" onPress={() => signOut()} />
            </View>
        );
};

export default SignOutScreen;