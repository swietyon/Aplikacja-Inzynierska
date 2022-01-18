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
      }
   }}
    >
      <Tab.Screen
        name="Terapie"
        component={DiseasesStackScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Moje terapie"
        component={CurrentCoursesStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-check" color={color} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Jak ćwiczyć"
        component={HowToTrainStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-question" color={color} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {BottomTabs};