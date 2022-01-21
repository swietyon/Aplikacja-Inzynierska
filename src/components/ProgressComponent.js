import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

const ProgressComponent = () => {
    const [range, setRange] = useState(5)
    const [sliding, setSliding] = useState("Inactive");
    return (
        <View style={styles.container}>
            <View style = {styles.rangeStyle}>
                <Text style ={styles.circleValue}> {range} </Text>
            </View>
            <Slider
                style={{width:280, height:50}}
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
                    <View style={styles.gradeStyle}>
                        <Text style={styles.onSaveTitle}>Zapisz ocenę</Text>
                    </View>
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
        textAlign:"center",
        opacity:0.7,
        marginBottom:15
    },
    circleValue: {
        fontSize: 28,
        textAlign:"center",
        color:"#154c79",
        justifyContent:"center",
        fontWeight:"bold"
    },
    rangeStyle: { 
        height:75,
        width:75,
        backgroundColor:"#fff",
        justifyContent:"center",
        borderRadius:100,
    },
    onSaveTitle: {
        fontSize:17,
        color:"#fff",
        padding:5,
        textAlign:"center",
        fontWeight:"bold",
    },
    gradeStyle: {
        width:150,
        backgroundColor:"green",
        borderRadius:10,
        opacity:0.9,
        marginBottom:15
    }
})
export default ProgressComponent;


