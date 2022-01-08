import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//lecimy z propsami tutaj i się nauczymy ich na nowo :)

const RulesScreen = ({navigation}) => {
  const s = require('../components/Styles');
      return (
        <View style={styles.container}>
          <View style={styles.TopPart}>
            <Text style={styles.textStyle}>Zasady ćwiczenia</Text>
          </View>
          <View style={styles.bottomPart}>
            <Text style={styles.textStyle2}>
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
              Jesteśmy zawsze tam, gdzie nasza wisła gra
            </Text>                   
          </View>                               
        </View>
        );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop:8,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textStyle2: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
      alignSelf: 'center'
  },
  TopPart: {
      height:40,
      backgroundColor: '#154c79',
      borderTopEndRadius: 10,
      borderTopLeftRadius: 10
  },
  container: {
    margin:20,
    backgroundColor:'green'
  },
  bottomPart: {

  }
})

export default RulesScreen;


