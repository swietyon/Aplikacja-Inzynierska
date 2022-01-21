import React from 'react';
import { useState , useEffect} from 'react';
import { Text, View , FlatList, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import ProgressComponent from '../components/ProgressComponent';


const myEXCScreen = ( { route, navigation } ) => {
    const s = require('../components/Styles'); 
    const data = [
        { diseases_Id:1, title: 'Ćwiczenie 1', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '1', dsc: "akdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdakdskmlfnklsdnofmdsaofmofdafasdsadsdmfosadofmdosafmioadsifoiimsadofodsifosdoafsdofodsifosdoafsd" },
        { diseases_Id:2, title: 'mp2', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '2', dsc: "akdskmlfsnklsdnofmdsaofmosdmfosadofmdosafmioadsifoiimsadofodsifosdoafsd"  },
        { diseases_Id:3, title: 'mp3', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '3', dsc: "akdskmlfnklsdnofmdsaofmosdmfosadofmdosaffadfsaodoijwjdoqwjdojwqiomioadsifoiimsadofodsifosdoafsd"  }, 
        { diseases_Id:4, title: 'mp4', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '4', dsc: "akdskmlfnklsdnofmdsaofmosdmfosadofmdosafmioadsifoiimsadofodsifosdoafsd"  },
        { diseases_Id:5, title: 'mp5', imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '5' },
        { diseases_Id:6, title: 'mp6', imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '6' }]
    const [myEXC, setMyEXC] = useState([]);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const {title, icon, imgLink, key, excercises} = route.params;
    const [number, setNumber] = useState();
    useEffect(() => {
      setMyEXC(data);
      setNumber(1);
      console.log(excercises);
    }, []);
    
        return (
            <>
            <LinearGradient
                colors={['white','#154c79' ]}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View style={{top:10, paddingBottom:130}}>
                <FlatList
                contentContainerStyle={{
                    alignItems: 'center'
                }}
                data={excercises}
                renderItem={({item}) => ( (item.key == number) ? (
                    <View>
                        <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.excTitle}</Text>
                        </View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={item.videoLink}
                            posterSource={{ uri: 'https://res.cloudinary.com/swietyon/image/upload/v1642711943/groin_vosbcl.png' }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <ScrollView style={styles.bottomInfo}>
                            <Text style={styles.description}>{item.excDsc}</Text>
                        </ScrollView>
                        <ProgressComponent title={title}/>
                    </View>
                ): null
                )}/>              
            </View>
    
        {/* Buttons */}
            <View style={s.itemsInline}>
                <View style={s.previousButton}>
                    <TouchableOpacity title="Go back" onPress={() => {(number > 1) ? setNumber(number-1): null}}>    
                        <MaterialCommunityIcons style={s.arrows} name='chevron-left'/>    
                    </TouchableOpacity>
                </View>
                <View style={s.nextButton}>
                    <TouchableOpacity title="Go back" onPress={() => {(number < 3) ? setNumber(number+1): null}}> 
                        <MaterialCommunityIcons style={s.arrows} name='chevron-right'/>
                    </TouchableOpacity>
                </View>
             </View>
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
        width:315,     
        height:200,

    },
    titleContainer: {
        backgroundColor:"#fff",
        padding:3,
        height:60,
        width:315,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title: {
        color: '#154c79',
        fontSize:19,
        alignSelf:"center",
        textAlign:'center',
        padding:3,
        fontWeight:"bold"
    },
    bottomInfo: {
        height:180,
        width:315,
        backgroundColor:"#154c79",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    description: {
        color:"#fff",
        fontSize:16,
        backgroundColor:"#154c79",
        textAlign:"center",
        margin:8
    }
});

export default myEXCScreen;

//tokeny: bff2938f-5bc0-4c01-89be-2d959345d752
// ycZ0kFhJcYSZOGnZzqyPJI9H9P22yF0M4ct6DrabV9HsJQ1RGhs0MnHfhYNbyXTijLqjppUlYsr