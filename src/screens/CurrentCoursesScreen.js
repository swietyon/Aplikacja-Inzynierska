import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const CurrentCoursesScreen = ( {navigation} ) => {
        return (
            <View>
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
            </View>
        );
};

export default CurrentCoursesScreen;