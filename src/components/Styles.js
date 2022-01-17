'use strict';
import { StyleSheet, Text, Pressable } from 'react-native';

module.exports = StyleSheet.create({
    Container: {
       alignItems: 'center', //Centered vertically
       flex:1
    },
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        margin:-30,
        paddingTop:50,
        paddingBottom:50,
        paddingLeft:30,
        paddingRight:30,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
    // SPACESNIFFER
    errorMessage: {
        marginTop:-5,
        marginBottom:5,
        fontSize:14,
        color:'red',
        fontStyle:"italic",
        opacity:0.5,

        textAlign:"center"
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
     inputStyle: {
        marginBottom:10,
        backgroundColor:'#F0F0F0', 
        width: '100%',
        height:35, 
        borderColor:'white', 
        borderWidth: 2, 
        borderRadius:5,
        fontSize: 20,
        textAlign: 'center',
        borderColor: '#fff',
        borderWidth:0.5
    },
    touchableOpacityStyle: {
        height: 50,
        width: "90%",
        backgroundColor: '#154c79',
        margin:15,
        marginLeft:30,
        marginRight:30,
        borderRadius: 5,
        alignSelf: 'center'
    },
    itemsInline:{
        alignSelf:'center',
        position:'absolute',
        flexDirection: 'row',
        bottom:'8%',
    },
    textStyle: {
        margin: 15,
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
    authTitlesStyle: {
        fontSize:16,
        marginBottom:4,
        color:'#fff',
        fontWeight:"bold",
        textAlign: 'center',
    }
    
});