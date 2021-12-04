import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/context';

const SignUpScreen = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const { signUp } =  useContext(AuthContext);

        return (
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
                    style={styles.inputStyle}
                />
                <TextInput
                    placeholder='Imię' 
                    value={name} 
                    onChangeText={setName}
                    style={styles.inputStyle}
                />
                <TextInput
                    placeholder='Data urodzenia' 
                    value={birth} 
                    onChangeText={setBirth}
                    style={styles.inputStyle}
                />
                <TextInput
                    placeholder='Płeć' 
                    value={sex} 
                    onChangeText={setSex}
                    style={styles.inputStyle}
                />
                <TextInput
                    secureTextEntry
                    placeholder='Hasło' 
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputStyle}
                />
                <TextInput
                    secureTextEntry
                    placeholder='Powtórz hasło' 
                    value={confrimPassword} 
                    onChangeText={setConfrimPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputStyle}
                />
                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    title="Cofnij"
                    onPress={() => signUp()}>
                        <Text style={styles.textStyle}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Nie masz konta? Zarejestru się" 
                    onPress={() => navigation.goBack()}>
                        <Text style={{color:'#49b8fe'}}>Posiadasz już konto? Zaloguj się!</Text>
                </TouchableOpacity>      
            </View>
        );
};


SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 20,
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
        backgroundColor: '#49b8fe',
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
});

export default SignUpScreen;
