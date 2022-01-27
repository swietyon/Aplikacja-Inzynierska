import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

import { Context as AuthContext } from '../context/AuthContext';


const ProgressComponent = ( props ) => {
    const s = require('../components/Styles'); 
    const {state, addProgress, clearErrorMessage} =  useContext(AuthContext);

    const [grade, setGrade] = useState(5)
    const [sliding, setSliding] = useState("Inactive");
    const { excNumb, title, userId} = props;
    let separator = '-';
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = (`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`);

    return (
        <View style={styles.container}>
            <View style = {styles.resultStyle}>
                <Text style ={styles.circleValue}> {grade} </Text>
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
                onValueChange={value => setGrade(parseInt(value))}
                onSlidingStart={() => setSliding('Sliding')}
                onSlidingComplete={() => setSliding("Done")}
            />
            {(sliding == "Inactive" || sliding == "Sliding") ? 
                <Text style={styles.title}>Określ skalę trudności za pomocą suwaka</Text>
                :
                (state.errorMessage ? (
                    <Text style={[s.Message]}>{state.errorMessage}</Text>
                ) :                
                <TouchableOpacity onPress={ () => {
                    addProgress({userId, title, excNumb, currentDate, grade});
                    }}>
                    <View style={[styles.gradeStyle]}>
                        <Text style={styles.onSaveTitle}>Zapisz ocenę</Text>
                    </View>
                </TouchableOpacity>)
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
    resultStyle: { 
        height:60,
        width:60,
        backgroundColor:"#fff",
        justifyContent:"center",
        borderRadius:100,
    },
    onSaveTitle: {
        fontSize:17,
        color:"#fff",
        padding:5,
        textAlign:"center",
        color:"green",
        fontWeight:"bold",
    },
    gradeStyle: {
        width:150,
        borderRadius:10,
        opacity:0.9,
        marginBottom:15
    }
})
export default ProgressComponent;


