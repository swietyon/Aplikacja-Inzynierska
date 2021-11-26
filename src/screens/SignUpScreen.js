import React from 'react';
import { Text, View, Button } from 'react-native';
import SignInScreen from './SignInScreen';

const SignUpScreen = ( {navigation} ) => {
        return (
            <View>
                <Text> SignUpScreen </Text>
                <Button title="Zaloguj się"
                onPress={() => navigation.navigate('SignIn')} />
            </View>
        );
};

export default SignUpScreen;