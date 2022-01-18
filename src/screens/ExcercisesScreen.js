import React from 'react';
import { useState , useEffect} from 'react';
import { Text, View, Button , FlatList, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import ProgressComponent from '../components/ProgressComponent';

// const anotherExcercise = () => {
//     let counter = 0;
// }

// const lastExcercise = () => {
//     let counter = 0;
// }


const ExcercisesScreen = ( { route, navigation } ) => {
    const s = require('../components/Styles'); 
    const data = [
        { diseases_Id:1, title: 'Ćwiczenie 1', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '1', dsc: "akdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsd" },
        { diseases_Id:2, title: 'mp2', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '2', dsc: "akdskmlfsnklsdnofmdsaofmosdmfosadofmdosafmioadsifoiimsadofodsifosdoafsd"  },
        { diseases_Id:3, title: 'mp3', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '3', dsc: "akdskmlfnklsdnofmdsaofmosdmfosadofmdosaffadfsaodoijwjdoqwjdojwqiomioadsifoiimsadofodsifosdoafsd"  }, 
        { diseases_Id:4, title: 'mp4', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '4', dsc: "akdskmlfnklsdnofmdsaofmosdmfosadofmdosafmioadsifoiimsadofodsifosdoafsd"  },
        { diseases_Id:5, title: 'mp5', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '5' },
        { diseases_Id:6, title: 'mp6', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '6' }]
    const [excercises, setExcercises] = useState([]);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const {title, icon, imgLink, key} = route.params;
    const [number, setNumber] = useState();
    useEffect(() => {
      setExcercises(data);
      setNumber(1);
      console.log(title);
    }, []);
    
        return (
            <>
            <LinearGradient
                colors={['white','#154c79' ]}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View style={{top:10}}>
                <FlatList
                contentContainerStyle={{
                    alignItems: 'center'
                }}
                data={excercises}
                renderItem={({item}) => ( (item.diseases_Id == number) ? (
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={item.imgLink}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <ScrollView style={styles.bottomInfo}>
                            <Text style={styles.description}>{item.dsc}</Text>
                        </ScrollView>
                        <ProgressComponent title={title}/>
                    </View>
                ): null
                )}/>              
            </View>
    
        {/* Buttons */}
            <View style={s.itemsInline}>
                    <View style={s.backButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => {(number > 1) ? setNumber(number-1): null}}>
                        <MaterialCommunityIcons style={s.arrows} name='chevron-left'color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <View style={s.nextButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => {(number < 3) ? setNumber(number+1): null}}>
                            <MaterialCommunityIcons style={s.arrows} name='chevron-right'color='#fff'/>
                        </TouchableOpacity>
                    </View>
            </View>

                {/* <Text style={{fontSize:30}}>Title: {JSON.stringify(title)}</Text>
                <Text style={{fontSize:30}}>Title: {JSON.stringify(key)}</Text> */}
            </LinearGradient>
            </>
        );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:400,
        alignItems: 'center',
        alignSelf:"center",
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
    video: {
        backgroundColor:"#000",
        alignSelf:"center",
        width:350,     
        height:200,

    },
    title: {
        color: '#154c79',
        fontSize:23,
        alignSelf:"center",
        textAlign:'center',
        backgroundColor:"#fff",
        padding:3,
        width:350,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        fontWeight:"bold"
    },
    bottomInfo: {
        height:180,
        width:350,
        backgroundColor:"#154c79",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    description: {
        color:"#fff",
        fontSize:16,
        backgroundColor:"#154c79",
        textAlign:"center",
        margin:5
    }
});

export default ExcercisesScreen;

//tokeny: bff2938f-5bc0-4c01-89be-2d959345d752
// ycZ0kFhJcYSZOGnZzqyPJI9H9P22yF0M4ct6DrabV9HsJQ1RGhs0MnHfhYNbyXTijLqjppUlYsr