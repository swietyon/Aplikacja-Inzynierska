import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AccountScreen = (params) => {
  const email = params.route.params.params.email;
  const birth = params.route.params.params.birth.substr(0,10);
  const username = params.route.params.params.username;
  const gender = params.route.params.params.gender;
    const s = require('../components/Styles'); 
    return (
        <View>
          <View style={styles.top}>
            <Text style={styles.titleStyle}></Text>
          </View>
          <LinearGradient
                colors={['#154c79', 'black']}
                style={styles.bot}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View style={styles.botContainer}>
              <View style={[styles.textContainer]}>
                <Text style={styles.textStyle}>{username}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{email}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{birth}</Text>
              </View>
              <View style={styles.textContainer}>
                {
                  (gender == "man") 
                  ?
                  <Text style={styles.textStyle}>mężczyzna</Text>
                  :
                  <Text style={styles.textStyle}>kobieta</Text>
                }
              </View>
            </View>
          </LinearGradient>
          <Image 
            style={styles.image} 
            source={require("../img/account.png")} 
          />
          
        </View> 
    );
};
const styles = StyleSheet.create({
    top:{
      backgroundColor: "#fff",
      height: 100
    },
    bot: {
      height:"100%",
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    image: {
      position: 'absolute',
      backgroundColor:"#fff",
      marginTop:30,
      width: 140,
      height: 140,
      alignSelf: 'center',
      borderRadius: 70,
      borderWidth: 3,
      borderColor: '#154c79',

    },
    botContainer: {
      marginTop: 120,
      height:10,
    },
    element: {
      margin:20,
      height:40,
      borderRadius:15,
      borderColor:"#fff",
      borderBottomWidth:1,
      
    },
    textStyle:{
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
      color:"#fff",
      textAlign:'center',
      padding:6,
      borderBottomWidth:0.5,
      padding:7,
      
    },
    textContainer: {
      width:300,
      height:40,
      marginTop:10,
      borderColor: "#154c79",
      borderRadius:8,
      alignSelf: 'center',
      borderColor: "#fff",
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2
    }
});

export default AccountScreen;


