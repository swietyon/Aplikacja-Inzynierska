import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CurrentCoursesScreen = ( {navigation} ) => {
    const s = require('../components/Styles'); 
    const diseasesURL = "https://bbcb-5-173-33-44.ngrok.io/diseases";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(diseasesURL)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((error) => alert(error))
        .then(setLoading(false));
    }, []);
    
        return (
            <>  
            <LinearGradient
                colors={['white','#154c79']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >   
            {isLoading 
            ? 
            <ActivityIndicator/> 
            :
            <>
            <FlatList 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom:"20%",
                alignItems: 'center',
            }}
            data={data}
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
            </>    
            }
            </LinearGradient>
            </>
        );
};

export default CurrentCoursesScreen;