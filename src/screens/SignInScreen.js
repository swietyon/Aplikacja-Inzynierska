import React from 'react';
import { useContext, useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { DrawerScreen } from '../navigation/Drawer';
import SignUpScreen from './SignUpScreen';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => { 
    const navigation = useNavigation();   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [state, signin] =  useContext(AuthContext);

    console.log({email, password});

        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../img/logo.png')} 
                        style={{width: 350, height: 150, marginBottom: 30}} 
                    />
                </View>
                    <TextInput 
                        placeholder="E-mail" 
                        style={styles.inputStyle} 
                        autoFocus={true}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput 
                        placeholder="Password" 
                        style={styles.inputStyle}
                        secureTextEntry 
                        autoFocus={true}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        title="Zaloguj się" 
                        onPress={() => navigation.navigate(DrawerScreen)}
                        // onPress={() => signin()}
                        >
                        <Text style={styles.textStyle}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Nie masz konta? Zarejestruj się" 
                        onPress={() => navigation.navigate(SignUpScreen)}
                         >
                        <Text style={{color:'#154c79'}}>Nie masz jeszcze konta? Zarejestruj się!</Text>
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
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
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