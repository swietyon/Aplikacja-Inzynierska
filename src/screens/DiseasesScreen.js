import React from 'react';
import { useState, useEffect, useContext} from 'react';
import { Image, StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Context as AuthContext } from '../context/AuthContext';
import trackerApi from '../api/tracker';

const DiseasesScreen = ( { navigation ,route }) => {
    const s = require('../components/Styles'); 

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentUserId, setcurrentUserId] = useState();
    const [currentUserData, setcurrentUserData] = useState([]);
    const {clearErrorMessage} =  useContext(AuthContext);

    useEffect(() => {
        trackerApi.get('/diseases')
        .then(function (response) {
          setData(response.data);
        })
        .catch((error) => alert(error))
        .then(setLoading(false));
        setcurrentUserId(route.params.params.params._id);
        setcurrentUserData(route.params.params.params);
    }, []);
    
    const [show, setShow] = useState(true)

  // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
        }, 1500)
        return () => {
            clearTimeout(timeId)
        }
    }, []);

        return (
            <>  
            <LinearGradient
                colors={['white','#154c79']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >   
            {/* Created Timeout Loading 1.5 sec*/}
            {
                (!show) 
                ?
                <>
                <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom:"20%",
                    alignItems: 'center',
                }}
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {navigation.navigate("Excercises", {item, currentUserId}); clearErrorMessage()}}>    
                        <View style={s.Element}>
                            <View style={s.TopPart}>
                                <Text style={s.textStyle2}>{item.title}</Text> 
                                    <Image 
                                    style={s.img} 
                                    source={item.imgLink} 
                                    />
                        </View>
                    </View>  
                </TouchableOpacity>    
                )}        
                > 
                </FlatList>
                </>
                : 
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#154c79"/> 
                </View>
            }
            </LinearGradient>
            </>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        position:"absolute"
      },
});

export default DiseasesScreen;