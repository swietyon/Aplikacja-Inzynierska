import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { StyleSheet, View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import MaskInput from 'react-native-mask-input';
import ResolveAuth from '../components/ResolveAuth';


const SignUpScreen = ( {navigation} ) => {
    const s = require('../components/Styles');
    const {state, signup, clearErrorMessage, tryLocalSignin} =  useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [colorMan,setColorMan] = useState('#154c79');
    const [colorWoman,setColorWoman] = useState('#154c79');

    let reg=/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
    const validationEmail = () => {
        if (state.errorMessage && ( reg.test(email) === false )) {
            return (<Text style={s.errorMessage}>Email powinien zawierać poprawny format</Text>)
        } 
        else {
            return true;
        }
    }
    const validationPassword = () => {
        if (state.errorMessage && (password.trim().length < 8)) {
            return(<Text style={s.errorMessage}>Hasło powinno zawierać 8 znaków</Text>)
        }
        else {
            return true;
        }
    }
    const validationConfrimPassword = () => {
        if (state.errorMessage && password != confrimPassword) {
            return(<Text style={s.errorMessage}>Hasła powinny się zgadzać</Text>)
        }
        else if (state.errorMessage && confrimPassword.trim().length == 0) {
            return(<Text style={s.errorMessage}>Pole powinno zostać wypełnione</Text>)
        }
        else {
            return true;
        }
    }

    const onSubmit = () => {
        if (validationEmail() && validationPassword() && validationConfrimPassword() === true){
            signup({ email, username, birth, gender, password });
        }     
    }

    const onSubmitMan = (gender) => {
        if (gender == 'woman') {
            setGender('man');
            setColorMan('green');
            setColorWoman('#154c79')
        }
        else {
            setColorMan('green');
            setGender('man');
            setColorMan('green');
            setColorWoman('#154c79')
        }
    }
    const onSubmitWoman = (gender) => {
        if (gender == 'man') {
            setGender('woman');
            setColorWoman('green');
            setColorMan('#154c79')
        }
        else {
            setColorWoman('green');
            setGender('woman');
            setColorWoman('green');
            setColorMan('#154c79')
        }
    }

        return (
        <>
            <LinearGradient
                colors={['#154c79', 'white']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <ScrollView  
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
                <ResolveAuth email={email} username={username} birth={birth} password={password} />
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../img/logo.png')} 
                        style={{width: 300, height: 120, marginBottom: 20}} 
                    />
                </View>

                <Text style={s.authTitlesStyle}>E-mail</Text>
                <TextInput 
                    keyboardType='email-address'
                    value={email} 
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    style={s.inputStyle}
                />
                {validationEmail()}

                <Text style={s.authTitlesStyle}>Imię</Text>
                <TextInput
                    value={username} 
                    onChangeText={setUsername}
                    style={s.inputStyle}
                />

                <Text style={s.authTitlesStyle}>Data urodzenia:</Text>
                <MaskInput
                    type={'datetime'}
                    value={birth}
                    onChangeText={(masked) => {
                        setBirth(masked); 
                      }}
                    style={s.inputStyle}
                    mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                />

                <Text style={s.authTitlesStyle}>Hasło:</Text>
                <TextInput
                    secureTextEntry
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={s.inputStyle}
                />
                {validationPassword()}

                <Text style={s.authTitlesStyle}>Powtórz hasło:</Text>
                <TextInput
                    secureTextEntry
                    value={confrimPassword} 
                    onChangeText={setConfrimPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={s.inputStyle}
                />
                {validationConfrimPassword()}

                {/* Button Man */}
                <View style={styles.itemsInline}>
                    <TouchableOpacity 
                    style={{ 
                        height: 45,
                        width: 130,
                        backgroundColor: '#fefefe',
                        margin:15,
                        borderRadius: 5,
                        alignSelf: 'center'
                    }} title="Go back" 
                    onPress={() => {onSubmitMan(gender)}}
                    >
                    <Text style={{
                        fontSize: 17,
                        color: colorMan,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop:10
                    }}
                    >Mężczyzna</Text>
                    </TouchableOpacity>

                    {/* Button Woman */}
                    <TouchableOpacity 
                    style={{ 
                        height: 45,
                        width: 130,
                        backgroundColor: '#fefefe',
                        margin:15,
                        borderRadius: 5,
                        alignSelf: 'center'
                    }} 
                    title="Go back" 
                    onPress={() => {onSubmitWoman(gender)}}
                    >
                    <Text style={{
                        fontSize: 17,
                        color: colorWoman,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        marginTop:10
                    }}
                    >Kobieta</Text>
                    </TouchableOpacity>
                </View>

                {state.errorMessage && gender == '' ? (
                    <Text style={s.errorMessage}>Zaznacz płeć</Text>
                    ) : null}

                {state.errorMessage ? (
                    <Text style={s.errorMessage}>{state.errorMessage}</Text>
                    ) : null}
                    
                <TouchableOpacity style={s.touchableOpacityStyle} onPress={() => onSubmit()}>
                        <Text style={s.textStyle}>Zarejestruj się</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                        clearErrorMessage();
                        }}
                >
                        <Text style={{color:'#154c79', fontSize:17, textAlign:'center'}}>Posiadasz już konto? Zaloguj się!</Text>
                </TouchableOpacity>    
            </ScrollView>
            </LinearGradient>
            </>
        );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    itemsInline:{
        alignSelf:'center',
        flexDirection: 'row',
        margin:-8
    },
    iconStyle:{
        textAlign: 'center',
        marginTop:10
    },
    containerRadio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    itemsInline:{
        alignSelf:'center',
        flexDirection: 'row',
    }
});

export default SignUpScreen;
