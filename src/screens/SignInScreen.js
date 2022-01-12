import React from 'react';
import { useContext, useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ResolveAuth from '../components/ResolveAuth';

import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = ({navigation}) => { 
    const s = require('../components/Styles'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, signin, clearErrorMessage} =  useContext(AuthContext);

        return (
            <View style={styles.container}><ResolveAuth email={email} password={password} />
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../img/logo.png')} 
                        style={{width: 250, height: 120, marginBottom: 30}} 
                    />
                </View>
                <Text style={s.authTitlesStyle}>E-mail:</Text>
                    <TextInput 
                        style={s.inputStyle} 
                        autoFocus={true}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                <Text style={s.authTitlesStyle}>Hasło:</Text>
                    <TextInput 
                        style={s.inputStyle}
                        secureTextEntry 
                        autoFocus={true}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {state.errorMessage ? (
                    <Text style={s.errorMessage}>{state.errorMessage}</Text>
                    ) : null}
                    <TouchableOpacity
                        style={s.touchableOpacityStyle}
                        title="Zaloguj się" 
                        onPress={() => signin({ email, password })}
                        >
                        <Text style={s.textStyle}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Nie masz konta? Zarejestruj się" 
                        onPress={() => {
                            navigation.navigate('SignUpScreen');
                            clearErrorMessage();
                            }}
                         >
                        <Text style={{color:'#154c79',fontSize:17}}>Nie masz jeszcze konta? Zarejestruj się!</Text>
                    </TouchableOpacity>               
                </View>
        );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: -90
    },
    inputStyle: {
        marginBottom:10,
        backgroundColor:'#F2F2F2', 
        width: '100%',
        height:50, 
        borderColor:'white', 
        borderWidth: 2, 
        borderRadius:10,
        fontSize: 20,
        textAlign: 'center'
    },
    touchableOpacityStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#154c79',
        margin:15,
        borderRadius: 10,
        borderColor: '#fff'
    },
    textStyle: {
        margin: 15,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    }
    
})

export default SignInScreen;