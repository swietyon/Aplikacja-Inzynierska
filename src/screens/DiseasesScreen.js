import React from 'react';
import { Image, StyleSheet, ScrollView, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';

const DiseasesScreen = ( { navigation } ) => {
    const s = require('../components/Styles');
        return (  
                <ScrollView contentContainerStyle={{
                    paddingBottom:60,
                    alignItems: 'center',
                    backgroundColor:'#fff'
                }}>    
                    <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={require('../img/knee.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={require('../img/groin.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={require('../img/shoulder.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={require('../img/lowerback.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}> 1 schorzenie </Text>
                                <TouchableOpacity>
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={require('../img/groin.png')} 
                                    />
                                </View>
                                </TouchableOpacity>
                            </View>
                    </View>

                <TouchableOpacity
                    style={s.touchableOpacityStyle}
                    title="Przejdź do ćwiczeń" 
                    onPress={() => navigation.navigate("Excercises")}>
                    <Text style={s.textStyle}>Przejdź do ćwiczeń</Text>
                </TouchableOpacity> 
                </ScrollView>
        );
};

const styles = StyleSheet.create({
    
});

export default DiseasesScreen;

// api:
// key: 8ef084386a4d4714aaafc35db3cf2951
// secret: 7286b54e1b7540a4b32e30476616f764