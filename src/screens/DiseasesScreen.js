import React from 'react';
import { Image, StyleSheet, ScrollView, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import ExcercisesScreen from './ExcercisesScreen';

const DiseasesScreen = ( { navigation } ) => {
        return (  
                <ScrollView contentContainerStyle={{
                    paddingBottom:60,
                    alignItems: 'center',
                    backgroundColor:'#fff'
                }}>    
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/knee.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/groin.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/shoulder.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/lowerback.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/knee.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.Element}>
                            <View style={styles.TopPart}>
                                <Text style={styles.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={styles.BottomPart}>
                                    <Image 
                                    style={styles.img} 
                                    source={require('../img/groin.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>

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
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf:'center'
    },
    touchableOpacityStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#154c79',
        margin:15,
        borderRadius: 10,
        borderColor: '#fff',
    },
    textStyle: {
        margin:15,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    textStyle2: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:5
    },
    Element: {
        width: '90%',
        height: 150,
        backgroundColor: '#f1f1f1',
        marginTop:15,
        borderRadius: 10,
    },
    TopPart: {
        height:40,
        backgroundColor: '#154c79',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default DiseasesScreen;

// api:
// key: 8ef084386a4d4714aaafc35db3cf2951
// secret: 7286b54e1b7540a4b32e30476616f764