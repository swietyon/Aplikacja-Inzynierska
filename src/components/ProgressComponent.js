import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import { Icon } from 'react-native-vector-icons';

const ProgressComponent = (props) => {
    const s = require('../components/Styles'); 
    const [range, setRange] = useState(5)
    const [sliding, setSliding] = useState("Inactive");
    return (
        <View style={styles.container}>
            
            <Text style ={styles.circleValue}> {range} </Text>

            <Slider
                style={{width:300, height:50}}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor='#154c79'
                maximumTrackTintColor='#fff'
                thumbTintColor='#fff'
                value={5}
                number={1}
                onValueChange={value => setRange(parseInt(value))}
                onSlidingStart={() => setSliding('Sliding')}
                onSlidingComplete={() => setSliding("Done")}
            />
            {(sliding == "Inactive" || sliding == "Sliding") ? 
                <Text style={styles.title}>Określ ból za pomocą suwaka</Text>
                :
                <TouchableOpacity>
                    <Text style={styles.onSaveTitle}>Zapisz ocenę</Text>
                </TouchableOpacity>
            }  
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize:17,
        color:"#fff",
        padding:10,
        textAlign:"center",
        opacity:0.7
    },
    circleValue: {
        height:75,
        width:75,
        fontSize: 28,
        textAlign:"center",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        color:"#154c79",
        padding:20,
        borderRadius:100,
        fontWeight:"bold"
    },
    onSaveTitle: {
        fontSize:17,
        color:"#fff",
        backgroundColor:"green",
        padding:10,
        width:150,
        textAlign:"center",
        opacity:0.9,
        fontWeight:"bold",
        borderRadius:10
    }
})
export default ProgressComponent;


