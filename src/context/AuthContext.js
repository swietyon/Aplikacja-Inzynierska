import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as RootNavigation from "../navigation/RootNavigation";


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

const signup = (dispatch) => async ({ email, username, birth, gender, password}) => {
  try {
    const response = await trackerApi.post("/signup", { email, username, birth, gender, password });
    await AsyncStorage.setItem("token", response.data.token);
    // await AsyncStorage.setItem("userItem", response.data.user);
    const user = JSON.stringify(response.data.user);
    await AsyncStorage.setItem("user", user);
    dispatch({ type: "signup", payload: response.data.token });
    RootNavigation.navigate('DrawerScreen', user);
  }  
  catch (err) {
      dispatch({
        type: "add_error",
        payload: "Wystąpił błąd przy rejestracji. Spróbuj zmienić adres email",
      });
  }
};

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
      payload: "Wystąpił błąd przy logowaniu",
    });
  }
};

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

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  RootNavigation.navigate("AuthStackScreen");
};


export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: "" }
);