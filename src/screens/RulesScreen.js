import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Video } from 'expo-av';

const RulesScreen = () => {
    const s = require('../components/Styles'); 
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <ScrollView contentContainerStyle={{
        paddingBottom:60,
        alignItems: 'center',
        backgroundColor:'#fff'
       }}>    
        <View style={styles.Element}>
                <View style={styles.TopPart}>
                    <Text style={styles.textStyle2}> 1 schorzenie </Text>
                    
                    <Video
                    ref={video}
                    style={styles.video}
                    source={{
                      uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
                    <TouchableOpacity
                     title={status.isPlaying ? 'Pause' : 'Play'}
                     onPress={() =>
                       status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                     }><Text>cos tam</Text></TouchableOpacity>
                </View>
        </View>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    video: {
        backgroundColor:"yellow",
        width:"100%",
        height:500
    },
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
      marginTop:5,
      marginBottom:13
  },
  Element: {
      width: '90%',
      height: 200,
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
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
  video: {
    height:140,
    width:"100%",
  }
});

export default RulesScreen;


