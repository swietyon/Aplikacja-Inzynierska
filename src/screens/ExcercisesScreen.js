import React from 'react';
import { useState } from 'react';
import { Text, View, Button , FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { Icon } from 'react-native-elements';

// const anotherExcercise = () => {
//     let counter = 0;
// }

// const lastExcercise = () => {
//     let counter = 0;
// }

const ExcercisesScreen = ( { route, navigation } ) => {
    const [excercises, setExcercises] = useState([
        { diseases_Id:1, imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '1' },
        { diseases_Id:2, imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '2' },
        { diseases_Id:3, imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '3' }, 
        { diseases_Id:4, imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '4' },
        { diseases_Id:5, imgLink: {uri: 'https://res.cloudinary.com/swietyon/video/upload/v1640640049/video-1601982375_mp8g82.mp4'}, key: '5' },
        { diseases_Id:6, imgLink: {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}, key: '6' }
    ]);

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const s = require('../components/Styles');
    const {title, icon, imgLink, key} = route.params;
        return (
            <>
            <View style={styles.container}>
                <FlatList
                horizontal={true}
                contentContainerStyle={{
                    paddingBottom:10,
                    alignItems: 'center',
                    backgroundColor:'#fff'
                }}
                data={excercises}
                renderItem={({item}) => (
                    <View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={item.imgLink}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <TouchableOpacity
                        title={status.isPlaying ? 'Pause' : 'Play'}
                        onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }><Text>{(JSON.stringify(item.diseases_Id))}</Text>
                        </TouchableOpacity>
                    </View>
                )}/>
                        <Text style={s.textStyle2}> {(JSON.stringify(title)).replace(/"([^"]+)":/g, '$1:')} </Text>
            </View>

            <View style={s.itemsInline}>
                    <View style={s.backButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => navigation.goBack()}>
                        <Icon style={s.textStyle2} name='arrow-back'color='#fff'fontSize='221'/>
                        </TouchableOpacity>
                    </View>
                    <View style={s.nextButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => navigation.goBack()}>
                            <Icon style={s.textStyle2} name='arrow-back'color='#fff'fontSize='221'/>
                        </TouchableOpacity>
                    </View>
            </View>

                {/* <Text style={{fontSize:30}}>Title: {JSON.stringify(title)}</Text>
                <Text style={{fontSize:30}}>Title: {JSON.stringify(key)}</Text> */}
            
            </>
        );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        top:'1%',
        marginBottom:"35%",
    },
    video: {
        backgroundColor:"#000",
        width:310,     
        height:200,
        borderRadius:20,
        marginEnd:20
    }
});

export default ExcercisesScreen;

//tokeny: bff2938f-5bc0-4c01-89be-2d959345d752
// ycZ0kFhJcYSZOGnZzqyPJI9H9P22yF0M4ct6DrabV9HsJQ1RGhs0MnHfhYNbyXTijLqjppUlYsr