import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const AccountScreen = (params) => {
  const email = params.route.params.params.email;
  const birth = params.route.params.params.birth.substr(0,10);
  const username = params.route.params.params.username;
  const password = params.route.params.params.gender;
  console.log(birth);
    const s = require('../components/Styles'); 
    return (
      <ScrollView>
        <View>
          <View style={styles.top}>
          </View>
          <LinearGradient
                colors={['#154c79', 'white']}
                style={styles.bot}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View style={styles.botContainer}>
              <Text style={styles.titleStyle}></Text>
                  <Text style={styles.textStyle}>{username}</Text>
                  <Text style={styles.textStyle}>{email}</Text>
                  <Text style={styles.textStyle}>{birth}</Text>
                  <Text style={styles.textStyle}>{password}</Text>
            </View>
          </LinearGradient>
          <Image 
            style={styles.image} 
            source={require("../img/IMAG0332.jpg")} 
          />
          
        </View> 
      </ScrollView>
    );
};
const styles = StyleSheet.create({
    top:{
      backgroundColor: "#fff",
      height: 130
    },
    bot: {
      height:700,
    },
    image: {
      position: 'absolute',
      marginTop:60,
      width: 140,
      height: 140,
      alignSelf: 'center',
      borderRadius: 70,
      borderWidth: 3,
      borderColor: '#154c79'
    },
    botContainer: {
      marginTop: 90,
      height:500
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
      marginTop:6
    },
    titleStyle:{
      fontSize: 25,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: -15
    }

});

export default AccountScreen;


