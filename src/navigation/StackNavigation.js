import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DiseasesScreen from "../screens/DiseasesScreen";
import ExcercisesScreen from "../screens/ExcercisesScreen";
import CurrentCoursesScreen from "../screens/CurrentCoursesScreen";
import ProgressScreen from "../screens/ProgressScreen";

const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};
export {AuthStackScreen};

const DiseasesStackScreen = (params) => {
  return(
    <Stack.Navigator initialRouteName="DiseasesScreen" initialParams={{ params: params.route.params}}>
    <Stack.Screen name="Diseases" component={DiseasesScreen} initialParams={{ params: params.route.params}} options={{ headerShown:false }} />
    <Stack.Screen name="Excercises" component={ExcercisesScreen} options={{ headerShown:false }} />
  </Stack.Navigator>
  )
};
export {DiseasesStackScreen};

const CurrentCoursesStackScreen = () => (
  <Stack.Navigator initialRouteName="CurrentCourses">
    <Stack.Screen name="CurrentCourses" component={CurrentCoursesScreen}options={{ headerShown:false }} />
  </Stack.Navigator>
);
export {CurrentCoursesStackScreen}

const ProgressStackScreen = () => (
  <Stack.Navigator initialRouteName="Progress">
    <Stack.Screen name="Progress" component={ProgressScreen} options={{ headerShown:false }}/>
  </Stack.Navigator>
);
export {ProgressStackScreen};