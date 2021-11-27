import React from 'react';
import { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';


const SignUpScreen = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');


    const onSubmit = () => {
        if (email.length < 8) {
            return <Text>Email contains less than 8 digits</Text>;
        }  //Do your stuff if condition meet.
    }


        return (
            <View style={styles.container}>
                <Spacer>
                <Input 
                    keyboardType='email-address'
                    label='Adres e-mail' 
                    value={email} 
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                </Spacer>
                <Spacer>
                <Input
                    label='Imię' 
                    value={name} 
                    onChangeText={setName}
                />
                </Spacer>
                <Spacer>
                <Input
                    label='Data urodzenia' 
                    value={birth} 
                    onChangeText={setBirth}
                />
                </Spacer>
                <Spacer>
                <Input
                    secureTextEntry
                    label='Hasło' 
                    value={password} 
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                </Spacer>
                <Spacer>
                <Input
                    secureTextEntry
                    label='Powtórz hasło' 
                    value={confrimPassword} 
                    onChangeText={setConfrimPassword}
                    defaultValue={confrimPassword}
                />
                </Spacer>
                <Spacer></Spacer>
                <Button title="Zaloguj się"
                onPress={() => navigation.navigate('SignIn')}
                />
                
                <Button title="MainFlow"
                onPress={() => navigation.navigate('mainFlow')}
                />
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
        marginTop: 30,
        margin: 15,
        flex: 1,
        justifyContent: 'center'
    },
    Input: {

    }
});

export default SignUpScreen;