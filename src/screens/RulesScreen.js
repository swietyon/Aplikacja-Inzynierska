import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const RulesScreen = ({navigation}) => {  
  const s = require('../components/Styles');


  const rulesURL = "http://838e-185-174-115-176.ngrok.io/rules";
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch(rulesURL)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((error) => alert(error))
        .then(setLoading(false));
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


      return (
        <>
          <FlatList 
            style={styles.container}
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => (
              
                <View style={styles.elements}>
                  <TouchableOpacity onPress={() => {myfunction(item.key)}}>
                  <View style={styles.element}>
                    <MaterialCommunityIcons style={s.arrows} name="chevron-down"/>
                    <Text style={styles.textStyle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                  {((i == '1') && item.key == helper) ? 
                        <View style={styles.textContainer}>
                        <Text style={styles.smallerText}>{item.description}</Text>
                        <TouchableOpacity onPress={() => {myfunction(item.key)}}>
                          <MaterialCommunityIcons style={s.arrowWhite} name={arrowName}/>
                        </TouchableOpacity>
                        </View>
                      :
                      null}
                </View>
              
            )
          }
          /> 
          </>       
)};

const styles = StyleSheet.create({
  container: {
    paddingBottom:40
  },
  elements: {
    width:"95%",
    marginLeft:10,
    borderRadius:15
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
    borderBottomLeftRadius:10,
    flexDirection: "row",
  },
  textStyle: {
    margin:25,
    fontSize:20,
    color:'#154c79',
    textTransform: 'uppercase',
    fontWeight:"bold"
  },
  smallerText: {
    fontSize: 18,
    color: '#fff',
    padding:8,
  },
  textContainer:{
    backgroundColor:'#154c79',
    borderRadius:10
  }
})

export default RulesScreen;


