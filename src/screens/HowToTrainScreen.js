import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HowToTrainScreen = () => {
    const s = require('../components/Styles');
    const data = ([
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '1', grade: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '2', grade: 2},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '3', grade: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '4', grade: 9},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '5', grade: 10},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '6', grade: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '7', grade: 5},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '8', grade: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '9', grade: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '10', grade: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '11', grade: 7},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '12', grade: 5},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '13', grade: 6},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: '14', grade: 10}
       
    ])
    const [rules, setRules] = useState([]);

    useEffect(() => {
        setRules(data);
    }, []);

    const [i,setI] = useState('0');
    const [helper, setHelper] = useState('0');
    const [arrowName, setArrowName] = useState('chevron-down');

    const myfunction = (item) => {
        if (i == '0'){
        setHelper(item);
        setI('1');
        setArrowName("chevron-up");
        return(i);
        }
        else if (item != helper) {
        setI('1');
        return(i);
        }
        else{
        setHelper(item);
        setArrowName("chevron-down");
        setI('0');
        return(i);
        }
    }

    const [color, setColor] = useState("#154c79");
    const [avarage, setAvarage] = useState(0);
    const changeColor = () => {
        switch(grade) {
            case 1:
                setColor("#660000");
            case 2:
                setColor("#660033");
            case 3:
                setColor("#4d0066");
            case 4:
                setColor("#000066");
            case 5:
                setColor("#003366");
            case 6:
                setColor("#006666");
            case 7:
                setColor("#006666");
            case 8:
                setColor("#006633");
            case 9:
                setColor("#00661a");
            case 10:
                setColor("#006600");
            default:
                setColor("#154c79");
        }
    }


    return (
        <>
        <View style={{backgroundColor:"#fff"}}>
           <View style={styles.container}>
                <FlatList 
                    data={rules}
                    renderItem={({item}) => (
                    
                        <View style={styles.elements}>
                            <View style={styles.element}>
                                    <Text style={styles.textStyle}>{item.date}</Text>
                                    <View style={{
                                        alignSelf:"flex-end",
                                        marginTop:-41,
                                        marginRight:15}}
                                    >
<                                   Text style={{
                                        fontSize:25,
                                        color:color,
                                        fontWeight:"bold",
                                    }}>{item.grade}</Text>
                                    </View>
                                <Text style={[styles.textStyle,{textAlign:"center", margin:0, textTransform:'none'}]}>{item.description}</Text>
                            </View>                        
                        </View> 
                    )
                }
                />
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.dateResult}>Twoja średnia skala wynosi</Text>
                <View style={styles.resultElement}>
                    <Text style={styles.textResult}>20</Text>
                </View>
            </View> 

        </View>
        </>       
    )
}

const styles = StyleSheet.create({
    container: {
        height:"35%"
    },
    elements: {
      width:"95%",
      marginLeft:10,
      borderRadius:15,
    },
    element: {
      borderBottomWidth:2,
      borderRightWidth:2,
      borderLeftWidth:2,
      opacity:0.9,
      borderBottomColor:'#154c79',
      borderRightColor:'#154c79',
      borderLeftColor:'#154c79',
      backgroundColor:"#fff",
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10
    },
    textStyle: {
      margin:15,
      fontSize:17,
      color:'#154c79',
      textTransform: 'uppercase',
      fontWeight:"bold",
    },
    smallerText: {
      fontSize: 18,
      color: '#fff',
      padding:8,
    },
    textContainer:{
      backgroundColor:'#154c79',
      borderRadius:10,
      paddingBottom:40
    },
    bottomContainer: {
        backgroundColor:"#0c2d48",
        height:"100%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    resultElement: {
        backgroundColor:"#fff",
        width:100,
        height:100,
        borderRadius:50,
        justifyContent: "center",
        alignSelf:"center",
    },
    textResult: {
        fontSize:35,
        fontWeight:"bold",
        textAlign:"center"
    },
    dateResult: {
        color: "#fff",
        textAlign: "center",
        fontSize:21,
        marginTop:30,
        marginBottom: 15
    }
  })
  

export default HowToTrainScreen;