import React from 'react';
import { useContext } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const SignOutScreen = ( {navigation} ) => {
    const s = require('./Styles'); 
    const {state, signout} =  useContext(AuthContext);
        return (
            <View style={s.Images}>
                <TouchableOpacity
                    style={s.touchableOpacityStyle}
                    onPress={() => signout()}
                >
                    <Text style={s.textStyle}>Wyloguj się</Text>
                </TouchableOpacity>
            </View>
        );
};

export default SignOutScreen;