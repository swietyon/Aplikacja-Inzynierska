import React from 'react';
import { useState, useEffect} from 'react';
import { Image, StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const DiseasesScreen = ( { navigation ,route }) => {
    const s = require('../components/Styles'); 
    const diseasesURL = "https://bbcb-5-173-33-44.ngrok.io/diseases";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentUserId, setcurrentUserId] = useState();
    useEffect(() => {
        fetch(diseasesURL)
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        })
        .catch((error) => alert(error))
        .then(setLoading(false));
        setcurrentUserId(route.params.params);
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
                    <TouchableOpacity onPress={() => {navigation.navigate("Excercises", {item, currentUserId})}}>    
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

// const data = [
//         { 
//             title: 'Wzmocnienie kolana',
//             describe: "",
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711946/knee_aibxek.png"
//             },
//             key: 1
//         },
//         { 
//             title: 'Wzmocnienie pachwiny', 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711943/groin_vosbcl.png"
//             }, 
//             key: 2 
//         },
//         { 
//             title: 'Wzmocnienie ramienia', 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711937/shoulder_tbmrdr.png"
//             }, 
//             key: 3 
//         }, 
//         { 
//             title: 'Wzmocnienie dolnej partii pleców', 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711934/lowerback_j583j0.png"
//             }, 
//             key: 4 
//         },
//         { 
//             title: 'Wzmocnienie górnej partii pleców', 
//             imgLink: {
//                 uri: "https://res.cloudinary.com/swietyon/image/upload/v1642711940/upperback_jqa9pi.png"
//             }, 
//             key: 5
//         }
//     ]