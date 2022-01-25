import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { makeStyles } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

const ProgressScreen = () => {
    const s = require('../components/Styles');
    const data = ([
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 0, grade: 0, excNumb: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 1, grade: 3, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 2, grade: 2, excNumb: 2},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 3, grade: 10, excNumb: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 4, grade: 10, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 5, grade: 10, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 6, grade: 3, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 7, grade: 5, excNumb: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 8, grade: 3, excNumb: 3},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 9, grade: 3, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 10, grade: 1, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 11, grade: 1, excNumb: 2},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 12, grade: 5, excNumb: 1},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 13, grade: 10, excNumb: 2},
        { date: '2022-11-11', description: "Rehabilitacja pachwiny", key: 14, grade: 10, excNumb: 3}
    ]);

    const [color,setColor] = useState("#154c79");
    
    const [rules, setRules] = useState([]);
    const [pressMe, setPressMe] = useState("Click");


    function changeColor(avg) {
        let h = Math.round(avg);
        console.log(h);
        setPressMe(avg);
        switch(h) {
            case 1:
                return setColor("#660000");
            case 2:
                return setColor("#660033");
            case 3:
                return setColor("#4d0066");
            case 4:
                return setColor("#000066");
            case 5:
                return setColor("#003366");
            case 6:
                return setColor("#006666");
            case 7:
                return setColor("#006666");
            case 8:
                return setColor("#006633");
            case 9:
                return setColor("#00661a");
            case 10:
                return setColor("#006600");
            default:
                return setColor("#154c79");
        }
    }    
    
    const [avg, setAvg] = useState();
    useEffect(() => {
        setRules(data); 
        if(data.length !=0){    
            let i = 0;
            let sum = 0;
            do {
                sum = sum + data[i].grade;
                i = i + 1;
            }
            while (i < data.length);
            const avarage = (sum/ data.length).toFixed(2);
            setAvg(avarage);
        }
        else{
            setAvg(0);
        }
    }, []);    

    return (
        <>
        <View style={{backgroundColor:"#fff"}}>
           <View style={styles.container}>
               {(data.length == 0) 
               ? 
               <>
                <Text style={{textAlign:"center", marginTop:50, color:"#154c79", fontSize:25}}>
                    Nie masz jeszcze żadnych postępów
                    </Text>
                <Image 
                            source={require('../img/sad.png')} 
                            style={{width: 150, height: 80, marginTop: 20,alignSelf:"center"}} 
                />
               </>
               
               :
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
                                    <Text style={{
                                        fontSize:25,
                                        color: "#154c79",
                                        fontWeight:"bold",
                                        }}>
                                            {item.grade}
                                    </Text> 
                                </View>
                                <Text style={[styles.textStyle,{textAlign:"center", margin:0, fontSize:14, textTransform:'none'}]}>{item.description}, ćw: {item.excNumb}</Text>
                            </View>                        
                        </View> 
                    )
                }
                />
               } 
            </View>
            <View style={{
                backgroundColor:color,
                height:"100%",
                borderTopLeftRadius:30,
                borderTopRightRadius:30}}>
                <Text style={styles.dateResult}>Twoja średnia skala wynosi</Text>
                <TouchableOpacity onPress={() => changeColor(avg)}>
                    <View style={styles.resultElement}>   
                        <Text style={[styles.textResult, {color:color}]}>{pressMe}</Text> 
                    </View>
                </TouchableOpacity>
                <Text style={styles.dateResult}>Dotychczasowa ilość postępów: {data.length}</Text>
            </View> 

        </View>
        </>       
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:-15,
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
        backgroundColor:"#173954",
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
        fontSize:19,
        marginTop:20,
        marginBottom: 15
    }
  })
  

export default ProgressScreen;