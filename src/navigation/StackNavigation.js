import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

//nawigacja pomiędzy ekranem logowania oraz rejestracji
const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};
export {AuthStackScreen};

import DiseasesScreen from "../screens/DiseasesScreen";
import ExcercisesScreen from "../screens/ExcercisesScreen";
import ProgressScreen from "../screens/ProgressScreen";
//nawigacja pomiędzy ekranem terapii oraz ćwiczeń
const DiseasesStackScreen = (params) => {
  return(
    <Stack.Navigator initialRouteName="DiseasesScreen" initialParams={{ params: params.route.params}}>
    <Stack.Screen name="Diseases" component={DiseasesScreen} initialParams={{ params: params.route.params}} options={{ headerShown:false }} />
    <Stack.Screen name="Excercises" component={ExcercisesScreen} options={{ headerShown:false }} />
  </Stack.Navigator>
  )
};
export {DiseasesStackScreen};

// ekran postępów
const ProgressStackScreen = (params) => (
  <Stack.Navigator initialRouteName="Progress">
    <Stack.Screen name="Progress" component={ProgressScreen} initialParams={{ params: params.route.params}} options={{ headerShown:false }}/>
  </Stack.Navigator>
);
export {ProgressStackScreen};