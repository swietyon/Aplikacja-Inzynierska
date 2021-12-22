import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import ExcercisesScreen from './ExcercisesScreen';

const DiseasesScreen = ( { navigation } ) => {
    const s = require('../components/Styles');

    const [rehabs, setRehabs] = useState([
            { title: 'Rehabilitacja kolana', icon: 5 , imgLink: require('../img/knee.png'), key: '1' },
            { title: 'Rehabilitacja pachwiny', icon: 3, imgLink: require('../img/groin.png'), key: '2' },
            { title: 'Rehabilitacja ramienia', icon: 9, imgLink: require('../img/shoulder.png'), key: '3' }, 
            { title: 'Rehabilitacja dolnej partii pleców', icon: 3, imgLink: require('../img/lowerback.png'), key: '4' },
            { title: 'Rehabilitacja ramienia', icon: 9, imgLink: require('../img/knee.png'), key: '5' }, 
            { title: 'Rehabilitacja dolnej partii pleców', icon: 1, imgLink: require('../img/knee.png'), key: '6' }
        ]);

        return (  
                <FlatList 
                contentContainerStyle={{
                    paddingBottom:60,
                    alignItems: 'center',
                    backgroundColor:'#fff'
                }}
                data={rehabs}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Excercises", item)}>    
                        <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}>{item.title}</Text> 
                                <View style={s.BottomPart}>
                                    <Image 
                                    style={s.img} 
                                    source={item.imgLink} 
                                    />
                                </View>  
                            </View>
                        </View>  
                    </TouchableOpacity>    
                )}        
                >    
                </FlatList>
        );
};

const styles = StyleSheet.create({
    
});

export default DiseasesScreen;

// api:
// key: 8ef084386a4d4714aaafc35db3cf2951
// secret: 7286b54e1b7540a4b32e30476616f764