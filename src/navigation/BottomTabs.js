import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DiseasesStackScreen, CurrentCoursesStackScreen, HowToTrainStackScreen} from "./StackNavigation";


const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator 
    initialRouteName={DiseasesStackScreen}
      screenOptions={{ 
      headerShown:false, 
      tabBarActiveTintColor: '#154c79',
      tabBarInactiveTintColor: '#fff',
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#154c79',
      tabBarStyle:{
        height:70,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        position:"absolute",
        overflow: 'hidden',
      },
      tabBarLabelStyle: {
        fontSize: 14,
        margin:5
      },
   }}
    >
      <Tab.Screen
        name="Terapie"
        component={DiseasesStackScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Moje terapie"
        component={CurrentCoursesStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-check" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Postępy"
        component={HowToTrainStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="progress-check" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {BottomTabs};