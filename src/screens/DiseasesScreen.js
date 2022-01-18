import React from 'react';
import { useState, useEffect} from 'react';
import { Image, StyleSheet, View, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const DiseasesScreen = ( { navigation }) => {
    const s = require('../components/Styles');
    const data = ([
        { title: 'Wzmocnienie kolana', icon: 5 , imgLink: require('../img/knee.png'), key: '1' },
        { title: 'Wzmocnienie pachwiny', icon: 3, imgLink: require('../img/groin.png'), key: '2' },
        { title: 'Wzmocnienie ramienia', icon: 9, imgLink: require('../img/shoulder.png'), key: '3' }, 
        { title: 'Wzmocnienie dolnej partii pleców', icon: 3, imgLink: require('../img/lowerback.png'), key: '4' },
        { title: 'Wzmocnienie górnej partii pleców', icon: 1, imgLink: require('../img/upperback.png'), key: '5' }
    ])

    const [rehabs, setRehabs] = useState([]);
    
    useEffect(() => {
        setRehabs(data);
        console.log("Zalogowany");
    }, []);
        return (  
            <>  
            <LinearGradient
                colors={['white','#154c79']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom:"20%",
                    alignItems: 'center',
                }}
                data={rehabs}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate("Excercises", item)}}>    
                        <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}>{item.title}</Text> 
                                    <Image 
                                    style={s.img} 
                                    source={item.imgLink} 
                                    />
                            </View>
                        </View>  
                    </TouchableOpacity>    
                )}        
                > 
                </FlatList>
                </LinearGradient>
                </> 
        );
};

const styles = StyleSheet.create({
    
});

export default DiseasesScreen;

// api:
// key: 8ef084386a4d4714aaafc35db3cf2951
// secret: 7286b54e1b7540a4b32e30476616f764