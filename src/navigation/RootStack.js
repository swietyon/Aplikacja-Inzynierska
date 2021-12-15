import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerScreen } from "./Drawer";
import { AuthStackScreen } from "./StackNavigation";


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

export {RootStackScreen};