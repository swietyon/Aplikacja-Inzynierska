import React from "react";
import { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from "./src/navigation/RootStack";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { navigationRef } from './src/navigation/RootNavigation';

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef} >
        <RootStackScreen />
      </NavigationContainer>
    </AuthProvider>
  )
};