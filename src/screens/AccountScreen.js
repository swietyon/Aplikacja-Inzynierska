import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignOutScreen from '../components/SignOutScreen';
import { LinearGradient } from 'expo-linear-gradient';

const AccountScreen = (params) => {
  const email = params.route.params.params.email;
  const birth = params.route.params.params.birth.substr(0,10);
  const username = params.route.params.params.username;
  const password = params.route.params.params.gender;
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
              <Text style={styles.textStyle}>{username}</Text>
              <Text style={styles.textStyle}>{email}</Text>
              <Text style={styles.textStyle}>{birth}</Text>
              <Text style={styles.textStyle}>{password}</Text>
            </View>
            <SignOutScreen/>
          </LinearGradient>
          <Image 
            style={styles.image} 
            source={require("../img/IMAG0332.jpg")} 
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
      marginTop:30,
      width: 140,
      height: 140,
      alignSelf: 'center',
      borderRadius: 70,
      borderWidth: 2,
      borderColor: '#154c79'
    },
    botContainer: {
      marginTop: 120,
      height:10,
    },
    element: {
      margin:20,
      height:40,
      backgroundColor:'#fff',
      borderRadius:15
    },
    textStyle:{
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign:'center',
      marginTop:8,
      borderBottomWidth:0.5,
      padding:7,
      width:300,
      height:40,
      color:"#154c79",
      borderColor: "#154c79",
      backgroundColor:"#fefefe",
      borderRadius:8
    },
});

export default AccountScreen;


