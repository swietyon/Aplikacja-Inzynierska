import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as RootNavigation from "../navigation/RootNavigation";
import { Alert } from "react-native";


//cases after function is executed
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { 
        user: action.payload,  
        token: action.payload, errorMessage: ""};
    case "signup":
      return { 
        user: action.payload, 
        token: action.payload, errorMessage: ""};
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

// Registration
const signup = (dispatch) => async ({ email, username, birth, gender, password}) => {
  try {
    const response = await trackerApi.post("/signup", { email, username, birth, gender, password });
    await AsyncStorage.setItem("token", response.data.token);
    // await AsyncStorage.setItem("userItem", response.data.user);
    const user = JSON.stringify(response.data.user);
    await AsyncStorage.setItem("user", user);
    dispatch({ type: "signup", payload: response.data.token });
    RootNavigation.navigate('DrawerScreen', user);
    alert();
  }  
  catch (err) {
      dispatch({
        type: "add_error",
        payload: "Wystąpił błąd przy rejestracji",
      });
  }
};

const addProgress = (dispatch) => async ({ userId, title, excNumb, currentDate, grade }) => {
  try {
      
      const dataBefore = await trackerApi.get("/progress");
      var myProgresses = [];

      for(var i = 0; i < dataBefore.data.length; i++ ){
        if(userId == dataBefore.data[i].userId){
          myProgresses.push(dataBefore.data[i])
        }
        else {
        };
      }

      var isMyValue;
      for(var j = 0; j < myProgresses.length; j++){
        if(title == myProgresses[j].title && excNumb == myProgresses[j].excNumb && currentDate == myProgresses[j].currentDate ){
          isMyValue = true;
          break;
        }
        else {
          isMyValue = false;
        }
      }

      if(isMyValue === false || myProgresses.length == 0) {
        const response = await trackerApi.post("/progress", { userId, title, excNumb, currentDate, grade });
        myProgresses.push(response.data);
        dispatch({
          type: "add_error",
          payload: "Ocena została dodana! :)",
        });
      }
      else {
        dispatch({
          type: "add_error",
          payload: "Nie powiodło się przesłanie oceny dla tego ćwiczenia. Spróbuj w inny dzień",
        });
      }

      const dataAfter = await trackerApi.get("/progress");

  }  
  catch (err) {
    dispatch({
      type: "add_error",
      payload: "Nie powiodło się przesłanie skali dla tego ćwiczenia. Spróbuj w inny dzień",
    });
  }
};

//Logging in
const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    // await AsyncStorage.setItem("userItem", response.data.user);
    dispatch({ type: "signin", payload: response.data.token });
      const user = JSON.stringify(response.data.user);
      await AsyncStorage.setItem("user", user)
      RootNavigation.navigate('DrawerScreen', user);
  } 
  catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Sprawdź czy Twój email i hasło są poprawne",
    });
  }
};

//Automatic logging in if token exist
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  const user = await AsyncStorage.getItem("user");
  if (token) { 
    dispatch({ type: "signin", payload: token });
    RootNavigation.navigate("DrawerScreen", user);
  } else {
    RootNavigation.navigate("AuthStackScreen");
  }
};

//Cleaning error message
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

//Logging out
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  RootNavigation.navigate("AuthStackScreen");
};

// OnRegister welcome alert
const alert = () => {
  Alert.alert(
    "Cześć, witamy w UP MedApp",
    "Aplikacja UP MedApp pozwala użytkownikowi wzmocnić partie mięśniowe po przebytych kontuzjach. Dzięki konsultacji ze specjalistami zaprojektowaliśmy różne ćwiczenia, które pomogą Ci zapomnieć o urazach i cieszyć się na nowo sprawnością. Zapraszamy do zapoznania się z zasadami ćwiczeń w zakładce 'Zasady' w menu bocznym. Zachęcamy do odbycia rozgrzewki przed ćwiczeniami. Powodzenia!",
    [
      { text: "Zaczynam" }
    ]
  );
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin, addProgress},
  { token: null, errorMessage: "" }
);