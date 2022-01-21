import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const RulesScreen = ({navigation}) => {  
  const s = require('../components/Styles');
  const data = ([
    { title: 'Zasada pierwsza', description: "Przed rozpoczęciem ćwiczeń należy skonsultować się z lekarzem w celu zdiagnozowania urazu oraz wyeliminowania przeciwwskazań zdrowotnych mogących mieć wpływ na zdrowie lub bezpieczeństwo ćwiczącego.", key: '1' },
    { title: 'Zasada druga', description: "Ćwiczenia powinny być wykonywane na terenie płaskim, stabilnym. Zadbaj aby podłoże było suche, a pomieszczenie dobrze oświetlone", key: '2' },
    { title: 'Zasada trzecia', description: "Na czas ćwiczeń zalecamy założyć wygodną odzież sportową, która nie będzie ograniczać ruchów ćwiczącego.", key: '3' }, 
    { title: 'Zasada czwarta', description: "Ćwiczenia powinny być wykonywane zgodnie z wizualizacją zamieszczoną na filmiku oraz zgodnie z opisem, który znajduje się pod danym video określającym ćwiczenia", key: '4' },
    { title: 'Zasada piąta', description: "Zestawy ćwiczeniowe powinny być dostosowane do wymaganej przez użytkownika skali trudności", key: '5' },
    { title: 'Zasada szósta', description: "Ilość serii oraz powtórzeń powinna być progresywna (rosnąco)", key: '6' }, 
    { title: 'Zasada siódma', description: "Podczas treningu ważna jest obserwacja sygnałów ciała. Niepoprawne lub nadmierne wykonywanie ćwiczeń mogą narazić zdrowie ćwiczącego. Jeżeli podczas ćwiczeń wystąpią niepowołane bóle mięśniowe, ucisiki w klatce piersiowej, nieregularna praca serca, zawroty głowy lub mdłości należy natychmiast zakończyć bieżące ćwiczenia.", key: '7' },
    { title: 'Zasada ósma', description: "Zaczynając wykonywanie danego ćwiczenia należy przyjąć postawę wyjściową według zaleceń widocznych na filmiku przedstawiającym dane ćwiczenie", key: '8' },
    { title: 'Rozgrzewka', description: "Przed przystąpieniem do ćwiczeń zalecane jest rozgrzanie danych partii mięśniowych", key: '9' },
    { title: 'Twórcy', description: "Maksymilian Świętoń", key: '10' }
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


      return (
        <>
          <FlatList 
            style={styles.container}
            data={rules}
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


