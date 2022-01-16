import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';



const RulesScreen = ({navigation}) => {  
  const s = require('../components/Styles');
  const data = ([
    { title: 'Regulamin ćwiczącego', icon: 5 , imgLink: require('../img/knee.png'), key: '1' },
    { title: 'Ćwiczenia z MedApp', icon: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", imgLink: require('../img/groin.png'), key: '2' },
    { title: 'Rozgrzewka', icon: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", imgLink: require('../img/shoulder.png'), key: '3' }, 
    { title: 'Zasada4', icon: 3, imgLink: require('../img/lowerback.png'), key: '4' },
    { title: 'Zasada5', icon: 1, imgLink: require('../img/knee.png'), key: '5' },
    { title: 'Zasada3', icon: 9, imgLink: require('../img/shoulder.png'), key: '6' }, 
    { title: 'Zasada4', icon: 3, imgLink: require('../img/lowerback.png'), key: '7' },
    { title: 'Zasada5', icon: 1, imgLink: require('../img/knee.png'), key: '8' },
    { title: 'Zasada3', icon: 9, imgLink: require('../img/shoulder.png'), key: '9' }, 
    { title: 'Zasada4', icon: 3, imgLink: require('../img/lowerback.png'), key: '10' },
    { title: 'Zasada5', icon: 1, imgLink: require('../img/knee.png'), key: '11' },
    { title: 'Twórcy', icon: 9, imgLink: require('../img/knee.png'), key: '12' }
  ])

  const [rules, setRules] = useState([]);

  useEffect(() => {
    setRules(data);
  }, []);

  const [i,setI] = useState('0');
  const [helper, setHelper] = useState('0');

  const myfunction = (item) => {
    if (i == '0'){
      setHelper(item);
      setI('1');
      return(i);
    }
    else if (item != helper) {
      setI('1');
      return(i);
    }
    else{
      setHelper(item);
      setI('0');
      return(i);
    }
  }
      return (
        <>
        <LinearGradient
                colors={['white','#154c79']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
        >
          <FlatList 
            style={styles.container}
            data={rules}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {myfunction(item.key)}}>
                <View style={styles.elements}>
                  <View style={styles.element}>
                    <Text style={styles.textStyle}>{item.title}</Text>
                  </View>
                    <View>
                      {((i == '1') && item.key == helper) ?
                      <Text style={styles.smallerText}>{item.icon}</Text>:
                      null}
                    </View>
     
                </View>
              </TouchableOpacity>
            )
          }
          /> 
          </LinearGradient>
          </>       
)};

const styles = StyleSheet.create({
  container: {
    paddingBottom:40
  },
  elements: {
    width:"95%",
    marginLeft:10,
  },
  element: {
    borderBottomWidth:1,
    opacity:0.9,
    borderBottomColor:'#154c79',
  },
  textStyle: {
    margin:25,
    fontSize:20,
    color:'#154c79',
    textTransform: 'uppercase',
  },
  smallerText: {
    fontSize: 18,
    borderBottomColor: '#154c79',
    borderBottomWidth: 1,
    color: '#082c66'
  }
})

export default RulesScreen;


