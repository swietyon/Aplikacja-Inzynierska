import React from 'react';
import { Text, View, Button } from 'react-native';

const DiseasesScreen = ( {navigation} ) => {
        return (
            <View>
                <Text h3> DiseasesScreenm </Text>
                <Button title="Ćwiczenia" onPress={() => navigation.navigate('Excercises')}></Button>
                <Button title="cofnij" onPress={() => navigation.navigate('loginFlow')}></Button>
            </View>
        );
};

export default DiseasesScreen;