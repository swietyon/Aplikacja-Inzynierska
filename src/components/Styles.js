'use strict';
import { StyleSheet, Text, Pressable } from 'react-native';

module.exports = StyleSheet.create({
    Container: {
       alignItems: 'center', //Centered vertically
       flex:1
    },
    Images: {
       justifyContent: 'center', //Centered horizontally
       alignItems: 'center', //Centered vertically
       flex:1
    },
    img: {
      width: 100,
      height: 100,
      marginTop: 10,
      alignSelf:'center'
  },
  touchableOpacityStyle: {
      width: 120,
      height: 50,
      backgroundColor: '#154c79',
      margin:15,
      borderRadius: 10,
      borderColor: '#fff',
  },
  textStyle: {
      margin:15,
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
  },
  textStyle2: {
      fontSize: 17,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop:10
  },
  Element: {
      width: 300,
      height: 150,
      backgroundColor: '#f1f1f1',
      marginTop:15,
      borderRadius: 10,
  },
  TopPart: {
      height:40,
      backgroundColor: '#154c79',
      borderTopEndRadius: 10,
      borderTopLeftRadius: 10
  },
  backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    video: {
       backgroundColor:"black",
       width:"100%",
       height:200
    },
    backButton:{
    },
    itemsInline:{
        position:'absolute',
        flexDirection: 'row',
        bottom:80,
    }
});