import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';

const Gradient = () => {
    const s = require('../components/Styles'); 
    return (
        <LinearGradient
                colors={['#154c79', 'white']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}/>
    );
};

export default Gradient;
