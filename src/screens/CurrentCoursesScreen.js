import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CurrentCoursesScreen = ( {navigation} ) => {
    const s = require('../components/Styles'); 
        return (
            <>  
            <LinearGradient
                colors={['white','#154c79']}
                style={s.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={{fontSize:30}}> CurrentCoursesScreen </Text>
                {/* <Button
                    title="Go to MyExcercisesScreen"
                    onPress={() => 
                        {navigation.navigate('DiseasesScreen',{
                        screen: 'ExcercisesScreen',
                        params: {name: "Ćwiczenia"}
                    })
                    }}
                /> */}
                </LinearGradient>
            </>
        );
};

export default CurrentCoursesScreen;