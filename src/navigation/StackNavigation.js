import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DiseasesScreen from "../screens/DiseasesScreen";
import ExcercisesScreen from "../screens/ExcercisesScreen";
import CurrentCoursesScreen from "../screens/CurrentCoursesScreen";
import HowToTrainScreen from "../screens/HowToTrainScreen";

const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};
export {AuthStackScreen};

const DiseasesStackScreen = () => (
  <Stack.Navigator initialRouteName="DiseasesScreen">
    <Stack.Screen name="Diseases" component={DiseasesScreen} options={{ headerShown:false }} />
    <Stack.Screen name="Excercises" component={ExcercisesScreen} options={{ headerShown:false }} />
  </Stack.Navigator>
);
export {DiseasesStackScreen};

const CurrentCoursesStackScreen = () => (
  <Stack.Navigator initialRouteName="CurrentCourses">
    <Stack.Screen name="CurrentCourses" component={CurrentCoursesScreen}options={{ headerShown:false }} />
  </Stack.Navigator>
);
export {CurrentCoursesStackScreen}

const HowToTrainStackScreen = () => (
  <Stack.Navigator initialRouteName="HowToTrain">
    <Stack.Screen name="HowToTrain" component={HowToTrainScreen} options={{ headerShown:false }}/>
  </Stack.Navigator>
);
export {HowToTrainStackScreen};