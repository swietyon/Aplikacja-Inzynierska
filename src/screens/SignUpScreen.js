import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ( {navigation} ) => {
    const s = require('../components/Styles');
    const {state, signup, clearErrorMessage, tryLocalSignin} =  useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');

    useEffect (() => {
        tryLocalSignin();
    }, []);

        return (
            <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../img/logo.png')} 
                        style={{width: 350, height: 150, marginBottom: 30}} 
                    />
                </View>
                <TextInput 
                    keyboardType='email-address'
                    placeholder='Adres e-mail' 
                    value={email} 
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    style={s.inputStyle}
                />
                <TextInput
                    placeholder='Imię' 
                    value={username} 
                    onChangeText={setUsername}
                    style={s.inputStyle}
                />
                <TextInput
                    placeholder='Data urodzenia' 
                    value={birth} 
                    onChangeText={setBirth}
                    style={s.inputStyle}
                />
                <TextInput
                    placeholder='Płeć' 
                    value={gender} 
                    onChangeText={setGender}
                    style={s.inputStyle}
                />
                <TextInput
                    secureTextEntry
                    placeholder='Hasło' 
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={s.inputStyle}
                />
                <TextInput
                    secureTextEntry
                    placeholder='Powtórz hasło' 
                    value={confrimPassword} 
                    onChangeText={setConfrimPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={s.inputStyle}
                />
                {state.errorMessage ? (
                <Text style={s.errorMessage}>{state.errorMessage}</Text>
                 ) : null}
                <TouchableOpacity
                    style={s.touchableOpacityStyle}
                    onPress={() => signup({ email, username, birth, gender, password })}
                >
                        <Text style={s.textStyle}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignInScreen');
                        clearErrorMessage();
                        }}
                >
                        <Text style={{color:'#154c79'}}>Posiadasz już konto? Zaloguj się!</Text>
                </TouchableOpacity>  
                </View>    
            </ScrollView>
        );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 12,
        alignItems: 'center',
        paddingBottom:50
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }
});

export default SignUpScreen;
