import React from "react";
import { useState, useEffect, useMemo } from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import DiseasesScreen from "./src/screens/DiseasesScreen";
import CurrentCoursesScreen from "./src/screens/CurrentCoursesScreen";
import HowToTrainScreen from "./src/screens/HowToTrainScreen";
import ExcercisesScreen from "./src/screens/ExcercisesScreen";
import AccountScreen from "./src/screens/AccountScreen";
import ProgressScreen from "./src/screens/ProgressScreen";
import RulesScreen from "./src/screens/RulesScreen";
import SignOutScreen from "./src/screens/SignOutScreen";

import Loading from "./src/components/Loading";
import { AuthContext } from "./src/context/context";
import { HeaderBackButton, HeaderBackground } from "react-navigation-stack";

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignInScreen" 
          component={SignInScreen}
          options={{headerShown:false}} 
        />
        <AuthStack.Screen 
          name="SignUpScreen"   
          component={SignUpScreen}
          options={{headerShown:false}}
        />
    </AuthStack.Navigator>
  );
};
const BottomTabs = createMaterialBottomTabNavigator();
const DiseasesStack = createNativeStackNavigator();
const CurrentCoursesStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const DiseasesStackScreen = () => (
  <DiseasesStack.Navigator>
    <DiseasesStack.Screen name="Diseases" component={DiseasesScreen} options={{ headerShown:false }} />
    <DiseasesStack.Screen name="Excercises" component={ExcercisesScreen} options={{ headerShown:false }} />
  </DiseasesStack.Navigator>
);

const CurrentCoursesStackScreen = () => (
  <CurrentCoursesStack.Navigator>
    <CurrentCoursesStack.Screen name="CurrentCourses" component={CurrentCoursesScreen}options={{ headerShown:false }} />
  </CurrentCoursesStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown:false }}/>
  </ProfileStack.Navigator>
);

const BottomTabsScreen = () => (
    <BottomTabs.Navigator
      initialRouteName={DiseasesScreen}
      inactiveColor="#fff"
      barStyle={{ 
        bottom:0,
        backgroundColor: '#154c79', 
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <BottomTabs.Screen name="Terapie" component={DiseasesScreen}
      options={{ headerShown:false, tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='white' size={26} />
          ),
        }} />
      <BottomTabs.Screen name="Aktywne terapie" component={CurrentCoursesScreen} 
      options={{ headerShown:false, tabBarIcon: () => (
        <MaterialCommunityIcons name="bell" color='white' size={26} />
        ),
      }} />
      <BottomTabs.Screen name="HowToTrainScreen" component={HowToTrainScreen} 
       activetintcolor="red"
      options={{ headerShown:false, tabBarLabel: 'Home', tabBarIcon: () => (
        <MaterialCommunityIcons name="account" color='white' size={26} />
        ),
      }} />
    </BottomTabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = (style) => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#154c79",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height:100
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    <Drawer.Screen name="Home" component={BottomTabsScreen} />
    <Drawer.Screen name="Profil" component={ProfileStackScreen} />
    <Drawer.Screen name="Postępy" component={ProgressScreen} />
    <Drawer.Screen name="Regulamin" component={RulesScreen} />
    <Drawer.Screen name="Wyloguj się" component={SignOutScreen} />
    </Drawer.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({ userToken }) => {
  return (
    <RootStack.Navigator >
      {userToken ? (
        <RootStack.Screen name="App" component={DrawerScreen} options={{headerShown:false}}/>
      ):(
        <RootStack.Screen name="Auth" component={AuthStackScreen} options={{headerShown:false}}/>
      )}    
    </RootStack.Navigator>
  );
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
    </AuthContext.Provider>
  )

};