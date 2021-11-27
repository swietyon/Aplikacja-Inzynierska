import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AccountScreen from './src/screens/AccountScreen';
import CurrentCoursesScreen from './src/screens/CurrentCoursesScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import DiseasesScreen from './src/screens/DiseasesScreen';
import ExcercisesScreen from './src/screens/ExcercisesScreen';
import SignInScreen from './src/screens/SignInScreen';
import SingUpScreen from './src/screens/SignUpScreen';

import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SingUp: SingUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    CoursesFlow: createStackNavigator({
      Diseases: DiseasesScreen,
      Excercises: ExcercisesScreen
    }),
    CurrentCourses:CurrentCoursesScreen,
    Details: DetailsScreen,
  })
});

const drawerNavigator = {
  Account: AccountScreen,
};

const Drawer = createDrawerNavigator();
const App = createAppContainer(switchNavigator,Drawer);


export default () => {
  return (
    <NavigationContainer>
      <AuthProvider><App />
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator> */}
      </AuthProvider>
    </NavigationContainer>
    
  )
}