import React from "react";
import { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackScreen } from "./src/navigation/RootStack";

import { Provider as AuthProvider } from "./src/context/AuthContext";

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer >
        <RootStackScreen/>
      </NavigationContainer>
    </AuthProvider>
  )
};