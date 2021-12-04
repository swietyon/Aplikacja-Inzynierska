import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import ExcercisesScreen from './ExcercisesScreen';

const DiseasesScreen = ( { navigation } ) => {
        return (  
                <ScrollView contentContainerStyle={{
                    paddingBottom:60,
                    alignItems: 'center',
                }}>
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')} 
                />
                <Text> Pierwsze schorzenie </Text>
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')} 
                />
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')} 
                />
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')}  
                />
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')} 
                />
                <Image 
                style={styles.img} 
                source={require('../img/knee.png')} 
                />
                <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    title="Przejdź do ćwiczeń" 
                    onPress={() => navigation.navigate(ExcercisesScreen)}>
                    <Text style={styles.textStyle}>Przejdź do ćwiczeń</Text>
                </TouchableOpacity> 
                </ScrollView>
        );
};

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        marginTop: 10,
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

export default DiseasesScreen;

// api:
// key: 8ef084386a4d4714aaafc35db3cf2951
// secret: 7286b54e1b7540a4b32e30476616f764