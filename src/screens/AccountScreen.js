import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Video } from 'expo-av';

const AccountScreen = () => {
    const s = require('../components/Styles'); 
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
      <ScrollView>
        <View>
          <Text style={s.textStyle2}> 1 schorzenie </Text>
        <Video
          ref={video}
          style={s.video}
          source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',}}
          isMuted={false}
          rate={1.0}
          volume={1.0}
          useNativeControls
          rota
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        </View>
      </ScrollView>
    );
};
const styles = StyleSheet.create({
    
});

export default AccountScreen;


