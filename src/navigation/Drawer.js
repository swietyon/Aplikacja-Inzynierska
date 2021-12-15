import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { BottomTabs } from "./BottomTabs";
import AccountScreen from "../screens/AccountScreen";
import ProgressScreen from "../screens/ProgressScreen";
import RulesScreen from "../screens/RulesScreen";
import SignOutScreen from "../screens/SignOutScreen";


const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
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
    <Drawer.Screen name="Home" component={BottomTabs} screenOptions={{
        backgroundColor: "#154c79",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
       }} />
    <Drawer.Screen name="Profil" component={AccountScreen} />
    <Drawer.Screen name="Postępy" component={ProgressScreen} />
    <Drawer.Screen name="Regulamin" component={RulesScreen} />
    <Drawer.Screen name="Wyloguj się" component={SignOutScreen} />
    </Drawer.Navigator>
  );
};

export {DrawerScreen};