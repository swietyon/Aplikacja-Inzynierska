import React from 'react';
import { useState , useEffect, useContext} from 'react';
import { Text, View , FlatList, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import ProgressComponent from '../components/ProgressComponent';


const ExcercisesScreen = ( { route, navigation } ) => {
    const s = require('../components/Styles'); 
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const {title, excercises} = route.params.item;
    const [number, setNumber] = useState();
    
    const [id, setId] = useState();
    useEffect(() => {
      setNumber(1);
      setId(route.params.currentUserId.params);
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
                            <View style={{alignItems:"center"}}>
                                <Text style={styles.description}>{item.excDsc}</Text>
                            </View>
                        </ScrollView>
                        <ProgressComponent title={title} excNumb={number} userId={id}/>
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
        justifyContent: "center",
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
        justifyContent: 'center',
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

export default ExcercisesScreen;