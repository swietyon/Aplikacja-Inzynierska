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
      tabBarLabelStyle:{
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        position:"absolute",
        overflow: 'hidden',
        borderColor:'#154c79',
        bottom:0,
      }
   }}
    >
      <Tab.Screen
        name="Terapie"
        component={DiseasesStackScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Moje terapie"
        component={CurrentCoursesStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Jak ćwiczyć"
        component={HowToTrainStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {BottomTabs};