import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HowToTrainScreen = () => {
  const s = require('../components/Styles'); 
  return (
    <>  
      <LinearGradient
          colors={['white','#154c79']}
          style={s.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
      >
          <Text style={{fontSize:30}}> How to train screen </Text>
      </LinearGradient>
    </>
    );
};



const styles = StyleSheet.create({
  
});

export default HowToTrainScreen;