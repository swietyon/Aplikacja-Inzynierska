import React from 'react';
import { useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

const SignOutScreen = () => {
    const s = require('./Styles'); 
    const {state, signout} =  useContext(AuthContext);
        return (
            <>  
            <LinearGradient
                colors={['white','#154c79']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >   
            <View style={s.Images}>
                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={() => signout()}
                >
                    <Text style={styles.textStyle}>Wyloguj się</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
            </>
        );
};

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fefefe',
        margin:15,
        marginLeft:30,
        marginRight:30,
        borderRadius: 5,
        alignSelf: 'center'
    },
    textStyle: {
        margin: 13,
        fontSize: 20,
        color: '#154c79',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
})

export default SignOutScreen;