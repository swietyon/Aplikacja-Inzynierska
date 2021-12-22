import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ( {navigation} ) => {
    const {state, signup} =  useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');

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
                    style={styles.inputStyle}
                />
                <TextInput
                    placeholder='Imię' 
                    value={username} 
                    onChangeText={setUsername}
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
                    value={gender} 
                    onChangeText={setGender}
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
                {state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                 ) : null}
                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={() => 
                        // {
                        // if (
                            signup({ email, username, birth, gender, password }) 
                    //     == true){
                    //         navigation.navigate("DrawerScreen");
                    //     }
                    //     else {
                    //         console.log(signup({ email, username, birth, gender, password }));
                    //         console.log("Nie udało się zalogować panie kolego");
                    //     }
                    // }}
                    }
                >
                        <Text style={styles.textStyle}>Zarejestruj się</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Text style={{color:'#154c79'}}>Posiadasz już konto? Zaloguj się!</Text>
                </TouchableOpacity>  
                </View>    
            </ScrollView>
        );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize:16,
        color:'red'
    },
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
});

export default SignUpScreen;
