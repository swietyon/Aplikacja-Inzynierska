import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerScreen } from "./Drawer";
import { AuthStackScreen } from "./StackNavigation";

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} options={{headerShown:false}}/>
        <RootStack.Screen name="DrawerScreen" component={DrawerScreen} options={{headerShown:false}}/>
    </RootStack.Navigator>
  );
};

export {RootStackScreen};