import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from "./src/navigation/RootStack";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from './src/navigation/RootNavigation';
import ResolveAuth from "./src/components/ResolveAuth";

export default () => {
  return (
      <AuthProvider>
          <NavigationContainer ref={navigationRef} >
            <ResolveAuth />
            <RootStackScreen />
          </NavigationContainer>
      </AuthProvider>
  )
};
