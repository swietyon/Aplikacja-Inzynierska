import React from "react";
import { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./src/components/Loading";
import { AuthContext } from "./src/context/context";
import { RootStackScreen } from "./src/navigation/RootStack";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
    </AuthContext.Provider>
  )

};