import React from 'react';
import { Text, Button, View, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen = (params) => {
  console.log(params.route.params.params.email);
  const email = params.route.params.params.email;
  const birth = params.route.params.params.birth;
  const username = params.route.params.params.username;
  const password = params.route.params.params.password;
    const s = require('../components/Styles'); 
    return (
      <ScrollView>
        <View>
          <View style={styles.top}>
          </View>
          <View style={styles.bot}>
            <View style={styles.botContainer}>
              <Text style={styles.titleStyle}></Text>
              <View style={styles.element}>
                <TouchableOpacity>
                  <Text style={styles.textStyle}>{email}</Text>
                  <Text style={styles.textStyle}>{username}</Text>
                  <Text style={styles.textStyle}>{birth}</Text>
                  <Text style={styles.textStyle}>{password}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
      backgroundColor: '#154c79',
      height:700,
      opacity:0.9
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
      color: '#154c79',
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


