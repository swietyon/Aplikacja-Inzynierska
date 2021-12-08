import React from 'react';
import { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../context/context';
import SignUpScreen from './SignUpScreen';

const LoginForm = () => {
    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required('Email jest wymagany'),
        password:Yup.string()
        .required()
        .min(8, 'Hasło powinno zawierać conajmniej 8 znakow')
    })
};

const SignInScreen = ( {navigation} ) => {    
    const { signIn } =  useContext(AuthContext);
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
                    />
                    <TextInput 
                        placeholder="Password" 
                        style={styles.inputStyle} 
                        autoFocus={true}
                    />
                    <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        title="Zaloguj się" 
                        onPress={() => signIn()}>
                        <Text style={styles.textStyle}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Nie masz konta? Zarejestru się" 
                        onPress={() => navigation.navigate(SignUpScreen)}>
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