import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { BottomTabs } from "./BottomTabs";
import AccountScreen from "../screens/AccountScreen";
import RulesScreen from "../screens/RulesScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignOutScreen from "../screens/SignOutScreen";

const Drawer = createDrawerNavigator();

const DrawerScreen = ({route, navigation}) => {
  // const { _id, email, user, birth, gender, username} = JSON.parse(route.params);
  console.log(route.params);
  return (
    <Drawer.Navigator 
    initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#154c79",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height:80,
        },
        drawerStyle:{
          paddingTop:10,
          backgroundColor:"#fff",
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        },
        drawerLabelStyle:{
          color:"#154c79",
          padding:2,
          borderRadius:10,
          fontSize: 18,
          fontWeight:"bold",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
    >

    <Drawer.Screen name="Profile" initialParams={{ params: JSON.parse(route.params) }} component={AccountScreen}
    options={{
      swipeEnabled: false,
      drawerItemStyle:{
        height:150,
        paddingTop:14
      },
      title:"Profil",
      drawerIcon: ({focused, size}) => (
         <MaterialCommunityIcons
            style={{}}
            name="account-circle"
            size={100}
            color={focused ? 'green' : '#154c79'}
         />
      ),
   }}/>
    <Drawer.Screen name="Home" initialParams={{ params: JSON.parse(route.params) }} component={BottomTabs}
    options={{
      drawerIcon: ({focused, size}) => (
         <MaterialCommunityIcons
            name="home"
            size={size}
            style={{alignContent:"center"}}
            color={focused ? 'green' : '#154c79'}
         />
      ),
   }}
    />
    <Drawer.Screen name="Jak ćwiczyć?" component={RulesScreen} 
    options={{
      drawerIcon: ({focused, size}) => (
         <MaterialCommunityIcons
            name="help-circle"
            size={size}
            style={{alignContent:"center"}}
            color={focused ? 'green' : '#154c79'}
         />
      ),
   }}/>
   <Drawer.Screen name="Wyloguj się" component={SignOutScreen}
    options={{
      drawerIcon: ({focused, size}) => (
         <MaterialCommunityIcons
            name="logout"
            size={size}
            style={{alignContent:"center"}}
            color={focused ? 'green' : '#154c79'}
         />
      ),
   }}/>
    </Drawer.Navigator>
    
  );
};

export {DrawerScreen};