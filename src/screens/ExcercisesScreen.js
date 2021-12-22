import React from 'react';
import { useState } from 'react';
import { Text, View, Button , FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

// const anotherExcercise = () => {
//     let counter = 0;
// }

// const lastExcercise = () => {
//     let counter = 0;
// }

const ExcercisesScreen = ( { route, navigation } ) => {
    const [rehabs, setRehabs] = useState([
        { title: 'Rehabilitacja kolana', icon: 5 , imgLink: require('../img/knee.png'), key: '1' },
        { title: 'Rehabilitacja pachwiny', icon: 3, imgLink: require('../img/groin.png'), key: '2' },
        { title: 'Rehabilitacja ramienia', icon: 9, imgLink: require('../img/shoulder.png'), key: '3' }, 
        { title: 'Rehabilitacja dolnej partii pleców', icon: 3, imgLink: require('../img/lowerback.png'), key: '4' },
        { title: 'Rehabilitacja ramienia', icon: 9, imgLink: require('../img/knee.png'), key: '5' }, 
        { title: 'Rehabilitacja dolnej partii pleców', icon: 1, imgLink: require('../img/knee.png'), key: '6' }
    ]);

    const s = require('../components/Styles');
    const {title, icon, imgLink, key} = route.params;
        return (
            <View style={s.Container}>
                <View style={s.itemsInline}>
                    <View style={s.backButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => navigation.goBack()}>
                        <Icon style={s.textStyle2} name='arrow-back'color='#fff'fontSize='221'/>
                        </TouchableOpacity>
                    </View>
                    <View style={s.nextButton}>
                        <TouchableOpacity style={s.touchableOpacityStyle} title="Go back" onPress={() => navigation.goBack()}>
                            <Icon style={s.textStyle2} name='arrow-back'color='#fff'fontSize='221'/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{fontSize:30}}>Title: {JSON.stringify(title)}</Text>
                <Text style={{fontSize:30}}>Title: {JSON.stringify(key)}</Text>
            </View>
        );
};

export default ExcercisesScreen;